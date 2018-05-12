# Expressions

An expression by itself, when evaluated, is able to generate a collection of name/value pairs by capturing and processing the input characters.

The expressions are defined using a language similar to the regular expressions of most programming languages but adapted to support complex operations.

# Plain Property

Defines a plain property in the [current object](ENGINE.md#current-object) taking the value from the captured text. If the expression doesn't match, no value will be considered (not even `null`).

## String Property

The property value will be exactly the same than the captured text.

`<` [*property_name*](LANGUAGE.md#name-syntax) `:` [*value_expression*](#expressions) `>`

## Number Property

The property value will be the result of parsing the captured text to a number. If the captured text is not a valid number an error will be thrown.

`<` *property_name* `:#` *value_expression* `>`

## Boolean Property

The property value can be either `true` or `false` and is only set if the expression matches, the captured text is ignored.

### True Property

`<` *property_name* `:?` *value_expression* `>`

### False Property

`<` *property_name* `:!` *value_expression* `>`

## Null Property

The property value will be `null` when the expression matches, the captured text is ignored.

`<` *property_name* `:@` *value_expression* `>`

# Object Property

Creates a new empty object and evaluates the expression into it. Only if the expression matches, the new object is set to a property in the [current object](ENGINE.md#current-object).

`{` *property_name* `:` *value_expression* `}`

# Array Property

Adds a new item in a property every time the expression matches.

Any [plain](#plain-property) or [object](#object-property) property definition can be converted to an array definition by adding a `+` before the `:`.

`<` *property_name* `+:`  *value_expression* `>` <br/>
`<` *property_name* `+:#` *value_expression* `>` <br/>
`<` *property_name* `+:?` *value_expression* `>` <br/>
`<` *property_name* `+:!` *value_expression* `>` <br/>
`<` *property_name* `+:@` *value_expression* `>` <br/>
`{` *property_name* `+:`  *value_expression* `}`

Considerations when the [engine](ENGINE.md) adds the new item:

- If the property is not defined yet, it will be initialized as an array.
- If the property is not an array, depending on the configuration it could either be converted to an array or throw an error.
- If the property is already an array, the item is simply added.
- Since the arrays are not hard typed, a single array can contain any kind of values.

# Strict Character Sequence

The character sequence value must exactly match when evaluated. Both *Apostrophe (U+0027)* `'` and *Quotation mark (U+0022)* `"` are accepted to delimit the value.

`"` [*content*](LANGUAGE.md#string-content) `"` <br/>
`'` *content* `'`

# Flexible Character Sequence

The character sequence value matches depending on [the settings](SETTINGS.md#flexible-character-sequence). The delimiter for this type is the *Tilde (U+007E)* `~`.

`~` *content* `~`

# Conjunction Sequence (AND)

Every rule must match in the same order to consider the sequence matched.

*expression1* *expression2* *...expressionN*

# Disjunction Sequence (OR)

Only one rule must match to consider the sequence matched.

*expression1* `|` *expression2* `|` *...expressionN*

# Equivalent Group

The inner rule must match to consider the group matched. This rule is specially important for sequences.

`(` *expression* `)`

# Complement Group (NOT)

The inner rule **must NOT** match to consider the group matched.

`(!` *expression* `)`

# Zero or one

The rule is optional and matched at most once.

*expression*`?`

# Zero or more

The rule will be matched zero or more times.

*expression*`*`

# One or more

The rule will be matched one or more times.

*expression*`+`

# Exact Repetition

*expression*`{` [*amount*](LANGUAGE.md#integers) `}`

# Minimum Repetition

*expression*`{` [*minimum*](LANGUAGE.md#integers) `,` `}`

# Variable Repetition

at least N times, but not more than M times

*expression*`{` [*minimum*](LANGUAGE.md#integers) `,` [*maximum*](LANGUAGE.md#integers) `}`

# Reference

The rule to be evaluated will be searched in the context using the specified name. If the rule is not defined an error will be thrown.

[*expression-name*](LANGUAGE.md#name-syntax)

# Template Call

Calls an existing function passing the specified rules as arguments to be processed and the resulting rule is evaluated.

[*template-name*](LANGUAGE.md#name-syntax) `[` [*argument1*](LANGUAGE.md#name-syntax) `,` *argument2* `,` *...argumentN* `]`

- `name` must be the name of an existing template.
- `name1 , name2 , ...nameN` represents a comma separated list of literals.
