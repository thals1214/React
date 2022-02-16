import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
  const activeStyle = {
    background: 'black',
    color: 'white',
  };
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/velopert">
            velopert 프로필
          </NavLink>
        </li>
        <li>
          <Link to="/profiles/gildong">gildong 프로필</Link>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact //exact = {true} 와 동일한 의미
        render={() => <div>사용자를 선택해 주세요</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
