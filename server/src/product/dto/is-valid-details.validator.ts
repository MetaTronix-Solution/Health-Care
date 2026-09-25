import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsValidDetails(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isValidDetails',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          if (value === undefined) return true;
          if (!Array.isArray(value)) return false;

          return value.every((section) => {
            if (!section) return false;
            if (typeof section.title !== 'string' || !section.title.trim())
              return false;
            if (typeof section.body !== 'string' || !section.body.trim())
              return false;

            if (section.specs !== undefined) {
              if (!Array.isArray(section.specs)) return false;
              const specsValid = section.specs.every(
                (spec: any) =>
                  spec &&
                  typeof spec.label === 'string' &&
                  spec.label.trim().length > 0 &&
                  typeof spec.value === 'string' &&
                  spec.value.trim().length > 0,
              );
              if (!specsValid) return false;
            }

            return true;
          });
        },
        defaultMessage() {
          return 'Each detail section needs an index, title, body, and valid specs';
        },
      },
    });
  };
}
