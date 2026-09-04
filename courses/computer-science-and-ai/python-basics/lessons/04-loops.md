---
title: Repeating with loops
minutes: 30
quiz:
  - q: What does range(3) produce?
    options:
      - 1, 2, 3
      - 0, 1, 2
      - 0, 1, 2, 3
      - '3'
    answer: 1
  - q: Which keyword exits a loop immediately?
    options:
      - stop
      - exit
      - break
      - continue
    answer: 2
  - q: When is a while loop the better choice over a for loop?
    options:
      - When looping over a list
      - When you don't know in advance how many repetitions you need
      - When counting from 0
      - Never; for is always better
    answer: 1
---

Computers are good at doing the same thing many times without complaint. Loops let you say "do this for each item" or "keep doing this until".

## The for loop

```
for fruit in ["apple", "pear", "plum"]:
    print(f"I like {fruit}")
```

Each time round the loop, `fruit` takes the next value from the list. The indented block runs once per item.

## Counting with range

```
for i in range(5):
    print(i)        # 0 1 2 3 4

for i in range(1, 6):
    print(i)        # 1 2 3 4 5

for i in range(0, 20, 5):
    print(i)        # 0 5 10 15
```

`range(start, stop, step)` counts from start up to *but not including* stop. Starting at zero and stopping before the end feels odd at first but makes many calculations cleaner.

## Accumulating a result

A very common pattern: set up a variable before the loop and update it inside.

```
total = 0
for n in [4, 8, 15, 16, 23, 42]:
    total += n
print(total)   # 108
```

## The while loop

Use `while` when you don't know in advance how many times to repeat.

```
balance = 1000
years = 0
while balance < 2000:
    balance = balance * 1.07
    years += 1
print(f"Doubled after {years} years")
```

:::callout Infinite loops
If the condition never becomes false, the loop never ends. Make sure something inside the loop moves you toward stopping. If you get stuck, press Ctrl+C.
:::

## break and continue

```
for n in range(1, 100):
    if n % 7 == 0:
        print(f"First multiple of 7: {n}")
        break          # leave the loop entirely

for n in range(10):
    if n % 2 == 0:
        continue       # skip the rest of this iteration
    print(n)           # prints odd numbers only
```

## Worked example: guess the number

```
import random
secret = random.randint(1, 20)
guesses = 0

while True:
    guess = int(input("Guess (1-20): "))
    guesses += 1
    if guess < secret:
        print("Higher.")
    elif guess > secret:
        print("Lower.")
    else:
        print(f"Got it in {guesses} guesses!")
        break
```

`while True` with a `break` inside is a standard way to write "loop until I say stop".

:::exercise Try it
Print the multiplication table for 7, from 7 × 1 to 7 × 12. Then write a loop that adds up all the numbers from 1 to 100.
:::
