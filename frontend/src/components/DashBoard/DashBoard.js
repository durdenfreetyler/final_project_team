import React from 'react';
import '../../scss/dashboard.scss';
import Background from '../front-page/background';
import EnticeSignup from '../front-page/enticelogin';

function Dashboard() {
  return (
    <div className="formdash">
      <Background></Background>
     <EnticeSignup></EnticeSignup>
    </div>
  );
}

export default Dashboard;