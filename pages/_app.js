import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import Footer from '../src/component/Footer';
import Top from './../src/component/Top';

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ width: 1000, margin: '0 auto' }}>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;

/**
 * 페이지 전환 시 레이아웃 유지 가능
 * 페이지 전환 시 상태값 유지 가능
 * componentDidCatch를 이용해서 커스텀 에러 핸들링 가능
 * 추가적인 데이터를 페이지로 주입  가능
 * 글로벌 css를 이곳에 선언
 */
