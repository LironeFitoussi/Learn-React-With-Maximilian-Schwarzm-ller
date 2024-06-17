import { useState } from 'react';

export function useInput(initialValue, validationFn) {
    const [enterdValue, setEnteredValue] = useState(initialValue);
    const [didEdit, setDidEdit] = useState(false);

    const isValueValid = validationFn(enterdValue);

    function handleInputChange(e) {
        const { value } = e.target;
        setEnteredValue(value);
        setDidEdit(false);
    }

    function handleInputBlur() {
        setDidEdit(true);
    }

    return {
        value: enterdValue,
        handleInputChange,
        handleInputBlur,
        hasError: !isValueValid && didEdit 
    }
};