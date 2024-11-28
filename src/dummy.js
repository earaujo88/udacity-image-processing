const sharp = require(`sharp`);

console.log(`kjs`);

sharp('../assets/encenadaport.jpg')
  .resize(300, 200)
  .toFile('output.jpg', function(err) {
    // output.jpg is a 300 pixels wide and 200 pixels high image
    // containing a scaled and cropped version of input.jpg
  });