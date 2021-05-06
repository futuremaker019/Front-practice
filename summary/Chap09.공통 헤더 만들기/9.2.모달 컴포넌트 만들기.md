### 9.2. 모달 컴포넌트 만들기

모달을 만드는 방식

- 모달을 띄울 boolean 값과 모달 엘리먼트의 position을 fixed로 주어 표시하는 것
- 회원가입 버튼 클릭 시 `boolean` 값을 `true`로 하고, 모달의 배경을 클릭 시 `boolean`값을 `false`로 하는 방법

#### 9.2.1 리액트 포털 (Portal)

포털은 "부모 컴포넌트의 DOM 계층 외부에 있는 DOM 노드로 자식을 렌더링"하는 방법이다.

```javascript
ReactDOM.createPortal(child, container);
```

첫 번째 인자로 리액트 컴포넌트를 받고, 두번쨰 인자로 리액트 컴포넌트를 넣을 DOM을 받게 된다.

```javascript
// pages/_app.tsx
const app = ({Component, pageProps}: AppProps) => {
  return (
    <>
      ...
      <div id="root-modal />
    </>
  )
}
```

`ModalProtal` 이라는 컴포넌트 만들어 children으로 컴포넌트를 받아 `#root-modal` 에 랜더링 하도록 한다.

`ModalPortal` 컴포넌트에 자식으로 `SignUpModal`을 전달해 `#root-modal`로 렌더링 되도록 한다.

```javascript
// components/Header.tsx
import ModalPortal from './ModalPortal';
import SignUpModal from './auths/SignUpModal';

{
  {modalOpened && (
    <ModalPortal>
      <SignUpModal />
    </ModalPortal>
  )}
  </Container>
}
```

배경을 누르면 모달이 꺼지도록 만든다.

```javascript
// components/Header.tsx
<ModalPortal closePortal={() => setModalOpened(false)}></ModalPortal>;

// components/ModalPortal.tsx
interface IProps {
  children: React.ReactNode;
  closePortal: () => void;
}
```

useRef 란 , 그리고 왜 사용하는지 [(참고사이트)](https://react.vlpt.us/basic/10-useRef.html)
