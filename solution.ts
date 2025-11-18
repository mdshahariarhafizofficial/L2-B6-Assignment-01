function formatValue(value: string | number | boolean) : string | number | boolean {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    if (typeof value === "number") {
        return value*10;
    }
    return !value;
}



function getLength(value: string | any[]) : number {
    if (typeof value === "string") {
        return value.length;
    }
    if (Array.isArray(value)) {
        return value.length;
    }
    return 0;
}



class Person{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    getDetails():string{
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}





interface Item{
    title: string;
    rating: number;
}
function filterByRating(item: Item[]): Item[] {
    return item.filter((item) => item.rating >= 4);
}



interface User{
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}
function filterActiveUsers(users: User[]): User[] {
    return users.filter((user) => user.isActive);
}




interface Book{
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(book: Book): string {
    const availability = book.isAvailable? "Yes" : "No";

    return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
}





function getUniqueValues(arr1: (string | number)[], arr2: (string | number)[]) :  (string | number)[] {
    const result: (string | number)[] = [];

    for(const value of arr1){
        if (!exists(result ,value)) {
            result.push(value)
        }
    }
    for(const value of arr2){
        if (!exists(result ,value)) {
            result.push(value)
        }
    }

    function exists(arr: (string | number)[], value: string | number): boolean {
        for( const element of arr ){
            if (element === value) {
                return true;
            }
        }
        return false;
    }

    return result;
}



interface Product {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
    if (products.length === 0) {
        return 0;
    }

    return products.reduce((total, product) => {
        const baseAmount = product.price*product.quantity;

        if (product.discount) {
            const discountAmount = baseAmount * (product.discount / 100);
            return total + (baseAmount - discountAmount);
        }

        return total + baseAmount;
    }, 0);
}
