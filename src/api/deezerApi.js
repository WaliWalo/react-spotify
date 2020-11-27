export async function fetchAlbumsBySearch(query) {
  try {
    const response = await fetch(
      `https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "db388dbec5mshc59db4d245728fep1c2998jsna21051d70dc4",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }
    );
    if (response.ok) {
      const albums = await response.json();
      return albums;
    } else {
      const error = await response.json();
      return error;
    }
  } catch (error) {
    return error;
  }
}

export async function fetchAlbumById(id) {
  try {
    const response = await fetch(
      `https://deezerdevs-deezer.p.rapidapi.com/album/${id}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "db388dbec5mshc59db4d245728fep1c2998jsna21051d70dc4",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }
    );
    if (response.ok) {
      const albums = await response.json();
      return albums;
    } else {
      const error = await response.json();
      return error;
    }
  } catch (error) {
    return error;
  }
}

export async function fetchArtistById(id) {
  try {
    const response = await fetch(
      `https://deezerdevs-deezer.p.rapidapi.com/artist/${id}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "db388dbec5mshc59db4d245728fep1c2998jsna21051d70dc4",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }
    );
    if (response.ok) {
      const artist = await response.json();
      return artist;
    } else {
      const error = await response.json();
      return error;
    }
  } catch (error) {
    return error;
  }
}

//fetch array of songs for home page ex: [eminem, madonna, taylor swift]
export async function fetchAlbumsByArray(array) {
  try {
    const albumsPromises = array.map(async (arrayName) =>
      fetchAlbumsBySearch(arrayName)
    );
    const response = await Promise.all(albumsPromises);
    return response;
  } catch (error) {
    return error;
  }
}
