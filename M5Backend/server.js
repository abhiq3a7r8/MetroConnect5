const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());


mongoose.connect("mongodb://localhost:27017/ArchSrver", {
});

const userSchema = new mongoose.Schema({
    phone: String,
    password: String
});

const User = mongoose.model("User", userSchema);

app.post("/login", async (req, res) => {
    const { phone, password } = req.body;

    try {
        
        const user = await User.findOne({ phone });

        if (!user) {
            return res.status(401).json({ success: false, message: "User not found" });
        }

        if (user.password === password) {
            return res.json({ success: true, message: "Login successful!" });
        } else {
            return res.status(401).json({ success: false, message: "Invalid password" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
