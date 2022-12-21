import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { ApolloProvider } from "@apollo/client";
import { apolloclient } from "../../graphql/index";
import Search from "../search";

test("should render Search page", () => {
  const { container } = render(
    <Provider store={store}>
      <ApolloProvider client={apolloclient}>
        <Search />  
      </ApolloProvider>
    </Provider>
  );
  expect(container).toBeInTheDocument();
});
