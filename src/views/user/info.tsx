
import { Form, Input, Button, FormProps } from 'antd'
import React, { useEffect, useState } from 'react'
import { userInfo } from '@/api/index'

const InfoPage: React.FC = () => {

  const columns = [
    { label: 'username', value: 'username', rules: [{ required: true, message: 'Please input your username!' }] },
    { label: 'password', value: 'password', rules: [{ required: true, message: 'Please input your password!' }] },
    { label: 'uid', value: 'uid', rules: [] }
  ]

  const [data, setData] = useState({})

  const [form] = Form.useForm()

  const onFinish = (val: FormProps) => {
    console.log(val)
  }

  const onFinishFailed = _ => {

  }

  const getUserInfo = () => {
    userInfo({ userId: 0 }).then((res: any) => {
      if (res.code === 0) {
        setData(res.data)
        form.setFieldsValue(res.data)
      }
    })
  }

  let flag = true

  useEffect(() => {
    if (flag) {
      getUserInfo()
    }

    return () => {
      console.log('fsdfds')
      flag = false
    }
  }, [])

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      form={form}
    >
      {
        columns.map(item => {
          return (
            <Form.Item
              label={item.label}
              name={item.value}
              rules={item.rules}
            >
              {item.label !== 'password' ? <Input /> : <Input.Password />}
            </Form.Item>
          )
        })
      }
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" onClick={getUserInfo}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default InfoPage