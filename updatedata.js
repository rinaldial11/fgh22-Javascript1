let data1 = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    hoby: "skydiving",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}
let data2 = {
    name: "Rinaldi Lengkana",
    email: "rinaldi@mail.com",
    hoby: "mengaji"
}
let data = {...data1, ...data2}
let {address: {street, city}} = data1

console.log (data)
console.log (street, city)