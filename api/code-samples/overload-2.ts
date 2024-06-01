type P = {
  name: string;
  age: number;
};

// ❌ This overload signature is not compatible with ..
// .. its implementation signature
function findPerson(isOld: boolean): P;
function findPerson(name: string): P;
function findPerson(age: number): P[];
function findPerson(query: string | number): P | P[] {
  if (typeof query === "string") {
    // search by name
    return { name: query, age: 30 };
  } else {
    // search by age
    return [
      { name: "👩", age: query },
      { name: "👨‍🔧", age: query }
    ];
  }
}

findPerson('👩'); // { name: '👩', age: 30 }
findPerson(30); // [ { name: '👩', age: 30 }, { name: '👨‍🔧', age: 30 } ]
findPerson(true); // ❌ Invalid argument type
