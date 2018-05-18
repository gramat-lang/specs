# Examples

## Rule Declaration

Following block declares three rules named: `regular_schemas`, `secure_schemas` and `schemas`.

```
regular_schemas = `http` | `ftp`;
secure_schemas = regular_schemas `s`;

schemas = secure_schemas | regular_schemas
	| `custom_schema`;
```

## Templates

### Example 1

This block declares a template to create *wrappings* with an *open* and *close* marks. Then, the template is used to construct some wraps and use them in a rule.

```
wrapping(OPEN, CLOSE) = OPEN (! CLOSE )* CLOSE;

bracketWrap = wrapping(`"["`, `"]"`);
angleWrap = wrapping(`"<"`, `">"`);
items = ws* (<items +: brackedWrap | angleWrap> ws*)*
```

Running:

```javascript
items.eval('<>[]<>')
    { items: [ '<>', '[]', '<>' ] }

items.eval(' <item1> [item2] [item3] <item4> ')
    { items: [ '<item1>', '[item2]', '[item3]', '<item3>' ] }

items.eval('[item1> <item2] <item3] [item4>')
	// error, it doesn't match
```

### Example 2

Following block uses a template to declare a pattern of an attribute definition and reuses it to create attributes in a simpler way.

```
refAttr[NAME] = ("`" <NAME: (!"`")> "`") | <NAME: alpha ("_" | alphanum)* >;
tableRef = (refAttr[`schema`] ws* "." ws*)? refAttr["table"];
columnRef = tableRef ws* "." ws* refAttr["column"];
```

Running:

```javascript
columnRef.eval('public.User.id')
	{ schema: 'public', table: 'User', column: 'id' }

columnRef.eval('`Company`\n.`code`')
	{ table: 'Company', column: 'code' }

columnRef.eval('`dbo.Invoice.number`') // error
```





## Documentation

```
# Gramat currently only supports single-line comments.
full_name = # They can be inserted in
	letter+ # any place where a whitespace is expected
	# The comment ends where the line ends
	( space+ letter+ #
	# (that is the \n character)
	);
# .
```

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

# Example 1

```c

```
