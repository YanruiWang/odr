import React from "react";

const fetchUser = () => {
    return fetch("https://randomuser.me/api/?results=50")
    .then(response =>  
        response.json() 
    )
    .then((response) => {
        let users = response.results
        return users.map((singleUser) => {
            return {
                first: singleUser.name.first,
                last: singleUser.name.last,
                name: singleUser.name.first + " " + singleUser.name.last,
                phone: singleUser.phone,
            }
        })
    })
}

export default fetchUser;