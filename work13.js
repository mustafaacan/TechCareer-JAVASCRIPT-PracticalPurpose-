// this keyword is crucial
const objectExample = () => {
  return {
    name: "Izmir",
    age: "1500",
    town: ["Uckuyular, Bornova, Buca, Karsiyaka"],
    getInfo: function () {
      console.log(
        `The city is ${this.name} that ${
          this.age
        } years old. Some known towns are ${this.town.join(",")}`
      );
    },
  };
};

let obj = objectExample();
obj.getInfo();

// InstanceOf example

const instanceExaple = () => {
  function location(locName) {
    this.locName = locName;
  }

  function city(cityName) {
    this.cityName = cityName;
  }

  city.prototype = new location();
  let newCity = new city("Izmir");
  console.log(newCity instanceof location);
  console.log(newCity instanceof city);
};

instanceExaple();
