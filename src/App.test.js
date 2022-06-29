import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  //renderiza um componente que está dentro do parentese
  render(<App />);
  // qual elemento estou procurando?w
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
