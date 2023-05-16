import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {
  
  test('Debe regresar el estado inicial', () => {
    //Los hooks necesitan aprovecharse del ciclo de vida de react, asi renderizo el hook
    const {result} = renderHook( () => useFetchGifs('Algarrobo') );
    const {images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('Debe regresar un array de imagenes + isLoading = false', async() => {
    const {result} = renderHook( () => useFetchGifs('Algarrobo') );
    
    //para usar aqui await declaro la funcion callback de test async
    await waitFor(
      ()=> expect(result.current.images.length).toBeGreaterThan(0),       //espera hasta que el lenght sea > 0
    ); 

    const {images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
  
});