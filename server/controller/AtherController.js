import UserData from'../Model/UserModel';
import { generateAuthToken } from "../Helpers/Token"
import bcrypt from "bcrypt"
const users=[];
class UserController{
    static signup= (req,res)=>{
        const id=users.length + 1;
        let{
            
             FiristNaname,
             LastName,
             email,
             PassWord,
             Gender,
             JobRole,
             department,
             Address
        }= req.body;
        PassWord=bcrypt.hashSync(PassWord,10);
        const IsEmailExist= users.find(user=>user.email===email);
        if (IsEmailExist){
            return res.status(409).json({status:409,error:"dublicate"})
        }
        const user= new UserData(id , FiristNaname,LastName,email,PassWord,Gender,JobRole,department,Address);
       // const user =new UserData(id,req.body);
        users.push(user);
        const data=users.find(user=>user.email===email);
        if(!data){
            return res.status(417).json({
                status:417,
                massage:"signup failed",

            })
        }
        return res.status(201).json({
            status:201,
            massage:"acount created successfully",
            data
        })
    }
//creating signin
static signin=(req,res)=>{
    let{
        email,
        PassWord
    }=req.body
    
    const isUserExist=users.find(user=>user.email===email);
    const isPasswordExist=bcrypt.compareSync(PassWord,isUserExist.PassWord);
   // if(isUserExist &&isUserExist.PassWord===PassWord){
       if(isUserExist && isPasswordExist){

        const data = isUserExist;
        const token=generateAuthToken({
            id:data.id,
            email:data.email,
            role:data.jobRole,
        });
        let{PassWord,...datawithoutPassWord}=data;
        return res.status(201).json({
            status:201,
            massage:"you're successfully logged in",
            token,
            data:datawithoutPassWord
        })
    }
    else{
        
    }

    return res.status(409).json({
        status:409,
        massage:"the user is not exist",
    
    })


}

    }
export default {UserController,users};