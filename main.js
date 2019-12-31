// 1. Problem :
// Parametre olarak bir array alacak.
// Array içerisinde string veya number tipi elemanlar olabilir.
// Bu array içerisinde tekrarlanan elemanlardan olusan yeni bir array'i console'a
// yazdıran fonksiyonu yazmak.

// Örneğin :
// console.log(func_name ([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6])); ---> [4, 7]
// olacak şekilde.


let duplicatedArray = [1, 'iphone', 2, -2, 4, 'smart', 5, 4, 8, 7, 7, 'smartphone', 'iphone', 71, 3, 6];

let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)

console.log(findDuplicates(duplicatedArray));


// 2. Problem :
// Parametre olarak bir Array ve bir de string/number değer alacak.
// Verilen değeri Array'den çıkararak Array'in son halini console'a yazdıran bir
// fonksiyonu yazmak.

// Örneğin :
// console.log(func_name ([2, 5, 9, 6], 5)); ---> [2, 9, 6] olacak şekilde.

let items = [2, 5, 9, 6, 'germany'];
let valueToRemove = 'germany'
let filteredItems = items.filter(item => item !== valueToRemove)
console.log(filteredItems)

// ----------------Deleting Multiple Items

let myNumbers = [2, 5, 9, 6];
let moreToRemove = [5, 9];
let removedItems = myNumbers.filter(item => !moreToRemove.includes(item));
console.log(removedItems)

// 3. Problem:
//     Parametre olarak bir Array ve bir de rakam değeri alacak.
// Array elemanlarını büyükten küçüğe sıralayarak, parametre olarak girilen
// n.büyük değeri console 'a yazdıracak fonksiyonu yazmak.

// Örneğin:
//     console.log(func_name([43, 56, 23, 89, 88, 90, 99, 652], 4));
// -- -- > 89
// verilen array 'deki 4. büyük elemanı console'
// a yazdıracak



let numbers = [43, 56, 23, 89, 88, 90, 99, 652];

let sortedNumbers = (item, num) =>
    numbers.sort((a, b) => b - a)[num - 1]; {

}
console.log(sortedNumbers(numbers, [4]));






// 4. Problem:
//     Parametre olarak iki adet number tipi değer alacak.
// Birinci değer başlangıç noktası;
// ikinci değer ise üretilecek rakam adedi
// uzunluğu olacak.
// Başlangıç numarası dahil olmak üzere ikinci parametre uzunluğunca birer
// artırarak yeni bir array oluşturacak fonksiyonu yazmak.

// Örneğin:
//     console.log(func_name(-6, 4));
// -- - > [-6, -5, -4, -3] olacak şekilde.


let range = (from, times) => {
    let newArray = [];
    for (let i = 0; i < times; i++) {
        newArray[i] = from++;
    }
    return newArray;
}
console.log(range(-6, 4));