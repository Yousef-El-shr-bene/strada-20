import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import signjwtaccessToken from "@/lib/jwt";
import * as bcrypt from 'bcrypt'
import signinWithJWT from "../../../lib/jwt";
import {serialize} from "cookie"
const secure = process.env.SECURE
export async function POST(request) {
    const body   = await request.json()
    const user   = await prisma.user.findFirst({
        where:{ 
            email:body.username
        }
    })
    const Body = user
    if (user && (await bcrypt.compare(body.password , user.password))) {
        const {password , ...userWithawitpassword} = user
        const accessTocan = signinWithJWT(userWithawitpassword)
        const result = {
            ...userWithawitpassword,
            accessTocan,
        }
        return new Response(JSON.stringify(result))
    }else if (user === null ) {
        return new Response(JSON.stringify(null))
    }else {
        return new Response(JSON.stringify(null))
    }
}