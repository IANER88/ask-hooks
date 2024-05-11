import { Dispatch, useState } from 'react';

type Method<S> = {
  onChange: (value?: S) => void;
  value: S;
};

type SetStateAction<S> = (value: S) => void;

type UseOnChangeValue<S> = [Method<S>, Dispatch<SetStateAction<S>>];

type onChangeType<S> = ((value: S) => S) | ((value: S) => Promise<S>)
/**
 * 简化 onChange -> value
 * @param initialState 初始值
 * @param onChange 转换值的方法（可以在这做一些转换操作）
 * @returns []
 */
export default function useOnChangeValue<S>(
  initialState?: S,
  onChange?: onChangeType<S>,
): UseOnChangeValue<S> {
  const [value, setValue] = useState(initialState);
  const method = {
    value,
    onChange: async (value: S) => {
      if (typeof onChange === 'function') {
        setValue(await onChange(value));
      } else {
        setValue(value);
      }
    },
  };

  return [method, setValue] as UseOnChangeValue<S>;
}
