
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

    const {imagen, isLoading} = useFetchGifs( category );

    console.log({ isLoading})

   

  return (
    <>
    <h3> { category}</h3>
    {
        isLoading && ( <h2> Cargando...</h2> )
    }
    
    <div className="card-grid">
            {
                imagen.map ( (image) => (
                <GifItem 
                key={ image.id }
                // title={ image.title }
                // url={ image.url }
                { ...image }
                />
                ))
            }
    </div>
    </>
  )
}
