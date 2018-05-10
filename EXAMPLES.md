# Examples

## Declaration

Following block declares three rules named: `regular_schemas`, `secure_schemas` and `schemas`.

```
regular_schemas = `http` | `ftp`;
secure_schemas = regular_schemas `s`;
schemas = secure_schemas | regular_schemas;
```

## Documentation

*TODO*

## String Property

#### Grammar

```
<username: alphanum+> ('@' <domain: alphanum+ ('.' alphanum+)+>)?
```

#### Evaluations

```javascript
// input:
'johann85@example.com'
// output:
{ 'username': 'johann85', 'domain': 'example.com' }

// input:
'George85'
// output:
{ 'username': 'George85' }

// input:
'antonio78@'
// output: error, it doesn't match
```

## Number Property

*TODO*

## Boolean Property

**Rule:**

```
alphanum+ blanks alphanum+
	blanks (<isNotNull:? "NOT" blanks "NULL"> | <isNotNull:! "NULL">)
	(blanks <isPrimaryKey:? "PRIMARY" blanks "KEY">)?
```

**Pseudocode:**

```javascript
eval("id INT NOT NULL PRIMARY KEY")
{ "isNotNull": true, "isPrimaryKey": true }

eval("code INT NOT NULL")
{ "isNotNull": true }

eval("description INT NULL")
{ "isNotNull": false }
```

## Null Property

*TODO*

## Object Property

*TODO*

## Array Property

*TODO*

## Strict Literals

*TODO*

## Flexible Literals

## Conjunction Sequences

**Example:**

```
alpha+ whitespace  "=" whitespace digit+
```

## Disjunction Sequences

*TODO*

## Equivalent Group

*TODO*

## Complement Group

*TODO*

## Zero or one

*TODO*

## Zero or more

*TODO*

## One or more

*TODO*

## Custom repetitions

*TODO*

## References

*TODO*
