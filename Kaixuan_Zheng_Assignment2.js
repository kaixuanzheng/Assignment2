// Question 1
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];
//1.1 Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
// function doubleValues(arr) {
//   const newArr = arr.map((obj) => ({ ...obj }));
//   newArr.forEach((ele) => {
//     Object.keys(ele).forEach((key) => {
//       ele[key] = ele[key] * 2;
//     });
//   });
//   return newArr;
// }
// function doubleValues(arr) {
//   return arr.map(({ quantity, price }) => {
//     return { quantity: quantity * 2, price: price * 2 };
//   });
// }
function doubleValues(arr) {
  return arr.map((item) => {
    return { quantity: item.quantity * 2, price: item.price * 2 };
  });
}
console.log("Question 1.1");
console.log(doubleValues(itemsObject));

//1.2 Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
const filterItems = (arr) => {
  return arr.filter((ele) => {
    return ele["quantity"] > 2 && ele["price"] > 300;
  });
};
console.log("\nQuestion 1.2");
console.log(filterItems(itemsObject));

//1.3 Given the array, implement a function to calculate the total value of the items.
const totalValue = (array) => {
  return array.reduce((total, item) => {
    return total + item["quantity"] * item["price"];
  }, 0);
};
console.log("\nQuestion 1.3");
console.log(totalValue(itemsObject));

/*
  
  Question 2
  
  Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.
  
  */

const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

const expectedReturnString =
  "perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array";

const formattingStr = (str) => {
  return str
    .trim()
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .join(" ");
};
console.log("\nQuestion 2");
console.log(formattingStr(string));
/*
  Question 3 
  */

const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];
/*
Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second 
has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.
*/
function mergeArrays(arr1, arr2) {
  const newArr = [];
  const ans = [];
  arr1.forEach((obj1) => {
    newArr[obj1["uuid"] - 1] = {
      uuid: obj1["uuid"],
      role: null,
      name: obj1["name"],
    };
  });
  arr2.forEach((obj2) => {
    if (!newArr[obj2["uuid"] - 1]) {
      newArr[obj2["uuid"] - 1] = { ...obj2, name: null };
    } else {
      newArr[obj2["uuid"] - 1]["role"] = obj2["role"];
    }
  });
  newArr.forEach((ele) => {
    ans.push(ele);
  });
  return ans;
}
console.log("\nQuestion 3");
console.log(mergeArrays(first, second));

const expectedReturnArray = [
  { uuid: 1, role: "manager", name: null },
  { uuid: 2, role: "associate", name: "test" },
  { uuid: 3, role: null, name: "test3" },
  { uuid: 4, role: "engineer", name: null },
  { uuid: 5, role: null, name: "test5" },
  { uuid: 6, role: "pm", name: null },
];
