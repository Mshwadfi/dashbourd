import React from "react";
import { statistics } from "@/libs/constants";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("home page", () => {
  test("renders the correct number of StatisticsCard components", () => {
    render(<Home />);

    statistics.forEach((stat) => {
      expect(screen.getByTestId(`stat-card-${stat.title}`)).toBeInTheDocument();
    });
  });

  test("renders all statistics cards", () => {
    render(<Home />);

    // Verify that the correct number of cards are rendered
    const cards = screen.getAllByTestId(/stat-card-/);
    expect(cards.length).toBe(statistics.length);
  });
});
