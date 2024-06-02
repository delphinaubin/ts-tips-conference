type User = {
  name: string;
  age: number;
};

// ❌ This overload signature is not compatible with ..
// .. its implementation signature
function findUser(isOld: boolean): User;
function findUser(name: string): User;
function findUser(age: number): User[];
function findUser(query: string | number): User | User[] {
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

findUser('👩'); // { name: '👩', age: 30 }
findUser(30); // [ { name: '👩', age: 30 }, { name: '👨‍🔧', age: 30 } ]
findUser(true); // ❌ Invalid argument type
