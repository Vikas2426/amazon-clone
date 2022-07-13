import { cleanup, fireEvent, render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import AddToCart from "..";
import * as AddRemoveBtns from "../../AddRemoveBtns";

const mockAddItems = jest.fn().mockReturnValue(1);
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: () => ({
    addItems: mockAddItems,
    reduceQuantity: jest.fn(),
  }),
}));

const mockAddRemoveBtns = jest.fn();
jest.mock(AddRemoveBtns, () => mockAddRemoveBtns);

describe("AddToCart", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    cleanup();
  });
  it("should render without error", () => {
    const container = render(<AddToCart />);
    expect(container).toMatchSnapshot();
  });
  it("should call addItems function", () => {
    const container = render(<AddToCart />);
    const addToCartBtn = container.getByRole("button");
    fireEvent.click(addToCartBtn);
    expect(mockAddItems).toHaveBeenCalledTimes(1);
  });
  it("should call AddRemoveBtns component", async () => {
    const container = render(<AddToCart />);
    const addToCartBtn = container.getByRole("button");
    fireEvent.click(addToCartBtn);
    await container.findByText(/minimize/i);
  });
});
