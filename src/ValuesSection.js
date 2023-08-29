import React, { Component } from 'react';

export default class HeroSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      instance: null,
    };
  }

  render() {
    const { instance } = this.props;
    return (
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our rules</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            All vegans are welcome, but we will not tolerate hate speech against specific groups of people.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {instance?.rules.map((rule, index) => (
            <div key={rule.id}>
              <dt className=" text-gray-600">Rule #{index + 1}</dt>
              <dd className="font-semibold mt-1 text-gray-900">{rule.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    )
  }
}
