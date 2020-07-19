import React, { useState } from 'react';

export default function LinkForm({ refreshLinks }) {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  const resetForm = () => {
    setName('');
    setDescription('');
    setUrl('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { name, url, description };
    try {
      const res = await fetch('/.netlify/functions/createLink', {
        method: 'POST',
        body: JSON.stringify(body),
      });
      resetForm();
      refreshLinks();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-title bg-blue-100">
          <p>Link Info</p>
        </div>
      </div>
      <div className="card-content">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal control"
              placeholder="My Favorite Site"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="field">
            <label className="label" htmlFor="url">
              URL
            </label>
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal control"
              placeholder="https://www.myfavoritesite.com"
              name="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            ></input>
          </div>
          <div className="field">
            <label className="label" htmlFor="description">
              Description
            </label>
            <textarea
              cols="50"
              rows="5"
              className="resize-x border rounded focus:outline-none focus:shadow-outline control"
              placeholder="I love this site because..."
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="button is-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
