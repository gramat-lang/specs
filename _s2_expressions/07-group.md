---
title: Group
---

### Group

This expression only helps to bump up the precedence of the contained expression. The contained expression is evaluated before surrounding expressions.

```gramat
(expression)
```

##### Example

```gramat
// any domain ending with .org or .net or localhost
domain = {1`a..z`} (".org" | ".net") | "localhost"

@pass "bakasoft.org" domain
@pass "google.net" domain
@pass "localhost" domain
@fail "localhost.com" domain
```
