const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//What's your name? Nicknames are also acceptable :)
rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (listen) => {
      rl.question("Which meal is your favourite? (eg: dinner, brunch, etc.) ", (meal) => {
        rl.question("What's your favourite thing to eat for that meal? ", (food) => {
          rl.question("Which sport is your absolute favourite? ", (sport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
              console.log(`Hello my name is ${name} and I like ${activity} while listening to ${listen}. My favourite meal of the day is ${meal} and my favourite thing to eat for that meal is ${food}. My favourite sport is ${sport}. I am also really amazing at ${superpower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

