*Work in progress, this file may be outdated...*

# API Spec

Since [Gramat](README.md) is designed to work in a host runtime, there is a minimum set of features and behaviors that are expected in any language-specific API implementation.

## Classes

A Gramat implementation is expected to have three classes: `Engine`, `Scope` and `Expression`. Only in object-oriented host languages makes sense to have classes, in other paradigms it should only be followed this separation of concerns.

### Engine

Represents the scope compiler.

#### Compile Scope

`compile(code: String): Scope`

#### Resolve Scope

`resolve(name: String): String`

### Scope

Represents the expression compiler.

#### Compile Expression

`compile(code: String): Expression`

#### Find Rule

`find(name: String): Expression`

#### Register Rule

`register(name: String, expression: Expression): Void`

### Expression

Can be evaluated and tested.

#### Evaluate

`eval(input: String): Map<String, Object>`

#### Test

`test(input: String): Boolean`

## Evaluating Expressions



### Current Object

*TODO: Explain what it means*

### Processing Arrays

- If the property is not defined yet, it will be initialized as an array.
- If the property is not an array, depending on [the settings](SETTINGS.md) it could either be converted to an array or throw an error.
- If the property is already an array, the item is simply added.
- Since the arrays are not hard typed, a single array can contain any kind of values.

### Processing Templates

*TODO: Explain how it works*

## Compiling Gramat Code

*TODO*

### Declaration Rules

*TODO*

### Referencing Rules

*TODO*

If the engine detects an undefined expression an error will be thrown.
