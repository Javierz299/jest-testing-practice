const functions = require('./functions')


test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4)
});

// test('ad 2 + 2 not equal to 5', () => {
//     expect(functions.add(2,3)).toBe(4)
// })

//CHECK for truthy & falsy values
//toBeNull matches only null
//toBeUndefined matches only undefined
//toBeDefined is the opposite of toBeUndefined
//toBeTruthy matches anything that an if statement treats as true
//toBeFalsy matches anything that an if statment treats as false

//toBe more for primitive types

test('should be null', () => {
    expect(functions.isNull()).toBeNull()
});
 
test('should be falsy', () => {
    //null - 0 - undefined return falsy
    expect(functions.checkValue(undefined)).toBeFalsy()
});

//toEqual - objects and arrays
//If it should pass with deep equality, 
//replace with "toStrictEqual"
test('user should be Javi Zapien Object', () => {
    //null - 0 - undefined return falsy
    expect(functions.creatUser()).toEqual({
        firstName: 'Javi',
        lastName: 'Zapien'
    });
});


test('should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600)
});

test('There is no I in team', () => {
    //expect('team').toMatch(/I/)
    //checking for Capital I
    //*  case - /I/i
    expect('team').not.toMatch(/I/)
});

// toContain for arrays

test('Admin should be in usernames',() => {
    const usernames = ['john','karen','admin'];
    expect(usernames).toContain('admin')
});

////////Async Data////////////

// test('user fetched name should be Leanne Graham',() => {
//     expect.assertions(1)
//     return functions.fetchUser().then(data => {
//         expect(data.name).toEqual("Leanne Graham")
//     });    
// });

test('user fetched name should be Leanne Graham', async () => {
    expect.assertions(1)
    const data = await functions.fetchUser();
    expect(data.name).toEqual("Leanne Graham")
    
});
/////////////////////////////