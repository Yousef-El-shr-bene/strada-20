import prisma from "@/lib/prisma";
import { Jwt } from "jsonwebtoken";
export async function POST(request : Request ) {
    let data 
    const response = await request.json()
    const skipandtack = Number(response.skipandtack) * 5
    const token = response.token
    if (skipandtack === 1 * 5) {
        const imgdata = await prisma.imgdata.findMany({ take : 5})
        data = imgdata
    } else {
        const imgdata = await prisma.imgdata.findMany({skip : skipandtack , take : 5})
        data = imgdata
    }
    console.log(data,"serverrrrrrrrrrrr");
    
        return new Response(JSON.stringify({imgdataq : data}))
}
