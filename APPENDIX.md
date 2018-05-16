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

## Escape Sequences

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
