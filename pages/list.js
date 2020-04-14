/**
 * @author Brain Hang (zyh940305858@163.com)
 * @creationDate 2020 04 05
 * @description 列表页
 * @lastEditDate 2020 04 06
 */

import React,{ useState, useEfuseEffect, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import { Row, Col, List, Breadcrumb } from 'antd';
import { CalendarOutlined, FolderOpenOutlined, FireOutlined } from '@ant-design/icons';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
import axios from 'axios';
import servicePath from '../config/apiUrl';


const ArticleList = (list) =>{

  const [myList,setMyList] = useState(list.data);
  useEffect(()=>{
    setMyList(list.data)
  })
  
  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer:renderer,
    gfm: true,
    pedantic: false, // 是否容错
    sanitize: false, // 是否忽略html标签
    tables: true, // 是否支持表格
    breaks: true, // 是否支持换行符
    smartLists: true, // 自动渲染列表
    highlight: function(code){
        return hljs.highlightAuto(code).value
    }
  })

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
          {/* 列表页面包屑导航 */}
          <div className="bread_div">
              <Breadcrumb>
                  <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                  <Breadcrumb.Item>视频教程</Breadcrumb.Item>
              </Breadcrumb>
          </div>

          {/* 主页列表 */}
          <List 
            itemLayout="vertical"
            dataSource={myList}
            renderItem={item=>(
                <List.Item>
                  <div className="list_title">
                    <Link href={{ pathname:'/detailed', query:{ id:item.id }}} >
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
                        <FireOutlined /> {item.view_count}人
                      </span>
                  </div>
                  <div 
                    className="list_context" 
                    dangerouslySetInnerHTML={{ __html: marked(item.introduce) }}
                  ></div>
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

ArticleList.getInitialProps = async (context)=>{
  const id = context.query.id;
  const promise = new Promise(reslove=>{
    axios(servicePath.getArticleListByTypeId+id)
    .then(
      res=>reslove(res.data)
    );
  });
  return await promise;
}

export default ArticleList;