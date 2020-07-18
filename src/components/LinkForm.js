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
      const res = await fetch('/api/createLink', {
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
        <div className="card-header-title">
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
              size="50"
              type="text"
              name="name"
              className="control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field">
            <label className="label" htmlFor="url">
              URL
            </label>
            <input
              size="50"
              type="text"
              name="url"
              className="control"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div className="field">
            <label className="label" htmlFor="description">
              Description
            </label>
            <textarea
              cols="50"
              rows="5"
              name="description"
              className="control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button type="submit" className="button is-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
