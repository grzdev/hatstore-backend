const User = require("../models/User");

const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

module.exports = {
    createUser: async (req, res) => {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            location: req.body.location,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD).toString(), 
        });

        try {
            await newUser.save();

            res.status(201).json({message: "User succesfully created"})
        } catch (error) {
            res.status(500).json({message: error})
        }
    },

    loginUser: async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.status(401).json("Wrong credentials, provide a valid email");
        }

        const decryptedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD);
        const decryptedPass = decryptedPassword.toString(CryptoJS.enc.Utf8);

        if (decryptedPass !== req.body.password) {
            return res.status(401).json("Wrong password");
        }

        const userToken = jwt.sign(
            {
                id: user.id
            },
            process.env.JWT_PASSWORD,
            { expiresIn: "7d" }
        );

        const { password, __v, createdAt, updatedAt, ...userData } = user._doc;

        res.status(200).json({ ...userData, token: userToken });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
},

}