/*arrays - start with 0!!!! */
const a = [1, 2, 3, 4, 5, 6, 7]
console.log(a[4]);

/*push* dodawanie elementu na końcu* -- pop zabiera ostatni element z tablicy
unshift - dodaje element na początku, shift - usuwa element na początku
*/
a.push("A")
a.push([11, 12])

/*overwrite elements*/
a[0] = 99
console.log(a);

/*slice (x,y) - wycinanie elementów od - do i zwracanie tych wyciętych*/
console.log(a.slice(0,1))

/*splice (index, usunąc, nowy el)*/
const b = [12, 45, 67, 90, 56]
b.splice(2, 1, 158)
console.log(b);


/*filter*/

const items = [
    {name: 'Bike', price: 100},
    {name: 'TV', price: 200 },
    {name: 'Album', price: 10 },
    {name: 'Book', price: 5 },
    {name: 'Phone', price: 500 },
    {name: 'Computer', price: 1000 },
    {name: 'Keyboard', price: 25 },
]

const filteredItems = items.filter((item) => {
    return item.price <=100
})

console.log(items);
console.log(filteredItems);

/*map*/

const itemNames = items.map((item) => {
    return item.name   /*price or another */
})
console.log(itemNames);


/*find*/
const foundItem = items.find((item) => {
    return item.name === 'Book'
})
console.log(foundItem);

/*for each*/
items.forEach((item) => {
    console.log(item.name);  /*for any single element ex price*/
})


/*some* or every* - czy jakiś bądź każdy element zgadza się z warunkiem*/
const hasInexpensiveItems = items.some((item) => {
    console.log(item.price);
    return item.price <= 100
})
console.log(hasInexpensiveItems);

/*reduce* - instead of a loop method ex */
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)
console.log(total);

/*include* - sprawdzanie czy tablica zawiera daną wartość*/

const items2 = [1, 2, 3, 4, 5]
const includesTwo = items2.includes(2)
console.log(includesTwo);

/*join łączenie w jeden ciąg*/

console.log(items2.join(" - "));