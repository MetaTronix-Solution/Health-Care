import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsValidSpecifications(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isValidSpecifications',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          if (value === undefined) return true;
          if (!Array.isArray(value)) return false;
          return value.every(
            (item) =>
              item &&
              typeof item.label === 'string' &&
              item.label.trim().length > 0 &&
              typeof item.value === 'string' &&
              item.value.trim().length > 0,
          );
        },
        defaultMessage() {
          return 'Each specification must have a non-empty label and value';
        },
      },
    });
  };
}
