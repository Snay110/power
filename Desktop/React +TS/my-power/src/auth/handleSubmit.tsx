import type { AuthFromProps } from "../components/types";

export function handleSubmit({ formData, setHasError,navigate }:  AuthFromProps): void {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const errors = {
    name: formData.name.trim().length === 0 || formData.name.length > 20,
    lastName:
      formData.lastName.trim().length === 0 || formData.lastName.length > 20,
    email: !emailRegex.test(formData.email),
  };

  setHasError(errors);

  const hasAnyError = Object.values(errors).some((err) => err);

  if (!hasAnyError) {
    navigate("/first-form-page");
  }
}
