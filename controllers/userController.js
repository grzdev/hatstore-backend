const User = require("../models/User");

module.exports = {
    deleteUser: async (req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id);

            res.status(200).json("Succesfully deleted")
        } catch (error) {
            res.status(500).json(error)
        }
    },

    getUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);

            if(!user){
                return res.status(401).json("User doesn't exit")
            }
            const {password, __v, createdAt, UpdatedAt, ...userData} = user._doc;
            
            res.status(200).json(userData)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    getAllUsers: async(req, res) => {
        try {
            const users = await User.find().sort({ createdAt: -1 })
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json("failed to get the users")
        }
    },
}