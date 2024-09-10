import { Dispatch, SetStateAction } from 'react';
type GetStateAction<S> = () => S;
type ResetStateAction = () => void;
type GetInitStateAction<S> = () => S;
type State<S> = [
    S,
    Dispatch<SetStateAction<S>>,
    GetStateAction<S>,
    ResetStateAction,
    GetInitStateAction<S>,
    Dispatch<SetStateAction<S>>
];
/**
 * 一次满足 useGetState 和 useResetState 和 useInitialState 和 useSetState
 * @param initialState 初始值
 * @returns {State}
 */
export default function useGetResetInitialSetState<S>(initialState: S): State<S>;
export {};
