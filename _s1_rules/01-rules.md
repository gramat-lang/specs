---
title: Rules
---

## Rules

Since complex grammar shouldn't be written in a single line, Gramat allows to declare stand-alone expressions using a name for referencing later. The declaration order doesn't matter so recursive grammar is supported.

```gramat
name = expression
```

##### Example

```gramat
status = "on" | "off"
config = ^ { {1`a..z`} "=" status / ";" } $

@pass 'enabled=on;selectable=off' config
@fail 'autocomplete=true'         config
```
