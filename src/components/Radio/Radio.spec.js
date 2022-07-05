import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Radio from ".";

describe("<Radio />", () => {
  it("should render the radio", () => {
    const { container } = render(<Radio label="Laranja" />);
    //container renderiza o componente -no caso o Radio-.

    //teste para ver se o label está aparecendo na tela
    const label = screen.getByText(/laranja/i);
    expect(label).toBeInTheDocument();

    //teste para checar alterações nos styles do componentes
    expect(container.firstChild).toMatchSnapshot();
    //o first child é para pegar o primeiro filho do container, já que ele envolve todo o componente
  });

  it("should render with label (white)", () => {
    render(<Radio label="Radio" labelColor="white" />);
    //teste para verificar se o labelColor está passando a cor para o componente da maneira certa

    const label = screen.getByText(/radio/i);

    //verifica se o label tem o estilo, nesse caso a cor ""
    expect(label).toHaveStyle({ color: "white" });
  });

  it("should focus when tabbed", () => {
    render(<Radio label="Radio" labelFor="Radio" value="anyValue" />);
    const radio = screen.getByLabelText(/radio/i);
    expect(document.body).toHaveFocus();
   userEvent.tab();
    expect(radio).toHaveFocus();
  });
});
