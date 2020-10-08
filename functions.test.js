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
