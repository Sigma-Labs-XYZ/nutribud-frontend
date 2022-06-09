import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Profile from "./Profile";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";

describe("SignUp Page", () => {
  const profile = (
    <Router>
      <Profile />
    </Router>
  );
  let originalFetch;
  beforeEach(() => {
    originalFetch = global.fetch;
  });
  afterEach(() => {
    global.fetch = originalFetch;
  });

  test("calendar component renders", () => {
    render(profile);

    const calendarDiv = screen.getByTestId("calendar-wrapper");
    expect(calendarDiv).toBeInTheDocument();
  });
});
