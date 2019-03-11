# magic-square-generation
Un module Node.js pour générer un carré magique
## Installation 
```sh
npm install magic-square-generation --save
```
## Usage
### Javascript
```javascript
var generator = require('magic-square-generation').MagicSquare;
var square = new generator(3); // 3 => Dimension du carré 3*3
square.generate();
```
```sh
Output should be => Magic square :  [ [ 2, 7, 6 ], [ 9, 5, 1 ], [ 4, 3, 8 ] ]
```
### TypeScript
```typescript
import { MagicSquare } from 'magic-square-generation';
```