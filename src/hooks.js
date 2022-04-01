import { useState } from "react";
export function useFormInput (initiaValue) {
    const [value, setValue] = useState(initiaValue);
    function handleChange(e) {
        setValue(e.target.value);
    }

    return {
        value: value,
        onChange: handleChange,
    };
}



