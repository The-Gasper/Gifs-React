import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [Categories, setCategories] = useState( [ ]);

    const onAddCategory = (newCategory) =>{
        
        if ( Categories.includes( newCategory) ) return;
        //categories.push(newCategory); //el push se utiliza para agregar datos a arreglos
       // console.log('Valorant'); // para provar al momento de ralizar un evento clicl
       //Categories.push( 'Valorant' ); //el push se utiliza para agregar datos a arreglos pero no se ocupa aqi
       //----------Dos maneras para agregar al estado
        setCategories( [ newCategory , ...Categories]) // 1.
       //setCategories ( cat =>[ ...cat, 'Valorant' ]); // 2.

    }

    //console.log(Categories);

  return (
    <>
        {/*  titulo  */}

        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory //setCategories= {setCategories}
            onNewCategory = {(value )=> onAddCategory(value)}
        /> 
          {
            Categories.map( category => (
                      <GifGrid 
                        key={ category } 
                        category={ category }
                      />
            )   )
          }
    </>
    
  )
}
