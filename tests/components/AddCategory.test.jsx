import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
  
  test('Debe cambiar el valor de la caja de texto', () => {
    //creo el sujeto de pruebas
    render(<AddCategory onNewCategory= { ()=>{} } />);
    //capturo el input textbox
    const input = screen.getByRole('textbox');
    //disparo un evento
    fireEvent.input( input, { target: {value: 'Unicornio'} } );
    //hacemos la aserción de lo que esperamos recibir
    expect(input.value).toBe('Unicornio');    
  });
});