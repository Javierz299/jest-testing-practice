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
}

module.exports = functions;