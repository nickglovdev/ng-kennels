const remoteURL = "http://localhost:5002"

export default {
  getLocation(id) {
    return fetch(`${remoteURL}/animals/${id}`).then(result => result.json())
  },
  getAllLocations() {
    return fetch(`${remoteURL}/animals`).then(result => result.json())
  }
}