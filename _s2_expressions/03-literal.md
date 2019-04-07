---
title: Literal
---

### Literal

Matches an ordered sequence of characters.

```gramat
"content"
```

Where `content` can be any sequence of characters except `"`. Special characters can be written in *escaped* format, please read [Escaped Characters](#escaped-characters) for more details.

##### Example

```gramat
kw-else = "else" | "Else" | "ELSE"

@pass 'else' kw-else
@pass 'Else' kw-else
@pass 'ELSE' kw-else
@fail 'eLse' kw-else
```
