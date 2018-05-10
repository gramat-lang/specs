# GRAMAT

Grammar language for parsing a collection of name/value pairs.

# Grammar Language

The grammar is conformed by a finite number of rules. The rules are defined using a language similar to the regular expressions of most programming languages but adapted to describe a collection of name/value pairs (_map_ in this document).

### Declaration

It is possible to give a name to a rule and make reference later. Considerations:

- There cannot be two rules with the same name.
- The names follow the [name syntax](#name-syntax).

```
name = rule ;
```

### Documentation

It is possible to add single-line comments in any part of the definition. A comment starts with `#` and ends with the *Line feed (U+000A)*.

```
# this is a comment
```

### Rules

A rule by itself is able to capture text and generate a map after being evaluated.

## Plain Property Rule

Defines a plain property in the current object taking the value from the captured text in the rule evaluation. If the rule doesn't match, no value will be considered (not even `null`).

Only [String](#string-property), [Number](#number-property), [Boolean](#boolean-property) and [Null](#null-property) are considered plain values.

### String Property

The property value will be exactly the same than the captured text.

```
< name : rule >
```

### Number Property

The property value will be the result of parsing the captured text to a number. If the captured text is not a valid number an error will be thrown.

```
< name :# rule >
```

### Boolean Property

The property value can be either `true` or `false` and is only set if the rule matches, the captured text is ignored.

```
< name :? rule >    # for `true`
< name :! rule >    # for `false`
```

### Null Property

The property value will be `null` when the rule matches, the captured text is ignored.

```
< name :@ rule >
```

## Object Property Rule

Creates a new empty object and evaluates the rule into it. Only if the rule matches, the new object is set to a property in the current object.

```
{ name : rule }
```

## Array Property Rule

Adds a new item in a property every time the rule matches.

Any [plain](#plain-property-rule) or [object](#object-property-rule) property definition can be converted to an array definition by adding a `+` before the `:`.

Considerations when adding the new item:

- If the property is not defined yet, it will be initialized as an array.
- If the property is not an array, depending on the configuration it could either be converted to an array or throw an error.
- If the property is already an array, the item is simply added.
- Since the arrays are not hard typed, a single array can contain any kind of values.

```
< name +: rule >     # adds a new String item
< name +:# rule >    # adds a new Number item
< name +:? rule >    # adds a new `true` item
< name +:! rule >    # adds a new `false` item
< name +:@ rule >    # adds a new `null` item
{ name +: rule }     # adds a new Object item
```

## Literal Rule

Can match a sequence of characters. The matching algorithm depends on the type of the literal, there are only two types: _Strict_ and _Flexible_.

### Strict Literal

The literal value must exactly match when evaluated. Both *Apostrophe (U+0027)* `'` and *Quotation mark (U+0022)* `"` are accepted to delimit the value.

```
"..."
'...'
```

### Flexible Literal

The literal value matches depending on [the configuration](#flexible-literal-configuration). The delimiter for this type is the *Grave accent (U+0060)* <code>&#96;</code>.


```
`...`
```

## Sequence Rule

### Conjunction sequence (AND)

Every rule must match in the same order to consider the sequence matched.

```
rule1 rule2 rule3 ... ruleN
```

### Disjunction sequence (OR)

Only one rule must match to consider the sequence matched.

```
rule1 | rule2 | ... ruleN
```

## Group Rule

### Equivalent Group

The inner rule must match to consider the group matched. This rule is specially important for sequences.

```
( rule )
```

### Complement Group (NOT)

The inner rule **must NOT** match to consider the group matched.

```
(! rule )
```

## Quantification Rules

### Zero or one

The rule is optional and matched at most once.

`rule?`

### Zero or more

The rule will be matched zero or more times.

```
rule*
```

### One or more

The rule will be matched one or more times.

```
rule+
```

### Custom repetition

The rule will be matched according to the number of times described by the parameters.

```
rule{N}      # exactly N times
rule{N,}     # N or more times
rule{N,M}    # at least N times, but not more than M times
```

## Reference Rule

The rule to be evaluated will be searched in the context using the specified name. If the rule is not defined an error will be thrown.

```
name
```

# Configuration

The default value for all configurations is `false`.

## Flexible Literal Configuration

| Key | Description
|---|---
|`FLEX_CASE_SENSITIVE`| Considers the lowercase and uppercase version of a letter as different.
|`FLEX_COLLAPSE_WHITESPACE`| Considers all continuous whitespace-classified characters as a single *Space (U+0020)*.

# Appendix 1

## Name Syntax

In the Grammar Language several elements can have or require a name. All names can be built using following syntax:

- If the name doesn't contain [whitespaces](#whitespace) or a [special character](#special-characters), it can be written just as it is. Examples:

```
LastName
create_table
404
tH15%15$w31rD
```

- If the name contains whitespaces it must be written as a delimited string, valid delimiters are only *Apostrophe (U+0027)* `'` and *Quotation mark (U+0022)* `"`.

```
'First name'
"= :oh why?: ="
'1+1'
"stillValid"
```

From the point of view of the extensibility of the Grammar Language, it is a good practice always use the delimited string way for names with symbols other than *Low line (U+005F)* `_`, *Basic Latin Alphabet* and *Basic Latin Digits*.

## Special Characters

The following characters are considered special because they have a meaning in the Grammar Language:

- *Plus sign (U+002B)* `+`
- *Colon (U+003A)* `:`
- *Equal sign (U+003D)* `=`
- `?`
- `*`
- `+`
- `(`
- `)`
- `#`
- `@`
- ...

## Delimited String

Delimited strings are used in several ways in the Grammar Language. They are built starting with a delimiter character, the string ends when another delimiter character is found considering the exceptions in the next paragraphs. The resulting characters between the delimiters conforms the value of the string.

Following character sequences can be used inside the delimiters to escape the specific character:

- `\"` → *Quotation mark (U+0022)*
- `\'` → *Apostrophe (U+0027)*, 
- <code>&#92;&#96;</code> → *Grave accent (U+0060)*
- `\\` → *Backslash (U+005C)*
- `\/` → *Slash (U+002F)*
- `\b` → *Backspace (U+0008)*
- `\f` → *Form feed (U+000C)*
- `\n` → *Line feed (U+000A)*
- `\r` → *Carriage return (U+000D)*
- `\t` → *Horizontal tab (U+0009)*
- `\u` + 4 hexadecimal digits → corresponding Unicode character

To avoid unexpected results introduced by the operating system, following unescaped characters can't be used inside the delimiters: *Line feed (U+000A)* and *Carriage return (U+000D)*.

## Whitespace

The whitespaces can be placed in any amount between most characters. The blocks of code used among the [Grammar Language](#grammar-language) section only add whitespaces when is possible.

The recognized whitespaces are: _Space_ (`U+0020`), _Horizontal tab_ (`U+0009`), _Line feed_ (`U+000A`) and _Carriage return_ (`U+000D`). All other whitespace characters defined in Unicode are considered illegal.

# Appendix 2: Examples

## String Property Example

**Rule:**

```
<username: alphanum+> ('@' <domain: alphanum+ ('.' alphanum+)+>)?
```

**Pseudocode:**

```javascript
rule.eval('johann85@example.com')
{ 'username': 'johann85', 'domain': 'example.com' }

rule.eval('George85') 
{ 'username': 'George85' }

rule.eval('antonio78@') 
// error, it doesn't match
```

## Boolean Property Example

**Rule:**

```
alphanum+ blanks alphanum+
	blanks (<isNotNull:? "NOT" blanks "NULL"> | <isNotNull:! "NULL">)
	(blanks <isPrimaryKey:? "PRIMARY" blanks "KEY">)?
```

**Pseudocode:**

```javascript
eval("id INT NOT NULL PRIMARY KEY")
{ "isNotNull": true, "isPrimaryKey": true }

eval("code INT NOT NULL")
{ "isNotNull": true }

eval("description INT NULL")
{ "isNotNull": false }
```

## Sequence Example

**Example:**

```
alpha+ whitespace  "=" whitespace digit+
```

...

# Appendix 3: Quick Reference

...
