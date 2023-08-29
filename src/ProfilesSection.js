import React, { Component } from 'react'

export default class ProfilesSection extends Component {

  render() {
    const { directory } = this.props;
    return (
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
        >
          {directory?.filter((acct) => acct.bot == false).sort((a, b) => b.followers_count - a.followers_count).slice(0, 14).map((acct) => (
            <li key={acct.id}>
              <a href={acct.url} className="block" alt="avatar">
                <img className="mx-auto h-24 w-24 rounded-full" src={acct.avatar} alt="" />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{acct.display_name}</h3>
                <p className="text-sm leading-6 text-gray-600">@{acct.username}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
