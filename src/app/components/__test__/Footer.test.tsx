import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import FooterComponent from "../Footer";

test("should render footer component", () => {
  const { container } = render(
    <Provider store={store}>
      <FooterComponent />
    </Provider>
  );
  expect(container).toBeInTheDocument();
});
