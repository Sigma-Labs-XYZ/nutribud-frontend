export default class Networking {
  async createAccount(username, password) {
    const response = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        username: username,
        password: password,
      },
    });
  }

  async userLoginAttempt(username, password) {
    const userLoginDetails = { username, password };

    const response = await fetch(`/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLoginDetails),
    });
    const data = await response.json();
    if (data.response) return data.response;
    else if (data.error) return data;
  }
}
