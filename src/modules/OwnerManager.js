const remoteURL = "http://localhost:5002"

export default {
  getOwner(id) {
    return fetch(`${remoteURL}/owners/${id}`)
    .then(result => result.json())
  },
  getAllOwners() {
    return fetch(`${remoteURL}/owners`)
    .then(result => result.json())
  },
  deleteSingleOwner(id) {
    return fetch(`${remoteURL}/owners/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  },
  postOwner(newOwner) {
    return fetch(`${remoteURL}/owners`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newOwner)
    }).then(data => data.json())
  },
  updateOwner(editedLocation) {
    return fetch(`${remoteURL}/owners/${editedLocation.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedLocation)
    }).then(data => data.json());
  }
}
