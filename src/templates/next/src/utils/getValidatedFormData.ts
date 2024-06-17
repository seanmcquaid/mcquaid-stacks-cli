import type { AnyZodObject, z } from 'zod';

const getValidatedFormData = <T extends AnyZodObject>({
  schema,
  formData,
}: {
  formData: FormData;
  schema: T;
}):
  | {
      errors: {
        [key: string]: string;
      };
    }
  | {
      data: z.infer<T>;
    } => {
  const schemaKeys = Object.keys(schema.shape);
  const formDataFromSchema = schemaKeys.reduce(
    (acc, key) => ({
      ...acc,
      [key]: formData.get(key),
    }),
    {} as {
      [key: string]: unknown;
    },
  );
  const validatedFormData = schema.safeParse(formDataFromSchema);

  if (!validatedFormData.success) {
    console.log(validatedFormData.error.errors);
    const errors = validatedFormData.error.errors.reduce(
      (acc, error) => ({
        ...acc,
        [error.path[0]]: error.message,
      }),
      {} as {
        [key: string]: string;
      },
    );
    return { errors };
  } else {
    return {
      data: validatedFormData.data,
    };
  }
};

export default getValidatedFormData;
