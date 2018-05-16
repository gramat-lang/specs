# Gramat

Gramat is a language for parsing a collection of name/value pairs, currently available to use it in ~~Java~~ and ~~JavaScript~~.

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
        1. [Literals](FEATURES.md#literals)
        1. [Sequences](FEATURES.md#sequences)
        1. [Groups](FEATURES.md#groups)
        1. [Repetitions](FEAUTRES.md#repetitions)
    1. [Property Expressions](FEATURES.md#property-expressions)
        1. [Primitives](FEATURES.md#primitives)
        1. [Objects](FEATURES.md#objects)
        1. [Arrays](FEATURES.md#arrays)
    1. [Declarations](FEATURES.md#declarations)
        1. [Expressions](FEATURES.md#expressions)
        1. [Templates](FEATURES.md#templates)
    1. [Directives](FEATURES.md#directives)
        1. [Imports](FEATURES.md#imports)
1. [Syntax](SYNTAX.md)
    1. [Symbols](SYNTAX.md#symbols)
    1. [Constants](SYNTAX.md#constants)
    1. [Operators](SYNTAX.md#operators)
    1. [Comments](SYNTAX.md#comments)
    1. [Whitespace](SYNTAX.md#whitespace)
1. [Engine](ENGINE.md)
    1. [Settings](ENGINE.md#settings)
1. [Appendix](APPENDIX.md)
    1. [Referenced Characters](APPENDIX.md#referenced-characters)

## License

*Work in progress*
