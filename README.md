# Карточная игра по мотивам Triple Triad

<p align="center"><img src="https://github.com/AndreyKhaylov/card-game/blob/master/src/asserts/jpg/%D0%BB%D0%BE%D0%B3%D0%BE.jpg" max-width="800"></p>

## О проекте

  Карточная игра, аналогичная игре Triple Triad. Реализованна на HTML, CSS и REACT JS. Firebase выбран как база данных для хранения выигранных карточек каждого игрока, а также для регистрации и аутентификации пользователей. Хранение уникальных ключей игроков - в localStorage браузера. Основная логика игры и хранение состояния происходит в redux. Функционал приложения написан как на класовых компонент, так и на hook-х, а строгая типизация достигается подключением TypeScript в приложение. На данный момент лишь небольшая часть написана на typescript, но со временем это положение дел измениться в лучшую сторону.  

- [Demo-версия](https://andreykhaylov.github.io/card-game/) / https://andreykhaylov.github.io/card-game/

## Технологии

  - HTML;
  - CSS;
  - TypeScript;
  - JavaScript;
  - React JS;
  - Create React App (CRA);
  - Redux/redux-toolkit/react-redux;
  - React-router;
  - FireBase(realtime database / authentication);
  - LocalStorage;  
  - Classnames;

## Установленные пакеты

  - "@reduxjs/toolkit": "^1.6.1";
  - "@testing-library/jest-dom": "^5.14.1";
  - "@testing-library/react": "^11.2.7";
  - "@testing-library/user-event": "^12.8.3";
  - "@types/jest": "^27.0.3";
  - "@types/node": "^16.11.9";
  - "@types/react": "^17.0.35";
  - "@types/react-dom": "^17.0.11";
  - "classnames": "^2.3.1";
  - "firebase": "^9.0.2";
  - "gh-pages": "^3.2.3";
  - "react": "^17.0.2";
  - "react-dom": "^17.0.2";
  - "react-notifications": "^1.7.2";
  - "react-redux": "^7.2.5";
  - "react-router-dom": "^5.3.0";
  - "react-scripts": "4.0.3";
  - "redux": "^4.1.1";
  - "typescript": "^4.5.2";

## Запуск
  Для запуска локально: 
  - склонировать репозиторий (git clone <https: ...>);
  - установить зависимости командой в консоли (npm install);
  - запустить в режиме разработки командой (npm start).

  Для получения production версии:
  - запустить команду npm run build. Проект собереться в папку build.
