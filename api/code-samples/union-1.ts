interface Square {
  type: "square";
  size: number;
}

interface Rectangle {
  type: "rectangle";
  width: number;
  height: number;
}

type Shape = Square | Rectangle;

function area(s: Shape) {
  if (s.type === "square") {
    // Now TS knows that `s` must be a square
    // So you can use size safely
    return s.size * s.size;
  } else {
    // Wasn't a square?
    // So TS will figure out that it must be a Rectangle
    // So you can use height safely
    return s.width * s.height;
  }
}
