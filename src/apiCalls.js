const apiCalls = {
  getData(path) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${path}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        if(response.status < 500) {
          throw `We're sorry, something went wrong. Either the page doesn't exist, or could not be found.`
        } else {
        throw `We're sorry, something went wrong with the server. Please try again later.`
        }
      }
    })
  }
};

export default apiCalls;