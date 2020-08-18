import React from 'react';
import Layout from '../components/layout';

export default function Index() {
  return (
    <Layout>
      {({ Main, Footer }) => (
        <>
          <Main>
            <section>
              <p>
                <span className="bold">Rural Friction</span> aims to subvert the
                the expansion of surveillance capitalism and to re-affirm
                humanity of rural citizens.
              </p>
              <h2>Our principles</h2>

              <ul>
                <li>Free Expression /</li>
                <li>Security /</li>
                <li>Privacy /</li>
                <li>Creativity /</li>
                <li>Access to Knowledge /</li>
              </ul>
            </section>

            <section>
              <h1>Posts</h1>
            </section>

            <section>
              <h1>Events</h1>
            </section>
          </Main>
          <Footer>
            <p>ruralfriction @ protonmail.com</p>
          </Footer>
        </>
      )}
    </Layout>
  );
}
