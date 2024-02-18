const dotenv = require('dotenv');

dotenv.config();
require("./utils/mongodb.js")
const express = require('express');

const { FarmerBot } = require('./routes/farmBotRoute.js');
const { CropPlan, GetCrop } = require('./routes/cropPlanRoute.js');

const app = express()
const port = process.env.PORT || 3000

const cors = require("cors");

cors({
    origin: "*"
});



app.use(express.json());

app.get("/", async (req, res) => {
    res.send("Success");
});

app.get('/farmer/:prompt', FarmerBot)
app.post('/predict', GetCrop)
app.post("/plan", CropPlan);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})