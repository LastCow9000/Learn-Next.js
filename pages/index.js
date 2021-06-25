import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import ItemList from './../src/component/ItemList';
import { Header, Divider } from 'semantic-ui-react';

export default function Home() {
  const [list, setList] = useState([]);
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getData() {
    axios.get(API_URL)
      .then(res => {
        console.log(res.data);
        setList(res.data);
      })
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>최후의 cow</title>
      </Head>
      <Header as="h3" style={{ paddingTop: 40 }}>
        베스트 상품
      </Header>
      <Divider />
      <ItemList list={list.slice(0, 9)} />
      <Header as="h3" style={{ paddingTop: 40 }}>
        신상품
      </Header>
      <Divider />
      <ItemList list={list.slice(9)} />
    </div>
  );
}

/**
 *  create-next-app으로 설치하면
 *   1. 컴파일과 번들링이 자동으로 됨(webpack 과 babel)
 *   2. 자동 리프레쉬 기능으로 수정하면 화면에 바로 반영됨
 *   3. SSR 이 지원됨
 *   4. static 파일 지원
 */
