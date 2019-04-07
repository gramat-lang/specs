# Gramat

Gramat is a language for describing complex grammar rules that can match and capture data structures.

##### Grammar Example: url.gmt

```
Query = <object Query:
  { <set key-value:
    {1 !("=" | "&" | "#") },
    [ <ignore: "="> { !("&" | "#") } ]
  > / {1 "&" } } { "&" }
>

Url = <object:
  [ <set scheme: {1 !":" }> ":" ]
  [ "//" [ <set userinfo: { !"@" }> "@" ]
    <set host: {1 !(":" | "/") }>
    [ ":" <set port: {1 !"/" }> ] ]
  <set path: {1 !"?" }>
  [ "?" <set query: Query> ]
  [ "#" <set fragment: { !$ }> ]
> $
```

##### Test Example

```
@import 'url.gmt'

@test 'http://www.google.com/search?q=gramat#search' Url {
    scheme: 'http'
    host: 'www.google.com'
    path: '/search'
    query: { 'q': 'gramat' }
    fragment: 'search'
}
```

---

## Rules

Since complex grammar shouldn't be written in a single line, Gramat allows to declare stand-alone expressions using a name for referencing later. The declaration order doesn't matter so recursive grammar is supported.

```
name = expression
```

##### Example

```
status = "on" | "off"
config = ^ { {1`a..z`} "=" status / ";" } $

@pass 'enabled=on;selectable=off' config
@fail 'autocomplete=true'         config
```

## Expressions

The expressions are the building blocks for the grammar, an expression can be any of following:

### Literal

Matches an ordered sequence of characters.

```
"content"
```

Where `content` can be any sequence of characters except `"`. Special characters can be written in *escaped* format, please read [Escaped Characters](#escaped-characters) for more details.

##### Example

```
kw-else = "else" | "Else" | "ELSE"

@pass 'else' kw-else
@pass 'Else' kw-else
@pass 'ELSE' kw-else
@fail 'eLse' kw-else
```

### Reference

Matches an expression declared in the grammar.

```
name
```

Where `name` must start with a letter (`a-z` or `A-Z`) and can be followed by any combination of letters, digits (`0-9`), underscores (`_`) or dashes (`-`).

##### Example

```
expr = {1 token | group / " "}
token = {1`a..z`}
group = "(" expr ")"

@pass 'abc' expr
@pass 'abc xyz' expr
@pass 'abc (m n) xyz' expr
@fail 'a1' expr
```

### Alternation

Tries to match the expressions and stops in the first one that matches, only one expression must match.

```
option1 | option2 | optionN
```

This expression has the lowest precedence; sequences and groups are evaluated before evaluate alternations.

##### Example

```
string = "\"" {!"\""} "\"" | "'" {!"\'"} "'"

@pass '\"abc\"' string
@pass '\'abs\'' string
@fail '\'abc\"' string
```

### Sequence

Matches an expression followed by another and so on, all expressions must match.

```
expression1 expression2 expressionN
```

This expression has the middle precedence; only groups are evaluated before evaluate sequences.

##### Example

```
sum = {1`0..9`} "+" {1`0..9`}

@pass '0+1' sum
@pass '92+68' sum
@fail '1+a' sum
```

### Group

This expression only helps to bump up the precedence of the contained expression. The contained expression is evaluated before surrounding expressions.

```
(expression)
```

##### Example

```
// any domain ending with .org or .net or localhost
domain = {1`a..z`} (".org" | ".net") | "localhost"

@pass "bakasoft.org" domain
@pass "google.net" domain
@pass "localhost" domain
@fail "localhost.com" domain
```

### Optional

Everything between `[` and `]` might not match and however this expression is considered as a correct matching.

```
[expression]
```

##### Example

```
domain = {1`a..z A..Z 0..9` / "."} [":" {1`0..9`}]

@pass "github.com" domain
@pass "bakasoft.org:8080" domain
@fail "localhost:port" domain
```

### Repetition

Evertying between `{` and `}` can be repeated a determined number of times. Repetitions can receive an argument to indicate how many times it can be repeated.

```
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

```
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

### Negation

Keeps moving forward until the expression is matched.

```
!expression
```

##### Example

```

```

### Predicate

Only matches one character by comparing against characters and character ranges.

```
`option1 option2 optionN`
```

The options are separated by whitespace and can be any of following patterns:

- **Exact character**: Matches exactly the specified character, e.g. `c`.
- **Character range**: Matches all character between the indicated begin and end characters, e.g. `a..z`.

The characters can be also specified by using [Escaped Characters](#escaped-characters).

##### Example

```

```

### Begin of string

This expression matches only if is evaluated at the beginning of the input string.

```
^
```

### End of string

This expression matches only if is evaluated at the end of the input string.

```
$
```

---

## Capturings

Capturings are also expressions and they are the way to construct data structures: values, lists and objects.

All capturings syntax follow the same pattern, depending on the `kind`, the arguments and expressions may vary.

```
<kind arg1 arg2 argN: expression1, expression2, expressionN>
```

### Data Creation

#### Object

When the expression matches, creates an object. The expression can contain other capturings except `object`, `list` or `value`.

```
// inline versions
<object: expression>
<object type: expression>

// rule versions
type = <object: expression>
alias = <object type: expression>
```

#### List

When the expression matches, creates a list. The expression can contain other capturings except `object`, `list` or `value`.

```
// inline versions
<list: expression>
<list type: expression>

// rule versions
type = <list: expression>
alias = <list type: expression>
```

#### Value

When the expression matches, creates a value. The expression can contain other capturings except `object`, `list` or `value`.

```
// inline version
<value type: expression>

// rule version
type = <value: expression>
alias = <value type: expression>
```

### Property Manipulation

#### Set

When the expression matches sets the resulting value captured by the expression to the specified property name.

```
<set name: expression>
<set key-value: key-expr, value-expr>
<set value-key: value-expr, key-expr>
```

#### Add

```
<add: expression>
<add name: expression>
<add key-value: key-expr, value-expr>
<add value-key: value-expr, key-expr>
```

### String Processing

#### Transform

```
<transform name: expression>

name = <transform: expression>
alias = <transform name: expression>
```

#### Replace

```
<replace token: expression>
<replace {map}: expression>
```

#### Ignore

```
<ignore: expression>
```

### Functions

#### Function definition

```
name = <function arg1 arg2 argN: expression>
```

#### Call function

```
<call name: expr1, expr2, exprN>
```

---

## Directives

### Import

```
@import 'file'
```

### Testing

```
@pass input rule
@pass input rule output
@fail input rule
```

---

## Annex

### Literals

#### Map

```
{ key1: value1 key2 keyN: valueN }
```

#### Array

```
[ value1 value2 valueN ]
```

#### Token

```
token
'token'
```

### Escaped Characters

Some characters can be *escaped* where indicated by using the backslash `\`, in this way the unescaped result will be included in the actual content:

```
\\     → Backslash       \ 0x5C
\"     → Quotation mark  " 0x22
\'     → Apostrophe      ' 0x27
\'     → Grave accent    ` 0x60
\t     → Horizontal tab    0x09
\n     → Line feed         0x10
\r     → Carriage return   0x13
\s     → Space             0x20
\uHHHH → The corresponding Unicode character
         for the hexadecimal number HHHH.
```

### Comments

```
// Inline comment

/* Block
   Comment */
```

### Whitespace

All comments and following characters are considered *whitespace* and are ignored:

- Space: `0x20`
- Horizontal tab: `0x09`
- Line feed: `0x10`
- Carriage return: `0x13`

---
