# JS 2D Vector Library

This is a simple library that allows you to quickly implement vectors into your project. 

## Getting Started

These instructions will get you a copy of the module up and running on your local machine for development and testing purposes. 

## Installing

To install this module, drop and include the following files into your project: 
1. vec2d.js


## Functions 
### Name: Vector
##### Description

Creates a new 2D vector 

##### Usage
> Vector(x, y)

##### Parameters

1. x - A number 

2. y - A number

##### Value
vector object - containing two properties .x and .y and many different methods

##### Example
```
let v0 = Vector(1.0, 1.0);
let v1 = Vector(0.5, 0.25);

v0.add(v1);

print(v0.x, v0.y);

1.5, 1.25

```

## Technologies

* Javascript

## Authors

* **Allan Parker** - *Initial work* - [AllPark](https://github.com/allpark)
* **Daniel Shiffman / The Coding Train** - *Tutorials and guidance* - [TheCodingTrain](https://github.com/CodingTrain)


