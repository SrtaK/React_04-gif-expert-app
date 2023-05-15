import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GitItem/>', () => {
  const title = 'Cacahuete';
  const url = 'https://cacahuete.com/frutoseco.jpg';

  test('Debe hacer match con el snapshot', () => {
    //para generar el snapshot 
    const {container} = render(<GifItem title={title} url={url}/>);
    expect (container).toMatchSnapshot();
    
  });

  test('Debe mostrar la imagen con el url indicado y el alt indicador', () => {
    render(<GifItem title={title} url={url}/>);
    // screen.debug();
    // expect(screen.getByRole('img').src).toBe(url);

    const { src, alt } =screen.getByRole('img');
    expect( src ).toBe( url );
    expect( alt ).toBe( title );
  });

  test('Debe mostrar el titulo en el componente', () => {
    render(<GifItem title={title} url={url}/>);
    expect(screen.getByText( title )).toBeTruthy();
    
  });
});