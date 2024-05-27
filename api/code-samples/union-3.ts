function area(s: Shape) {
  if (s.kind === "square") {
      // Now TS knows that `s` must be a square
      // So you can use size safely
      return s.size * s.size;
  }
  else {
      // Wasn't a square? 
      // So TS will figure out that it must be a Rectangle
      // So you can use height safely
      return s.width * s.height;
  }
}