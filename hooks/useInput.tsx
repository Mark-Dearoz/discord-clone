import React, {useState} from 'react';

function useInput<Type>(defaultValue: Type): [Type, (newState: Type) => void] {
  const [input, setInput] = useState(defaultValue);

  const onChange = (newState: Type) => {
    setInput(newState);
  };

  return [input, onChange];
}

export default useInput;
