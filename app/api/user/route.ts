import prisma from "@/lib/prisma";
import * as bcrypt from "bcrypt";
interface requestBody {
  name: string;
  password: string;
  email: string;
}
export async function POST(request: Request) {
  const body: requestBody = await request.json();

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: await bcrypt.hash(body.password, 10),
    },
  });

  const { password, ...Result } = user;

  return new Response(JSON.stringify(Result));
}
