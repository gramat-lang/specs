# Statements

Complex grammar can be constructed easily by using statements. An statement tells to the [engine](README.md#engine) how to build the grammar step by step. In the [Gramat Language](README.md#gramat-language) all statements end with a semicolon `;`.

## Expression Declaration

Registers an [expression](README.md#expression) in the engine with a [valid name](#name-syntax).

*name* `=` *expression* `;`

## Template Declaration

Registers a [template](README.md#template) in the engine with a valid name. 

*name* `[` *param1* `,` *param2* `,` *...paramN* `]` `=` *rule* `;`

## Comments

It is possible to add single-line comments in any part of the definition. A comment starts with `#` and ends with the *Line feed (U+000A)*.

```
# this is a comment
```

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
