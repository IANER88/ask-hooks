# ask_hooks
业务类型 React Hooks 钩子
## useOnChangeValue
- 同时兼备 value 和 onChange 函数的集合钩子
- 可简化使用受控组件的步骤，少去 useState 和 onChange 函数定义的步骤

```ts
  import { useOnChangeValue } from 'ask_hooks'
  function App() {
    cosnt [state] = useOnChangeValue('');
    /**
      如果修改值的过程还需要进行一次转换的话
      可向 useOnChangeValue 的第二个参数传递转换函数
      例如，返回的值就是新值
      useOnChangeValue('', (event) => event.target.value)
    **/
    return (
      <input {...state} />
    )
  }
  ```

## useWithResolvers
- 如果在一次列表操作中，需要有一些类似于弹窗的功能
- 如果其中任意一个有着需要等待的操作，那么后续的列表需要等待前一个完成才能循环下去

```ts
  import { useWithResolvers } from 'ask_hooks'
  const list = [
    1,
    2,
    3,
    4
  ]
```