# Gramat Syntax

- [Identifiers](#identifiers)
- [Literals](#literals)
  - [Strings](#strings)
  - [Numbers](#numbers)
- [Operators](#operators)
- [Comments](#comments)
- [Whitespace](#whitespace)

## Identifiers

An identifier is a sequence of characters which has an special mening for the engine. Syntax:

- If the sequence doesn't contain [whitespaces](#whitespaces) or a [special character](#special-characters), it can be written just as it is. Examples:

```
LastName
create_table
404
tH15%15$w31rD
```

- If the sequence contains whitespaces it must be written as a *Grave accents* <code>&#96;</code> [delimited string](APPENDIX.md#delimited-string). Examples:

```
`First name`
`= :?: =`
`1+1`
`stillValid`
```

It is a good practice always use the delimited-string way for identifiers with characters other than *Low line* (`_`), *Basic Latin Alphabet* and *Basic Latin Digits*.

## Literals

A literal is a typed value which have no other meaning than its actual value.

### Strings

A delimited string represents a piece of text with a specific meaning, the delimiter depends on the mening, they are used for:

- [Text Tokens](#text-tokens)
- [Strict Character Sequence](EXPRESSIONS.md#strict-character-sequence)
- [Flexible Character Sequence](EXPRESSIONS.md#flexible-character-sequence)

Delimited strings are built starting with a delimiter character, the string ends when another delimiter character is found considering the exceptions in the next paragraphs. The resulting characters between the delimiters conforms the value of the string.

It can be a sequence of any character except the string delimiter, *Line feed* and *Carriage return* (last two to avoid unexpected results introduced by the operating system).

### Numbers

An integer token represents a positive number without decimals used for defining the limits in the repetition expressions:

- [Exact Repetition](EXPRESSIONS.md#exact-repetition)
- [Minimum Repetition](EXPRESSIONS.md#minimum-repetition)
- [Variable Repetition](EXPRESSIONS.md#variable-repetition)

Syntax:

- Any sequence of one or more *Basic Latin Digits* is considered an integer token. Examples:

```
1
99
00000
0123456789
```

## Operators

The following characters are considered special because they have a meaning in the Gramat Language:

<table>
  <thead>
    <tr>
      <th>Character</th>
      <th>Usage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><em>Exclamation mark</em> (<code>!</code>)</td>
      <td>
        <ul>
          <li>After a <em>Left parenthesis</em> <code>(!</code>, indicates a <a href="EXPRESSIONS.md#complement-group">Complement Group</a>.</li>
          <li>After a <em>Colon</em> <code>:!</code>, indicates a <a href="EXPRESSIONS.md#false-property">False Property</a>.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><em>Quotation mark</em> (<code>"</code>)</td>
      <td>
        <ul>
          <li>Opens and closes a <a href="EXPRESSIONS.md#strict-character-sequence">Strict Character Sequence</a>.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><em>Number sign</em> (<code>#</code>)</td>
      <td>
        <ul>
          <li>After a <em>Colon</em> <code>:#</code>, indicates a <a href="EXPRESSIONS.md#number-property">Number Property</a>.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><em>Apostrophe</em> (<code>'</code>)</td>
      <td>
        <ul>
          <li>Opens and closes a <a href="EXPRESSIONS.md#strict-character-sequence">Strict Character Sequence</a>.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><em>Left parenthesis</em> (<code>(</code>)</td>
      <td>
        <ul>
          <li>Opens an <a href="EXPRESSIONS.md#equivalent-group">Equivalent Group</a> or if followed by an <em>Exclamation mark</em> <code>(!</code> a <a href="#complement-group">Complement Group</a>.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><em>Right parenthesis</em> (<code>)</code>)</td>
      <td>
        <ul>
          <li>Can close either an <a href="EXPRESSIONS.md#equivalent-group">Equivalent Group</a> or a <a href="#complement-group">Complement Group</a>.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><em>Asterisk</em> (<code>*</code>)</td>
      <td>
        <ul>
          <li>After an expression, indicates a <a href="EXPRESSIONS.md#zero-or-more-repetition">Zero or More Repetition</a>.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><em>Plus sign</em> (<code>+</code>)</td>
      <td>
        <ul>
          <li>After an expression, indicates a <a href="EXPRESSIONS.md#one-or-more-repetition">One or More Repetition</a>.</li>
          <li>Before a <em>Colon</em> <code>+:</code>, indicates an <a href="EXPRESSIONS.md#array-property">Array Property</a>.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><em>Comma</em> (<code>,</code>)</td>
      <td>
        <ul>
          <li>Separates the parameters of a <a href="STATEMENTS.md#template-declaration">Template Declaration</a>.</li>
          <li>Separates the arguments of a <a href="STATEMENTS.md#template-call">Template Call</a>.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><em>Slash</em> (<code>/</code>)</td>
      <td>
        <ul>
          <li>Before an <em>Asterisk</em> <code>/*</code>, opens a <a href="STATEMENTS.md#comments">Comment</a>.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><em>Colon</em> (<code>:</code>)</td>
      <td>
        <ul>
          <li>In a <a href="EXPRESSIONS.md#plain-property">Plain Property</a> and <a href="EXPRESSIONS.md#object-property">Object Property</a>, separates the name from the expression.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><em>Semicolon</em> (<code>;</code>)</td>
      <td>
        <ul>
          <li>Ends a <a href="STATEMENTS.md">Statement</a>.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><em>Less-than sign</em> (<code><</code>)</td>
      <td>
        <ul>
          <li>Opens a <a href="EXPRESSIONS.md#plain-property">Plain Property</a>.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><em>Equal sign</em> (<code>=</code>)</td>
      <td>
        <ul>
          <li>Separates the name from the expression in a <a href="STATEMENTS.md#expression-declaration">Expression Declaration</a>.</li>
          <li>Separates the name and the parameters from the expresion in a <a href="STATEMENTS.md#template-declaration">Template Declaration</a>.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><em>Greater-than sign</em> (<code>></code>)</td>
      <td>
        <ul>
          <li>Closes a <a href="EXPRESSIONS.md#plain-property">Plain Property</a>.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><em>Question mark</em> (<code>?</code>)</td>
      <td>
        <ul>
          <li>After an expression, indicates a <a href="EXPRESSIONS.md#zero-or-one-repetition">Zero or One Repetition</a>.</li>
          <li>After a <em>Colon</em> <code>:?</code>, indicates a <a href="EXPRESSIONS.md#true-property">True Property</a>.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><em>Commercial at</em> (<code>@</code>)</td>
      <td>
        <ul>
          <li>After a <em>Colon</em> <code>:@</code>, indicates a <a href="EXPRESSIONS.md#null-property">Null Property</a>.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><em>Left Square Bracket</em> (<code>[</code>)</td>
      <td>
        <ul>
          <li>Opens the parameter declaration in a <a href="STATEMENTS.md#template-declaration">Template Declaration</a>.</li>
          <li>Opens the arguments list of a <a href="EXPRESSIONS.md#template-call">Template Call</a>.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><em>Right Square Bracket</em> (<code>]</code>)</td>
      <td>
        <ul>
          <li>Closes the parameter declaration in a <a href="STATEMENTS.md#template-declaration">Template Declaration</a>.</li>
          <li>Closes the arguments list of a <a href="EXPRESSIONS.md#template-call">Template Call</a>.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><em>Grave accent</em> (<code>`</code>)</td>
      <td>
        <ul>
          <li>Opens and closes a <a href="#text-tokens">Text Token</a>.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><em>Left Curly Bracket</em> (<code>{</code>)</td>
      <td>
        <ul>
          <li>Opens an <a href="EXPRESSIonS.md#object-property">Object Property</a>.</li>
          <li>Opens an <a href="EXPRESSIONS.md#exact-repetition">exact</a>, <a href="EXPRESSIONS.md#minimum-repetition">minimum</a> or <a href="EXPRESSIONS.md#variable-repetition">variable</a> repetition.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><em>Vertical bar</em> (<code>|</code>)</td>
      <td>
        <ul>
          <li>Between two expressions, indicates a <a href="EXPRESSIONS.md#disjunction-sequence">Disjunction Sequence</a>.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><em>Right Curly Bracket</em> (<code>}</code>)</td>
      <td>
        <ul>
          <li>Closes an <a href="EXPRESSIonS.md#object-property">Object Property</a>.</li>
          <li>Closes an <a href="EXPRESSIONS.md#exact-repetition">exact</a>, <a href="EXPRESSIONS.md#minimum-repetition">minimum</a> or <a href="EXPRESSIONS.md#variable-repetition">variable</a> repetition.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><em>Tilde</em> (<code>~</code>)</td>
      <td>
        <ul>
          <li>Opens and closes a <a href="EXPRESSIONS.md#flexible-character-sequence">Flexible Character Sequence</a>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Comments

Comments can be added in any part where a whitespace is accepted. The comments start with `/*` and end with `*/`, there is no way to escape the closing symbol but it can contain any other character sequence.

```
/* this is a comment */
```

## Whitespace

The whitespaces can be placed in any amount between most characters. The recognized whitespaces are:

- *Space*
- *Horizontal tab*
- *Line feed* and
- *Carriage return*

All other whitespace characters defined in Unicode are considered illegal.
