import React from 'react';
import Draggable from 'react-draggable';

const Terminal = () => (
  <Draggable>
    <div
      id="termynal"
      data-termynal
      data-ty-typedelay="40"
      data-ty-linedelay="40"
    >
      <span data-ty="input">npm install personal-info</span>
      <span data-ty="progress" />
      <span data-ty>Successfully installed personal-info</span>
      <span data-ty="input">node</span>
      <span data-ty="input" data-ty-prompt=">">
        {"import { personalInfo } from 'personal-info'"}
      </span>
      <span data-ty="input" data-ty-prompt=">">
        personalInfo.findByGithub('dxnter');
      </span>
      <span data-ty>{'{'}</span>
      <span data-ty>{"    name: 'Danny Foster',"}</span>
      <span data-ty>{'    age: 21,'}</span>
      <span data-ty>
        {'    github: '}
        <a
          href="https://github.com/dxnter"
          target="_blank"
          rel="noopener noreferrer"
        >
          'dxnter'
        </a>
        {','}
      </span>
      <span data-ty>
        {'    website: '}
        <a
          href="https://danfoster.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          'danfoster.io'
        </a>
      </span>
      <span data-ty>{'}'}</span>
    </div>
  </Draggable>
);

export default Terminal;
