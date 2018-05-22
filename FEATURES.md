# Gramat Features

- [Gramat Features](#gramat-features)
  - [Regular Expressions](#regular-expressions)
    - [Character Sequences](#character-sequences)
    - [Expression Sequencess](#expression-sequencess)
    - [Grouping](#grouping)
    - [Quantification](#quantification)
  - [Property Expressions](#property-expressions)
    - [Primitives](#primitives)
    - [Objects](#objects)
    - [Arrays](#arrays)
  - [Namespaces](#namespaces)
  - [Declarations](#declarations)
    - [Rules](#rules)
    - [Templates](#templates)
- [Directives](#directives)
  - [Export](#export)
  - [Import](#import)
  - [Require](#require)
  - [Set](#set)

[Gramat](README.md) allows to build complex grammars by using [Regular Expressions](#regular-expressions) and produce data documents by converting the regular expressions to [Property Expressions](#property-expressions).

- Avoids duplication of code by [declaring and referencing expressions](#declarations).
- Abstracts common patterns by creating [expression templates](#templates).
- Encourages the separation of concerns by using the [Export](#export) and [Import](#import) directives.

## Regular Expressions

This is the syntactic part of the language, describes how to match and capture the characters. Most common features of popular regular expressions are available with a similar syntax.

### Character Sequences

| Syntax | Description
| ------ | -----------
| <pre>"characters" <br/>'characters'</pre> | **Strict Character Sequence** <br/> The characters must be exactly matched.
| <pre>&#x007E;characters&#x007E;</pre> | **Fuzzy Character Sequence** <br/> The characters matches depending on the [fuzzy settings](SETTINGS.md#fuzzy-character-sequences).

### Expression Sequencess

| Syntax | Description
| ------ | -----------
| <pre>expr1 expr2 ...exprN</pre> | **Conjunction Sequence** <br/> Every expression must match in the same order to consider the sequence matched. This form can be considered as an `AND` operator.
| <pre>expr1 &#x007C; expr2 &#x007C; ...exprN</pre> | **Disjunction Sequence** <br/> Only one expression must match to consider the sequence matched (the order of evaluation is left to right). This form can be considered as an `OR` operator.

### Grouping

| Syntax | Description
| ------ | -----------
| <pre>( expression )</pre> | **Equivalent Group** <br/> The inner expression must match to consider the group matched. This expression is specially important to group sequences.
| <pre>(! expression )</pre> | **Complement Group** <br/> The inner expression **must NOT** match to consider the group matched. This form can be considered as a `NOT` operator.

### Quantification

| Syntax | Description
| -----  | -----------
| <pre>expression?</pre> | **Zero or One** <br/> The expression is optional and matched at most once.
| <pre>expression*</pre> | **Zero or More** <br/> The expression is matched zero or more times.
| <pre>expression+</pre> | **One or More** <br/> The expression is matched one or more times.
| <pre>expression{ amount }</pre> | **Exact Repetition** <br/> The expression is matched exactly the specified amount of times.
| <pre>expression{ minimum , }</pre> | **Minimum Repetition** <br/> The expression is matched the specified minimum or more times.
| <pre>expression{ minimum , maximum }</pre> | **Variable Repetition** <br/> The expression is matched at least the specified minimum times, but not more than the maximum times.

## Property Expressions

This is the semantic part of the language, tells to the engine how to create the map using the regular expressions.

### Primitives

Primitive Properties define a basic-typed property in the [current object](ENGINE.md#current-object) taking the value from the captured characters. If the inner expression doesn't match, no value will be considered (not even `null`).

| Syntax | Description
| ------ | -----------
| <pre>&lt; &#x0060;name&#x0060; : expression &gt;</pre> | **String Property** <br/> The property value will be exactly the same than the captured characters.
| <pre>&lt; &#x0060;name&#x0060; :# expression &gt;</pre> | **Number Property** <br/> The property value will be the result of parsing the captured characters to a number. If the captured characters are not a valid number an error will be thrown.
| <pre>&lt; &#x0060;name&#x0060; :? expression &gt;</pre> | **True Property** <br/> The property value will be `true` only if the expression matched. The captured characters are ignored.
| <pre>&lt; &#x0060;name&#x0060; :! expression &gt;</pre> | **False Property** <br/> The property value will be `false` only if the expression matched. The captured characters are ignored.
| <pre>&lt; &#x0060;name&#x0060; :@ expression &gt;</pre> | **Null Property** <br/> The property value will be `null` when the expression matches. The captured characters are ignored.

### Objects

Object Properties create a new empty object and evaluates the inner expression into it. Only if the expression matches, the new object is set to a property in the [current object](ENGINE.md#current-object).

```
{ `name` : expression }
```

### Arrays

Array Properties add a new item in a property every time the inner expression matches. Any [primitive](#primitives) or [object](#objects) property can be converted to an array by adding a *Plus sign* (`+`) before the *Colon* (`:`).

```
< `name` +:  expression >
< `name` +:# expression >
< `name` +:? expression >
< `name` +:! expression >
< `name` +:@ expression >
{ `name` +:  expression }
```

Read the [Processing Arrays](ENGINE.md#processing-arrays) section for more details.

## Namespaces

The Namespaces represent an standalone scope with its own declarations, settings, dependencies and exports. Any block of code written in Gramat Language is considered a Namespace. Files are a natural way to store namespaces (the suggested extension is `.gmt`).

To keep it simple and straightforward, there is no syntax to allow live two or more namespaces in the same block of code, so there cannot exist *nested* elements.

## Declarations

A declaration occurs when a meaning is given to an [identifier](SYNTAX.md#identifiers) converting it to an element. It happens implicitly when [importing](#import), [requiring](#require) or using template parameters and explicitly for the [Rules](#rules) and [Templates](#templates). All kind of declarations follow the [declaring](ENGINE.md#referencing-rules) rules and can be used in any valid part following the [referencing](ENGINE.md#referencing-rules) rules.

### Rules

A named expression is considered a rule. The rules can be referenced in any expression by using its name.

```
`name` = expression ;
```

### Templates

Templates take one or more parameters to produce an expression. This is specially util to avoid repeated patterns.

```
`name` [ `param1` , `param2` , `...paramN` ] = expression ;
```

The parameters are declared as [identifiers](SYNTAX.md#identifiers) and can be referenced in **literally any part** of the expression, they will be replaced with the corresponding literal value when the template is invoked.

Since a template produces an expression, it can be invoked in any expression by using its name and passing the arguments.

```
`name` [ "arg1" , "arg2" , "...argN" ]
```

The arguments can be any valid [literal](SYNTAX.md#literals) and the list length must match with the declaration.

The templates should not be considered as functions, a more accurate concept is considering them as _Macros_. The templates work at compiling time, read the [Processing Templates](ENGINE.md#processing-templates) section for more details.

# Directives

## Export

Makes *public* the specified elements so that they can be imported in another namespace.

```
@export `element` ;
@export `element` as `alias` ;
@export `elem1`, `elem2`, `...elemN` ;
```

The non-exported elements are considered _private_ and they are not able to be imported.

## Import

Makes available in the current namespace the specified elements taking them from the specified namespace.

```
@import `element` from `namespace` ;
@import `element` as `alias` from `namespace` ;
@import `elem1` , `elem2` , `...elemN` from `namespace` ;
```

## Require

Reserves the specified name and makes it available for referencing it. The engine is responsible to supply the element on runtime.

```
@require `name` ;
```

## Set

Changes the value of the specified setting in the current namespace.

```
@set `setting` = value ;
```

The change is isolated and cannot affect other namespaces.
