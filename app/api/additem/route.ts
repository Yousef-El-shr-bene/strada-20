import prisma from "@/lib/prisma";
import  { verifyjwt } from "../../../lib/jwt";
import jwt,{ JwtPayload } from "jsonwebtoken";
import { User } from "@prisma/client";
export async function POST(request : Request) {

    
    
    const secrit : string | any = process.env.SECRET_KEY
    const data = await request.json()
    const id = Number(data.id)
    const token : string = data.token
    if (token === undefined) {
        return new Response(JSON.stringify({error : "token = undefined"})) 
    }
    const User : any = jwt.verify(token,secrit)
    const theuser : any  = await prisma.user.findFirst({where : {id : User.id}})
    if (theuser.itemsid.includes(id)) {
        return new Response(JSON.stringify({error : "user already exists"})) 
    } else {
        const user   = await prisma.user.update({
            where: { id : User.id },
            data: {
             itemsid : {push : id }
            }
        })
        if (user) {
            return new Response(JSON.stringify({user : user})) 
        }else{
            return new Response(JSON.stringify({error : "error"})) 
        }
    }
}
