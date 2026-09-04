---
title: Your first program
minutes: 20
quiz:
  - q: What does print("3" + "4") output?
    options:
      - '7'
      - '34'
      - An error
      - 3 + 4
    answer: 1
    explain: Both values are strings, so + joins them into the text 34.
  - q: 'What is the purpose of a comment (text after #)?'
    options:
      - It runs faster
      - It is ignored by Python and is a note for people
      - It prints to the screen
      - It marks the end of the program
    answer: 1
  - q: Which line prints the number 8?
    options:
      - print(2 ** 3)
      - print("2 ** 3")
      - print 2 ** 3
      - print(2 ^ 3)
    answer: 0
    explain: >-
      ** is exponent. The second is a string, the third is missing parentheses, and ^ is not
      exponent in Python.
---

A program is a list of instructions that a computer follows exactly, in order. Python is a language for writing those instructions in a way that reads almost like English.

## Getting Python

You have two easy options:

-   **In the browser:** open a free online Python editor such as the one at python.org (click "Launch Shell") or any site that runs Python online. Nothing to install.
-   **On your computer:** download Python from python.org, install it, then open a terminal and type `python3`.

## Hello, world

Tradition says the first program prints a greeting. Type this and run it:

```
print("Hello, world!")
```

You should see `Hello, world!` appear. Let's take that apart:

-   `print` is a **function**: a named piece of behaviour that Python already knows.
-   The parentheses `( )` mean "run this function", and whatever is inside is what you hand to it.
-   `"Hello, world!"` is a **string**: a piece of text. Strings always sit inside quotes.

:::callout Computers are literal
Miss a quote or a parenthesis and Python will refuse to run and show an error. That's normal. Errors are how Python tells you exactly what it didn't understand. Read them; they usually point at the problem line.
:::

## Doing arithmetic

Python is also a calculator:

```
print(2 + 3)
print(10 - 4)
print(6 * 7)
print(20 / 4)
print(2 ** 10)   # ** means "to the power of"
```

Anything after a `#` is a **comment**. Python ignores it. Comments are notes for humans.

## Strings and numbers are different

```
print(2 + 3)      # 5
print("2" + "3")  # 23
```

With numbers, `+` adds. With strings, `+` glues them together. Same symbol, different meaning depending on the **type** of the values. Keeping track of types is one of the first habits to build.

:::exercise Try it
Write a program that prints your name on one line and the number of days in a year on the next. Then print `365 * 24` to find the hours in a year.
:::
