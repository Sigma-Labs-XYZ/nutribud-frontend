import Networking from "./Networking";

const networking = new Networking();

export default class UserPerformance {
  getPerformanceScore(nutrientsAmount) {
    const amounts = Object.values(nutrientsAmount);
    const nutrientsGoals = networking.getUserGoals();
    const goals = Object.values(nutrientsGoals);
    const totalNutrients = amounts.reduce((prev, cur) => prev + cur);
    const totalGoals = goals.reduce((prev, cur) => prev + cur);
    const performance = totalNutrients / totalGoals;
    return performance;
  }

  addUpNutriments(userHistory) {
    let addedUpNutriments = {};
    for (const nutriment of nutriments) {
      addedUpNutriments[nutriment] = 0;
    }
    console.log(userHistory);
    if (userHistory.length !== 0) {
      userHistory.forEach((item) => {
        for (const key of Object.keys(item.item_info)) {
          addedUpNutriments[key] +=
            item.item_info[key] * (item.serving_size_g / 100);
        }
      });
      return addedUpNutriments;
    } else return undefined;
  }
}

const nutriments = [
  "calcium",
  "calories",
  "carbs",
  "fatMonounsaturated",
  "fatPolyunsaturated",
  "fatSaturated",
  "fats",
  "fiber",
  "folateDfe",
  "folateFood",
  "folicAcid",
  "iron",
  "niacin",
  "phosphorus",
  "potassium",
  "protein",
  "riboflavin",
  "salt",
  "sugar",
  "thiamin",
  "vitaminA",
  "vitaminB6",
  "vitaminB12",
  "vitaminC",
  "vitaminD",
  "vitaminE",
  "vitaminK",
  "water",
  "zinc",
];
