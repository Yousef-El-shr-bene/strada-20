import prisma from "@/lib/prisma";
export async function POST(request : Request ) {
    const response = await request.json()
    const skipandtack = Number(response.skipandtack) * 9
        const imgdata = await prisma.imgdata.findMany({skip : skipandtack , take : 9, orderBy : {id : "desc"}})
        return new Response(JSON.stringify({imgdataq : imgdata}))
}