function area(s: Shape) {
  // ❌ Error: Property 'size' does not exist on type 'Shape'.
  return s.size * s.size;
}