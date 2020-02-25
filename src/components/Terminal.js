import React, { Component } from 'react';

class Terminal extends Component {
  componentDidMount() {
    console.log(document.querySelector('#termynal', '::before'));
  }

  render() {
    return (
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
          {"const personalInfo = require('personal-info')"}
        </span>
        <span data-ty="input" data-ty-prompt=">">
          personalInfo.findByGithub('dxnter')
        </span>
        <span data-ty>{'{'}</span>
        <span data-ty>{"    name: 'Danny Foster',"}</span>
        <span data-ty>
          {'    blog: '}
          <a
            href="https://danfoster.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            'danfoster.io'
          </a>
          {','}
        </span>
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
          {'    twitter: '}
          <a
            href="https://twitter.com/tower"
            target="_blank"
            rel="noopener noreferrer"
          >
            'tower'
          </a>
          {','}
        </span>
        <span data-ty>{"    discord: 'dxnter#1600',"}</span>
        <span data-ty>{'}'}</span>
      </div>
    );
  }
}

export default Terminal;
