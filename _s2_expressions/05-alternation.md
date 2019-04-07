---
title: Alternation
---

### Alternation

Tries to match the expressions and stops in the first one that matches, only one expression must match.

```gramat
option1 | option2 | optionN
```

This expression has the lowest precedence; sequences and groups are evaluated before evaluate alternations.

##### Example

```gramat
string = "\"" {!"\""} "\"" | "'" {!"\'"} "'"

@pass '\"abc\"' string
@pass '\'abs\'' string
@fail '\'abc\"' string
```
