import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import AddRemoveBtns from "..";

const addItem = jest.fn();
const removeItem = jest.fn();
describe("AddRemoveBtns", () => {
  afterEach(() => {
    cleanup();
  });
  it("should render without error", () => {
    const container = render(
      <AddRemoveBtns quantity={0} addItem={addItem} removeItem={removeItem} />
    );
    expect(container).toMatchSnapshot();
  });
  it("should call removeItem", () => {
    const { getByText } = render(
      <AddRemoveBtns quantity={0} addItem={addItem} removeItem={removeItem} />
    );
    const removeItemBtn = getByText(/minimize/i);
    fireEvent.click(removeItemBtn);
    expect(removeItem).toHaveBeenCalledTimes(1);
  });
  it("should call removeItem", () => {
    const { getByText } = render(
      <AddRemoveBtns quantity={0} addItem={addItem} removeItem={removeItem} />
    );
    const addItemBtn = getByText(/add/i);
    fireEvent.click(addItemBtn);
    expect(addItem).toHaveBeenCalledTimes(1);
  });
});
