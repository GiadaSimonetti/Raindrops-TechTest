# Raindrops-TechTest

```
Tech Test

Raindrops:
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
```

## Approach

After I installed karma e jasmine I started creating a test folder and follow the TDD way: first the tests, then the functions and finally the refactor.


## Instructions

Prerequisites
node installed

- to run app

```sh
$ git clone https://github.com/GiadaSimonetti/Raindrops-TechTest
$ cd Raindrops-TechTest
$ npm install
$ open index.html
 go to the browser and open the console (alt+cmd+j or right click and inspect)
 type var raindrops = new Raindrops();
      rd.plingPlangPlong(3);

```

![console](./images/console.png?raw=true)

- to run the tests:

```sh
$ karma start
```
![tests](./images/tests.png?raw=true)
