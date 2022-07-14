import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import AddRemoveBtns from "..";

const addItem = jest.fn();
const removeItem = jest.fn();
describe("AddRemoveBtns", () => {
  beforeEach(() => {
    render(
      <AddRemoveBtns quantity={0} addItem={addItem} removeItem={removeItem} />
    );
  });
  afterEach(() => {
    cleanup();
  });
  it("should render without error", () => {
    expect(screen).toMatchSnapshot();
  });
  it("should call removeItem", () => {
    const removeItemBtn = screen.getByText(/minimize/i);
    fireEvent.click(removeItemBtn);
    expect(removeItem).toHaveBeenCalledTimes(1);
  });
  it("should call removeItem", () => {
    const addItemBtn = screen.getByText(/add/i);
    fireEvent.click(addItemBtn);
    expect(addItem).toHaveBeenCalledTimes(1);
  });
});
