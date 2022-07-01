

export const GifItem = ( { title , url, id} ) => {

  return (
    <div className="card">
    <h1>girf</h1>
        <img src={url} alt={title}/>
        <p>{title}</p>
    </div>
  )
}
