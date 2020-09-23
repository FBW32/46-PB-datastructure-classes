// Classy
// 1. Person Class
// Create a class called Person which accepts the name of a person as a string, and his/her age as a number. The Person class should have a method called describe which returns a string with the following syntax: "name, age years old". So, for example, if John is 19 years old, then the function describe of his object will return "John, 19 years old".

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    describe() {
        return this.name + ", " + this.age + " years old";
    }

}

const person = new Person("John", 19);

console.log(person.describe());   // John, 19 years old




// 2. Volume
// Write a JavaScript program to get the volume of a cylinder with four decimal places using a class.

// Note: Volume of a cylinder : V = πr^2h - r is the radius and h is the height of the cylinder.

class Cylinder{

    constructor(radius, height){
        this.r = radius;
        this.h = height;
    }

    getVolume(){
         let volume = (this.h * Math.PI  * this.h * this.h).toFixed(4)
         return parseFloat(volume);

    }
}

const cylinder = new Cylinder(23.323, 11.893667);

console.log(cylinder.getVolume());  // 5285.6353

console.log(typeof cylinder.getVolume());  // number



// 3. Tick Tock
// Rewrite the following code to use the "class" syntax.

//   function Clock({ template }) {
  
//     let timer;
  
//     function render() {
//       let date = new Date();
  
//       let hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;
  
//       let mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;
  
//       let secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;
  
//       let output = template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);
  
//       console.log(output);
//     }
  
//     this.stop = function() {
//       clearInterval(timer);
//     };
  
//     this.start = function() {
//       render();
//       timer = setInterval(render, 1000);
//     };

//   }
  
//   let clock = new Clock({template: 'h:m:s'});
//   clock.start();




// 4. TV Class
// Create a TV class with properties like brand, channel and volume.
// Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// Add a method to set the channel randomly. Let's say the TV has only 50 channels.
// Add a method to reset TV so it goes back to channel 1 and volume 50.
// It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".


class TV {
    constructor(brand, channel, volume){
        this.brand = brand;
        this.channel = channel;
        this.volume = volume;
    }

    increaseVol(max, min) { // since default is 50, to increase we need a value between 50 and 100
        let increasedVolume = Math.floor(Math.random() * (100 - 50 + 1) + 50);
       return increasedVolume;
    }


    decreaseVol(max, min) {  // since default is 50, to decrease we need a value between 0 and 50
         return Math.floor(Math.random() * (50 - 0 + 1));

     }


    setChannel() {
       return parseInt(Math.random(this.channel)* 50);
    }

    reset(){
        return this.channel + this.volume;
    }

    writeStatus(){
        return this.brand + " at channel " + this.channel + ", " + "volume " + this.volume
    }

}

const myTv = new TV("sony", 1, 50);

console.log('volume increased', myTv.increaseVol());
console.log('check current status', myTv.writeStatus());

console.log('volume decreased', myTv.decreaseVol());

console.log('random channel', myTv.setChannel());
console.log(myTv.channel); 

myTv.reset();

console.log(myTv.channel); // 1

console.log(myTv.volume)  // 50

console.log('check current status', myTv.writeStatus());