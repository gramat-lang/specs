# Gramat Features

- [Regular Expressions](#regular-expressions)
  - [Character Sequences](#character-sequences)
  - [Expression Sequences](#expression-sequences)
  - [Grouping](#grouping)
  - [Quantification](#quantification)
- [Property Expressions](#property-expressions)
  - [Primitives](#primitives)
  - [Objects](#objects)
  - [Arrays](#arrays)
- [Namespaces](#namespaces)
- [Declarations](#declarations)
  - [Expressions](#expressions)
  - [Templates](#templates)
- [Directives](#directives)
  - [Export](#export)
  - [Import](#import)
  - [Require](#require)
  - [Set](#set)

[Gramat](README.md) allows to build and test complex grammars by using [Regular Expressions](#regular-expressions) and map any expression as a property by using [Property Expressions](#property-expressions) to produce complex documents.

Additionaly, Gramat helps to follow the some good practices:

- Avoids duplication of code by [declaring and referencing expressions](#expressions).
- Abstracts common patterns by creating [expression templates](#templates).
- Encourages the separation of concerns by using the [Export](#export) and [Import](#import) directives.

## Regular Expressions

This is the syntactic part of the language, describes how to match and capture the text. Most common features of popular regular expressions are available with a similar syntax.

### Character Sequences

| Syntax                              | Name             | Description
| ----------------------------------- | ---------------- | -----------
| `"` *text* `"` <br/> `'` *text* `'` | Strict Literal   | The text must be exactly matched.
| `~` *text* `~`                      | Flexible Literal | The text matches depending on the [engine settings](#ENGINE.md#flexible-character-sequence).

### Expression Sequencess

| Syntax                             | Name                 | Description
| ---------------------------------- | -------------------- | -----------
| *expr1* *expr2* *...exprN*         | Conjunction Sequence | Every expression must match in the same order to consider the sequence matched. This form can be considered as an `AND` operator.
| *expr1* `|` *expr2* `|` *...exprN* | Disjunction Sequence | Only one expression must match to consider the sequence matched. This form can be considered as an `OR` operator.

### Grouping

| Syntax                | Name             | Description
| --------------------- | ---------------- | -----------
| `(` *expression* `)`  | Equivalent Group | The inner expression must match to consider the group matched. This expression is specially important to group sequences.
| `(!` *expression* `)` | Complement Group | The inner expression **must NOT** match to consider the group matched. This form can be considered as a `NOT` operator.

### Quantification

| Syntax                                      | Name                | Description
| ------------------------------------------- | ------------------- | -----------
| *expression*`?`                             | Zero or One         | The expression is optional and matched at most once.
| *expression*`*`                             | Zero or More        | The expression is matched zero or more times.
| *expression*`+`                             | One or More         | The expression is matched one or more times.
| *expression*`{` *amount* `}`                | Exact Repetition    | The expression is matched exactly the specified amount of times.
| *expression*`{` *minimum* `,` `}`           | Minimum Repetition  | The expression is matched the specified minimum or more times.
| *expression*`{` *minimum* `,` *maximum* `}` | Variable Repetition | The expression is matched at least the specified minimum times, but not more than the maximum times.

## Property Expressions

This is the semantic part of the language, tells to the engine how to create the map using the regular expressions.

### Primitives

Defines a basic-typed property in the [current object](ENGINE.md#current-object) taking the value from the captured text. If the expression doesn't match, no value will be considered (not even `null`).

| Syntax                                      | Name                | Description
| ------------------------------------------- | ------------------- | -----------
| `<` *name* `:` *expression* `>` | String Property | The property value will be exactly the same than the captured text.
| `<` *name* `:#` *expression* `>` | Number Property | The property value will be the result of parsing the captured text to a number. If the captured text is not a valid number an error will be thrown.
| `<` *name* `:?` *expression* `>` | True Property | The property value will be `true` only if the expression matched. The captured text is ignored.
| `<` *name* `:!` *expression* `>` | False Property | The property value will be `false` only if the expression matched. The captured text is ignored.
| `<` *name* `:@` *expression* `>` | Null Property | The property value will be `null` when the expression matches. The captured text is ignored.

### Objects

Creates a new empty object and evaluates the expression into it. Only if the expression matches, the new object is set to a property in the [current object](ENGINE.md#current-object).

`{` *name* `:` *expression* `}`

### Arrays

Adds a new item in a property every time the expression matches. Any [primitive](#plain-property) or [object](#object-property) property definition can be converted to an array definition by adding a `+` before the `:`.

`<` *name* `+:`  *expression* `>` <br/>
`<` *name* `+:#` *expression* `>` <br/>
`<` *name* `+:?` *expression* `>` <br/>
`<` *name* `+:!` *expression* `>` <br/>
`<` *name* `+:@` *expression* `>` <br/>
`{` *name* `+:`  *expression* `}`

Read the [considerations](ENGINE.md#arrays) when adding a new item for more details.

## Namespaces

Represent an standalone scope with its own declarations, settings, dependencies and exports. The obvious representation is throught using files but there is no restriction to be stored only in files, Namespaces can be any block of code written in Gramat Language.

To keep it simple and straightforward, there is no syntax to allow live two or more namespaces in the same block of code, so there cannot exist *nested* elements.

## Declarations

A declaration occurs when a meaning is given to an [identifier](SYNTAX.md#identifiers) converting it to an element. It happens implicitly when [importing](#import), [requiring](#require) or using template parameters and explicitly for the [Rules](#rules) and [Templates](#templates). All kind of declarations follow the [declaring](ENGINE.md#referencing-rules) rules.

The declared elements can be used in any valid part following the [referencing](ENGINE.md#referencing-rules) rules.

### Rules

A named expression is considered a rule. The rules can be referenced in any valid part of any expression by using its name.

*name* `=` *expression* `;`

### Templates

Templates take one or more parameters to produce an expression. This is specially util to avoid repeated patterns.

*name* `[` *param1* `,` *param2* `,` *...paramN* `]` `=` *expression* `;`

The parameters can be referenced in **literally any part** of the expression, they will be **literally** replaced with the actual values when the template is invoked.

Since a template produces an expression, it can be invoked in any valid part of any expression by using its name and sending the arguments.

*name* `[` *arg1* `,` *arg2* `,` *...argN* `]`

The arguments can be any valid [literal](ENGINE.md#literal) and the list length must match with the declaration.

The templates should not be considered as functions, a more accurate concept is considering them as _Macros_. The templates work at compiling time, read the [Processing Templates](ENGINE.md#processing-templates) section for more details.

# Directives

## Export

Makes *public* the specified elements so that they can be imported in another namespace.

`@export` *elem1* `,` *elem2* `as` *alias2* `,` *...elemN* `;`

The non-exported elements are considered _private_ and they are not able to be imported.

## Import

Makes available in the current namespace the specified elements taking them from the specified namespace.

`@import` *elem1* `,` *elem2* `as` *alias2* `,` *...elemN* `from` *namespace* `;`

## Require

Reserves the specified name and makes it available for referencing it. The engine is responsible to supply the element on runtime.

`@require` *name* `;`

## Set

Changes the value of the specified setting in the current namespace.

`@set` *setting* `=` *value* `;`

The change is isolated and cannot affect other namespaces.
