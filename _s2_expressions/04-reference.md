---
title: Reference
---

### Reference

Matches an expression declared in the grammar.

```gramat
name
```

Where `name` must start with a letter (`a-z` or `A-Z`) and can be followed by any combination of letters, digits (`0-9`), underscores (`_`) or dashes (`-`).

##### Example

```gramat
expr = {1 token | group / " "}
token = {1`a..z`}
group = "(" expr ")"

@pass 'abc' expr
@pass 'abc xyz' expr
@pass 'abc (m n) xyz' expr
@fail 'a1' expr
```
