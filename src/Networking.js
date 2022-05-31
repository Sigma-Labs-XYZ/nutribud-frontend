export default class Networking {
  async createAccount(username, password, passwordConfirmation) {
    const userRegistrationDetails = { username, password, passwordConfirmation };
    const response = await fetch("http://localhost:8080/register", {
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
    const response = await fetch(`http://localhost:8080/login`, {
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
}
