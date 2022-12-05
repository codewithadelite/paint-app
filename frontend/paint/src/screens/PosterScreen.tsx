import React, {useState} from 'react'
import { Card, Progress, Timeline, Modal, Form, Input, Select } from 'antd';

const { Option } = Select;

    const layout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 20 },
      };
      const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
      };

const PosterScreen = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const [form] = Form.useForm();

    const onGenderChange = (value: string) => {
        switch (value) {
          case 'male':
            form.setFieldsValue({ note: 'Hi, man!' });
            return;
          case 'female':
            form.setFieldsValue({ note: 'Hi, lady!' });
            return;
          case 'other':
            form.setFieldsValue({ note: 'Hi there!' });
        }
      };
    
      const onFinish = (values: any) => {
        console.log(values);
      };
  return (
    <div className='posters-container'>
        <div className='container pt-2'>
            <div className='row'>
                <div className='col-lg-6'>
                    <Card 
                    title="Application progress" 
                    bordered={false}
                    extra={<i className='fa fa-ellipsis'></i>}
                    style={{ width:'100%' }}
                    >
                        <div>
                        <Timeline mode='left'>
                            <Timeline.Item label="11.01.2022" color="green">Create a services site 2015-09-01</Timeline.Item>
                            <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                            <Timeline.Item color="red">
                            <p>Solve initial network problems 1</p>
                            <p>Solve initial network problems 2</p>
                            <p>Solve initial network problems 3 2015-09-01</p>
                            </Timeline.Item>
                            <Timeline.Item>
                            <p>Technical testing 1</p>
                            <p>Technical testing 2</p>
                            <p>Technical testing 3 2015-09-01</p>
                            </Timeline.Item>
                            <Timeline.Item color="gray">
                            <p>Technical testing 1</p>
                            <p>Technical testing 2</p>
                            <p>Technical testing 3 2015-09-01</p>
                            </Timeline.Item>
                            <Timeline.Item color="gray">
                            <p>Technical testing 1</p>
                            <p>Technical testing 2</p>
                            <p>Technical testing 3 2015-09-01</p>
                            </Timeline.Item>
                        </Timeline>
                        </div>
                    </Card>
                </div>
                <div className='col-lg-3'>
                    <Card 
                    title="Posters in progress" 
                    bordered={false}
                    extra={<i className='fa fa-ellipsis cursor-pointer' onClick={showModal}></i>}
                    style={{ width:'100%' }}
                    >
                        <div className='text-center'>
                            <Progress
                                type="circle"
                                strokeColor={{
                                    '0%': '#108ee9',
                                    '100%': '#87d068',
                                }}
                                percent={90}
                            />
                        </div>
                    </Card>
                </div>
                <div className='col-lg-3'>
                    <Card 
                    title="Approved Posters" 
                    bordered={false}
                    extra={<i className='fa fa-ellipsis cursor-pointer' onClick={showModal}></i>}
                    style={{ width:'100%' }}
                    >
                        <div className='text-center'>
                            <Progress
                                type="circle"
                                strokeColor={{
                                    '0%': '#108ee9',
                                    '100%': '#87d068',
                                }}
                                percent={100}
                            />
                        </div>
                    </Card>
                </div>
            </div>
        </div>
        <Modal title="Add Poster" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                <Form.Item name="note" label="Note" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
                    <Select
                    placeholder="Select a option and change input text above"
                    onChange={onGenderChange}
                    allowClear
                    >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    </div>
  )
}

export default PosterScreen