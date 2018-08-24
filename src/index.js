import * as Rules from './rules';

export default {
    install(Vue, options) {
        Vue.mixin({
            data() {
                return {
                    //The touched fields is the fields that for example the user just click on them or touched them
                    touched: [],

                    //The dirty fields is the fields that the user modified their values
                    dirts:[],

                    fieldsRules: {}
                }
            },
            methods: {
                ...Rules,
                VCVisValid(field, newValues = null) {
                    let values = newValues ? newValues : this.fieldsValues[field]
                    let isValid = false
                    let rules = this.fieldsRules[field]
                    let derty = []
                    let self = this

                    if(!Array.isArray(rules)){
                        return isValid
                    }

                    rules.forEach((item, index) => {

                        //if the item is a function then the user passed external validation funtion, so use it instead of the built in one
                        let fn = (typeof item === 'string' || item instanceof String) ? self[item] : item

                        if (fn(values) === true) {
                            derty.push(true)
                        } else {
                            derty.push(false)
                        }

                        if (derty.indexOf(false) === -1) {
                            isValid = true
                        } else {
                            isValid = false
                        }
                    })

                    return isValid
                },
                isAllValid() {
                    let fieldsNames = Object.keys(this.fieldsRules)
                    let derty = []
                    let self = this
                    let isValid = false

                    fieldsNames.forEach((item, index) => {
                        if (self.VCVisValid(item, self.fieldsValues[item]) === true) {
                            derty.push(true)
                        } else {
                            derty.push(false)
                        }

                        if (derty.indexOf(false) === -1) {
                            isValid = true
                        } else {
                            isValid = false
                        }
                    })
                    return isValid
                },
                touch(field) {
                    if (this.touched.indexOf(field) === -1) {
                        this.touched.push(field)
                    }
                },
                dirt(field) {
                    if (this.dirts.indexOf(field) === -1) {
                        this.dirts.push(field)
                    }
                },
                isTouched(field) {
                    if (this.touched.indexOf(field) === -1) {
                        return false
                    } else {
                        return true
                    }
                },
                isDirty(field) {
                    if (this.dirts.indexOf(field) === -1) {
                        return false
                    } else {
                        return true
                    }
                },
                isAnyTouched() {
                    return this.touched.length > 0
                },
                isAnyDirty() {
                    return this.dirts.length > 0
                },
                untouchEverything() {
                    this.touched = []
                },
                cleanEverything() {
                    this.dirts = []
                }
            }
        })
    }
};
