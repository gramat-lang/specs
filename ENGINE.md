# Engine

## Current Object

## Arrays

- If the property is not defined yet, it will be initialized as an array.
- If the property is not an array, depending on [the settings](SETTINGS.md) it could either be converted to an array or throw an error.
- If the property is already an array, the item is simply added.
- Since the arrays are not hard typed, a single array can contain any kind of values.

## Declaration Rules

## Referencing Rules

If the engine detects an undefined expression an error will be thrown.

## Processing Templates

## Settings

The default value for all configurations is `false`.

#### Flexible Character Sequence

| Key | Description
|---|---
|`FLEX_CASE_SENSITIVE`| Considers the lowercase and uppercase version of a letter as different.
|`FLEX_COLLAPSE_WHITESPACE`| Considers all continuous whitespace-classified characters as a single *Space (U+0020)*.
