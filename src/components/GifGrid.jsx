
import { useEffect, useState } from 'react';

import { GifItem } from './GifItem';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {
  //en un funcional component como este NO tendríamos que colocar funciones
  //porque cada vez que se realiza un cambio, se lee de nuevo y se llama a la función
  //no queremos volver a hacer una petición de fetch

  const [images, setImages] = useState([]);

  const getImages = async() => {
    const newImages = await getGifs( category );
    setImages(newImages)
  }
  
  useEffect(()=> {
    getImages();
  }, [])


  return (
    <>
      <h3>{category}</h3>
      <div className='card-grid'>
        { images.map( ( image ) => (
          <GifItem 
                    key = { image.id }
                    // Se pueden pasar las properties de la imagen de esta manera
                    { ...image }/>
        )) 
        }
      </div>

    </>
  )
}
