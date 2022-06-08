import Networking from "./Networking";

const networking = new Networking();

export default class UserPerformance {
  async getPerformanceScore(nutrientsAmount) {
    const amounts = Object.values(nutrientsAmount);
    const nutrientsGoals = (await networking.getUserGoals())[0];
    delete nutrientsGoals.user_id;
    const goals = Object.values(nutrientsGoals);
    const totalNutrients = amounts.reduce(
      (prev, cur) => Number(prev) + Number(cur)
    );

    const totalGoals = goals.reduce((prev, cur) => Number(prev) + Number(cur));

    const performance = totalNutrients / totalGoals;
    console.log("performance: ", performance);
    return performance;
  }

  addUpNutriments(userHistory) {
    let addedUpNutriments = {};
    for (const nutriment of nutriments) {
      addedUpNutriments[nutriment] = 0;
    }
    if (userHistory.length !== 0) {
      userHistory.forEach((item) => {
        for (const nutriment of nutriments) {
          if (item.item_info[nutriment])
            addedUpNutriments[nutriment] +=
              item.item_info[nutriment] * (item.serving_size_g / 100);
        }
      });
      return addedUpNutriments;
    } else return undefined;
  }
}

const nutriments = [
  "calories",
  "carbs",
  "fats",
  "fiber",
  "protein",
  "salt",
  "sugar",
];
