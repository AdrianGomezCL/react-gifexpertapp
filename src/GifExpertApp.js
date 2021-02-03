import React, { useState } from 'react'

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // Definicion del arreglo Categorias, con un estado para
    const [categories,setCategories] = useState(['Game of Thrones']);

    // Evento onclic de boton Agregar
    // const handleAdd = () => {

    //     // Agrega adelante del arreglo categories el valor
    //     setCategories( ['Hunter X hunter', ...categories])
    // }

    return (
        <>
            <h2>Gif Expert App</h2>

            <AddCategory setCategories={ setCategories }/>

            <hr/>

            <ol>
                {
                    categories.map( (category, index) => (
                        <GifGrid
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
            
        </>
    )
}
