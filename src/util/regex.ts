type BaseValidatorType = RegExp | ((val: string) => boolean)
type ValidatorType = [BaseValidatorType, string][]

// for antd form
function createValidator(factors: ValidatorType, defaultMessage = '') {
  return function (rule, value) {
    let error = defaultMessage

    const ok = factors.every((item) => {
      const [validator, message] = item
      if (validator instanceof RegExp) {
        if (!validator.test(value)) {
          message && (error = message)
          return false
        }
        return true
      } else if (typeof validator === 'function') {
        if (!validator(value)) {
          message && (error = message)
          return false
        }
        return true
      }
      throw new Error('validator should be regExp or function')
    })

    return ok ? Promise.resolve() : Promise.reject(error)
  }
}

// validate('1', /12/)
