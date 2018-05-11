# Expressions

The expressions are defined using a language similar to the regular expressions of most programming languages but adapted to describe a collection of name/value pairs (_map_ in this document).

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

The literal value matches depending on [the configuration](#flexible-literal-configuration). The delimiter for this type is the *Tilde (U+007E)* `~`.


```
~...~
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

## Template Call Rule

Calls an existing function passing the specified rules as arguments to be processed and the resulting rule is evaluated.

```
name [ name1 , name2 , ...nameN ]
```

- `name` must be the name of an existing template.
- `name1 , name2 , ...nameN` represents a comma separated list of literals.
