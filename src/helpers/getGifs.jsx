 
 
 export const getGifs = async ( category ) => {
    const Url =
      `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=NQrWF19NTfplO0vdK1ck09RyO79aIF9m`

    // const apiKey = 'NQrWF19NTfplO0vdK1ck09RyO79aIF9m';

    const response = await fetch(Url);
    const { data } = await response.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    return gifs;


  };