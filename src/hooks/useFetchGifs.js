import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {
  
    const [imagen, setImagen] = useState([]); 

    const [isLoading, setLoading] = useState( true );

    const getImages = async () => {
        const newImages = await getGifs (category);
        setImagen (newImages);
        setLoading ( false);
    };

    useEffect( ()=>{
       // getGifs(category)
        //.then( newImages => setImagen(newImages))
        getImages();
    }, [] );

   // getGifs(category);

    return {
        imagen,
        isLoading
    }
}
