import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import InfoForm from "./InfoForm";
import GoalsForm from "./GoalsForm";

describe("Settings Page - Information Page", () => {
  const informationPage = (
    <Router>
      <InfoForm />
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
    render(informationPage);

    const form = screen.getByTestId("information-form");
    expect(form).toBeInTheDocument();
  });

  test("Success (Changes saved) mesg when completing information", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            response: "Successfully added to user info.",
          }),
      })
    );

    render(informationPage);
    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText("Weight"), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText("Height"), {
      target: { value: "170" },
    });
    fireEvent.change(screen.getByLabelText("Age"), {
      target: { value: "24" },
    });
    fireEvent.click(screen.getByLabelText("Male"));
    fireEvent.click(screen.getByRole("button"));

    await waitFor(() => screen.findByTestId("information-save-success"), {
      timeout: 2000,
    });
    const successMess = screen.getByTestId("information-save-success");
    expect(successMess).toBeInTheDocument();
  });
});

describe("Settings Page - Goals Page", () => {
  const goalsPage = (
    <Router>
      <GoalsForm />
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
    render(goalsPage);

    const form = screen.getByTestId("goals-form");
    expect(form).toBeInTheDocument();
  });

  test("Success (Changes saved) mesg when completing goals", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            response: "Successfully updated nutrition goals.",
          }),
      })
    );

    render(goalsPage);
    fireEvent.change(screen.getByLabelText("Calories"), {
      target: { value: "2000" },
    });
    fireEvent.change(screen.getByLabelText("Protein"), {
      target: { value: "30" },
    });
    fireEvent.change(screen.getByLabelText("Carbohydrates"), {
      target: { value: "300" },
    });
    fireEvent.change(screen.getByLabelText("Fats"), {
      target: { value: "10" },
    });
    fireEvent.change(screen.getByLabelText("Sugar"), {
      target: { value: "40" },
    });
    fireEvent.change(screen.getByLabelText("Salt"), {
      target: { value: "20" },
    });
    fireEvent.change(screen.getByLabelText("Fiber"), {
      target: { value: "40" },
    });
    fireEvent.click(screen.getByRole("button"));

    await waitFor(() => screen.findByTestId("goals-update-success"), {
      timeout: 2000,
    });
    const successMess = screen.getByTestId("goals-update-success");
    expect(successMess).toBeInTheDocument();
  });
});
