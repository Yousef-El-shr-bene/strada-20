import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const data = await request.json();
  const textserch = await prisma.imgdata.findMany({
    where: {
      text : {
         search : await data.text
      }
    },
    take : 10,
  });
  return new Response(JSON.stringify({ textserch: textserch }));
}
