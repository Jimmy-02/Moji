import bcrypt from "bcrypt";
import User from "../models/User.js";

export const signUp = async (req, res) => {
  try {
    const { username, password, email, firstName, lastName } = req.body;
    if (!username || !password || !email || !firstName || !lastName) {
      return res
        .status(400)
        .json({
          message:
            "cannot missing username, password, email, firstName, lastName",
        });
    }

    const duplicate = await User.findOne({username})

    if (duplicate) {
      return res.status(409).json({ message: "username exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
        username,
        hashedPassword,
        email,
        displayName: `${firstName} ${lastName}`
    });

    return res.sendStatus(204)

  } catch (error) {
    console.log('error when call signUp', error);
    return res.status(500).json({message: 'System error'});
  }
};
