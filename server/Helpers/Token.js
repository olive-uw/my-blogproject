import jwt from'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config({path:"./.env"})
export const generateAuthToken=(payLoad=>{
    const token=jwt.sign({
        payLoad
    },
    process.env.SECRETE_KEY,
    {
        expiresIn:"1d"
    }
    )
    return token;
})
export const dataFromToken=(token=>{
    const data=jwt.verify(
        token,
    process.env.SECRETE_KEY);
    return data;
    
})