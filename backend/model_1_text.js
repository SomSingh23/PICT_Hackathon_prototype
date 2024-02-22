const {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} = require("@google/generative-ai");
require("dotenv").config();

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
];

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run(_input) {
  try {
    const model = genAI.getGenerativeModel({
      model: process.env.MODEL_NAME,
      safetySettings,
    });

    const prompt = _input;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (err) {
    let ans = err.message;
    ans = ans.substring(28);
    return ans;
  }
}

module.exports = run;
