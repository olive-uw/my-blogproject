import { dataFromToken} from '../Helpers/Token'
import UserController from '../controller/AtherController'

export const verifyAuth=(req,res,next)=>{
    const token =req.header("x-Auth-token")
    if(!token){
        return res.status(404).json({
            status:404,
            massage:"no token provided ",
        });
        
        
    }
    try{
        const user=dataFromToken(token).payload
        const users =UserController.users;
        const data=users.find(u=u.email===user.email)
       
        if(!data){
            return res.status(404).json({
                status:404,
                massage:"you are not user",
            })
        }
   
    
    req.body.userid=data.id
    return next()
}
catch(e){return res.status(404).json({
    message:"invalid token",
    status:404,
})

}

}

