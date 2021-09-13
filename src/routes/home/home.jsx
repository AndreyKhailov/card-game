import dateCards from '../../dateCards.json';

import Header from '../../components/header/header';
import Layout from '../../components/layout/layout';
import Footer from '../../components/footer/footer';
import Cards from '../../components/cards/cards';

import s from './home.module.css';

import bg_1 from '../../asserts/jpg/bglayout_1.jpg';
import bg_2 from '../../asserts/jpg/bglayout_2.jpg';

function Home({ onChangePage }) {
  const handelClickButton = (page) => {
    onChangePage && onChangePage(page);
  };

  return (
    <>
      <Header
        title='Добро пожаловать в CARD GAME!'
        desc='Учавствуй в сражениях, набирай очки, захватывай вражеские карты. В конце игры тебя ждет уникальный приз!'
        onClickButton={handelClickButton}
      />
      <Layout title='Layout 1!' urlBg={bg_1}>
        <p>
          In the game two players face off against one another, one side playing as "blue", the
          other as "red" on a 3x3 grid. Each player has five cards in a hand and the aim is to
          capture the opponent's cards by turning them into the player's own color of red or blue.
        </p>
      </Layout>
      <Layout title='Layout 2' colorBg='#fafafa'>
        <div className={s.flex}>
          {dateCards.map((card) => (
            <Cards
              key={card.id}
              id={card.id}
              type={card.type}
              values={card.values}
              name={card.name}
              img={card.img}
            />
          ))}
        </div>
      </Layout>
      <Layout title='Layout 3' urlBg={bg_2}>
        <p>
          To win, a majority of the total ten cards played (including the one card that is not
          placed on the board) must be of the player's card color. To do this, the player must
          capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of
          the sides where the two cards touch will be compared.
        </p>
        <p>
          If the rank of the opponent's card is higher than the player's card, the player's card
          will be captured and turned into the opponent's color. If the player's rank is higher, the
          opponent's card will be captured and changed into the player's color instead.
        </p>
      </Layout>
      <Footer />
    </>
  );
}

export default Home;
