# Raindrops-TechTest

## Task Description

_**Raindrops**_

Write a function that takes as its input a number (n) and converts it to a string,
the contents of which depend on the numbers factors

- if the number has a factor of 3, output 'Pling'
- if the number has a factor of 5, output 'Plang'
- if the number has a factor of 7, output 'Plong'
- if the number does not have any of the above as a factor simply return the numbers digits

Examples:
- 28's factors are 1, 2, 4, 7, 14 and 28: this would be a simple 'Plong'
- 30's factors are 1, 2, 3, 5, 6, 10, 15, 30: this would be a 'PlingPlang'
- 34 has four factors: 1, 2, 17, and 34: this would be '34'

This test can be completed in a language of your choice and should be made available on your github account. You should write tests to cover your expected range of inputs and outputs. Commit often and document well.

## Approach

I chose Javascript language, with Karma and Jasmine for testing.

After I installed karma and jasmine I started creating a test folder and followed the TDD way: first the tests, then the functions and finally the refactor.


## Instructions

Prerequisites: node installed

### Setup

```sh
$ git clone https://github.com/GiadaSimonetti/Raindrops-TechTest
$ cd Raindrops-TechTest
$ npm install
```

### To run it

```sh
$ open index.html
```
- go to the browser
- open the console (cmd + alt + j)
- type `var rd = new Raindrops();`
- type `rd.plingPlangPlong(n);` (where `n` is the argument)

![console](./images/console.png?raw=true)

### To run the tests

```sh
$ karma start
```
![tests](./images/tests.png?raw=true)
