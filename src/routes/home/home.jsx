import { Header, Layout } from '../../components';

import bg_1 from '../../asserts/jpg/bglayout_1.jpg';

function Home() {

  return (
    <>
      <Header
        title='Добро пожаловать в Triple Triad!'
        desc='Учавствуй в сражениях, набирай очки, захватывай вражеские карты. В конце игры тебя ждет уникальный приз!'
      />
      <Layout title='Layout 1!' urlBg={bg_1}>
        <p>
          In the game two players face off against one another, one side playing as "blue", the
          other as "red" on a 3x3 grid. Each player has five cards in a hand and the aim is to
          capture the opponent's cards by turning them into the player's own color of red or blue.
        </p>
      </Layout>
    </>
  );
}

export default Home;
