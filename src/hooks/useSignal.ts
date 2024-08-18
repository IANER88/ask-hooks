import { ReactElement, useState } from 'react';

type createSignalProps = {
  children: ReactElement<any, any> | null;
}

export function createSignal(props: createSignalProps) {
  const {
    children
  } = props;

  return children
}

type useSignalFn<S> = [
  S | undefined,
  React.Dispatch<React.SetStateAction<S | undefined>>,
  React.FC<createSignalProps>,
]

export default function useSignal<S>(initialState?: S): useSignalFn<S> {

  const [get, set] = useState(initialState);
  return [get, set, createSignal]
}