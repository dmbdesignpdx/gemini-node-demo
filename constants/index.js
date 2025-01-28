/**
 * @file Provides a collection of constants.
 */


const INTRO_PROMPT = `
--------------------------

       Assistant 🦄
    with Google Gemini

--------------------------

 ( input 'exit' to quit )
\n\n`;
const SYSTEM_INSTRUCTIONS = "You are a helpful assistant with concise responses.";
const GREET_PROMPT = "How can I help you?\n"
const MODEL = "gemini-1.5-flash-8b";
const API_KEY = process.env.GEMINI_KEY;
const LOADING = "Thinking... \n";


module.exports = {
  INTRO_PROMPT,
  SYSTEM_INSTRUCTIONS,
  GREET_PROMPT,
  MODEL,
  API_KEY,
  LOADING,
};
