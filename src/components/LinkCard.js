import React from 'react';

export default function LinkCard({ link, refreshLinks }) {
  const archiveLink = async () => {
    link.archived = true;
    try {
      await fetch('/.netlify/functions/updateLink', {
        method: 'PUT',
        body: JSON.stringify(link),
      });
      refreshLinks();
    } catch (error) {
      console.error('Uh oh! Something has gone wrong...', error);
    }
  };
  const deleteLink = async () => {
    const id = link._id;
    try {
      await fetch('/.netlify/functions/deleteLink', {
        method: 'DELETE',
        body: JSON.stringify({ id }),
      });
      refreshLinks();
    } catch (error) {
      console.error('Uh oh! Something has gone wrong...', error);
    }
  };
  return (
    <div className="card mb-3">
      <div className="card-header is-size-6">
        <div className="card-header-title bg-blue-100">
          <p>{link.name}</p>
        </div>
      </div>
      <div className="card-content">
        <a href={link.url}>{link.url}</a>
        <p>{link.description}</p>
      </div>
      <div className="card-footer">
        <button className="button is-warning my-3 mx-3" onClick={archiveLink}>
          Archive
        </button>
        <button className="button is-danger my-3 mx-3" onClick={deleteLink}>
          Delete
        </button>
      </div>
    </div>
  );
}
