import prisma from "@/lib/prisma";
import * as bcrypt from 'bcrypt'
interface requestBody {
  username: string;
  password: string;
}
export async function POST(request: Request) {
    const body : requestBody = await request.json()
    const user = await prisma.user.findFirst({
        where:{
            email:body.username
        }
    })
    console.log(user);
    if (user && (await bcrypt.compare(body.password , user.password))) {
        const {password , ...userWithawitpassword} = user
        return new Response(JSON.stringify(userWithawitpassword))
    }
    return new Response(JSON.stringify(null))
}
