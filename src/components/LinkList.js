import React from 'react';
import LinkCard from './LinkCard';

export default function LinkList({ links, refreshLinks }) {
  return (
    <div>
      <h2 className="my-5 is-size-5 is-uppercase has-text-weight-semibold">
        Active Links
      </h2>
      {links &&
        links
          .filter((link) => !link.archived)
          .map((link) => (
            <LinkCard key={link._id} link={link} refreshLinks={refreshLinks} />
          ))}
      <h2 className="my-5 is-size-5 is-uppercase has-text-weight-semibold">
        Archived Links
      </h2>
      {links &&
        links
          .filter((link) => link.archived)
          .map((link) => (
            <LinkCard key={link._id} link={link} refreshLinks={refreshLinks} />
          ))}
    </div>
  );
}
