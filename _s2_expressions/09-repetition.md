---
title: Repetition
---

### Repetition

Evertying between `{` and `}` can be repeated a determined number of times. Repetitions can receive an argument to indicate how many times it can be repeated.

```gramat
{expression}
{expression / separator}
{min expression}
{min,max expression}
{count; expression}
```

Depending on the argument provided, the repetition can take one of the following behaviors.

- **Zero or more times**: When the expression doesn't have repetition arguments, the repetition is optional and unbounded.
- **At least `min` times**: When it only has a the `min` argument, it must be repeated at least the indicated times.
- **Between `min` and `max` times**: When it has `min,max`, it must be repeated at least the `min` times but no more than the `max` times.
- **Exactly `count` times**: When it has `count;`, it must be repeated exactly the indicated amount of times.

##### Example

```gramat
dec = `0..9`
hex = `a..f A..F 0..9`
uni-format = "\\u" {4; hex}
dec-format = {1 dec}
hex-format = "0x" {1,4 hex}

@pass '\uABCD' uni-format
@pass '123' dec-format
@pass '0x0E0F' hex-format
@fail '\\u0'
```
