const apiCalls = {
  getAllMovies() {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movie`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        console.log(response)
        throw `${response.status} ${response.statusText}`
      }
    //  return response.ok ? 
    //   response.json() : 
    //   throw `${response.code} ${response.message}`
    })
    // .then(result => console.log(result))
  
  }
  // checkError(response) {
  //   if (!response.ok) {
  //     throw `${response.code} ${response.message}`
  //   }
  // }
}

export default apiCalls;