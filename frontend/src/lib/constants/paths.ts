export default {
	home: '/',
	login: '/login',
	logout: '/logout',
	register: {
		index: '/register',
		thanks: '/register/thanks',
		confirm: '/register/confirm',
		error: '/register/error'
	},
	passwordReset: {
		forgot: '/password-reset/forgot',
		thanks: '/password-reset/forgot/thanks',
		confirm: '/password-reset/confirm'
	},
	account: '/account',
	activities: {
		index: '/activities',
		archive: '/activities?archive=true',
		admin: '/activities/admin',
		enroll: {
			index: (course: string) => `/activities/${course}/enroll`,
			thanks: (course: string) => `/activities/${course}/enroll/thanks`
		}
	},
	admin: {
		enrollments: {
			index: '/admin/enrollments',
			archive: '/admin/enrollments?archive=true'
		}
	},
	payment: {
		index: (id: string) => `/payments/pay-${id}`
	}
};
