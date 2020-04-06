/**
 * @author Brain Hang (zyh940305858@163.com)
 * @creationDate 2020 04 04
 * @description 首页-头部导航栏
 * @lastEditDate 2020 04 04
 */

import '../public/style/components/header.css';
import { Row, Col, Menu } from 'antd';
import { HomeOutlined, PlayCircleOutlined, CoffeeOutlined } from '@ant-design/icons';

const Header = () =>(
    <div className="header">
        <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={10} lg={15} xl={12} >
                <span className="header_logo">Brain Hang</span>
                <span className="header_text">一名专注的前端开发工程师</span>
            </Col>
            <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                <Menu mode="horizontal">
                    <Menu.Item key="home">
                        <HomeOutlined />
                        首页
                    </Menu.Item>
                    <Menu.Item key="video">
                        <PlayCircleOutlined />
                        视频
                    </Menu.Item>
                    <Menu.Item key="life">
                        <CoffeeOutlined />
                        生活
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>
)

export default Header;