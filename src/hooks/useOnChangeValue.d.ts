type Method<S> = {
    /**
     * 修改值的方法
     */
    onChange: (value?: S) => void;
    /**
     * 值
     */
    value: S;
    /**
     * 获取最新值的方法同 useGetState
     * @returns {S}
     */
    _get_: () => S;
    /**
     * 重置值的方法同 useResetState
     * @returns {void}
     */
    _reset_: () => void;
};
type UseOnChangeValue<S> = [Method<S>];
type transformType<S> = ((value: S) => S) | ((value: S) => Promise<S>);
/**
 * 简化 onChange -> value
 * @param initialState 初始值
 * .
 * @param transform 转换值的方法（可以在这做一些转换操作）
 * @returns []
 */
export default function useOnChangeValue<S>(initialState?: S, transform?: transformType<S>): UseOnChangeValue<S>;
export {};
