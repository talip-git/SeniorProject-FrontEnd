import React from 'react';
import './header.css';
function Header() {
  return(
    <div className='header'>
        <div className='logo'>
            <a href="http://" target="_blank" rel="noopener noreferrer">Predator</a>
        </div>
        <div className='nav'>
            <ul className='nav-list'>
                <li><a href="/haberler"><i className="far fa-newspaper"></i>  Haberler</a></li>
                <li><a href="/forum"><i className="fas fa-align-justify"></i> Forum</a></li>
                <li><a href="/register">Kayıt Ol</a></li>
                <li><a href="/login"><i className="fas fa-sign-in-alt"></i> Giriş yap</a></li>
            </ul>
        </div>
    </div>
  );
}

export default Header;
