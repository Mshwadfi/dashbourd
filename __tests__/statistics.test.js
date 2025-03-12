import React from "react";
import StatisticsCard from "@/components/dashboard/StatisticsCard";
import { render, screen } from "@testing-library/react";
import { User } from "lucide-react";

describe("statistics card", () => {
  const mockStat = {
    title: "Users",
    value: "1.2k",
    icon: User,
    trend: "+12%",
    trendUp: true,
  };

  test("render card with correct content", () => {
    render(<StatisticsCard stat={mockStat} />);
    expect(screen.getByText("Users")).toBeInTheDocument();
    expect(screen.getByText("1.2k")).toBeInTheDocument();
    expect(screen.getByText("+12%")).toBeInTheDocument();
    expect(screen.getByText("vs last month")).toBeInTheDocument();
  });

  test("render card with positive trend", () => {
    render(<StatisticsCard stat={mockStat} />);
    const trendElement = screen.getByText("+12%");
    expect(trendElement).toHaveClass("text-green-600");
  });

  test("render card with negative trend", () => {
    const negativeStat = { ...mockStat, trend: "-15%", trendUp: false };
    render(<StatisticsCard stat={negativeStat} />);
    const trendElement = screen.getByText("-15%");
    expect(trendElement).toHaveClass("text-red-600");
  });
});
