# Gramat Syntax

- [Gramat Syntax](#gramat-syntax)
  - [Identifiers](#identifiers)
  - [Literals](#literals)
  - [Operators](#operators)
  - [Comments](#comments)
  - [Whitespaces](#whitespaces)

## Identifiers

An identifier is a sequence of characters which has an special mening for the engine. Syntax:

- If the sequence doesn't contain [whitespaces](#whitespaces) or an [operator](#operators), it can be written just as it is. Examples:

```
LastName
create_table
404
tH15%15$w31rD
```

- If the sequence contains whitespaces it must be written as a *Grave accent* (<code>&#96;</code>) [delimited string](APPENDIX.md#delimited-strings). Examples:

```
`First name`
`= :?: =`
`1+1`
`stillValid`
```

It is a good practice always use the delimited-string way for identifiers with characters other than *Low line* (`_`), *Basic Latin Alphabet* and *Basic Latin Digits*.

## Literals

A literal is a typed value which have no other meaning than its actual value.

| Type    | Syntax | Examples
| ------- | ----------- | -------
| String  | [Delimited string](APPENDIX.md#delimited-strings) representing a sequence of characters. | <pre>"text"<br/>'text'<br/>~text~</pre>
| Number  | One or more continuous *Basic Latin Digits*. | <pre>1<br/>999<br/>00000</pre>
| Boolean | Could be either `true` or `false`. | <pre>true<br/>false</pre>

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
