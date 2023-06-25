import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import * as bcrypt from 'bcrypt'
import jwt,{ JwtPayload } from "jsonwebtoken";
const secure = process.env.SECURE
export async function POST(request) {
    //
    function signjwtAcsesTocken(payload ,options) {
        const secretkey  = process.env.SECRET_KEY
        const tocan = jwt.sign( payload,secretkey,options)
          return tocan
      }
    //
    const body = await request.json()
    const user = await prisma.user.findFirst({
        where: {
            email: body.username
        }
    })
    if (user && (await bcrypt.compare(body.password, user.password))) {
        const { password, ...userWithawitpassword } = user
        const accessTocan = signjwtAcsesTocken(userWithawitpassword)
        const result = {
            ...userWithawitpassword,
            accessTocan,
        }
        return new Response(JSON.stringify(result))
    } else if (user === null) {
        return new Response(JSON.stringify(null))
    } else {
        return new Response(JSON.stringify(null))
    }
}