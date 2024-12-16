// Change this value to test different "weather" conditions.
const weather = 'snowy';

// Adjust the "temperature" value to trigger different messages (for Part 2 only).
const temperature = -1;

switch (weather) {
   case 'rainy':
      console.log("It's raining, don't forget your umbrella!");
      break;
   case 'sunny':
      if (temperature > 20) {
         console.log("It's sunny,and it's warm");
      } else {
         console.log("it's sunny, but a bit chilly");
      }
      break;
   case 'snowy':
      if (temperature < 0) {
         console.log("It's snowing and freezing cold... stay warm!");
      }
      break;
   default:
      console.log("I'm not sure what the weather is like.");
}
