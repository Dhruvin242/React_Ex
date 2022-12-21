import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { ApolloProvider } from "@apollo/client";
import { apolloclient } from "../../../app/graphql/index";
import Home from "../home";

test("should render home page", () => {
  const { container } = render(
    <Provider store={store}>
      <ApolloProvider client={apolloclient}>
        <Home />
      </ApolloProvider>
    </Provider>
  );
  expect(container).toBeInTheDocument();
  expect(screen.getAllByRole("button")[0]).toBeDisabled();
  console.log(screen.queryAllByRole("button"));
  //   fireEvent.click(screen.getByLabelText("Go to next page"));
  //   expect(screen.getAllByRole("button")[2]).toBeEnabled();
});
