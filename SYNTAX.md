# Gramat Syntax

- [Gramat Syntax](#gramat-syntax)
  - [Identifiers](#identifiers)
  - [Literals](#literals)
  - [Operators](#operators)
  - [Comments](#comments)
  - [Whitespaces](#whitespaces)

## Identifiers

An identifier is a sequence of characters which has an special mening for the engine. Syntax:

| Syntax | Example
| ------ | -------
| If the sequence doesn't contain [whitespaces](#whitespaces) or an [operator](#operators), it can be written just as it is. | <pre>LastName<br/>create_table<br/>404</pre>
| If the sequence contains whitespaces it must be written as a *Grave accent* (<code>&#96;</code>) [delimited string](APPENDIX.md#delimited-strings). | <pre>&#96;First name&#96;<br/>&#96;&lt;name: alpha+ &gt;&#96;<br/>&#96;1+1&#96;</pre>

It is a good practice always use the delimited-string way for identifiers with characters other than *Low line* (`_`), *Basic Latin Alphabet* and *Basic Latin Digits*.

## Literals

A literal is a typed value which have no other meaning than its actual value.

| Syntax | Example
| ------ | -------
| **String** <br/> [Delimited string](APPENDIX.md#delimited-strings) representing a sequence of characters. | <pre>"text"<br/>'text'</pre>
| **Number** <br/> One or more continuous *Basic Latin Digits*. | <pre>123<br/>00000</pre>
| **Boolean** <br/> Could be either `true` or `false`. | <pre>true<br/>false</pre>

## Operators

The following characters are considered special because they have a meaning in the Gramat Language:


- *Exclamation mark* (`!`)
- *Quotation mark* (`"`)
- *Number sign* (`#`)
- *Apostrophe* (`'`)
- *Left parenthesis* (`(`)
- *Right parenthesis* (`)`)
- *Asterisk* (`*`)
- *Plus sign* (`+`)
- *Comma* (`,`)
- *Slash* (`/`)
- *Colon* (`:`)
- *Semicolon* (`;`)
- *Less-than sign* (`<`)
- *Equal sign* (`=`)
- *Greater-than sign* (`>`)
- *Question mark* (`?`)
- *Commercial at* (`@`)
- *Left Square Bracket* (`[`)
- *Right Square Bracket* (`]`)
- *Grave accent* (<code>&#96;</code>)
- *Left Curly Bracket* (`{`)
- *Vertical bar* (`|`)
- *Right Curly Bracket* (`}`)
- *Tilde* (`~`)

## Comments

Comments can be added in any part where a whitespace is accepted. The comments start with `/*` and end with `*/`, there is no way to escape the closing symbol but it can contain any other character sequence.

```
/* this is a comment */
```

## Whitespaces

The whitespaces can be placed in any amount between most characters. The recognized whitespaces are:

- *Space*
- *Horizontal tab*
- *Line feed* and
- *Carriage return*

All other whitespace characters defined in Unicode are considered illegal.
