import { Validation } from '../../../presentation/protocols/validation'
import { ValidationComposite } from '../../../presentation/helper/validators/validator-composite'
import { RequiredFieldValidation } from '../../../presentation/helper/validators/required-field-validation'
import { CompareFieldValidation } from '../../../presentation/helper/validators/compare-field-validation'
import { EmailValidatorAdapter } from '../../../utils/email-validator-adapter'
import { EmailValidation } from '../../../presentation/helper/validators/email-validation'

export const makeSignUpValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new CompareFieldValidation('password', 'passwordConfirmation'))
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
  return new ValidationComposite(validations)
}
