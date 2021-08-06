import React from 'react';

import Section from '../section';

const SectionContact = ({ contact }) => {
  return (
    <Section title="Contact">
      <div className="mb-6">
        <p>trinkle &#60;at&#62; uchicago.edu</p>
        <p>
          <a
            href="https://github.com/scott-trinkle"
            target="_blank"
            rel="noreferrer"
          >
            <u>Github</u>
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/trinkle/"
            target="_blank"
            rel="noreferrer"
          >
            <u>LinkedIn</u>
          </a>
        </p>
        <p>
          <a
            href="https://orcid.org/0000-0003-3724-5303"
            target="_blank"
            rel="noreferrer"
          >
            <u>ORCID</u>
          </a>
        </p>
      </div>
    </Section>
  );
};

export default SectionContact;
