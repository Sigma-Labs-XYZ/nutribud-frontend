import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "./Home";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import { Experimental_CssVarsProvider } from "@mui/material";
import TabSelector from "./components/TabSelector";

describe("home", () => {
  const home = (
    <Router>
      <Home />
    </Router>
  );
  const tab = (
    <Router>
      <TabSelector />
    </Router>
  );
  let originalFetch;
  beforeEach(() => {
    originalFetch = global.fetch;
  });
  afterEach(() => {
    global.fetch = originalFetch;
  });

  test("text field renders", () => {
    render(home);

    const textField = screen.getByTestId("search-field");
    expect(textField).toBeInTheDocument();
  });

  test("clicking the search button searches", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            response: [
              {
                name: "Test",
                nutriments: {
                  Energy: 61,
                  Protein: 3.47,
                  "Total lipid (fat)": 3.25,
                  "Carbohydrate, by difference": 4.66,
                  "Fiber, total dietary": 0,
                },
                image: "https://www.edamam.com/food-img/933/933eb3791b3a2175e007f1607d56b7e2.jpg",
                foodId: "food_a79ojfkbgdeekgblqmky9bunr8f6",
              },
            ],
          }),
      })
    );
    render(home);
    fireEvent.change(screen.getByTestId("search-input"), {
      target: { value: "test" },
    });
    fireEvent.click(screen.getByTestId("search-button"));
    await waitFor(() => screen.findByTestId("meal-card"), {
      timeout: 2000,
    });
    const mealCard = screen.getByTestId("meal-card");
    expect(mealCard).toBeInTheDocument();
  });

  test("switching tabs renders the barcode button", async () => {
    render(tab);
    fireEvent.change(screen.getByTestId("barcode-button"));

    await waitFor(() => screen.findByTestId("barcode-button"), {
      timeout: 2000,
    });
    const barcodeButton = screen.getByTestId("barcode-button");
    expect(barcodeButton).toBeInTheDocument();
  });

  test("no products results in an alert", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            response: [],
          }),
      })
    );
    render(home);

    fireEvent.change(screen.getByTestId("search-input"), {
      target: { value: "test" },
    });
    fireEvent.click(screen.getByTestId("search-button"));
    await waitFor(() => screen.findByTestId("alert"), {
      timeout: 2000,
    });

    const alert = screen.getByTestId("alert");
    expect(alert).toBeInTheDocument();
  });
});
