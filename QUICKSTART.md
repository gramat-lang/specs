# Gramat

Gramat is a domain-specific language designed for generating a collection of name/value pairs (map) from an input character sequence by using syntactic and semantic rules.

The lenguage can be divided in two major groups: [Statements](STATEMENTS.ms) and [Expressions](EXPRESSIONS.md). Both can be compiled but only the expressions can be evaluated and generate maps.

In practice, the code is normally compiled and evaluated on runtime by an [engine](ENGINE.md) written in the host language.

# TL;DR

| Expression                        | Description             |
| --------------------------------- | ----------------------- |
| `<` *name* `+:`  *expression* `>` | Adds a new String item  |
| `<` *name* `+:#` *expression* `>` | Adds a new Number item  |
| `<` *name* `+:?` *expression* `>` | Adds a new `true` item  |
| `<` *name* `+:!` *expression* `>` | Adds a new `false` item |
| `<` *name* `+:@` *expression* `>` | Adds a new `null` item  |
| `{` *name* `+:`  *expression* `}` | Adds a new Object item  |
