---
title: Gramat
---

# Gramat

Gramat is a language for describing complex grammar rules that can match and capture data structures.

##### Grammar Example: url.gmt

```gramat
Query = <object Query:
  { <set key-value:
    {1 !("=" | "&" | "#") },
    [ <ignore: "="> { !("&" | "#") } ] >
  / {1 "&" } } { "&" } >

Url = <object:
  [ <set scheme: {1 !":" }> ":" ]
  [ "//" [ <set userinfo: { !"@" }> "@" ]
    <set host: {1 !(":" | "/") }>
    [ ":" <set port: {1 !"/" }> ] ]
  <set path: {1 !"?" }>
  [ "?" <set query: Query> ]
  [ "#" <set fragment: { !$ }> ] > $
```

##### Test Example

```gramat
@import 'url.gmt'

@test 'http://www.google.com/search?q=gramat#search' Url {
    scheme: 'http'
    host: 'www.google.com'
    path: '/search'
    query: { 'q': 'gramat' }
    fragment: 'search'
}
```
