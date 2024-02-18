const test = `{
    crop_name: "maize",
    detailed_cultivation_guide: [
        {
            day: 1,
            instructions: [
                "Prepare the soil by tilling and removing any weeds. Conduct a soil test to check pH and nutrient levels. Adjust pH if necessary by adding lime or sulfur."
            ]
        },
        {
            day: 2,
            instructions: [
                "Choose high-quality maize seeds from a reputable supplier. Soak the seeds in water for 12 hours to enhance germination. Prepare seedbeds or trays for sowing."
            ]
        },
        {
            day: 3,
            instructions: [
                "Sow the maize seeds at a depth of 1-2 inches and space them 8-12 inches apart. Water the seeds immediately after planting. Cover the seeds with soil and mulch to retain moisture."
            ]
        },
        {
            day: 4,
            instructions: [
                "Monitor the seedlings for germination. Ensure the soil remains moist but not waterlogged. Protect the young plants from birds and pests by using nets or scare tactics."
            ]
        },
        {
            day: 5,
            instructions: [
                "Thin out the seedlings once they reach 3-4 inches in height. Remove the weaker plants, leaving the healthiest ones spaced 12-18 inches apart. Add organic mulch to conserve moisture."
            ]
        },
        {
            day: 6,
            instructions: [
                "Apply a balanced fertilizer with a higher ratio of nitrogen to promote vegetative growth. Water the plants deeply to encourage strong root development. Monitor for signs of nutrient deficiencies."
            ]
        },
        {
            day: 7,
            instructions: [
                "Inspect the maize plants for any signs of pests or diseases. Implement appropriate pest control measures like introducing beneficial insects or using organic pesticides. Prune any damaged leaves or stems."
            ]
        },
        {
            day: 8,
            instructions: [
                "Consider intercropping maize with legumes like beans to enhance soil fertility and pest control. Ensure the companion plants are compatible in terms of space and nutrient requirements. Water all crops adequately."
            ]
        },
        {
            day: 9,
            instructions: [
                "Install drip irrigation system for efficient watering. Adjust the irrigation schedule based on weather conditions and plant needs. Mulch the soil to prevent weed growth and retain moisture."
            ]
        },
        {
            day: 10,
            instructions: [
                "Inspect the crop for any signs of nutrient deficiencies. Conduct a foliar spray of micronutrients like zinc or magnesium if needed. Monitor soil moisture levels and adjust irrigation accordingly."
            ]
        },
        {
            day: 11,
            instructions: [
                "Hill the soil around the base of the maize plants to provide additional support and encourage root development. Check for any signs of water stress or wilting. Mulch the plants to maintain moisture."
            ]
        },
        {
            day: 12,
            instructions: [
                "Apply a side dressing of nitrogen fertilizer to boost growth during the critical stage. Monitor the plants for any signs of over-fertilization or nitrogen burn. Water deeply but infrequently."
            ]
        },
        {
            day: 13,
            instructions: [
                "Scout for common maize pests like corn borers or armyworms. Implement integrated pest management strategies like crop rotation or introducing natural predators. Apply neem oil as a natural insecticide."
            ]
        },
        {
            day: 14,
            instructions: [
                "Check the maize plants for any symptoms of diseases such as rust or leaf spots. Remove and destroy any infected plant parts. Apply organic fungicides preventively to protect the crop."
            ]
        },
        {
            day: 15,
            instructions: [
                "Monitor the growth of the maize plants and adjust support structures if needed. Ensure the plants have access to adequate sunlight and air circulation. Mulch around the plants to conserve moisture."
            ]
        },
        {
            day: 16,
            instructions: [
                "Inspect the crop for signs of nutrient deficiencies such as yellowing leaves. Test the soil for nutrient levels and adjust fertilization as required. Water deeply early in the day to prevent evaporation."
            ]
        },
        {
            day: 17,
            instructions: [
                "Consider applying a foliar feed of seaweed extract or compost tea to boost plant health and resilience. Monitor for any signs of pests or diseases and take immediate action to address any issues."
            ]
        },
        {
            day: 18,
            instructions: [
                "Continue monitoring the maize plants for pests like aphids or thrips. Use insecticidal soap or natural predators to control infestations. Avoid using broad-spectrum pesticides that harm beneficial insects."
            ]
        },
        {
            day: 19,
            instructions: [
                "Inspect the soil moisture levels and adjust irrigation to meet the plant's needs. Consider installing a rain gauge to track rainfall. Mulch the soil with organic materials to improve water retention."
            ]
        },
        {
            day: 20,
            instructions: [
                "As the maize plants mature, provide support to prevent lodging during strong winds or heavy rain. Stake taller plants or use trellises for additional stability. Remove any weeds to reduce competition for resources."
            ]
        },
        {
            day: 21,
            instructions: [
                "Check the maize ears for proper development and pollination. Look for full, plump kernels and ensure each ear is well-filled. Hand-pollinate any incomplete ears to maximize yield potential."
            ]
        },
        {
            day: 22,
            instructions: [
                "Monitor the crop for signs of nutrient deficiencies like yellowing of lower leaves. Conduct a soil test to determine nutrient levels and apply a balanced fertilizer accordingly. Water deeply and consistently."
            ]
        },
        {
            day: 23,
            instructions: [
                "Inspect the maize plants for signs of lodging or leaning. Provide additional support by tying plants to stakes or installing more substantial trellises. Prune any overcrowded or diseased plant parts."
            ]
        },
        {
            day: 24,
            instructions: [
                "Scout for late-season pests like fall armyworms or earworms. Use pheromone traps to monitor pest populations and take action if thresholds are exceeded. Apply biological control methods whenever possible."
            ]
        },
        {
            day: 25,
            instructions: [
                "Check the maize ears for proper kernel development. Ensure the kernels are filled and plump, indicating successful pollination. Hand-pollinate any incomplete ears to boost yield potential."
            ]
        },
        {
            day: 26,
            instructions: [
                "Monitor the crop for any signs of diseases like gray leaf spot or common rust. Apply preventive fungicides if necessary to protect the plants from fungal infections. Remove and destroy infected plant debris."
            ]
        },
        {
            day: 27,
            instructions: [
                "Inspect the soil moisture levels and adjust irrigation to match the plant's needs. Avoid overwatering or underwatering, which can lead to stunted growth or poor yield. Mulch the soil to conserve moisture."
            ]
        },
        {
            day: 28,
            instructions: [
                "Apply a foliar feed of seaweed extract or compost tea to boost plant health and resilience. Monitor for pest or disease issues and take prompt action to control any outbreaks. Keep the crop area weed-free."
            ]
        },
        {
            day: 29,
            instructions: [
                "Check for common maize pests like corn borers or aphids. Use sticky traps to monitor pest populations and employ natural predators like ladybugs or lacewings for biological control. Avoid using harsh chemical pesticides."
            ]
        },
        {
            day: 30,
            instructions: [
                "Inspect the maize plants for any signs of nutrient deficiencies such as yellowing leaves. Conduct a foliar spray of micronutrients like boron or iron to address deficiencies. Monitor soil moisture levels closely."
            ]
        },
        {
            day: 31,
            instructions: [
                "Monitor the growth of the maize plants and provide support as needed to prevent lodging. Mulch around the base of the plants to conserve moisture and suppress weed growth. Check for signs of wilting or stress."
            ]
        },
        {
            day: 32,
            instructions: [
                "Ensure the maize plants receive adequate sunlight for proper growth and development. Remove any shading weeds or structures. Water deeply and infrequently to encourage strong root development."
            ]
        },
        {
            day: 33,
            instructions: [
                "Inspect the maize ears for complete kernel development and fullness. Check for any signs of insect damage or mold. Handpick any affected ears and dispose of them properly to prevent spread."
            ]
        },
        {
            day: 34,
            instructions: [
                "Scout for common maize pests like corn earworms or stink bugs. Use pheromone traps to monitor pest populations and employ biological control methods like releasing parasitic wasps. Apply insecticidal soap sparingly."
            ]
        },
        {
            day: 35,
            instructions: [
                "Check the maize plants for any symptoms of diseases like southern rust or common smut. Apply preventive fungicides like copper spray to protect the plants from fungal infections. Remove and destroy infected plant parts."
            ]
        },
        {
            day: 36,
            instructions: [
                "Monitor the soil moisture levels and adjust irrigation to match the plant's needs. Avoid overhead watering to prevent foliar diseases. Mulch around the plants with organic materials to retain moisture."
            ]
        },
        {
            day: 37,
            instructions: [
                "Apply a foliar feed of liquid seaweed or fish emulsion to boost plant health and vigor. Monitor for pests and diseases, and treat as needed with environmentally friendly methods. Keep the area around the crop clean."
            ]
        },
        {
            day: 38,
            instructions: [
                "Examine the maize plants for signs of nutrient deficiencies such as yellowing or stunted growth. Perform a foliar spray of micronutrients like manganese or zinc to address deficiencies. Water deeply and evenly."
            ]
        },
        {
            day: 39,
            instructions: [
                "Support the maize plants with stakes or trellises as they grow taller. Ensure the plants are not overcrowded and have access to adequate sunlight and air circulation. Mulch the soil surface to retain moisture."
            ]
        },
        {
            day: 40,
            instructions: [
                "Inspect the maize ears for signs of maturity like dried husks and developed kernels. Perform a thumb nail test by pressing a kernel to check for a milky texture. Harvest when kernels are in the milky to dough stage."
            ]
        },
        {
            day: 41,
            instructions: [
                "Harvest the maize by gripping the ear firmly and twisting it downwards. Remove the husks and silk from the ear. Check for any signs of pest damage or mold. Store the harvested maize in a cool, dry place."
            ]
        },
        {
            day: 42,
            instructions: [
                "Dry the harvested maize in a well-ventilated area to reduce moisture content. Use a dehydrator or air-dry the corn by hanging it in a warm, dry location. Thoroughly dry the maize to prevent molding."
            ]
        },
        {
            day: 43,
            instructions: [
                "Shell the dried maize kernels from the cobs. Store the kernels in airtight containers or sealable bags to maintain freshness. Check for any signs of pests or contamination before storage."
            ]
        },
        {
            day: 44,
            instructions: [
                "Monitor the stored maize regularly for any signs of moisture accumulation or mold growth. Use desiccants like silica gel packets to absorb excess moisture. Keep the storage area cool and dry."
            ]
        },
        {
            day: 45,
            instructions: [
                "Grind the dried maize kernels into cornmeal or flour using a grain mill or food processor. Store the ground maize in airtight containers in a cool, dark place. Use the maize to prepare various dishes."
            ]
        },
        {
            day: 46,
            instructions: [
                "Experiment with different recipes and cooking methods using the maize flour or meal. Try making cornbread, tortillas, or porridge. Share your freshly prepared maize dishes with family and friends."
            ]
        },
        {
            day: 47,
            instructions: [
                "Consider saving some of the harvested maize kernels for planting in the next growing season. Select the healthiest and most robust kernels for seed. Store the seeds in a cool, dry place until planting."
            ]
        },
        {
            day: 48,
            instructions: [
                "Prepare the planting site for the next maize crop by clearing debris and weeds. Test the soil pH and fertility levels. Amend the soil as needed with compost or organic fertilizers to improve soil health."
            ]
        },
        {
            day: 49,
            instructions: [
                "Rotate the maize crop with other crops like legumes or root vegetables to prevent soil depletion and pest buildup. Plan the crop rotation schedule for optimal yield and soil restoration. Begin preparing the soil for the next crop."
            ]
        },
        {
            day: 50,
            instructions: [
                "Reflect on the lessons learned during this maize cultivation cycle. Note any successes, challenges, or improvements for next season. Keep detailed records of planting dates, varieties used, and yields achieved."
            ]
        }
    ]
}`

const testWithSpaces = test.replace(/\n/g, " ");

console.log(testWithSpaces);
output = eval("(" + testWithSpaces + ")");
console.log(output.day);