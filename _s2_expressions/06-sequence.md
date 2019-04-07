---
title: Sequence
---

### Sequence

Matches an expression followed by another and so on, all expressions must match.

```gramat
expression1 expression2 expressionN
```

This expression has the middle precedence; only groups are evaluated before evaluate sequences.

##### Example

```gramat
sum = {1`0..9`} "+" {1`0..9`}

@pass '0+1' sum
@pass '92+68' sum
@fail '1+a' sum
```
