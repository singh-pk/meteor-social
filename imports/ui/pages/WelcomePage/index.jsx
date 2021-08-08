import React from 'react';

import { Link } from 'react-router-dom';

import Button from '../../components/Button';

import './WelcomePage.scss';

const WelcomePage = ({ history }) => {
  const navList = [
    'About',
    'Help Center',
    'Terms of Service',
    'Privacy Policy',
    'Cookie Policy',
    'Ads info',
    'Blog',
    'Status',
    'Careers',
    'Brand Resources',
    'Advertising',
    'Marketing',
    'For Business',
    'Developers',
    'Directory',
    'Settings',
    '© 2021 Discussion, Inc.',
  ];

  return (
    <div className='welcomePage'>
      <main className='welcomePage-main'>
        <section className='welcomePage-section1'>
          <span>Happening now</span>

          <span>Join Discussion today.</span>

          <div>
            <Button onClick={() => history.push('/signup')}>
              Sign up with email
            </Button>

            <span>
              By signing up, you agree to the Terms of Service and Privacy Policy,
              including Cookie Use.
            </span>

            <span>
              Already have an account? <Link to='/login'>Login</Link>
            </span>
          </div>
        </section>

        <section className='welcomePage-section2' />
      </main>

      <nav className='welcomePage-nav'>
        {navList.map((list, i) => (
          <div key={i}>{list}</div>
        ))}
      </nav>
    </div>
  );
};

export default WelcomePage;
