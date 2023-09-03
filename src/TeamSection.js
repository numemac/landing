import React, { Component } from 'react'
import VeganismSocialCar from './veganismsocialcar.jpeg'

const team_accts = ['nm', 'Ellie', 'beforewisdom', 'melissaratisher', 'carlile', 'cinzalorxu']

export default class TeamSection extends Component {

  componentDidMount() {
    if (!this.state) {
      this.setState({ team: {}, loaded_accts: [] })

      team_accts.forEach((acct) => {
        fetch(`/about/team/${acct}.json`)
          .then(response => response.json())
          .then(data => {
            this.setState((state) => ({ loaded_accts: [...state.loaded_accts, acct].filter((value, index, array) => array.indexOf(value) === index) }))
            this.setState((state) => ({ team: { ...state.team, [acct]: data } }))
          }).catch((error) => {
            console.error(error);
          });
      })
    }
  }

  render() {
    if (!this.state) return (<div>Loading...</div>);
    const { team, loaded_accts } = this.state;
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our team</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            All of us are volunteers who are deeply committed to animal liberation!
          </p>
          <ul
            role="list"
            className="text-center mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
          >
            {loaded_accts.filter((acct) => team[acct] && team[acct]?.roles && team[acct]?.roles[0]).map((acct) => team[acct]).sort((person) => person.roles[0].name === 'Founder' ? -1 : (person.roles[0].name === 'Admin' ? 0 : 1 )).map((person) => (
              <li key={person?.id}>
                <a href={person?.url} className="block" key={person?.name}>
                  <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person?.avatar} alt="avatar" />
                  <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{person?.display_name}</h3>
                  <p className="text-base leading-7 text-gray-600">{(person?.roles && person?.roles[0]) ? person?.roles[0]["name"] : ''}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 lg:px-8">
          <img className="rounded-2xl object-cover" src={VeganismSocialCar} alt="Veganism Social Car" />
        </div>
      </div>
    )
  }
}
