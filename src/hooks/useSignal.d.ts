import { ReactElement } from 'react';
type createSignalProps = {
    children: ReactElement<any, any> | null;
};
export declare function createSignal(props: createSignalProps): ReactElement<any, any>;
type useSignalFn<S> = [
    S | undefined,
    React.Dispatch<React.SetStateAction<S | undefined>>,
    React.FC<createSignalProps>
];
export default function useSignal<S>(initialState?: S): useSignalFn<S>;
export {};
