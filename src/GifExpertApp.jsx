import { useState } from 'react'
import { AddCategory,GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Adventure time']);

  const onAddCategory = (newCategory) =>{
    //hago una copia de categories y añado otra
    // setCategories(['Another day',...categories]);

    //si existe esa categoría en el array no la incluye
    if(categories.includes(newCategory) ) return;
    setCategories([newCategory,...categories]);

  }

  return (
    <>
      
      <h1>GifExpertApp</h1>

      <AddCategory 
        onNewCategory={ (value) => onAddCategory(value)}
      />
      { categories.map( (category) => 
        <GifGrid 
          key={ category } 
          category={ category }/>
      )}
    </>

  )
}
