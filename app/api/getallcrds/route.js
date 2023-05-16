import prisma from "@/lib/prisma";

export async function GET(request) {

    const imgdata   = await prisma.imgdata.findMany({})
        return new Response(JSON.stringify({imgdata : imgdata}))

}
