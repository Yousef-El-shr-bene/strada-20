import prisma from "@/lib/prisma";
import { Jwt } from "jsonwebtoken";
export async function POST(request : Request ) {
    let data 
    const response = await request.json()
    const skipandtack = Number(response.skipandtack) * 6
    const token = response.token

        const imgdata = await prisma.imgdata.findMany({skip : skipandtack , take : 6})

        return new Response(JSON.stringify({imgdataq : imgdata}))
}