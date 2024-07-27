/// <reference types="react" />
declare enum Around {
    before = 0,
    after = 1
}
/**
 * 数据变化频率
 * 主要作用于数据改变后的操作可控制频率
 * @param effect 函数
 * @param frequency 频率次数
 * @param deps 依赖项
 */
export default function useFrequencyEffect(effect: React.EffectCallback, frequency?: number, deps?: React.DependencyList | undefined, around?: keyof typeof Around): void;
export {};
