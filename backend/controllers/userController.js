const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
    // TODO change in production to 8h or 1d
    return jwt.sign({ _id: _id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

// login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);

        // create token
        const token = createToken(user._id);

        res.status(201).json({ email, token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
// sign up user
const signupUser = async (req, res) => {
    const { email, password, confirmPassword } = req.body;
    try {
        const user = await User.signup(email, password, confirmPassword);

        // create token
        const token = createToken(user._id);

        res.status(201).json({ email, token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = { signupUser, loginUser };
