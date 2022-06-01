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

  async updateInformation(name, weight, height, age, gender) {
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

  async updateGoals(calories, protein, carbs, fats, sugar, salt, fibre) {
    const userInformation = {
      calories,
      protein,
      carbs,
      fats,
      sugar,
      salt,
      fibre,
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
}
