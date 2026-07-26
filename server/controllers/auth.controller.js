import User from "../models/user.model.js"
import { genToken } from "../config/token.js"


export const googleAuth = async (req, res) => {
    try {
        const { username, email } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({
                name: username,
                email,
            });
        }
        let token = await genToken(user._id)
        res.cookie("token", token, {
            http: true,
            secure: false,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return res.status(200,).json(user)
    } catch (error) {
        return res.status(500).json(`message : google auth error : ${error}`)
    }
}


export const logout = async (req, res) => {
    try {
        await res.clearCookie(token)
        return res.status(200).json("logout successfully")
    } catch (error) {
        return res.status(500).json(`Logout error : ${error}`)
    }
}