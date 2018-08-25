# Vue Computed Validator

Vue.js form validation plugin that depends on the property not the HTML element on validating with no dependency and respect to Vue reactivity.


## Table of Contents

1.  [Documentation](#documentation)
    1.  [Installation](#installation)
    2.  [How To Use It?](#usage)
    3.  [Validation Rules](#rules)
    4.  [Helper Functions](#functions)
    5.  [Questions](#questions)


2.  [Support](#support)
4.  [License](#license)


## [Documentation](#documentation)

<a name="documentation"></a>

### Installation

<a name="installation"></a>

#### npm:

```shell
npm install vue-computed-validator --save
```

#### CDN:

```html
<!-- unpkg -->
<script src="https://unpkg.com/vue-computed-validator@latest"></script>
```


### How To Use It?

<a name="usage"></a>

First include it:

#### ES2015:

```javascript
import Vue from 'vue';
import VueComputedValidator from 'vue-computed-validator';

Vue.use(VueComputedValidator);
```

#### Script:

```html
<script src="path/to/vue.js"></script>
<script src="path/to/vue-computed-validator.js"></script>
<script>
Vue.use(VueComputedValidator);
</script>
```

Then in your component initialization lifecycle hook that you use like `beforeMount` or `created` put the `fieldsRules` object like:

```javascript
created: function () {
    this.fieldsRules = {
        email: ["isRequire", "isEmail"],
        password: ["isRequire", "isMinimum"],
        passwordConfirmation: ["isEqual"]
    };
}
```
The above code tells Vue Computed Validator general information about the fields that must care about and which rules must be implemented on each one. Here we tell Vue Computed Validator that there are three fields we want you to validate and these fields are `email`, `password`, and `passwordConfirmation` and tells it that the `email` must be required using `isRequire` rule and must be email using `isEmail` also the `password` is required and has a minimum requirements using `isMinimum` then finally the `passwordConfirmation` field must be equal to some value using `isEqual` rule.

Then in the `computed` properties section you give `Vue Computed Validator` the fields values using `fieldsValues` computed property like the following:

```javascript
computed: {
    fieldsValues: function () {
        return {
            email: [this.email],
            password: [this.password, 6],
            passwordConfirmation: [this.password, this.passwordConfirmation]
        };
    }
}
```
Here we tell Vue Computed Validator from where should it take the fields values for example here we tell it that the value for the password field that we set it earlier take it from `this.password` property and this property could be computed or a data member property or form any other possible way.

Here is what will be done for the password field, first `Vue Computed Validator` will implement the first rule that we set it earlier for this field which it `isRequire` rule this rule expect one parameter which is the value of the field and here we give it the value from `this.password` property and `Vue Computed Validator` will implement the second rule which is `isMinimum` and this rule expect two parameters the field value and the limit and here `Vue Computed Validator` give `isMinimum` rule `this.password` as a value and `6` as a limit so the field value must be at least `6` characters length in order to be valid.

**In the examples folder there is a working registration form sample you can take a look at it if you want.**

### Validation Rules

<a name="rules"></a>

> Vue Computed Validator does not have a lot of rules currently, however, please request any rule that you need and I'll add it ASAP with my pleasure.

- **isRequire**: This rule expects one parameter and returns true if the parameter has a value and false otherwise.

- **isEmail**: This rule expects one string parameter and returns true if the parameter is email and false otherwise.

- **isEqual**: This rule expects two parameters and returns true if the parameters are equal and false otherwise.

- **isIqMobile**: This rule expects one parameter and returns true if the parameter is Iraqi mobile number and false otherwise.

- **isIqZip**: This rule expects one parameter and returns true if the parameter is Iraqi zip code and false otherwise.

- **isMaximum**: This rule expects two parameters for example string or array for the first parameter and number for the second one and returns true if the first parameter has maximum that number of elements/characters and false otherwise.

    For example:
    ```javascript
        isMaximum(["Mohammed", 8]) //return true
        
        isMaximum([[1, 2, 3, 4], 2]) //return false
    ```

- **isMinimum**: This rule expects two parameters for example string or array for the first parameter and number for the second one and returns true if the first parameter has at least that number of elements/characters and false otherwise.

    For example:
    ```javascript
        isMinimum(["Mohammed", 3]) //return true
        
        isMinimum([[1, 2, 3], 4]) //return false
    ```

- **isNotEqual**: This rule expects two parameters and returns true if the parameters are not equal and false otherwise.

### Helper Functions

<a name="functions"></a>

The following functions you can use them in the template part as well as in your entire Vue component.

- **VCVisValid**: This function checks whether a given field is valid or not.

    Example:
    ```javascript
    VCVisValid('email') //use this in the template
    
    this.VCVisValid('email') //use this in the other component code
    ```

- **isAllValid**: This function checks whether all the given fields are valid or not.

    Example:
    ```javascript
    VCVisValid() //use this in the template
    
    this.VCVisValid() //use this in the other component code
    ```

- **touch**: Use this function to touch a field.

    Example:
    ```javascript
    @blur="touch('email')" //use this in the template
    
    this.touch('email') //use this in the other component code
    ```

- **dirt**: Use this function to dirt a field.

    Example:
    ```javascript
    @blur="dirt('email')" //use this in the template
    
    this.dirt('email') //use this in the other component code
    ```

- **isTouched**: This function checks whether a given field is touched or not.

    Example:
    ```javascript
    isTouched('email') //use this in the template
    
    this.isTouched('email') //use this in the other component code
    ```

- **isDirty**: This function checks whether a given field is dirty or not.

    Example:
    ```javascript
    isDirty('email') //use this in the template
    
    this.isDirty('email') //use this in the other component code
    ```

- **isAnyTouched**: This function checks if any of the fields touched or not.

    Example:
    ```javascript
    isAnyTouched() //use this in the template
    
    this.isAnyTouched() //use this in the other component code
    ```

- **isAnyDirty**: This function checks if any of the fields dirty or not.

    Example:
    ```javascript
    isAnyDirty() //use this in the template
    
    this.isAnyDirty() //use this in the other component code
    ```

- **untouchEverything**: Use this function to untouch everything.

    Example:
    ```javascript
    untouchEverything() //use this in the template
    
    this.untouchEverything() //use this in the other component code
    ```

- **cleanEverything**: Use this function to clean everything(clean the dirty fields).

    Example:
    ```javascript
    cleanEverything() //use this in the template
    
    this.cleanEverything() //use this in the other component code
    ```


### Questions

<a name="questions"></a>

**Is there more examples about these rules?**

Yes, in the `tests` folder there are a lot of examples for each rule.

**What are these rules and where can I find them?**

These rules are just a very simple validation function and you can find them in `src/rules` folder.



## Support

<a name="support"></a>
You are welcome to contribute code and provide pull requests for Vue Computed Validator, also please feel free to suggest or request any features or enhancements.

## License

<a name="license"></a>

Copyright (c) 2018 [Mohammed Al-Mahdawi](https://al-mahdawi.com/)
Licensed under the **MIT** license.