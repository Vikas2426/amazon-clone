import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import AddToCart from "..";

const mockAddItems = jest.fn();
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: () => ({
    addItems: mockAddItems,
    reduceQuantity: jest.fn(),
  }),
}));

describe("AddToCart", () => {
  beforeEach(() => {
    render(<AddToCart item={{ imgUrl: "imgUrl" }} />);
  });
  afterEach(() => {
    jest.restoreAllMocks();
    cleanup();
  });
  it("should render without error", () => {
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen).toMatchSnapshot();
  });
  it("should call addItems function", () => {
    const addToCartBtn = screen.getByRole("button");
    fireEvent.click(addToCartBtn);
    expect(mockAddItems).toHaveBeenCalledTimes(1);
  });
  it("should call AddRemoveBtns component", async () => {
    mockAddItems.mockReturnValue(1);
    const addToCartBtn = screen.getByRole("button");
    fireEvent.click(addToCartBtn);
    expect(mockAddItems).toHaveReturnedWith(1);
    expect(await screen.findByText(/minimize/i)).toBeInTheDocument();
  });
});
