
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {
  //en un funcional component como este no tendríamos que colocar funciones
  //porque cada vez que se realiza un cambio, se lee de nuevo y se llama a la función
  //no queremos volver a hacer una petición de fetch
  getGifs(category);

  return (
    <>
      <h3>{category}</h3>

    </>
  )
}
