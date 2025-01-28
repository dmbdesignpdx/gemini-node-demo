/**
 * @file Provides the main program.
 */


// Theirs
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { stdin: input, stdout: output } = require("node:process");
const readline = require("node:readline/promises");
const c = require("./constants/index.js");


//
// SECTION -- Instantiations
//

const gemini = new GoogleGenerativeAI(c.API_KEY);
const ui = readline.createInterface({ input, output });
const model = gemini.getGenerativeModel({
  model: c.MODEL,
  systemInstruction: c.SYSTEM_INSTRUCTIONS,
});


//
// SECTION -- Main
//


async function main() {
  output.write(c.INTRO_PROMPT);

  const prompt = await ui.question(c.GREET_PROMPT);

  // Bail!
  if (prompt === "exit") process.exit();

  const result = await model.generateContentStream(prompt);

  output.write(c.LOADING);

  for await (const chunk of result.stream) {
    const chunkText = chunk.text();
    output.write(chunkText);
  }

  ui.close();
}


void main();
