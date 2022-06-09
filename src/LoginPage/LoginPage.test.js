import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import LoginForm from "./LoginForm";
// import Home from "../Home/Home";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";

describe("Login Page", () => {
  const loginForm = (
    <Router>
      <LoginForm />
    </Router>
  );
  let originalFetch;
  beforeEach(() => {
    originalFetch = global.fetch;
  });
  afterEach(() => {
    global.fetch = originalFetch;
  });

  test("renders form component", () => {
    render(loginForm);

    const form = screen.getByTestId("login-form");
    expect(form).toBeInTheDocument();
  });

  test("When a user logs in with incorrect information", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            error: "Login failed, check details and try again.",
          }),
      })
    );
    render(loginForm);
    fireEvent.change(screen.getByTestId("username-input"), {
      target: { value: "test" },
    });
    fireEvent.change(screen.getByTestId("password-input"), {
      target: { value: "password" },
    });
    fireEvent.click(screen.getByRole("button"));
    await waitFor(() => screen.findByTestId("login-error"), {
      timeout: 2000,
    });
    const errorMess = screen.getByTestId("login-error");
    expect(errorMess).toBeInTheDocument();
  });
});
