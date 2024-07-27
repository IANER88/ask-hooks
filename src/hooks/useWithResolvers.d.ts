type Reject = () => void;
/**
 * 等待成功的异步
 * useWithResolvers
 * @returns
 */
export default function useWithResolvers<S>(): {
    promise: Promise<unknown>;
    resolve: (value: S) => void;
    reject: Reject;
};
export {};
