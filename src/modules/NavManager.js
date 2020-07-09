const remoteURL = "http://localhost:5002"

export default {
  getManager(id) {
    return fetch(`${remoteURL}/animals/${id}`).then(result => result.json())
  },
  getManagers() {
    return fetch(`${remoteURL}/animals`).then(result => result.json())
  }
}