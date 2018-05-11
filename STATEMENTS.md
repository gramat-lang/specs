# Statements

The grammar is conformed by a finite number of rules. The rules are defined using a language similar to the regular expressions of most programming languages but adapted to describe a collection of name/value pairs (_map_ in this document).

### Rule Declaration

It is possible to give a name to a rule and make reference later. Considerations:

- There cannot be two rules with the same name.
- The names follow the [name syntax](#name-syntax).

```
name = rule ;
```

## Template Declaration

A template takes one or more parameters to produce another rule. This is specially util to avoid repeat patterns across the grammar.

```
name [ param1 , param2 , ...paramN ] = rule ;
```

- `name` is the name of the template. It must follow the [name syntax](#) and be unique.
- `param1 , param2 , ...paramN` represents a comma separated list of names which are the parameters of the function.
- `rule` can be any rule definition. The parameter names are available here to use them anywhere as replacements. The name collisions are solved in the order of first the local and then the global.

### Documentation

It is possible to add single-line comments in any part of the definition. A comment starts with `#` and ends with the *Line feed (U+000A)*.

```
# this is a comment
```

### Rules

A rule by itself is able to capture text and generate a map after being evaluated.



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

- If the name contains whitespaces it must be written as a delimited string, valid delimiter is *Grave accent (U+0060)* <code>&#96;</code>.

```
`First name`
`= :oh why?: =`
`1+1`
`stillValid`
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
