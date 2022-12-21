import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { ApolloProvider } from "@apollo/client";
import { apolloclient } from "../../graphql/index";
import ProfileCard from "../ProfileCard";

test("should render Profile page", () => {
  const { container } = render(
    <Provider store={store}>
      <ApolloProvider client={apolloclient}>
        <ProfileCard />
      </ApolloProvider>
    </Provider>
  );
  expect(container).toBeInTheDocument();
});
