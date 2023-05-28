import prisma from "@/lib/prisma";
import signjwtaccessToken from "@/lib/jwt";
import * as bcrypt from 'bcrypt'

export async function POST(request) {
    const body   = await request.json()
    const user   = await prisma.user.findFirst({
        where:{
            email:body.username
        } 
    })
    if (user !== null && (await bcrypt.compare(body.password , user.password))) {
        const {password , ...userWithawitpassword} = user
        const accessToken = signjwtaccessToken(userWithawitpassword)
        const result = {
            ...userWithawitpassword,
            accessToken,
        }
        return new Response(JSON.stringify(result))
    }else if (body === null ) {
        return new Response(JSON.stringify(null))
    }
}
