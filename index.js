// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius = radius
    this.pi = Math.PI
  }

  get diameter() {
    return 2 * this.radius
  }

  get circumference() {
    return 2 * this.pi * this.radius
  }

  get area() {
    return this.pi * (this.radius ** 2)
  }

  set diameter(diameter) {
    this.radius = diameter / 2
  }

  set circumference(circumference) {
    this.radius = circumference / (2 * this.pi)
  }

}
