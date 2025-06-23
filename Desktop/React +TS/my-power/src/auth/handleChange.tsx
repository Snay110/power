import type { HandleChangeProps} from "../components/types";
export   function handleChange({event,setFormData,setHasError}:HandleChangeProps) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));                                  

    setHasError((prev) => ({
      ...prev,
      [name]: value.trim().length === 0,
    }));
  }