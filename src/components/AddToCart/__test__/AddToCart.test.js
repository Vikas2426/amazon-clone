import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import AddToCart from "..";
import ContextProvider from "../../ContextProvider";

let item = { imgUrl: "imgUrl" };

describe("AddToCart", () => {
  beforeEach(() => {
    render(
      <ContextProvider>
        <AddToCart item={item} />
      </ContextProvider>
    );
  });

  afterEach(() => {
    item = { imgUrl: "imgUrl" };
  });
  it("should render without error", () => {
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen).toMatchSnapshot();
  });
  it("should call addQuantity function", () => {
    const addToCartBtn = screen.getByRole("button");
    fireEvent.click(addToCartBtn);
    expect(item).toHaveProperty("quantity");
  });
  it("should render add and remove button", async () => {
    const addToCartBtn = screen.getByRole("button");
    fireEvent.click(addToCartBtn);
    expect(item).toHaveProperty("quantity");
    expect(await screen.findByText(/remove/i)).toBeInTheDocument();
  });
  it("should remove item", async () => {
    const addToCartBtn = screen.getByRole("button");
    fireEvent.click(addToCartBtn);
    expect(item).toHaveProperty("quantity");
    const removeBTn = await screen.findByText(/remove/i);
    fireEvent.click(removeBTn);
    expect(item.quantity).toBe(0);
  });
});
