# ask_hooks
业务类型 React Hooks 钩子
## useChangeValue
- 同时兼备 value 和 onChange 函数的集合钩子
- 可简化使用受控组件的步骤，少去 useState 和 onChange 函数定义的步骤

  ```ts
  import { useOnChangeValue } from 'ask_hooks'
  function App() {
    cosnt state = useOnChangeValue('');
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
