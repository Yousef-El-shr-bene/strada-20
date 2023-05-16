import prisma from "@/lib/prisma";
import * as bcrypt from "bcrypt";
export async function POST(request) {
  const body = await request.json();
//
if (body.name === "" || body.email === "" || body.phone === "" || body.password === "") {
  return new Response(JSON.stringify({error : "empty fields"}));
}else if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(body.email) === false ){
  return new Response(JSON.stringify({error : "You have entered an invalid email address!"}));
}else if (body.password.length < 8) {
  return new Response(JSON.stringify({error : "password should contin more than 8 characters or Numbers"}));
}else if (Number(body.phone) === NaN || body.phone.length === 12 ) {
  return new Response(JSON.stringify({error : "The phone number must be Egyptian and consist of 11 digits"}));
}else if (body.name && body.email && body.password && body.phone){
  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: await bcrypt.hash(body.password, 10),
      phone:body.phone
    },
  });
  return new Response(JSON.stringify({ok:"ok"}));
}
//
}
