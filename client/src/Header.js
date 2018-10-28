import React from 'react';
import {Link} from 'react-router-dom';

export default function() {
  return (
    <header className="w-100 pa3 ph5-ns bg-white">
      <div className="db dt-ns mw9 center w-100">
        <div className="db dtc-ns v-mid tl w-50">
          <Link
            to="/"
            className="dib f5 f4-ns fw6 mt0 mb1 link black-70"
            title="Home">
            Boatos
          </Link>
        </div>
        <nav className="db dtc-ns v-mid w-100 tl tr-ns mt2 mt0-ns">
          <Link
            to="/user/login"
            className="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dn dib-l">
            Log in
          </Link>
          <Link
            to="/about"
            className="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dn dib-l">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
