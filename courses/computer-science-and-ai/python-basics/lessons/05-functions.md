---
title: 'Functions: reusable pieces'
minutes: 30
quiz:
  - q: What does 'def' do?
    options:
      - Calls a function
      - Defines a function without running it
      - Deletes a function
      - Returns a value
    answer: 1
  - q: 'What is printed? def f(x): return x + 1; print(f(f(1)))'
    options:
      - '1'
      - '2'
      - '3'
      - Error
    answer: 2
    explain: f(1) is 2, then f(2) is 3.
  - q: A variable created inside a function is...
    options:
      - Visible everywhere
      - Local to that function
      - Automatically returned
      - A global constant
    answer: 1
---

A **function** is a named block of code you can run whenever you want. You've been using built-in ones like `print` and `input`. Now you'll write your own.

```
def greet(name):
    print(f"Hello, {name}!")

greet("Ada")
greet("Grace")
```

-   `def` starts a function definition.
-   `greet` is its name.
-   `name` is a **parameter**: a placeholder filled in each time you call it.
-   Defining a function doesn't run it. Calling it (`greet("Ada")`) does.

## Returning values

Most useful functions hand a result back with `return`.

```
def area_of_circle(radius):
    return 3.14159 * radius ** 2

a = area_of_circle(2)
print(a)                    # 12.56636
print(area_of_circle(10))   # 314.159
```

`return` also ends the function immediately. Code after it in the same block never runs.

## Why bother?

1.  **Reuse.** Write the logic once, call it a hundred times.
2.  **Naming.** `is_leap_year(2024)` says what it does. Twelve lines of arithmetic don't.
3.  **Testing.** A small function is easy to check on its own.

## Multiple parameters and defaults

```
def power(base, exponent=2):
    return base ** exponent

print(power(5))       # 25, exponent defaults to 2
print(power(5, 3))    # 125
print(power(exponent=3, base=2))   # 8, named arguments
```

## Scope: variables inside functions stay inside

```
def double(x):
    result = x * 2
    return result

print(double(4))
print(result)   # NameError: result only exists inside double
```

Variables created inside a function are **local**. That's a feature: functions can't accidentally trample each other's data.

## Worked example

```
def is_leap_year(year):
    if year % 400 == 0:
        return True
    if year % 100 == 0:
        return False
    return year % 4 == 0

for y in [1900, 2000, 2023, 2024]:
    print(y, is_leap_year(y))
```

:::exercise Try it
Write a function `celsius_to_fahrenheit(c)` that returns `c * 9 / 5 + 32`. Then write a loop that prints a conversion table from 0 to 40 °C in steps of 5.
:::
