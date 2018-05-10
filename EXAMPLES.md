# Examples

## Declaration

*TODO*

## Documentation

*TODO*

## String Property

**Rule:**

```
<username: alphanum+> ('@' <domain: alphanum+ ('.' alphanum+)+>)?
```

**Pseudocode:**

```javascript
rule.eval('johann85@example.com')
{ 'username': 'johann85', 'domain': 'example.com' }

rule.eval('George85') 
{ 'username': 'George85' }

rule.eval('antonio78@') 
// error, it doesn't match
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
