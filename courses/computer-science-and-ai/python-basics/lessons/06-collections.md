---
title: Lists and dictionaries
minutes: 35
quiz:
  - q: What is scores[0] if scores = [10, 20, 30]?
    options:
      - '0'
      - '10'
      - '20'
      - Error
    answer: 1
    explain: List indexes start at 0.
  - q: Which is best for storing phone numbers looked up by a person's name?
    options:
      - A list
      - A string
      - A dictionary
      - A float
    answer: 2
  - q: What does d.get("k", 0) return when key "k" is missing?
    options:
      - An error
      - None
      - '0'
      - '"k"'
    answer: 2
---

Real programs deal with many values at once: a shopping cart, a list of scores, a contacts book. Python gives you two workhorse containers.

## Lists: ordered collections

```
scores = [72, 88, 95, 60]

print(scores[0])       # 72, first item (indexes start at 0)
print(scores[-1])      # 60, last item
print(len(scores))     # 4

scores.append(81)      # add to the end
scores[1] = 90         # change an item
scores.remove(60)      # remove by value
print(scores)          # [72, 90, 95, 81]
```

## Useful list operations

```
print(sum(scores) / len(scores))   # average
print(max(scores), min(scores))
print(sorted(scores))              # new sorted list
print(95 in scores)                # True
print(scores[1:3])                 # slice: items 1 and 2
```

## Looping over a list

```
for s in scores:
    print(s)

for i, s in enumerate(scores):
    print(f"Student {i + 1}: {s}")
```

## Dictionaries: labelled collections

A dictionary maps **keys** to **values**, like a real dictionary maps words to definitions.

```
student = {
    "name": "Ada",
    "age": 36,
    "courses": ["maths", "logic"],
}

print(student["name"])           # Ada
student["age"] = 37              # update
student["email"] = "ada@x.org"   # add a new key
print("email" in student)        # True
print(student.get("phone", "n/a"))  # safe lookup with a default
```

## Looping over a dictionary

```
for key, value in student.items():
    print(f"{key}: {value}")
```

## Choosing between them

-   Use a **list** when order matters or you have a sequence of similar things.
-   Use a **dict** when you look things up by name or ID.

## Worked example: word counter

```
text = "the cat sat on the mat the end"
counts = {}

for word in text.split():
    counts[word] = counts.get(word, 0) + 1

for word, n in sorted(counts.items()):
    print(f"{word}: {n}")
```

This combines everything: a loop, a dictionary, a safe lookup with a default, and string splitting. This exact pattern shows up in real data work all the time.

## Where to go next

You now know the core of programming: values, variables, decisions, repetition, functions, and collections. Everything else is built on these. Good next steps: reading and writing files, error handling with `try`/`except`, and building a small project of your own, such as a to-do list or a quiz game.

:::exercise Final project
Build a contacts book. Store contacts in a dictionary of name to phone number. Loop forever showing a menu: add, look up, delete, list all, quit. Use a function for each action.
:::
