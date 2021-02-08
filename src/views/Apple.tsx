import React, {
  useEffect,
  useState,
  useRef,
  useReducer,
  useCallback,
  useMemo,
  useContext,
  useDebugValue,
  useImperativeHandle,
  useLayoutEffect,
} from 'react';

export default function Apple() {
  const [value, setValue] = useState<string>('');
  const [list, setList] = useState<string[]>([]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    let value = event.target.value;
    setValue(value);
  }

  function handleSubmit() {
    let newList = [...list, value];
    setList(newList);
    setValue('');
  }

  function handleDelete(index: number) {
    let newList = list.filter((_, i) => i !== index);
    setList(newList);
  }

  return (
    <div>
      <input
        type='text'
        placeholder='input some things...'
        value={value}
        onChange={handleInputChange}
      />

      <button onClick={handleSubmit}>submit</button>

      <ul>
        {list.map((item, index) => {
          return (
            <li key={index}>
              {item} <button onClick={() => handleDelete(index)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
