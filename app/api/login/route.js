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
        return new Response(JSON.stringify(null))
    }
}
