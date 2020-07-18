import React, { useEffect, useState } from 'react';
import LinkList from './components/LinkList';
import LinkForm from './components/LinkForm';

function App() {
  const [links, setLinks] = useState([]);
  const loadLinks = async () => {
    try {
      const res = await fetch('/.netlify/functions/getLinks');
      const links = await res.json();
      setLinks(links);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadLinks();
  }, []);

  return (
    <div className="container is-centered has-text-centered">
      <div className="columns is-centered">
        <div className="py-5 column is-half">
          <h1 className="mb-5 is-size-3 has-text-weight-semibold">
            Links Database
          </h1>
          <h2 className="my-5 is-size-5 is-uppercase has-text-weight-semibold">
            Add a Link
          </h2>
          <LinkForm />
          <LinkList links={links} refreshLinks={loadLinks} />
        </div>
      </div>
    </div>
  );
}

export default App;
