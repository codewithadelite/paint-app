import React, {useState} from 'react'
import { Card } from '../../models/Card';
import { Avatar, Tooltip, Button, Drawer, Radio, Space, Modal, Form, Input, Select, Empty } from 'antd';
import type { DrawerProps } from 'antd/es/drawer';
import type { RadioChangeEvent } from 'antd/es/radio';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';

const { Option } = Select;

    const layout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 20 },
      };
      const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
      };

const Categories = () => {
    const [card, setCard] = useState<Card[]>([] as Card[]);
    const [visible, setVisible] = useState(false);
    const [placement, setPlacement] = useState<DrawerProps['placement']>('right');
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

    const showDrawer = () => {
        setVisible(true);
    };
    
    const onChange = (e: RadioChangeEvent) => {
        setPlacement(e.target.value);
    };

    const onClose = () => {
        setVisible(false);
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

    const cards: Card[] = [
        {
            name:"Oil painted image",
            description:"The poster is printed in high-quality inks on premium design paper.",
            image: "https://www.colorlines.com/sites/default/files/styles/article_lead_normal/public/2020-08/Rosie%20No.1-082620.jpeg?itok=2afqHDMU",
            price: 2100
        },
        {
            name:"Face oil painted image",
            description:"The poster is printed in high-quality inks on premium design paper.",
            image: "https://www.artmajeur.com/medias/hd/l/a/lana-frey/artwork/9943195_waft-of-fury-320dpi-one-frame.jpg",
            price: 3400
        },
        {
            name:"Face painted image",
            description:"The poster is printed in high-quality inks on premium design paper.",
            image: "https://expertphotography.b-cdn.net/wp-content/uploads/2018/11/turn-photos-into-paintings-portrait-after.jpg",
            price: 2000
        },
        {
            name:"Face oil painted",
            description:"The poster is printed in high-quality inks on premium design paper.",
            image: "https://www.artmajeur.com/medias/standard/l/a/lana-frey/artwork/9618616_confidence-pod.jpg",
            price: 3400
        },
        {
            name:"Oil painted image",
            description:"The poster is printed in high-quality inks on premium design paper.",
            image: "https://www.artmajeur.com/medias/standard/l/a/lana-frey/artwork/9622360_lie-to-me-pod.jpg",
            price: 16000
        },
        {
            name:"Egypt Image landscape",
            description:"The poster is printed in high-quality inks on premium design paper.",
            image: "https://www.metmuseum.org/blogs/-/media/9726dfdd43364c65a98a45ddffffb19d.ashx?la=en",
            price: 16000
        },
        {
            name:"Paint Daisies in a Basket",
            description:"The poster is printed in high-quality inks on premium design paper.",
            image: "https://i0.wp.com/www.pamelagroppe.com/wp-content/uploads/2022/02/Paint-blue-flowers-feature.jpg?fit=1200%2C1200&ssl=1",
            price: 16000
        },
        {
            name:"Oil painted image",
            description:"The poster is printed in high-quality inks on premium design paper.",
            image: "https://media.istockphoto.com/photos/oil-painting-of-eiffel-tower-france-art-work-picture-id543465020?k=20&m=543465020&s=612x612&w=0&h=1Zf0X2-7ADU_DfhHuhCCB7D1xkAeffY2o-Dsld3ptvI=",
            price: 16000
        }
    ];
  return (
    <div>
        <div className='container mt-3'>
            <div className='header-top d-flex align-items-center justify-content-between'>
                <h4>
                    <b className='font-500'>
                        POSTERS
                    </b>
                </h4>
                <span className='font-500' onClick={showModal}>
                        View All <i className='fa fa-arrow-right'></i>
                </span>
            </div>
            
            <div className='crds mt-0'>
                <div className='row'>
                    {
                        cards.map((item, index) =>(
                            <div className='col-lg-3 col-md-4 col-sm-6 mt-5'>
                                <div className='card-item'>
                                    <div className='card-image'>
                                        <img src={item.image} />
                                    </div>
                                    <div className='mt-2'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <h6 className='mt-2'>
                                                {item.name}
                                            </h6>
                                            <span>
                                                <i className='fa fa-star'></i> 4.5
                                            </span>
                                        </div>
                                        <p className='mb-1'>
                                            {item.description}
                                        </p>
                                        <span className='font-500'>
                                            {item.price.toLocaleString("en-US")} Czk
                                        </span> / Pc
                                        <br />
                                        <span>
                                        <Avatar.Group>
                                            <Avatar src="https://joeschmoe.io/api/v1/random" />
                                            <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                                            <Tooltip title="Ant User" placement="top">
                                                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                                            </Tooltip>
                                            <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                                        </Avatar.Group>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        </div>
        <Space>
            <Radio.Group value={placement} onChange={onChange}>
            <Radio value="top">top</Radio>
            <Radio value="right">right</Radio>
            <Radio value="bottom">bottom</Radio>
            <Radio value="left">left</Radio>
            </Radio.Group>
            <Button type="primary" onClick={showDrawer}>
            Open
            </Button>
        </Space>
        <Drawer
            title="Posters"
            placement={placement}
            width="100%"
            height="80%"
            onClose={onClose}
            visible={visible}
            extra={
            <Space>
                <Button onClick={onClose}>Cancel</Button>
                <Button type="primary" onClick={onClose}>
                OK
                </Button>
            </Space>
            }
        >
            <Empty/>
        </Drawer>
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

export default Categories