import { Dispatch, useState } from 'react';

type Method<S> = {
  onChange: (value?: S) => void;
  value: S;
};

type SetStateAction<S> = (value: S) => void;

type UseOnChangeValue<S> = [Method<S>, Dispatch<SetStateAction<S>>];

type transformType<S> = ((value: S) => S) | ((value: S) => Promise<S>)
/**
 * 简化 onChange -> value
 * @param initialState 初始值
 * @param transform 转换值的方法（可以在这做一些转换操作）
 * @returns []
 */
export default function useOnChangeValue<S>(
  initialState?: S,
  transform?: transformType<S>,
): UseOnChangeValue<S> {
  const [value, setValue] = useState(initialState);
  const method = {
    value,
    onChange: async (value: S) => {
      if (typeof transform === 'function') {
        setValue(await transform(value));
      } else {
        setValue(value);
      }
    },
  };

  return [method, setValue] as UseOnChangeValue<S>;
}
