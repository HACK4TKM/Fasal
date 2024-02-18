const axios = require("axios")
const Crop = require("../models/crop")
const { strict_output } = require("../controllers/gpt")

const GetCrop = async (req, res) => {
    const { N, P, K, temperature, humidity, ph, rainfall } = req.body;
    console.log(req.body);
    const response = await axios.post("http://192.168.0.163:5001/predict", {
        N: N,
        P: P,
        K: K,
        temperature: temperature,
        humidity: humidity,
        ph: ph,
        rainfall: rainfall
    });
    console.log(response.data.crops)
    await Crop.collection.insertOne({ current_crop: response.data.crop });

    res.send({ "crops": response.data.crops })
}

const CropPlan = async (req, res) => {
    const { crop } = req.body;
    const imageSearchTerm = await strict_output(
        "an AI system that generates highly detailed, day-by-day instructions for successfully farming a specified crop. The instructions should cover each day of the farming duration, considering factors like seed preparation, soil management, watering, fertilization, pest control, and harvesting. The output should be in JSON format, providing specific guidance for each day throughout the entire cultivation period, It should contain atleast 20 days before harvest, It should follow all latest scientific farming tricks and tips to maximize profit like mixed cropping, drip irrigation, Each description should be two paragraphs. It should be in JSON String format",
        `Given the crop name ${crop}, provide me with an exhaustive day-by-day guide for successfully farming this crop. I'm looking for detailed instructions covering each day from planting to harvesting. The guidance should be clear, beginner-friendly, and actionable. The output should be in JSON format for easy reference`,
        {
            "crop_name": "provided_crop_name in double quotes",
            "detailed_cultivation_guide": [
                {
                    "day": 1,
                    "title": "Day 1 title here",
                    "instructions":
                        "Day 1 instructions in double quotes, no single or double quotes in between"

                },
                {
                    "day": 2,
                    "title": "Day 2 title here",
                    "instructions":
                        "Day 2 instructions in double quotes, no single or double quotes in between"

                },
                {
                    "day": 3,
                    "title": "Day 3 title here",
                    "instructions":
                        "Day 3 instructions in double quotes, no single or double quotes in between"

                },
                // Continue extending the template as needed
                {
                    "day": "n",
                    "title": "Day n title here",
                    "instructions": [
                        "Day n instructions in double quotes, no single or double quotes in between"
                    ]
                }
            ]
        }


    );
    console.log("FINAL OUTPUT")
    console.log(imageSearchTerm)
    console.log("SUCCESS")
    res.send(imageSearchTerm)
};

module.exports = { CropPlan, GetCrop }