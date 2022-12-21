import { render, screen, fireEvent } from "@testing-library/react";
import InputAdornments from "../Search";

const mockedNavigation = jest.fn();
const mockedCurrentLocationValue = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    ...jest.requireActual("react-router-dom"),
    useLocation: () => mockedCurrentLocationValue,
    useNavigate: () => mockedNavigation,
  };
});

test("should render search component", () => {
  const { container } = render(<InputAdornments />);
  expect(container).toBeInTheDocument();
  expect(screen.getAllByRole("radio")[0]).toBeChecked();
  const radioElement = screen.getAllByRole("radio")[1];
  expect(radioElement).not.toBeChecked();
  fireEvent.click(radioElement);
  expect(radioElement).toBeChecked();
  expect(screen.getAllByRole("radio")[0]).not.toBeChecked();

  //handleChangeEvent

  const text_field = screen.getByRole("searchbox", { name: "Search.." });
  fireEvent.change(text_field, { target: { value: "test" } });
  expect(text_field).toHaveValue("test");

  fireEvent.keyPress(text_field, { key: "Enter", code: "Enter", charCode: 13 });
  expect(mockedNavigation).toHaveBeenCalledWith("/search/status/test");
});
