import type { Schema, ZodObjectDef, z } from 'zod';

const getValidatedFormData = <T extends Schema<unknown, ZodObjectDef>>({
  schema,
  formData,
}: {
  formData: FormData;
  schema: T;
}) => {
  const schemaKeys = Object.keys(schema._def.shape());
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
    const errors = validatedFormData.error.errors.reduce(
      (acc, error) => ({
        ...acc,
        [error.path[0]]: error.message,
      }),
      {} as {
        [Key in keyof z.infer<T>]: string;
      },
    );
    return { errors, defaultValues: validatedFormData.data as z.infer<T> };
  } else {
    return {
      data: validatedFormData.data as z.infer<T>,
    };
  }
};

export default getValidatedFormData;
