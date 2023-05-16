import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => {
  test('Se debe poder añadir una nueva categoria', () => {
    render(<GifExpertApp />);
    // screen.debug();
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    fireEvent.input( input, { target: {value: 'test'} } );
    fireEvent.submit(form);

    //hay que probar la funcion onaddcategory
    //escribir el input
    //postear el formulario 
    //
  });
});