import React from 'react';

export default function LinkCard({ link, refreshLinks }) {
  const archiveLink = async () => {
    link.archived = true;
    try {
      await fetch('/api/updateLink', {
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
      await fetch('/api/deleteLink', {
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
        <div className="card-header-title">
          <p>{link.name}</p>
        </div>
      </div>
      <div className="card-content">
        <a href={link.url}>{link.url}</a>
        <p>{link.description}</p>
      </div>
      <div className="card-footer">
        <button className="button is-info my-3 mx-3" onClick={archiveLink}>
          Archive
        </button>
        <button className="button is-danger my-3 mx-3" onClick={deleteLink}>
          Delete
        </button>
      </div>
    </div>
  );
}
