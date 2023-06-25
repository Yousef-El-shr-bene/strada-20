import prisma from "@/lib/prisma";
import { User } from "@prisma/client";
import Jwt, { JwtPayload } from "jsonwebtoken";
export async function POST(request: Request) {
  const secretkey: any = process.env.SECRET_KEY;
  const req = await request.json();
  const token = await req.token;
  const user: User | any = Jwt.verify(token, secretkey);
  const realUser : User | any = await prisma.user.findUnique({
    where: { id: user.id },
  });
  if(realUser.jsonid === null){
    return new Response(
        JSON.stringify({ error : "no data" })
      );
  }
  async function gitBagData() {
    let aray = [];
    for (let i = 0; i < realUser.jsonid.length; i++) {
      const element = realUser.jsonid[i];
      const imgdata = await prisma.imgdata.findUnique({
        where: { id: element.id },
      });
      aray.push({...imgdata,qu :element.qu ,color : element.color , size : element.size });
    }
    return aray;
  }
  const { jsonid, ...therest } = realUser;
  return new Response(
    JSON.stringify({ imgdata: await gitBagData(), jsondata: jsonid })
  );
}
