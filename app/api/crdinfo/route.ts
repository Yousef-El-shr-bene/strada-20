import prisma from "@/lib/prisma";
interface id {
    id : number
}
export async function POST(request :Request) {
    const data : id = await request.json()
    const id = Number(data.id )
    const crdinfo   = await prisma.imgdata.findMany({
        where:{
            id : id
        }
    })
        return new Response(JSON.stringify({crdinfo : crdinfo}))
}
