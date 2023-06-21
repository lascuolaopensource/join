#!/bin/sh
cd prisma 
echo '---- Starting Migration ----'
npx prisma migrate dev --name init
echo '---- Migration Complete ----'
cd .. 

echo '---- Starting Server ----'
node build