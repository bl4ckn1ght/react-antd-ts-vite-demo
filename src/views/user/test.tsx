import React, { useState, useEffect, useRef } from 'react'

// construct
function useConstruct(fn: any) {
  // useState 传入初始化函数 fn 只会执行一次
  useState(fn)
}

// componentDidMount
function useDidMount(fn: any) {
  // 依赖项给空数组，只会执行一次
  useEffect(fn, [])
}

// componentDidUpdate
function useDidUpdate(fn: any) {
  // 依赖项不传值，任何触发的 render 都会执行
  useEffect(fn)
}

// componentWillUnmount
function useUnMount(fn: any) {
  useEffect(() => fn, [])
}

function Block() {
  const [count, setCount] = useState(0)
  const instance = useRef({})

  useConstruct(() => {
    instance.current.name = 1
    console.log('Block Component----Construct')
  })

  useDidMount(() => {
    console.log('Block Component----componentDidMount')
  })

  useDidUpdate(() => {
    console.log('instance.current.name', instance.current.name)
    console.log('Block Component----componentDidUpdate')
  })

  useUnMount(() => {
    console.log('Block Component----componentWillUnmount')
  })

  console.log('Block render')
  return (
    <div style={{ backgroundColor: '#eaeaea' }}>
      <p>Block组件</p>
      <p>count: {count}</p>
      <br />
      <button onClick={() => setCount(count + 1)}>点击 count + 1</button>
    </div>
  )
}

export default function ParentComp() {
  const [unMountBlock, setUnMountBlock] = useState(false)
  return (
    <div>
      <p>unMountBlock: {unMountBlock ? 'true' : 'false'}</p>
      <br />
      {!unMountBlock ? <Block /> : null}
      <br />
      <button onClick={() => setUnMountBlock(!unMountBlock)}>点击卸载 Block 组件</button>
    </div>
  )
}
