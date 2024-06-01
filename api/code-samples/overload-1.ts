type P = {
  name: string;
  age: number;
};

function findPerson(name: string): P;
function findPerson(age: number): P[];
function findPerson(query: string | number): P | P[] {
  if (typeof query === "string") {
    return { name: query, age: 30 };
  } else {
    return [
      { name: "👩", age: query },
      { name: "👨‍🔧", age: query }
    ];
  }
}

findPerson('👩'); // { name: '👩', age: 30 }
findPerson(30); // [ { name: '👩', age: 30 }, { name: '👨‍🔧', age: 30 } ]