---
title: Making decisions
minutes: 25
quiz:
  - q: Which operator tests whether two values are equal?
    options:
      - '='
      - '=='
      - equals
      - '=:'
    answer: 1
  - q: In an if / elif / elif / else chain, how many blocks run?
    options:
      - All whose conditions are true
      - 'Exactly one: the first true condition, or else'
      - The last true one
      - None unless else is present
    answer: 1
  - q: What does 'if not []:' do?
    options:
      - Raises an error
      - Runs its block, because an empty list counts as false
      - Skips its block
      - Only works with numbers
    answer: 1
    explain: Empty collections are falsy, so not [] is True.
---

Programs get interesting when they can choose. Python's `if` statement runs a block of code only when a condition is true.

```
temperature = 31

if temperature > 30:
    print("It's hot.")
elif temperature > 20:
    print("It's warm.")
else:
    print("It's cool.")
```

## Indentation is not decoration

In Python, the indented lines under `if` are the ones it controls. Four spaces is the convention. Get indentation wrong and you get an `IndentationError`, or worse, a program that runs but does the wrong thing.

## Comparison operators

| Operator | Meaning |
| --- | --- |
| `==` | equal to (two signs!) |
| `!=` | not equal to |
| `<` `>` | less than, greater than |
| `<=` `>=` | less/greater than or equal |

:::callout = vs ==
One equals sign assigns. Two equals signs compare. Writing `if x = 5:` is a syntax error; you meant `if x == 5:`.
:::

## Combining conditions

```
age = 25
has_ticket = True

if age >= 18 and has_ticket:
    print("Come in.")
if age < 18 or not has_ticket:
    print("Sorry.")
```

-   `and`: both sides must be true
-   `or`: at least one side must be true
-   `not`: flips true to false and back

## Truthiness

Python treats some values as false without a comparison: `0`, `0.0`, empty string `""`, empty list `[]`, and `None`. Everything else counts as true.

```
name = ""
if not name:
    print("You didn't enter a name.")
```

## Worked example: a simple grader

```
score = int(input("Score out of 100: "))

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

print(f"Grade: {grade}")
```

Notice the order. Python checks the conditions top to bottom and runs only the first one that is true. If you put `score >= 70` first, a 95 would get a C.

:::exercise Try it
Write a program that asks for a number and prints whether it is positive, negative, or zero, and separately whether it is even or odd. (Hint: `n % 2` gives the remainder when dividing by 2.)
:::
