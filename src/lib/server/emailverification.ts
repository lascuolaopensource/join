import nodemailer from 'nodemailer'
import jwt from 'jsonwebtoken'
import { env } from '$env/dynamic/private'
import prisma from './database'

export async function sendEmail(sendTo: string) {
	try {
		// Generazione del token JWT
		const token = jwt.sign({ email: sendTo }, env.JWT_SECRET, {
			expiresIn: env.JWT_EXPIRE,
		})
		await prisma.jWT.create({
			data: {
				email: sendTo,
				token: token,
				valid: true,
			},
		})
		const link = 'http://localhost:5173/verification/' + token

		const verificationTemplate = `
			<h1>Welcome to JOIN!</h1>
			<h3>Follow <a href="${link}">this</a> link to verify your email.</h3>
		  `

		// create reusable transporter object using the default SMTP transport
		const mailSettings = nodemailer.createTransport({
			host: env.EMAIL_SMTP_HOST,
			port: env.EMAIL_SMTP_PORT,
			secure: true, // true for 465, false for other ports
			auth: {
				user: env.EMAIL_SMTP_USER, // SMTP user
				pass: env.EMAIL_SMTP_PASS, // SMTP password
			},
		})

		// send mail with defined transport object
		const mailDetails = await mailSettings.sendMail({
			from: env.EMAIL_SMTP_LABEL + '<' + env.EMAIL_SMTP_USER + '>', // sender address
			to: sendTo, // list of receivers
			subject: 'Join Verification Mail', // Subject line
			html: verificationTemplate, // html body
		})

		console.log('Message sent: %s', mailDetails.messageId)
	} catch (error) {
		console.log(error)
	}
}

export async function verifyUserEmail(token: string) {
	let returnStatus = ''
	try {
		let email = ''
		const JWT = await prisma.jWT.findUnique({
			where: { token: token },
		})
		if (JWT?.valid) {
			jwt.verify(token, env.JWT_SECRET, (error, decoded) => {
				if (error) {
					switch (error.name) {
						case 'TokenExpiredError':
							returnStatus = 'expired'
							break
						case 'JsonWebTokenError':
							returnStatus = 'invalid'
							break
						default:
							break
					}
				} else if (decoded) {
					email = decoded.email
					returnStatus = 'valid'
				}
			})
			if (email !== '') {
				try {
					const user = await prisma.authUser.findUnique({
						where: { email: email },
					})
					await prisma.authUser
						.update({
							where: {
								id: user?.id,
							},
							data: {
								verified: true,
							},
						})
						.then((i) => {
							invalidateJWT(token)
							returnStatus = 'verified'
							console.log('Verified Email:', i.email)
						})
				} catch (error) {
					console.log(error)
				}
			}
		} else {
			returnStatus = 'invalid'
		}
	} catch (error) {
		console.log(error)
	}
	return returnStatus
}

async function invalidateJWT(token: string) {
	try {
		await prisma.jWT.update({
			where: { token: token },
			data: { valid: false },
		})
	} catch (error) {
		console.log(error)
	}
}
