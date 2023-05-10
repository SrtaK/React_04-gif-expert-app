
import { useEffect, useState } from 'react';
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
      <ol>
        { images.map( ({id, title}) => (
          <li key={ id }>{ title }</li>
        )) 
        }
      </ol>

    </>
  )
}
