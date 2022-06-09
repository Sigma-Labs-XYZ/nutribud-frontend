import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import SignupForm from "./SignupForm";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";

describe("SignUp Page", () => {
  const signupForm = (
    <Router>
      <SignupForm />
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
    render(signupForm);

    const form = screen.getByTestId("signup-form");
    expect(form).toBeInTheDocument();
  });

  test("When a user attempts to create an account without filling out any information, account creation error should show", async () => {
    render(signupForm);
    const submitBtn = screen.getByRole("button");
    fireEvent.click(submitBtn);
    await waitFor(() => screen.findByTestId("signup-error"), {
      timeout: 2000,
    });
    const errorMess = screen.getByTestId("signup-error");
    expect(errorMess).toBeInTheDocument();
  });

  test("When a user submits a form, they get a successful account created", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            response: "Successful registration",
          }),
      })
    );
    render(signupForm);
    fireEvent.change(screen.getByTestId("username-input"), {
      target: { value: "test" },
    });
    fireEvent.change(screen.getByTestId("password-input"), {
      target: { value: "password" },
    });
    fireEvent.change(screen.getByTestId("confirm-password-input"), {
      target: { value: "password" },
    });
    fireEvent.click(screen.getByRole("button"));

    await waitFor(() => screen.findByTestId("signup-success"), {
      timeout: 2000,
    });
    const successMess = screen.getByTestId("signup-success");
    expect(successMess).toBeInTheDocument();
  });

  test("When a user submits a form, but theres a error message returned", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            error: "Invalid credentials",
          }),
      })
    );
    render(signupForm);
    fireEvent.change(screen.getByTestId("username-input"), {
      target: { value: "test" },
    });
    fireEvent.change(screen.getByTestId("password-input"), {
      target: { value: "password" },
    });
    fireEvent.change(screen.getByTestId("confirm-password-input"), {
      target: { value: "password" },
    });
    fireEvent.click(screen.getByRole("button"));

    await waitFor(() => screen.findByTestId("signup-error"), {
      timeout: 2000,
    });
    const errorMess = screen.getByTestId("signup-error");
    expect(errorMess).toBeInTheDocument();
  });
});
