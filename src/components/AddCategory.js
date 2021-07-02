import React, { useState } from 'react';

const AddCategory = ({setCategories, Categories}) => {
    const [InputValue, setInputValue] = useState('');

    const handleInput = (e)=>{
        setInputValue (e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if (InputValue !== '') {
            setCategories([InputValue, ...Categories])
            setInputValue('')
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="categoria">Ingrese Su Categoria</label>
            <input 
                type="text" 
                placeholder="Categoria" 
                id="categoria"
                value={InputValue}
                onChange={handleInput}
            />
        </form>
    );
}

export default AddCategory;

