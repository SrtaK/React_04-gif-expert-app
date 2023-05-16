
import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

//hace un mock completo del path que pasamos por parametro
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
  const category = 'La banda del patio';

  test('Debe mostrar el loading al inicio', () => {

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    })
    render(<GifGrid category={ category }/>);
    // screen.debug();
    expect( screen.getByText('Cargando...'));
    expect( screen.getByText(category));
  });

  test('Debe mostrar items cuando se cargan las imagenes', () => {

    const gifs = [
      {
        id: 'abc',
        title: 'Rusco',
        url: 'http.//prueba.com'
      },
      {
        id: 'red',
        title: 'Boj',
        url: 'http.//test.com'
      },
      {
        id: 'tgv',
        title: 'Ulaga',
        url: 'http.//evaluacion.com'
      },
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    })

    render(<GifGrid category={ category }/>);
    // screen.debug();
    expect( screen.getAllByRole('img').length).toBe(3);

  });
});