const apiCalls = {
  getData(path) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${path}`)
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