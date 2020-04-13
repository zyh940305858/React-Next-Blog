/**
 * @author Brain Hang (zyh940305858@163.com)
 * @creationDate 2020 04 04
 * @description 首页
 * @lastEditDate 2020 04 06
 */


import React,{ useState } from 'react';
import '../public/style/pages/index.css';
import Head from 'next/head';
import Link from 'next/link';
import { Row, Col, List } from 'antd';
import axios from 'axios';
import { CalendarOutlined, FolderOpenOutlined, FireOutlined } from '@ant-design/icons';
import Header from '../components/Header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import servicePath from '../config/apiUrl';

const Home = (list) =>{

  const [myList,setMyList] = useState(list.data)

  return (
    <div>
      <Head>
        <title>
          Home
        </title>
      </Head>
  
      {/* 头部导航组件 */}
      <Header />
      
      {/* 两栏布局 */}
      <Row 
        className="comm_main" 
        type="flex" 
        justify="center"
      >
        {/* 左侧 */}
        <Col 
          className="comm_left" 
          xs={24} 
          sm={24} 
          md={16} 
          lg={18} 
          xl={14} 
        >

          {/* 主页列表 */}
          <List 
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={myList}
            renderItem={item=>(
              <List.Item>
                <div className="list_title">
                  <Link href={{pathname:'/detailed',query:{id:item.id}}}>
                    <a>{item.title}</a>
                  </Link>
                </div>
                <div className="list_icon">
                  <span>
                    <CalendarOutlined /> {item.addTime}
                  </span>
                  <span>
                    <FolderOpenOutlined /> {item.typeName}
                  </span>
                  <span>
                    <FireOutlined /> {item.view_count}
                  </span>
                </div>
                <div className="list_context">{item.introduce}</div>
              </List.Item>
            )}
          />
        </Col>

        {/* 右侧 */}
        <Col 
          className="comm_right"
          xs={0}
          sm={0}
          md={7}
          lg={5}
          xl={4}
        >
          {/* 个人信息 */}
          <Author />
          {/* 通用广告栏 */}
          <Advert />
        </Col>
      </Row>
      <Footer />
    </div>
  )
} 

Home.getInitialProps = async () =>{
  const promise = new Promise((resolve,reject)=>{
    axios(servicePath.getArticleList)
    .then(res=>{
      console.log('----->',res.data)
      resolve(res.data)
    })
  })

  return await promise;
}

export default Home;
