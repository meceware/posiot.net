import React, { Fragment } from 'react';

/* SEO */
import SEO from '../components/seo';
import Layout from '../components/layout';
import Section from '../components/section';

import Icon from '../images/posiot.png';

export default () => {
  return (
    <Fragment>
      <SEO />
      <Layout>
        <Section>
          <div className = 'w-full h-full sm:p-0 md:p-10 xl:p-24'>
            <div className = 'text-center text-white w-full md:mx-auto md:w-2/3 lg:w-1/2'>
              <img alt = 'Logo' src = { Icon } className = 'w-20 mx-auto'></img>
              <h1 className = 'text-6xl font-bold mt-8' style = { { lineHeight: '4rem' } }>POSIOT</h1>
              <h2 className = 'text-lg font-bold mb-8'>Next Generation Audio</h2>
              <h3 className = 'text-sm font-bold italic'>by metin celik</h3>
            </div>
          </div>
        </Section>
      </Layout>
      <div className = 'fixed right-0 bottom-0 m-4 p-4 rounded-full shadow-xl' style = { { backgroundColor: '#FF5722' } }>
        <a className = 'block no-underline text-gray-200' href = 'https://www.meceware.com/contact/'>
          <svg aria-hidden = 'true' focusable = 'false' data-prefix = 'fas' data-icon = 'envelope' className = 'block w-4 h-4' role = 'img' xmlns = 'http://www.w3.org/2000/svg' viewBox = '0 0 512 512'>
            <path fill = 'currentColor' d = 'M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z'></path>
          </svg>
        </a>
      </div>
    </Fragment>
  );
};
