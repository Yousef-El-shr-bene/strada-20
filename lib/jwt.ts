import jwt,{ JwtPayload } from "jsonwebtoken";

interface SignOption {
    expiresin?: number | string ;
}

const default_Sign_Option: SignOption = {
    expiresin : "1h"
}
export default function signjwtAcsesTocken(payload :JwtPayload,options:SignOption | any = default_Sign_Option) {
  const secretkey :any = process.env.SECRET_KEY
  const tocan = jwt.sign( payload,secretkey!,options)
  console.log(tocan);
    return tocan
}
export function verifyjwt(tocan : string) {
    try {
        const secretkey : any  = process.env.SECRET_KEY
        const decoded = jwt.verify(tocan,secretkey)
        return decoded as JwtPayload
    }catch (err) {
        console.log(err,"error in lib.jwt") ;
        return null
    }
}
