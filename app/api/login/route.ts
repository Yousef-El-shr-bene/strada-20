import prisma from "@/lib/prisma";
import * as bcrypt from 'bcrypt'
import { json } from "stream/consumers";
interface requestBody {
  username: string;
  password: string;
}
export async function POST(request: Request) {

    const body : requestBody = await request.json()
    console.log(body);
    
    const user = await prisma.user.findFirst({
        where:{
            email:body.username
        }
    })

    if (user && (await bcrypt.compare(body.password , user.password))) {
        const {password , ...userWithawitpassword} = user
        return new Response(JSON.stringify(userWithawitpassword))
    }
    return new Response(JSON.stringify(null))
}
