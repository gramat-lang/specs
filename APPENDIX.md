# Appendix 1

## Referenced Characters

| Name                             | Unicode | Sample
| -------------------------------- | ------- | ---
| Backspace                        | U+0008  |
| Horizontal tab                   | U+0009  |
| Line feed                        | U+000A  |
| Form feed                        | U+000C  |
| Carriage return                  | U+000D  |
| Space                            | U+0020  | ` `
| Quotation mark                   | U+0022  | `"`
| Apostrophe                       | U+0027  | `'`
| Plus sign                        | U+002B  | `+`
| Slash                            | U+002F  | `/`
| Basic Latin Digits               | U+0030  to U+0039 | `0` .. `9`
| Colon                            | U+003A  | `:`
| Equal sign                       | U+003D  | `=`
| Basic Latin Alphabet (uppercase) | U+0041  to U+005A | `A` .. `Z`
| Backslash                        | U+005C  | `\`
| Low line                         | U+005F  | `_`
| Grave accent                     | U+0060  | <code>&#96;</code>
| Basic Latin Alphabet (lowercase) | U+0061  to U+007A | `a` .. `z`
| Tilde                            | U+007E  | `~`

## Delimited Strings

Delimited strings are built starting with a delimiter character, the string ends when another delimiter character is found considering the exceptions in the next paragraphs. The resulting characters between the delimiters conforms the value of the string.

It can be a sequence of any character except the string delimiter, *Line feed* and *Carriage return* (last two to avoid unexpected results introduced by the operating system).

Following character sequences can be used inside the delimiters to escape the specific character:

- `\"` → *Quotation mark* (`"`)
- `\'` → *Apostrophe* (`'`)
- <code>&#92;&#96;</code> → *Grave accent* (<code>&#96;</code>)
- `\\` → *Backslash* (`\`)
- `\/` → *Slash* (`/`)
- `\b` → *Backspace*
- `\f` → *Form feed*
- `\n` → *Line feed*
- `\r` → *Carriage return*
- `\t` → *Horizontal tab*
- `\u` + 4 hexadecimal digits → corresponding Unicode character

