import jwt ,{ JwtPayload } from "jsonwebtoken"

const DEFAULT_SIGN_OPTION = {
    // expiresin : "60",
}

export default function signinWithJWT(payload ,options = DEFAULT_SIGN_OPTION) {
  const secretkey  = process.env.SECRET_KEY;
  const token = jwt.sign(payload, secretkey,options)
  return token
} 

export function verifyjwt(token) {
    try {
        const secret_key  = process.env.SECRET_KEY;
        const decoded = jwt.verify(token,secret_key)
    } catch (error) {
        console.log(error ,"error from lip.jwt");
        return null
    }
}

