import prisma from "@/lib/prisma";
import * as bcrypt from 'bcrypt'

export async function POST(request) {
    const body   = await request.json()
    const user   = await prisma.user.findFirst({
        where:{
            email:body.username
        }
    })
    const Body = user
    if (user !== null && (await bcrypt.compare(body.password , Body.password))) {
        const {password , ...userWithawitpassword} = user
        return new Response(JSON.stringify(userWithawitpassword))
    }else if (Body === null ) {
        return new Response(JSON.stringify(null))
    }

}
