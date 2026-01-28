import jwt from 'jsonwebtoken'
import User from '../models/User.js'

export const protectedRoute = (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(" ")[1];

        if(!token){
            return res.status(401).json({message: "access token not found!"});
        }

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async(err, decodedUser) =>{
            if(err){
                console.error(err);
                return res.status(403).json({message: "Wrong or Outdated Access token"});
            }

            const user = await User.findById(decodedUser.userId).select('-hashedPassword');

            if(!user){
                return res.status(404).json({message: "User not exist"});  
            }
            
            req.user = user;
            next();
        })
    } catch (error) {
        console.log("error when verify jwt in authMiddleware", error);
        return res.status(500).json({ message: "System error" });
    }
}