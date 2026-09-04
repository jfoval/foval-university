---
title: Variables and types
minutes: 25
quiz:
  - q: After running x = 5 then x += 3, what is x?
    options:
      - '5'
      - '3'
      - '8'
      - '53'
    answer: 2
  - q: What type does input() return?
    options:
      - int
      - float
      - str
      - Whatever the user typed
    answer: 2
    explain: input() always returns a string. Convert it yourself if you need a number.
  - q: Which is a valid variable name?
    options:
      - 2nd_place
      - my-score
      - total_score
      - class name
    answer: 2
    explain: Names cannot start with a digit, and cannot contain hyphens or spaces.
---

A **variable** is a name attached to a value so you can use it later. Think of it as a labelled box.

```
name = "Ada"
age = 36
height_m = 1.7
is_student = True

print(name)
print(age + 1)
```

The `=` sign does not mean "equals" in the maths sense. It means **assign**: put the value on the right into the name on the left.

## The four basic types

| Type | Example | Used for |
| --- | --- | --- |
| `str` | `"hello"` | Text |
| `int` | `42` | Whole numbers |
| `float` | `3.14` | Decimal numbers |
| `bool` | `True` / `False` | Yes/no answers |

You can ask Python what type something is with `type(x)`.

## Naming rules

-   Letters, digits, and underscores only. Must not start with a digit.
-   Case matters: `Age` and `age` are different variables.
-   Use descriptive names: `total_price` beats `tp`.

## Changing a variable

```
count = 0
count = count + 1   # now 1
count += 1          # shorthand, now 2
```

Read `count = count + 1` from right to left: work out `count + 1`, then store the result back in `count`.

## Converting between types

```
age_text = "36"
age = int(age_text)        # "36" -> 36
price = float("9.99")      # -> 9.99
label = str(42)            # 42 -> "42"

print("Next year you'll be " + str(age + 1))
```

Mixing a string and a number with `+` is an error. Convert first.

## f-strings: the friendly way to build text

```
print(f"{name} is {age} years old and {height_m} m tall.")
```

Put an `f` before the opening quote and any expression inside `{ }` gets filled in. You'll use this constantly.

## Getting input

```
name = input("What is your name? ")
print(f"Nice to meet you, {name}!")
```

`input` always gives you a string, even if the user types a number. Convert with `int()` or `float()` when you need arithmetic.

:::exercise Try it
Ask the user for their birth year, convert it to an integer, and print how old they will turn this year.
:::
