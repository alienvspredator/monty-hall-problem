# Monty Hall Problem

## Description

### What is Monty Hall Problem

> The Monty Hall problem is a brain teaser, in the form of a probability puzzle, loosely based on the American television game show Let's Make a Deal and named after its original host, Monty Hall. The problem was originally posed (and solved) in a letter by Steve Selvin to the American Statistician in 1975 (Selvin 1975a), (Selvin 1975b). It became famous as a question from a reader's letter quoted in Marilyn vos Savant's "Ask Marilyn" column in Parade magazine in 1990 (vos Savant 1990a):
>
> > Suppose you're on a game show, and you're given the choice of three doors: Behind one door is a car; behind the others, goats. You pick a door, say No. 1, and the host, who knows what's behind the doors, opens another door, say No. 3, which has a goat. He then says to you, "Do you want to pick door No. 2?" Is it to your advantage to switch your choice?
>
> _— [Wikipedia](https://en.wikipedia.org/wiki/Monty_Hall_problem)_

### This solution

This application provides practical proof of the Monty Hall problem.

## Usage

### Requires

Latest LTS NodeJS version. [Offical site](https://nodejs.org/).

### Install this package

1. Clone this repository:

   ```shell
   $ git clone https://github.com/alienvspredator/monty-hall-problem.git
   Clones this repository
   ```

2. Install node required packages:

   ```shell
   $ npm install --only=prod
   Installs required node packages
   ```

3. Run npm `start` script:

   ```shell
   $ npm start
   Games statistic:
   Tactic: Not-switch
   Iterations: 1000000
   Number of wins: 333850 (33.385%)
   Number of failures: 666150 (66.615%)
   ```

## Todo

1. Write unit tests.
2. Create player bot.

## Author

[Danylo Shevchenko](https://github.com/alienvspredator)
