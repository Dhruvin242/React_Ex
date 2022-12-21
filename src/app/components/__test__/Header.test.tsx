import { render, screen, fireEvent } from "@testing-library/react";
import HeaderComponent from "../Header";

const mockedNavigation = jest.fn();
const mockedCurrentLocationValue = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    ...jest.requireActual("react-router-dom"),
    useLocation: () => mockedCurrentLocationValue,
    useNavigate: () => mockedNavigation,
  };
});

test("should render headercomponent", async () => {
  render(<HeaderComponent />);
  const HeaderCom = screen.getByTestId("header-component");
  expect(HeaderCom).toBeInTheDocument();
  expect(HeaderCom).toHaveTextContent("Characters Application");
  fireEvent.click(screen.getByLabelText("menu"));
  expect(mockedNavigation).toHaveBeenCalledWith("/");
});
