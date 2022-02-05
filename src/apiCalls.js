const apiCalls = {
  getAllMovies() {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        console.log(response)
        throw `${response.status} ${response.statusText}`
      }
    })
  }
}

export default apiCalls;