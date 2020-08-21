import React from 'react';
import Layout from '../components/layout';

export default function Index() {
  return (
    <Layout>
      <Layout.Main>
        <section>
          <p>
            <span className="bold">Rural Friction</span> aims to subvert the
            expansion of surveillance capitalism and to re-affirm humanity of
            rural citizens.
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
      </Layout.Main>
      <Layout.Footer>
        <p>ruralfriction @ protonmail.com</p>
      </Layout.Footer>
    </Layout>
  );
}
