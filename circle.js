const circleArea = (radius) => {
  if (!radius) {
    console.log("Please enter valid radius");

    return false;
  }

  console.log(`Area of Circle : ${Math.PI * radius ** 2}`);
};

const circleCircumference = (radius) => {
  if (!radius) {
    console.log("Please enter valid radius");

    return false;
  }

  console.log(`Circumference of Circle : ${2 * Math.PI * radius}`);
};

module.exports = { circleArea, circleCircumference };
