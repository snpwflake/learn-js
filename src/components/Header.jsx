import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="menu">
        <ul>
          <li className="header-li-1">
            <Link className="link" to="feed" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <img src="src\components\svgHeader\feed.svg" alt="" style={{ marginRight: 5 }} />
              <span>Новости</span>
            </Link>
          </li>
          <li className="header-li-2">
            <Link className="link" to="profile" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <img src="src\components\svgHeader\profile.svg" alt="" style={{ marginRight: 5 }} />
              <span>Профиль</span>
            </Link>
          </li>
          <li className="header-li-3">
            <Link className="link" to="settings" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <img src="src\components\svgHeader\settings.svg" alt="" style={{ marginRight: 5 }} />
              <span>Настройки</span>
            </Link>
          </li>
          <li className="header-li-3">
            <Link className="link" to="/subscribers" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <img src="src\components\svgHeader\settings.svg" alt="" style={{ marginRight: 5 }} />
              <span>
                Временная кнопка
                <br />
                Подписчики
              </span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header-logo">
        <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.7582 8.98026C20.4697 9.29889 20.0445 9.29889 19.9047 9.29889C19.6455 9.29889 19.3251 9.2542 18.866 9.15389C18.5054 9.0751 18.1948 8.99656 17.921 8.92737C17.3823 8.7911 16.993 8.69259 16.6265 8.69259C16.4199 8.69259 16.043 8.7858 15.6439 8.88455C15.0225 9.03829 14.2491 9.22955 13.5011 9.22955C12.7459 9.22955 11.951 9.16839 11.4501 9.1212C11.2838 9.77064 10.888 10.8416 9.98966 11.6082C8.76827 12.6503 7.86274 13.1152 7.82476 13.1344C7.5928 13.2522 7.31387 13.1905 7.14812 12.9845C6.98237 12.7787 6.97248 12.4818 7.12423 12.2646C7.12925 12.2572 7.73968 11.3585 7.71623 10.3485C7.70695 9.94676 7.69294 9.63195 7.67864 9.39218C6.91788 9.62571 5.62257 10.1478 4.95439 11.1305C3.9422 12.619 3.52696 14.9107 3.63818 15.6624C3.75398 16.4457 3.76784 16.4457 4.12473 16.4457C4.90234 16.4457 5.55561 16.4789 6.29142 16.896C6.9423 17.2649 7.30077 17.6685 7.33942 17.7133C7.48539 17.8822 7.52427 18.1238 7.43911 18.333C7.35395 18.5422 7.16018 18.6812 6.94215 18.6893C6.73183 18.6975 6.09541 18.7527 5.68639 18.9073C5.46918 18.9894 5.28208 19.0855 5.10112 19.1785C4.81163 19.3272 4.53818 19.4677 4.21918 19.507C4.11544 19.5198 4.00894 19.526 3.90812 19.524C3.79053 19.8085 3.5904 20.1476 3.2538 20.4166C2.99615 20.6226 2.734 20.7497 2.50271 20.8617C2.21869 20.9994 1.99429 21.1081 1.82202 21.3305C1.37053 21.9136 1.21901 22.5458 1.21758 22.5521C1.15856 22.8046 0.946299 22.9876 0.697034 22.9994C0.68842 22.9998 0.679732 23 0.671118 23C0.432114 23 0.217677 22.8431 0.139707 22.6056C0.104579 22.499 -0.191498 21.5217 0.202548 20.0913C0.343433 19.5799 0.56169 19.1372 0.772682 18.709C1.11602 18.0125 1.41255 17.4111 1.28814 16.674C0.703325 13.2099 0.743696 10.3933 1.40805 8.30274C2.44107 5.05134 4.94181 3.23977 5.43263 2.90975C5.67612 2.74587 5.89528 2.60172 6.07998 2.48191C5.90869 2.3398 5.69095 2.1905 5.4321 2.07592C4.84294 1.81508 4.59532 1.74379 4.52672 1.72679C4.5223 1.72694 4.51803 1.72694 4.51376 1.72694C4.26921 1.72702 4.08121 1.55885 4.00969 1.31049C3.93539 1.05262 4.07343 0.775798 4.29595 0.638906C4.33827 0.612776 5.35039 0 6.68427 0C6.95953 0 7.23298 0.0262863 7.497 0.078157C8.31962 0.239853 8.90099 0.481422 9.46319 0.714957C10.0121 0.943032 10.5307 1.15847 11.3048 1.32828C11.6809 1.4108 12.0272 1.47445 12.3621 1.53607C13.5143 1.74792 14.5093 1.93091 15.997 2.72208C17.9387 3.75481 19.0305 4.88473 19.0714 5.90351C19.0801 6.11824 19.0756 6.31012 19.0579 6.47876C19.2396 6.57338 19.4604 6.69295 19.6834 6.82509C20.5914 7.3629 20.9722 7.7657 20.9976 8.21522C21.0152 8.52801 20.9347 8.78533 20.7582 8.98026Z" fill="#0057FF" />
        </svg>
      </div>
      <div className="header-avatar-container"><img className="header-avatar" alt="" /></div>
    </header>
  );
}

export default Header;
