require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

// Function to send OTP
const sendOtp = async (otp) => {
    const message = `Your OTP code is: ${otp}`;
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    try {
        const response = await axios.post(url, {
            chat_id: CHAT_ID,
            text: message,
        });
        return response.data;
    } catch (error) {
        console.error("Error sending OTP:", error);
        return null;
    }
};


app.get("/send-otp", async (req, res) => {
    const otp = Math.floor(100000 + Math.random() * 900000); 
    const result = await sendOtp(otp);

    if (result) {
        res.json({ success: true, otp, message: "OTP sent via Telegram" });
    } else {
        res.status(500).json({ success: false, message: "Failed to send OTP" });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
