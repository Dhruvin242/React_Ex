import { render, screen, fireEvent } from "@testing-library/react";
import CardComponent from "../Card";

const mockedNavigation = jest.fn();
const mockedCurrentLocationValue = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    ...jest.requireActual("react-router-dom"),
    useLocation: () => mockedCurrentLocationValue,
    useNavigate: () => mockedNavigation,
  };
});

test("should render loader Component", async () => {
  const defaultProps = {
    id: 1,
    name: "",
    image: "",
    status: "",
  };

  const { container } = render(
    <CardComponent
      id={defaultProps?.id}
      name={defaultProps?.name}
      image={defaultProps?.image}
      status={defaultProps?.status}
    />
  );
  expect(container).toBeInTheDocument();
  fireEvent.click(screen.getByLabelText("card-element"));
  expect(mockedNavigation).toHaveBeenCalledWith(
    `/profile/${defaultProps.id}-${defaultProps.name
      .toLowerCase()
      .split(" ")
      .join("-")}`
  );
});
