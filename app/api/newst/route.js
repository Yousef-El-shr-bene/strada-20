import prisma from "@/lib/prisma";

export async function GET(request) {

    const imgdata   = await prisma.imgdata.findMany({take: 8,
})
console.log(imgdata);
        return new Response(JSON.stringify({imgdata : imgdata}))

}
