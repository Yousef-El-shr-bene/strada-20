import prisma from "@/lib/prisma";
export async function GET(request : Request) {
    const imgdata   = await prisma.imgdata.findMany({orderBy : {id : "desc"}, take : 6
})  
        return new Response(JSON.stringify({imgdata : imgdata}))
}
