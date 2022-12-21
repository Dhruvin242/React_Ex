import { render, screen, fireEvent } from "@testing-library/react";
import LoaderComponent from "../Loader";

test("should render loader Component", async () => {
  const defaultProps = {
    number: 1,
  };

  const { container } = render(<LoaderComponent {...defaultProps} />);
  expect(container).toBeInTheDocument();
});
