import Friend from "../models/Friend.js";
import User from "../models/User.js";
import FriendRequest from "../models/FriendRequest.js";


export const sendFriendRequest = async(req, res)=>{
    try {
        const {to, message} = req.body;

        const from = req.user._id;

        if (from === to) {
            return res.status(400).json({message: "Cannot send friend request to yourself"});
        }

        const userExists = await User.exists({_id: to});

        if (!userExists) {
            return res.status(404).json({message: "User not exist"});
        }

        let userA = from.toString();
        let userB = to.toString();

        if (userA > userB) {
            [userA, userB] = [userB, userA];
        }
        
        const [alreadyFriends, existingRequest] = await Promise.all([
            Friend.findOne({userA, userB}),
            FriendRequest.findOne({
                $or: [
                    {from, to},
                    {from: to, to: from}
                ]
            })
        ])

        if (alreadyFriends) {
            return res.status(400).json({ message: "You two are already friend" });
        }

        if (existingRequest) {
            return res.status(400).json({ message: "You have a pending friend request" });
        }

        const request = await FriendRequest.create({
        from,
        to,
        message,
        });

        return res.status(201).json({ message: "Friend request sent!", request });
    } catch (error) {
        console.error("Error when sending friend request", error);
        return res.status(500).json({ message: "System error" });
    }
}

export const acceptFriendRequest = async(req, res)=>{
    try {
        
    } catch (error) {
        
    }
}

export const declineFriendRequest = async(req, res)=>{
    try {
        
    } catch (error) {
        
    }
}

export const getAllFriends = async(req, res)=>{
    try {
        
    } catch (error) {
        
    }
}

export const getFriendRequest = async(req, res)=>{
    try {
        
    } catch (error) {
        
    }
}