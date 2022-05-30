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
}
