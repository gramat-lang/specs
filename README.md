# Gramat

Gramat is a language for parsing a collection of name/value pairs, currently available to use it in ~~Java~~ and ~~JavaScript~~.

## Getting Started

Take a look to the [TL;DR](TLDR.md) and this Gramat example:

```
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

- [Language basics](LANGUAGE.md)
    - [Statements](STATEMENTS.md)
    - [Expressions](EXPRESSIONS.md)
- [Examples](EXAMPLES.md)
- [Standard Engine](ENGINE.md)
    - [Settings](SETTINGS.md)
- [Appendix](APPENDIX.md)

## License

*Work in progress*
