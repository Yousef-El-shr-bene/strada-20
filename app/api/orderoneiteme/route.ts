import prisma from "@/lib/prisma";
import { order } from "@prisma/client";
import { data } from "autoprefixer";
import jwt from "jsonwebtoken";
export async function POST(request : Request) {
    const secret : any = process.env.SECRET_KEY
    const req = await request.json()
    const tocan = req.token
    const address = req.address
    const size = req.size
    const qu = Number(req.qu) 
    const color = req.color
    const user : any = jwt.verify(tocan, secret)
    const userId = Number(user.id) 
    const realuser   = await prisma.user.findUnique({
        where : {
            id : userId
        }
    })

    const order : order = await prisma.order.create({data : {
        userlocation : address , userid : userId , jsonorder : {items : {id : userId , qu : qu , size : size , color : color } }
    }})

console.log(order,["0000000000000"])

        return new Response(JSON.stringify({imgdata : {user : "ok"}}))
}
