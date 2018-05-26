# Gramat

Gramat is a language for creating grammar and parsing a collection of name/value pairs, currently available to use it in ~~Java~~ and ~~JavaScript~~.

> Please consider Gramat is work in progress, to close the first version, it is pending to describe the minimum requirements for an implementation, document the settings, complete the examples, and fix some paragraphs. No major changes are expected to the language itself.

## Getting Started

Take a look to the [Quick Start](QUICKSTART.md) and this Gramat example:

```c
/* Practical URL parser */
entry = <name: (! "=" | "&" | "#")* > ("=" <value: (! "&" | "#")* >)?;
url = <baseUrl: ((! ":")+ "://")? (! "/")* >
    <path: (! "?")* >
    ( {query +: entry} ("&" {query +: entry})* "&"? )?
    <fragment: "#" any*>?;
```

Evaluation of the `url` expression in the host language:

```javascript
result = url.eval('http://bakasoft.org/gramat?ref=github&code=201805#top');
```

Result of the evaluation:

```json
{
    "baseUrl": "http://bakasoft.org",
    "path": "/gramat",
    "query": [
        { "name": "ref", "value": "github" },
        { "name": "code", "value": "201805" }
    ],
    "fragment": "#top"
}
```

## Documentation

1. [Features](FEATURES.md)
    1. [Regular Expressions](FEATURES.md#regular-expressions)
    1. [Property Expressions](FEATURES.md#property-expressions)
    1. [Declarations](FEATURES.md#declarations)
    1. [Directives](FEATURES.md#directives)
1. [Syntax](SYNTAX.md)
    1. [Identifiers](SYNTAX.md#identifiers)
    1. [Literals](SYNTAX.md#literals)
    1. [Operators](SYNTAX.md#operators)
    1. [Comments](SYNTAX.md#comments)
    1. [Whitespace](SYNTAX.md#whitespaces)
1. [Settings](SETTINGS.md)
1. [Engine](ENGINE.md)
1. [Appendix](APPENDIX.md)
    1. [Referenced Characters](APPENDIX.md#referenced-characters)
    1. [Delimited Strings](APPENDIX.md#delimited-strings)

## License

*Work in progress*
