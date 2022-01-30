function getSleepHours(day) {
    day = day.toLowerCase();
  
    if (day == "sunday") {
      return 6;
    } else if (day == "monday") {
      return 7;
    } else if (day == "tuesday") {
      return 7;
    } else if (day == "wednesday") {
      return 6;
    } else if ((day = "thursday")) {
      return 7;
    } else if (day == "friday") {
      return 7;
    } else if (day == "saterday") {
      return 6;
    } else {
      return "Please enter a vailid day.";
    }
  }
  
  function getActualSleepHours() {
    actualSleepTimePerWeek =
      getSleepHours("sunday") +
      getSleepHours("monday") +
      getSleepHours("Tuesday") +
      getSleepHours("WeDNeSdaY") +
      getSleepHours("Thursday") +
      getSleepHours("Friday") +
      getSleepHours("Saterday");
    return actualSleepTimePerWeek;
  }
  
  function getIdealSleepHours() {
    idealHours = 8;
    return idealHours * 7;
  }
  
  function calculateSleepDebt() {
    actualSleepHours = getActualSleepHours();
    idealSleepHours = getIdealSleepHours();
    ifNotEqual = actualSleepHours - idealSleepHours;
  
    if (actualSleepHours == idealSleepHours) {
      console.log("You got the perfict amonth of sleep!");
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You got ${ifNotEqual} more sleep then needed!`);
    } else {
      console.log(
        "You did not get enought sleep. Try sleeping " +
          ifNotEqual * -1 +
          " more."
      );
    }
  }