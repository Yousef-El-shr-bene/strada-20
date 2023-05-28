import prisma from "@/lib/prisma";
import signjwtaccessToken from "@/lib/jwt";
import * as bcrypt from 'bcrypt'
import signinWithJWT from "../../../lib/jwt";

export async function POST(request) {
    const body   = await request.json()
    const user   = await prisma.user.findFirst({
        where:{ 
            email:body.username
        } 
    })
<<<<<<< HEAD
    if (user !== null && (await bcrypt.compare(body.password , user.password))) {
        const {password , ...userWithawitpassword} = user
        const accessToken = signjwtaccessToken(userWithawitpassword)
        const result = {
            ...userWithawitpassword,
            accessToken,
        }
        return new Response(JSON.stringify(result))
    }else if (body === null ) {
=======
    const Body = user
    if (user && (await bcrypt.compare(body.password , Body.password))) {
        const {password , ...userWithawitpassword} = user
        const accessTocan = signinWithJWT(userWithawitpassword)
        const result = {
            ...userWithawitpassword,
            accessTocan,
        }
        return new Response(JSON.stringify(result))
    }else if (Body === null ) {
>>>>>>> c2d2a666a98c3ae151b8e0856a7a7949a88c0b45
        return new Response(JSON.stringify(null))
    }
}
