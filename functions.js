const axios = require("axios");

const functions = {
    add: (num1,num2) => {
            return num1 + num2;
        },
    isNull: () => {
        return null;//
    },
    checkValue: (x) => {
        return x;
    },
    creatUser: () => {
        const user = {
            firstName: 'Javi',
        }
        user['lastName'] = 'Zapien'
        return user;
    },
    fetchUser: () => {
      return axios.get('https://jsonplaceholder.typicode.com/users/1')
            .then(res => res.data)
            .catch(err => 'error')
    }

    
}

//functions.fetchUser()

module.exports = functions;