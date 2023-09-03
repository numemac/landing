
import React, { Component } from 'react';

import { UserPlusIcon } from '@heroicons/react/24/outline';
import AvatarPlaceholder from './avatar-placeholder.png';

const featured_accts = ['liftingveganlogic', 'animalsavemovement', 'algorithm', 'foaorg', 'vegangaze']

export default class HeroSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      instance: null,
      directory: null,
      loaded_accts: [],
      featured: {},
    };

    featured_accts.forEach((acct) => {
      fetch(`/about/featured/${acct}.json`)
        .then(response => response.json())
        .then(data => {
          this.setState((state) => ({ loaded_accts: [...state.loaded_accts, data] }))
        }).catch((error) => {
          console.error(error);
        });
    })
  }

  render() {
    const { instance, directory, loaded_accts } = this.state;

    return (
      <div className="relative isolate -z-10">
        <svg
          className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
        </svg>
        <div
          className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          aria-hidden="true"
        >
          <div
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
            }}
          />
        </div>
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="w-full max-w-xl lg:shrink-0 xl:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  The federated social network for vegans
                </h1>
                <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                  { instance?.short_description }
                </p>

                <div className="mt-12">
                  <a
                    type="button"
                    className="animate-wiggle inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    href="https://veganism.social/auth/sign_up"
                  >
                    Create account
                    <UserPlusIcon className="-mr-0.5 h-6 w-6" aria-hidden="true" />
                  </a>

                  <a
                    type="button"
                    className="ml-4 inline-flex items-center gap-x-2 rounded-md bg-gray-100 px-3.5 py-2.5 text-xl font-semibold text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border-gray-300 border-2"
                    href="https://veganism.social/auth/sign_in"
                  >
                    Log in
                  </a>
                </div>
              </div>
              <div className="mt-8 flex justify-end gap-8 sm:-mt-16 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <img
                      src={loaded_accts && loaded_accts[0] ? `/about/avatars/${loaded_accts[0]?.acct}-176-264.webp` : AvatarPlaceholder}
                      alt="avatar"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      width="176"
                      height="264"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <img
                      src={loaded_accts && loaded_accts[1] ? `/about/avatars/${loaded_accts[1]?.acct}-176-264.webp` : AvatarPlaceholder}
                      alt="avatar"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      width="176"
                      height="264"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <img
                      src={loaded_accts && loaded_accts[2] ? `/about/avatars/${loaded_accts[2]?.acct}-176-264.webp` : AvatarPlaceholder}
                      alt="avatar"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      width="176"
                      height="264"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <img
                      src={loaded_accts && loaded_accts[3] ? `/about/avatars/${loaded_accts[3]?.acct}-176-264.webp` : AvatarPlaceholder}
                      alt="avatar"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      width="176"
                      height="264"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <img
                      src={loaded_accts && loaded_accts[4] ? `/about/avatars/${loaded_accts[4]?.acct}-176-264.webp` : AvatarPlaceholder}
                      alt="avatar"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      width="176"
                      height="264"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
