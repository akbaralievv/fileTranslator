import React, { useState } from 'react';
import styles from './Menu.module.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import logo from '/src/assets/images/logo.svg';
const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [pages, setPages] = useState([
    {
      id: 1,
      title: 'Home',
      link: '/',
      bool: false,
    },
    {
      id: 2,
      title: 'Services',
      link: '/services',
      bool: false,
    },
    {
      id: 3,
      title: 'About',
      link: '/about',
      bool: false,
    },
    {
      id: 4,
      title: 'Translate',
      link: '/order',
      bool: false,
    },
    {
      id: 5,
      title: '',
      link: '/freelancer',
      bool: false,
    },
  ]);

  useEffect(() => {
    const newPage = pages.map((i) => {
      if (i.link === location.pathname) {
        return {
          ...i,
          bool: true,
        };
      } else {
        return {
          ...i,
          bool: false,
        };
      }
    });
    setPages(newPage);
  }, [location.pathname]);

  return (
    <>
      <div className={styles.blockPush}></div>
      <div className={styles.menu}>
        <div className="container">
          <div className={styles.menu__inner}>
            <div>
              <NavLink to={'/'}>
                <img src={logo} alt="logo" />
                <p>AD Translations</p>
              </NavLink>
            </div>
            <ul>
              {pages.map((page) => (
                <li key={page.id}>
                  <NavLink to={page.link} className={page.bool ? styles.activePage : ''}>
                    {page.title}
                  </NavLink>
                </li>
              ))}
              <li onClick={() => navigate('/freelancer')}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15 12.8C16.167 12.8 17.2861 12.3364 18.1113 11.5113C18.9364 10.6861 19.4 9.56695 19.4 8.4C19.4 7.23305 18.9364 6.11389 18.1113 5.28873C17.2861 4.46357 16.167 4 15 4C13.833 4 12.7139 4.46357 11.8887 5.28873C11.0636 6.11389 10.6 7.23305 10.6 8.4C10.6 9.56695 11.0636 10.6861 11.8887 11.5113C12.7139 12.3364 13.833 12.8 15 12.8ZM7.85 16.1C8.57935 16.1 9.27882 15.8103 9.79454 15.2945C10.3103 14.7788 10.6 14.0793 10.6 13.35C10.6 12.6207 10.3103 11.9212 9.79454 11.4055C9.27882 10.8897 8.57935 10.6 7.85 10.6C7.12065 10.6 6.42118 10.8897 5.90546 11.4055C5.38973 11.9212 5.1 12.6207 5.1 13.35C5.1 14.0793 5.38973 14.7788 5.90546 15.2945C6.42118 15.8103 7.12065 16.1 7.85 16.1ZM24.9 13.35C24.9 14.0793 24.6103 14.7788 24.0945 15.2945C23.5788 15.8103 22.8793 16.1 22.15 16.1C21.4207 16.1 20.7212 15.8103 20.2055 15.2945C19.6897 14.7788 19.4 14.0793 19.4 13.35C19.4 12.6207 19.6897 11.9212 20.2055 11.4055C20.7212 10.8897 21.4207 10.6 22.15 10.6C22.8793 10.6 23.5788 10.8897 24.0945 11.4055C24.6103 11.9212 24.9 12.6207 24.9 13.35ZM15 13.9C16.4587 13.9 17.8576 14.4795 18.8891 15.5109C19.9205 16.5424 20.5 17.9413 20.5 19.4V26H9.5V19.4C9.5 17.9413 10.0795 16.5424 11.1109 15.5109C12.1424 14.4795 13.5413 13.9 15 13.9ZM7.3 19.4C7.3 18.6377 7.41 17.9018 7.6168 17.2066L7.4298 17.222C6.48697 17.3255 5.61553 17.7734 4.98259 18.4799C4.34965 19.1863 3.99975 20.1015 4 21.05V26H7.3V19.4ZM26 26V21.05C26.0001 20.0692 25.6259 19.1253 24.9538 18.4111C24.2816 17.6968 23.3622 17.266 22.3832 17.2066C22.5889 17.9018 22.7 18.6377 22.7 19.4V26H26Z"
                    fill={pages[4].bool ? '#007E1D' : '#151515'}
                  />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
