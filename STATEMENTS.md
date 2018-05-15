# Statements

Complex grammar can be constructed easily by using statements. An statement tells to the [engine](README.md#engine) how to build the grammar step by step. In the [Gramat Language](README.md#gramat-language) all statements end with a semicolon `;`.

## Expression Declaration

Registers an [expression](README.md#expression) in the engine with a [valid name](#name-syntax).

*name* `=` *expression* `;`

## Template Declaration

Registers a [template](README.md#template) in the engine with a valid name.

*name* `[` *param1* `,` *param2* `,` *...paramN* `]` `=` *rule* `;`

## Comments

It is possible to add comments in any part where a whitespace is accepted. The comments start with `/*` and end with `*/`, there is no way to escape the closing symbol but can contains any other character sequence.

```
/* this is a comment */
```
