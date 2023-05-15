import PropTypes from 'prop-types';
import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

  const [ inputValue, setInputValue ] = useState('');

  const handleInputChange = ({target}) => {
    setInputValue( target.value );
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <= 1) return

    // handleCategories( (categories) => [ inputValue, ...categories ] );
    onNewCategory(inputValue.trim())
    setInputValue( '' );
  }

  return (
    <form onSubmit={ (event) => handleSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        // onChange={ (event) => handleInputChange(event) }
        onChange={ handleInputChange }
      ></input>
    </form>
  )
}


AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}