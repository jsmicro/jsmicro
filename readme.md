# JSMicro

A wrapper of all JSMicro Modules.

## Modules:

* [**jsmicro-foreach**](https://github.com/jsmicro/foreach)
* [**jsmicro-is-arguments**](https://github.com/jsmicro/is-arguments)
* [**jsmicro-is-array**](https://github.com/jsmicro/is-array)
* [**jsmicro-is-boolean**](https://github.com/jsmicro/is-boolean)
* [**jsmicro-is-date**](https://github.com/jsmicro/is-date)
* [**jsmicro-is-defined**](https://github.com/jsmicro/is-defined)
* [**jsmicro-is-empty**](https://github.com/jsmicro/is-empty)
* [**jsmicro-is-error**](https://github.com/jsmicro/is-error)
* [**jsmicro-is-function**](https://github.com/jsmicro/is-function)
* [**jsmicro-is-null**](https://github.com/jsmicro/is-null)
* [**jsmicro-is-number**](https://github.com/jsmicro/is-number)
* [**jsmicro-is-object**](https://github.com/jsmicro/is-object)
* [**jsmicro-is-regexp**](https://github.com/jsmicro/is-regexp)
* [**jsmicro-is-string**](https://github.com/jsmicro/is-string)

## Browser Usage

```bash
bower install --save jsmicro
```

```html
<script type="text/javascript" src="bower_components/jsmicro-is-string/index.js">
<script type="text/javascript" src="bower_components/jsmicro-is-function/index.js">
<script type="text/javascript">
    var obj = function() {};
    var str = '200';

    // Available in the window object.
    isFunction(obj);      // true
    isFunction(str);      // false
    isString(str);   // true
</script>
```

## NodeJS Usage

```bash
npm install --save jsmicro
```

```js
const $ = require('jsmicro');

// Available in the global object.
isFunction(function() {}); // true
isString('23322333'); // true
isNumber(23234); // true

// Also available in the export object.
$.isFunction(function() {}); // true
$.isString('23322333'); // true
$.isNumber(23333); // true
```

## Changelogs

#### **`v1.0.1 - May 21, 2016`**

* Added .npmignore

#### **`v1.0.0 - May 21, 2016`**

* Initial release.

### [The MIT License (MIT)](https://mahdaen.mit-license.org/)
