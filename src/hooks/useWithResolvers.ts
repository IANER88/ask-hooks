import { useRef } from 'react';

type Resolve<S> = ((value?: S) => void) | null;

type Reject = () => void;

const withResolvers = <S>() => {
  let resolve: Resolve<S> = () => void 0;
  let reject: Reject = () => void 0;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return {
    promise,
    resolve,
    reject,
  };
};

/**
 * 等待成功的异步
 * useWithResolvers
 * @returns 
 */

export default function useWithResolvers<S>() {
  const promise = useRef(withResolvers<S>());
  return {
    promise: promise.current.promise,
    resolve: (value: S) => {
      promise.current?.resolve?.(value);
      promise.current = withResolvers<S>();
    },
    reject: promise?.current.reject,
  };
}
