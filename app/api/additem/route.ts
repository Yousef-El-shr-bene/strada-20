import prisma from "@/lib/prisma";
import jwt  from "jsonwebtoken";
export async function POST(request: Request) {
  const secrit: string | any = process.env.SECRET_KEY;
  const data = await request.json();
  const token: string = data.token;
  const jsonData = data.jsonitmdata;
  jsonData.qu =  Number(jsonData.qu)

  
  if (token === undefined) {
   return new Response(JSON.stringify({ error: "token = undefined" }));
  }
  if (!jsonData.id ||  !Number.isInteger(jsonData.qu) || !jsonData.qu || !jsonData.size || !jsonData.color ) {return new Response(JSON.stringify({ error: "rong request" }));}

  const User: any = jwt.verify(token, secrit);
  const theUser: any | null = await prisma.user.findFirst({ where: { id: User.id } });
  if (theUser?.jsonid === null || theUser?.jsonid.status ) {
    const user = await prisma.user.update({
      where: { id: theUser.id },
      data: {
        jsonid : [jsonData]
      },
    });
    return new Response(JSON.stringify({ user: "ok" }));
  }

    let chois : boolean = false;
    let inIndex = 0;
    theUser?.jsonid.map((e : any ,i : number)=>{
      if ( e.id === jsonData.id) {
       chois = true  
       inIndex = i;
      }
    })
    if (chois) {
      let newJsonData  = theUser?.jsonid 
       newJsonData[inIndex] = jsonData
          const user = await prisma.user.update({
      where: { id: User.id },
      data: {
        jsonid : await newJsonData
      },
    });
    }else{
      const newUser = theUser?.jsonid
      const user = await prisma.user.update({
        where: { id: User.id },
        data: {
          jsonid : [...theUser?.jsonid,jsonData]
        },
      });
    }
      return new Response(JSON.stringify({ user: "ok" }));
}