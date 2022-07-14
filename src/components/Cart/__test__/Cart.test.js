import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Cart from "..";

jest.mock("../../Header", () => "header");

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: () => ({
    items: [
      {
        imgUrl: "www.url.com",
        price: 400,
        quantity: 1,
      },
    ],
  }),
}));

describe("Cart", () => {
  it("should render without error", () => {
    render(<Cart />);
    expect(screen.getByText(/1/)).toBeInTheDocument();
    expect(screen).toMatchSnapshot();
  });
});
