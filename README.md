# uniquevalues

Generate random strings and numbers from from strings or group of numbers. Good for generating unique ids and strings.

## Installation

```shell
npm install uniquechars
```

## Usage

### 1. To get unique random strings

***With ES6 module syntax***

To get unique random strings without parameters

```JavaScript
import { UNIQUE_STRING } from 'uniquechars'

console.log(UNIQUE_STRING())
// ⇨ 'QB|941@D#XK&5YD7' for example
```

To get unique random strings with parameters

```JavaScript
import { UNIQUE_STRING } from 'uniquechars'

console.log(UNIQUE_STRING(string, length))
// ⇨ 'QB|941@D#XK&5YD7' for example
```

***With CommonJS syntax***
To get unique random strings without parameters

```JavaScript
let { UNIQUE_STRING } = require('uniquechars')

console.log(UNIQUE_STRING())
// ⇨ 'QB|941@D#XK&5YD7' for example
```

To get unique random strings with parameters

```JavaScript
let { UNIQUE_STRING } = require('uniquechars')

console.log(UNIQUE_STRING(string, length))
// ⇨ 'QB|941@D#XK&5YD7' for example
```

*String must be a string data type and length must be a number data type.*

### 2. To get unique random number

***With ES6 module syntax***

To get unique random strings without parameters

```JavaScript
import { UNIQUE_NUMBER } from 'uniquechars'

console.log(UNIQUE_STRING())
// ⇨ '1098276235427165' for example
```

To get unique random strings with parameters

```JavaScript
import { UNIQUE_NUMBER } from 'uniquechars'

console.log(UNIQUE_STRING(string, length))
// ⇨ '1098276235427165' for example
```

***With CommonJS syntax***

To get unique random strings without parameters

```JavaScript
let { UNIQUE_NUMBER } = require('uniquechars')

console.log(UNIQUE_STRING())
// ⇨ '1098276235427165' for example
```

To get unique random strings with parameters

```JavaScript
let { UNIQUE_NUMBER } = require('uniquechars')

console.log(UNIQUE_STRING(number, length))
// ⇨ '1098276235427165' for example
```

*Number must be a number data type and length must be a number data type.*

### 3. To get unique random password

***With ES6 module syntax***

To get unique random password without parameters

```JavaScript
import { UNIQUE_PASS } from 'uniquechars'

console.log(UNIQUE_PASS())
// ⇨ 'QB|941@D#XK&5YD7' for example
```

To get unique random password with parameters

```JavaScript
import { UNIQUE_PASS } from 'uniquechars'

console.log(UNIQUE_PASS(string, length))
// ⇨ 'QB|941@D#XK&5YD7' for example
```

***With CommonJS syntax***

To get unique random password without parameters

```JavaScript
let { UNIQUE_PASS } = require('uniquechars')

console.log(UNIQUE_PASS())
// ⇨ 'QB|941@D#XK&5YD7' for example
```

To get unique random password with parameters

```JavaScript
let { UNIQUE_PASS } = require('uniquechars')

console.log(UNIQUE_PASS(string, length))
// ⇨ 'QB|941@D#XK&5YD7' for example
```

__String must be a string data type and length must be a number data type.__

## Default parameters

```JavaScript
console.log(UNIQUE_STRING(string, length))
// ⇨ 'QB|941@D#XK&5YD7' for example

string = "#@%&*!(){}[]=_+|/\/ABCDEFGHIJKLMOPQRSTUVWXYZ1234567890"

length = 16
```

```JavaScript
console.log(UNIQUE_NUMBER(number, length)) // ⇨ '1098276235427165' for example

number = "1234567890"


length = 16
```

```JavaScript
console.log(UNIQUE_PASS(string, length)) // ⇨ 'QB|941@D#XK&5YD7' for example


string = "#@%&*!(){}[]=_+|/\/ABCDEFGHIJKLMOPQRSTUVWXYZ1234567890"


length = 16
```

## Author

[Valentine Elum](https://twitter.com/vahlcode)

## License

MIT LICENSE
