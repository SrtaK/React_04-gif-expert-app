import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

  test('Se debe poder cambiar el valor de la caja de texto', () => {
    //creo el sujeto de pruebas
    render(<AddCategory onNewCategory= { ()=>{} } />);
    //capturo el input textbox
    const input = screen.getByRole('textbox');
    //disparo un evento
    fireEvent.input( input, { target: {value: 'Unicornio'} } );
    //hacemos la aserción de lo que esperamos recibir
    expect(input.value).toBe('Unicornio');    
  });

  test('Debe de llamar onNewCategory si el input tiene un valor', () => {

    const inputValue = 'Risketo';
    const onNewCategory = jest.fn(); //jest function para usar tohavebeencalled

    render(<AddCategory onNewCategory= { onNewCategory } />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    //disparo evento input
    fireEvent.input( input, { target: {value: inputValue} } );
    //disparo evento submit
    fireEvent.submit(form);
    
    expect(input.value).toBe('');
    expect( onNewCategory ).toHaveBeenCalled(); //eveluo que llamamos a la funcion onNewCategory= { ()=>{} }
    expect( onNewCategory ).toHaveBeenCalledTimes(1); //espero que se llame a la funcion 1 vez
    expect( onNewCategory ).toHaveBeenCalledWith( inputValue ); //evaluo si ha sido llamada con el valor de la caja de texto
  });

  test('No debe llamar onNiwCategory si input esta vacío', () => {
    
    const onNewCategory = jest.fn(); 
    render(<AddCategory onNewCategory= { onNewCategory } />);

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect( onNewCategory ).toHaveBeenCalledTimes(0); 
    expect( onNewCategory ).not.toHaveBeenCalled();  //.not. para negar toHaveBeenCalled();
  });
});