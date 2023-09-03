import React, { Component } from 'react'

export default class ProfilesSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      limit: 12
    };
  }

  render() {
    const { directory } = this.props;
    const { limit } = this.state;
    return (
      <div>
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">

          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Directory</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              These are some of the most followed profiles on Veganism Social.
            </p>
          </div>

          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
          >
            {directory?.sort((a, b) => b.followers_count - a.followers_count).slice(0, limit).map((acct) => (
              <li key={acct.id}>
                <a href={acct.url} className="block">
                  <img className="mx-auto h-24 w-24 rounded-full" src={`/about/avatars/${acct.acct}-100.webp`} alt="avatar" width="100" height="100" />
                  <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{acct.display_name}</h3>
                  <p className="text-sm leading-6 text-gray-600">@{acct.username}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {limit < directory.length ? (<div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 lg:px-8">
          <button
            type="button"
            // center button
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mx-auto block"
            onClick={() => this.setState({ limit: limit + 12 })}
          >
            Show more
          </button>
        </div>) : null}
      </div>
    )
  }
}
