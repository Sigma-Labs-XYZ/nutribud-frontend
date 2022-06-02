export default class Networking {
  async createAccount(username, password, passwordConfirmation) {
    const userRegistrationDetails = {
      username,
      password,
      passwordConfirmation,
    };
    const response = await fetch(`${process.env.REACT_APP_API_URL}/register`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userRegistrationDetails),
    });
    const data = await response.json();
    return data;
  }

  async userLoginAttempt(username, password) {
    const userLoginDetails = { username, password };
    const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLoginDetails),
    });
    const data = await response.json();
    return data;
  }

  async verifyUserSession() {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  }

  async logout() {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  }

  async updateUserInformation(name, weight, height, age, gender) {
    const userInformation = { name, weight, height, age, gender };
    const response = await fetch(`${process.env.REACT_APP_API_URL}/user-info`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInformation),
    });
    const data = await response.json();
    return data;
  }

  async updateUserGoals(calories, protein, carbs, fats, sugar, salt, fiber) {
    const userInformation = {
      calories,
      protein,
      carbs,
      fats,
      sugar,
      salt,
      fiber,
    };
    const response = await fetch(`${process.env.REACT_APP_API_URL}/goals`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInformation),
    });
    const data = await response.json();
    return data;
  }

  async getUserInformation() {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/user-info`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data.response.rows;
  }

  async newUserInformation(name, weight, height, age, gender) {
    const userInformation = { name, weight, height, age, gender };
    const response = await fetch(`${process.env.REACT_APP_API_URL}/user-info`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInformation),
    });
    const data = await response.json();
    return data;
  }

  async getUserGoals() {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/goals`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data.response.rows;
  }

  async trackItem(data, amount) {
    const trackedItem = { itemInfo: data, amount: amount };
    const response = await fetch(`${process.env.REACT_APP_API_URL}/tracking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(trackedItem),
    });
    return await response.json();
  }

  async barcodeSearch(barcode) {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/search-barcode?barcode=${barcode}`
    );
    const data = await response.json();
    console.log(data.response);
    if (data.response) return [data.response];
    else return [data];
  }

  async mealSearch(item) {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/search-text?item=${encodeURIComponent(
        item
      )}`
    );
    const data = await response.json();
    return data.response;
  }
}
