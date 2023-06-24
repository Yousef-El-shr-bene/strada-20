import prisma from "@/lib/prisma";
import jwt  from "jsonwebtoken";
export async function POST(request: Request) {
  const secrit: string | any = process.env.SECRET_KEY;
  const data = await request.json();
  const token: string = data.token;
  const crdid : any = Number(data.crdid)

  console.log(crdid);
  
  if (token === undefined) {
   return new Response(JSON.stringify({ error: "token = undefined" }));
  }
  if (Number.isNaN(crdid) ) {
    return new Response(JSON.stringify({ error: "rong request" }));}
  const User: any = jwt.verify(token, secrit);
  const theUser: any | null = await prisma.user.findFirst({ where: { id: User.id } });
  if (theUser?.jsonid === null || theUser?.jsonid.status ) {
    return new Response(JSON.stringify({ error: "no data to delete" }));
  }
    let chois : boolean = false;
    let inIndex = 0;
    theUser?.jsonid.map((e : any ,i : number)=>{
      if ( e.id === crdid) {
       chois = true  
       inIndex = i;
      }
    })
    if (chois) {
      let newJsonData  = theUser?.jsonid 
      console.log(newJsonData);
      newJsonData.splice(inIndex, 1)
      console.log(newJsonData);
          const user = await prisma.user.update({
      where: { id: User.id },
      data: {
        jsonid : await newJsonData
      },
    });
    return new Response(JSON.stringify({ ok: "ok" }));
    }else{
      return new Response(JSON.stringify({ error: "no data to delete" }));
}}
