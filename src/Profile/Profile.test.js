import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Profile from "./Profile";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";

describe("Calendar component", () => {
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

    const calendar = screen.getByTestId("calendar");
    expect(calendar).toBeInTheDocument();
  });
});

describe("nutriment overview component", () => {
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

  test("nutriment overview component renders", () => {
    render(profile);

    const nutrimentOverivew = screen.getByTestId("nutriment-overview-box");
    expect(nutrimentOverivew).toBeInTheDocument();
  });

  test("nutriment overview has title", () => {
    render(profile);

    const nutrimentOverivew = screen.getByTestId("nutriment-overview-box");
    expect(nutrimentOverivew).toHaveTextContent("Nutriment Overview");
  });
});

describe("timeline component", () => {
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

  test("timeline component renders", () => {
    render(profile);

    const timeline = screen.getByTestId("timeline");
    expect(timeline).toBeInTheDocument();
  });

  test("timeline has title", () => {
    render(profile);

    const timelinePaper = screen.getByTestId("timeline-paper");
    expect(timelinePaper).toHaveTextContent("Timeline");
  });
});
