import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {

    const [InputValue, setInputValue] = useState( ''); 

    const onImputChange = ( {target} ) => {
        //console.log(target.value);
        setInputValue(target.value);
    };

    const onSubmit = ( event ) => {
        event.preventDefault();
        if(InputValue.trim().length <= 1) return;// pregunta sobre si la cadena esta bacia no retornara nada y sale
        //console.log(InputValue)
        //setCategories( categories => [ InputValue, ...categories]) //para la destructuracion de GifsExper y agregar al array
        setInputValue('');// pongo el stado bacio
        onNewCategory( InputValue.trim());
        
    };

  return (
    <form onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder="Buscar Gifs"
            value={ InputValue }
            onChange={ onImputChange }
        />
    </form>
    
  )
}
