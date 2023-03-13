import jwt from 'jsonwebtoken';

export const createTokens = (user) => {
    const accessToken = jwt.sign({username: user.username, role:user.role ,id:user._id},"jwtsucretcode");
    return accessToken;
}
export const validateToken = (req , res , next) =>{
    const accessToken = req.headers["authorization"].toString().split(" ")[1]
    console.log(accessToken);
    if(!accessToken ) {
        return res.status(400).json({error:"User not authenticated"});
    }
    
    try{
            const ValidateToken = jwt.verify(accessToken,"jwtsucretcode")
        
            if(ValidateToken){
                    const {username,role, id} = ValidateToken
                    req.authenticated = true
                    req.user = {username,role,id}
                    return next()
            }
    }
    catch(err){
                return res.status(400).json({error:err});
    }
}
