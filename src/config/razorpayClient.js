const Razorpay = require("razorpay");

const apiKey="rzp_test_PFi8a2V5NYI13a"
const apiSecret="lXiXvG9QnqizEO8X0bTgwOee"

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
});

module.exports=razorpay;
