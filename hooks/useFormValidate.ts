import { useState } from "react";
import { ZodObject, ZodRawShape } from "zod";

export function useFormValidate(schema: ZodObject<ZodRawShape>) {
  const [errors, setErrors] = useState();

  const validateField = (name: string, value: string) => {
    const parsedValue = schema
      .pick({ [name]: true })
      .safeParse({ [name]: value });
    console.log("first", parsedValue);
  };
  return {
    errors,
    validateField,
  };
}
