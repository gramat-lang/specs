---
title: Escaped Characters
---

### Escaped Characters

Some characters can be *escaped* where indicated by using the backslash `\`, in this way the unescaped result will be included in the actual content:

```plain
\\     → Backslash       \ 0x5C
\"     → Quotation mark  " 0x22
\'     → Apostrophe      ' 0x27
\'     → Grave accent    ` 0x60
\t     → Horizontal tab    0x09
\n     → Line feed         0x10
\r     → Carriage return   0x13
\s     → Space             0x20
\uHHHH → The corresponding Unicode character
         for the hexadecimal number HHHH.
```
