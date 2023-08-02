"use strict";

class Figure3D {
  #name;
  /**
   *
   * @param {string} name
   * @returns {error}
   */
  constructor(name) {
    if (this.constructor === Figure3D) {
      throw new Error("cannot instantiate abstract class Figure3D");
    }
    this.name = name;
  }
  set name(name) {
    if (typeof name !== "string" || name.trim() === "") {
      throw new TypeError("name must be a string");
    }
    this.#name = name;
  }
  get name() {
    return this.#name;
  }
  getVolume() {}
}

//Формула: V = ⁴/₃πr³
class Sphere extends Figure3D {
  #radius;
  /**
   *
   * @param {number} radius
   * @returns {error}
   */
  constructor(radius) {
    super("Sphere");
    this.radius = radius;
  }
  set radius(radius) {
    if (typeof radius !== "number") {
      throw new TypeError("radius must be a number");
    }
    if (radius <= 0) {
      throw new RangeError("radius must be a positive");
    }
    this.#radius = radius;
  }
  get radius() {
    return this.#radius;
  }
  getVolume() {
    return (4 / 3) * Math.PI * Math.pow(this.#radius, 3);
  }
}

//Формула: V = a³
class Cube extends Figure3D {
  #lengthOfEdge;
  /**
   *
   * @param {number} lengthOfEdge
   * @returns {error}
   */
  constructor(lengthOfEdge) {
    super("Cube");
    this.lengthOfEdge = lengthOfEdge;
  }
  set lengthOfEdge(lengthOfEdge) {
    if (typeof lengthOfEdge !== "number") {
      throw new TypeError("cube edge length must be a number");
    }
    if (lengthOfEdge <= 0) {
      throw new RangeError("lengthOfEdge must be a positive");
    }
    this.#lengthOfEdge = lengthOfEdge;
  }
  get lengthOfEdge() {
    return this.#lengthOfEdge;
  }
  getVolume() {
    return Math.pow(this.#lengthOfEdge, 3);
  }
}

//Формула: V = π·r²·h
class Cylinder extends Figure3D {
  #radius;
  #height;
  /**
   *
   * @param {number} radius
   * @param {number} height
   * @returns {error}
   */
  constructor(radius, height) {
    super("Cylinder");
    this.radius = radius;
    this.height = height;
  }
  set radius(radius) {
    if (typeof radius !== "number") {
      throw new TypeError("radius must be a number");
    }
    if (radius <= 0) {
      throw new RangeError("radius must be a positive");
    }
    this.#radius = radius;
  }
  get radius() {
    return this.#radius;
  }
  set height(height) {
    if (typeof height !== "number") {
      throw new TypeError("height must be a number");
    }
    if (height <= 0) {
      throw new RangeError("height must be a positive");
    }
    this.#height = height;
  }
  get height() {
    return this.#height;
  }
  getVolume() {
    return Math.PI * Math.pow(this.#radius, 2) * this.#height;
  }
}
function getVolume3DFigure(figure) {
  if (figure instanceof Figure3D) {
    return figure.getVolume();
  }
  throw new Error("the figure must be an instance of the Figeure3D class");
}

try {
  const figureSphere = new Sphere(8);
  console.log(getVolume3DFigure(figureSphere)); // 2144.660584850632
  console.log(figureSphere.getVolume()); //2144.660584850632

  const figureCube = new Cube(7);
  console.log(getVolume3DFigure(figureCube)); // 343

  const figureCylinder = new Cylinder(3, 9);
  console.log(getVolume3DFigure(figureCylinder)); // 254.46900494077323
} catch (error) {
  console.log(error);
}
