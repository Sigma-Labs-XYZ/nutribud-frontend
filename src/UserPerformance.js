import Networking from "./Networking";

const networking = new Networking();

export default class UserPerformance {
  async getPerformanceScore(nutrientsAmount) {
    const nutrientsGoals = (await networking.getUserGoals())[0];
    delete nutrientsGoals.user_id;
    const performancePercentages = this.calculateNutrientProgress(
      Object.keys(nutrientsAmount),
      nutrientsAmount,
      nutrientsGoals
    );
    const performanceValues = Object.values(performancePercentages);
    const performance =
      performanceValues.reduce((prev, curr) => Number(prev) + Number(curr)) / performanceValues.length;
    const performanceDiff = performance - 1;
    return performanceDiff > 0 ? 1 - performanceDiff : performance;
  }

  addUpNutriments(userHistory) {
    let addedUpNutriments = {};
    for (const nutriment of nutriments) {
      addedUpNutriments[nutriment] = 0;
    }
    if (userHistory.length !== 0) {
      userHistory.forEach((item) => {
        console.log(item);
        for (const nutriment of nutriments) {
          let itemNutrimentValue = 0;
          if (item.item_info[nutriment]) {
            itemNutrimentValue = item.item_info[nutriment];
          }
          addedUpNutriments[nutriment] += itemNutrimentValue * (item.serving_size_g / 100);
        }
      });
      return addedUpNutriments;
    } else return undefined;
  }

  calculateNutrientProgress(nutrients, totalNutrimentAmounts, goals) {
    const percentageProgress = {};
    nutrients.forEach((nutrient) => {
      percentageProgress[nutrient] = totalNutrimentAmounts[nutrient] / goals[nutrient];
      const goalDiff = totalNutrimentAmounts[nutrient] - goals[nutrient];
      if (goalDiff <= 0) {
        percentageProgress[nutrient] = totalNutrimentAmounts[nutrient] / goals[nutrient];
      } else {
        const percentage = totalNutrimentAmounts[nutrient] / goals[nutrient];
        const percentageDiff = percentage - 1;
        percentageProgress[nutrient] = 1 - percentageDiff < 0 ? 0 : 1 - percentageDiff;
      }
    });
    return percentageProgress;
  }
}

const nutriments = ["calories", "carbs", "fats", "fiber", "protein", "salt", "sugar"];
