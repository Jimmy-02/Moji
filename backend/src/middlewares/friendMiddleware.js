import Friend from "../models/Friend.js";

const pair = (a, b) => (a < b ? [a, b] : [b, a]);

export const checkFriendship = async (req, res, next) => {
    try {
        const me = req.user._id.toString();
        const recipientId = req.body?.recipientId ?? null;

        if (recipientId) {
          const [userA, userB] = pair(me, recipientId);

          const isFriend = await Friend.findOne({ userA, userB });

          if (!isFriend) {
            return res
              .status(403)
              .json({ message: "You are not friends with this user" });
          }

          return next();
        }
    } catch (error) {
        console.error("Error when checking friend ship", error);
        return res.status(500).json({ message: "System error" });
    }
}