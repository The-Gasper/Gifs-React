
export const getGifs = async(category) => {

    const api_key = 'EF58kIJJhOnxB32if16IB2ybies3DFL5';
    const limint= 20;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=${limint}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}