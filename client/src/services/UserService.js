const baseURL = 'http://localhost:9000/api/users';

const UserService = {

    // Adding a user to the database
    addUser(user) {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json());
},

//    get single user from d
getSingleUser(id) {
    return fetch(baseURL + "/" + id)
    .then(res => res.json());
},

// Updating a user
updateUser(user) {
    return fetch(baseURL + "/" + user._id, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json());
},

}

export default UserService;