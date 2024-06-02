type User = {
  name: string;
  age: number;
};

function findUser(name: string): User;
function findUser(age: number): User[];
function findUser(query: string | number): User | User[] {
  if (typeof query === "string") {
    return { name: query, age: 30 };
  } else {
    return [
      { name: "👩", age: query },
      { name: "👨‍🔧", age: query }
    ];
  }
}

findUser('👩'); // { name: '👩', age: 30 }
findUser(30); // [ { name: '👩', age: 30 }, { name: '👨‍🔧', age: 30 } ]