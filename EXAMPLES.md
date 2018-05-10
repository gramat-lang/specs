
# Appendix 2: Examples

## String Property Example

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

## Boolean Property Example

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

## Sequence Example

**Example:**

```
alpha+ whitespace  "=" whitespace digit+
```

...

# Appendix 3: Quick Reference

...
