import Image from 'next/image';
import { Header } from 'semantic-ui-react';
import Gnb from './Gnb';

export default function Top() {
  return (
    <div>
      <div style={{ display: "flex", paddingTop: 20 }}>
        <div style={{ flex: "100px 0 0" }}>
          <Image
            src="/images/iu.jpg"
            alt="logo"
            width="300px"
            height="240px"
            style={{ display: "block" }}
          />
        </div>
        <Header as="h1">LastCow</Header>
      </div>
      <Gnb />
    </div>
  );
}
