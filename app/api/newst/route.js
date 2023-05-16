import prisma from "@/lib/prisma";
export async function GET(request) {
    const imgdata   = await prisma.imgdata.findMany({take: 6,
})  
        return new Response(JSON.stringify({imgdata : imgdata}))
}
