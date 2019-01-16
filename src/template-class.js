import { Age } from './../src/template-function.js';
export { solarAge };

class solarAge {
  constructor (age){
    this.age = age;
  }

  yearsToDays(){
    return this.age * 365;
  }

  mercuryAge() {
    const mercury = .24;
    let age = this.age / mercury;
    return Math.round(age);
  }

  venusAge() {
    const venus = .62;
    let age = this.age / venus;
    return Math.round(age);
  }

  marsAge() {
    const mars = 1.88;
    let age = this.age/ mars;
    return Math.round(age);
  }

  jupiterAge() {
    const jupiter = 11.86;
    let age = this.age/ jupiter;
    return Math.round(age);
  }

  yearsToLive(avgLifeExpectancy) {
    let life = avgLifeExpectancy - this.age;
    let liveOn = this.age - avgLifeExpectancy;

    if (this.age < avgLifeExpectancy) {
      return life + " " + "years to go!";
    } else {
    return  "You have surpase the average life expectancy of your peers by " + liveOn + " " +"years!";
    }
  }

}
