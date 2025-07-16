import { newUser, userSchema } from "../models/userModel.js";

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email && !password) {
            return res.status(404).send("please provide email and password");
        }
        const user =await newUser.findOne({ email });
        if (!user) {
            return res.status(404).send("user does not exist");
        }
        res.status(200).json({ msg:"login successfully",success: true,
        user});
    } catch (error) {
        res.status(404).send({ error:error.message });
    }
};

export const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name && !password && !email) {
            return res.status(404).send("please provide name,email and password");
        }
        const user = new newUser({ name, email, password });
        await user.save();
        res.status(200).json({ msg: "user has been created succesfully" });
    } catch (error) {
        res.status(404).json({ error:error.message});
    }
};
