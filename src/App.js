import Header from './components/header/header';
import Layout from './components/layout/layout';

import bg_1 from './asserts/jpg/bglayout_1.jpg';
import bg_2 from './asserts/jpg/bglayout_2.jpg';

function App() {
  return (
    <>
      <Header
        title='Добро пожаловать в CARD GAME!'
        desc='Учавствуй в сражениях, набирай очки, захватывай вражеские карты. В конце игры тебя ждет уникальный приз!'
      />
      <Layout title='Layout 1!' desc='Учавствуй в сражениях!' urlBg={bg_1} />
      <Layout title='Layout 2' desc='Захватывай вражеские карты' colorBg='#fafafa' />
      <Layout title='Layout 3' desc='В конце игры тебя ждет уникальный приз!' urlBg={bg_2} />
    </>
  );
}

export default App;
