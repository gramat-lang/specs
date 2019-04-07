---
title: Optional
---

### Optional

Everything between `[` and `]` might not match and however this expression is considered as a correct matching.

```gramat
[expression]
```

##### Example

```gramat
domain = {1`a..z A..Z 0..9` / "."} [":" {1`0..9`}]

@pass "github.com" domain
@pass "bakasoft.org:8080" domain
@fail "localhost:port" domain
```
