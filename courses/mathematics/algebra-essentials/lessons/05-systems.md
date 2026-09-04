---
title: Two unknowns at once
minutes: 30
quiz:
  - q: Solve y = x + 4 and 2x + y = 13.
    options:
      - x = 3, y = 7
      - x = 4, y = 8
      - x = 5, y = 9
      - x = 2, y = 6
    answer: 0
  - q: Adding 4x + y = 14 and 2x − y = 4 gives...
    options:
      - 6x = 18
      - 2x = 10
      - 6x + 2y = 18
      - 2x = 18
    answer: 0
  - q: Two equations reduce to 0 = 7. This means...
    options:
      - x = 7
      - No solution; the lines are parallel
      - Infinitely many solutions
      - y = 0
    answer: 1
---

One equation with one unknown gives one answer. With two unknowns, you need two equations. Solving them together is solving a **system**.

## The idea

Each equation is a line. The solution is where the lines cross: the one point that satisfies both.

## Method 1: substitution

`y = 2x + 1` and `x + y = 10`

The first already gives y in terms of x. Substitute it into the second:

`x + (2x + 1) = 10` → `3x + 1 = 10` → `x = 3`

Then `y = 2(3) + 1 = 7`. Solution: (3, 7). Check in both: 7 = 7 ✓, 3 + 7 = 10 ✓.

## Method 2: elimination

Add or subtract the equations so one variable disappears.

`3x + 2y = 16`

`5x − 2y = 8`

The y terms are opposites. Add the equations: `8x = 24`, so `x = 3`.

Substitute back: `9 + 2y = 16` → `y = 3.5`.

If the coefficients don't match, multiply one or both equations first. To eliminate y from `2x + 3y = 12` and `x − y = 1`, multiply the second by 3: `3x − 3y = 3`. Add: `5x = 15`, x = 3, then y = 2.

## Which method?

Substitution when one equation already has a variable alone. Elimination when both are in the form `ax + by = c`. Either always works.

## Special cases

-   Parallel lines (same slope, different intercept): no solution. You'll get something false like `0 = 5`.
-   Same line written twice: infinitely many solutions. You'll get `0 = 0`.

## Word problem

Tickets cost $8 for adults and $5 for children. 30 tickets sold for $195. How many of each?

Let a = adults, c = children. `a + c = 30` and `8a + 5c = 195`.

From the first, c = 30 − a. Substitute: `8a + 5(30 − a) = 195` → `8a + 150 − 5a = 195` → `3a = 45` → a = 15, c = 15.

## What you've built

You can now handle variables, simplify, solve equations, read lines, and juggle two unknowns. This is the foundation for quadratics, functions, and everything in science that gets written as a formula. Next stop: quadratic equations and exponents.

:::exercise Practice
Solve: `y = x + 4`, `2x + y = 13`. Then: `4x + y = 14`, `2x − y = 4`. Then: coffee is $3, tea is $2; 12 drinks cost $31. How many of each?
:::
