import prisma from "@/lib/prisma";
import { order } from "@prisma/client";
import { data } from "autoprefixer";
import jwt from "jsonwebtoken";
export async function POST(request : Request) {
    const secret : any = process.env.SECRET_KEY
    const req = await request.json()
    const tocan = req.token
    const address = req.address

    const user : any = jwt.verify(tocan, secret)
    const realuser   = await prisma.user.findUnique({
        where : {
            id : user.id
        }
    })
    const idnum = Number(realuser?.id)
    const order : order = await prisma.order.create({data : {
        userlocation : address , userid : idnum , jsonorder : {items : realuser?.jsonid }
    }})
    const dliting = await prisma.user.update({where : {id : realuser?.id},data : {jsonid : {status : true}}})

        return new Response(JSON.stringify({imgdata : {user : dliting}}))
}
