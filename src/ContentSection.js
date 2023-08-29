import React, { Component } from 'react';

var stat_key_label_map = {
  "user_count": "Vegan members",
  "status_count": "Statuses made",
  "domain_count": "Federated servers",
}

export default class Content extends Component {

  constructor(props) {
    super(props);
    this.state = {
      instance: null,
    };
  }

  render() {
    const { instance } = this.props;
    return (
      <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Made by vegans, not billionaires</h2>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl leading-8 text-gray-600">
                Our profit motive is animal liberation, not dollars. We will not sell your eyeballs to the highest bidder. At worst, we use our platform to give free help to vegan activists and non-profits. Isn't that the best?!
              </p>
              <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                <p>
                  The vegans here would be delighted for you to join us! While there are fewer of us than on billionaire-run social media, we connect with other decentralized social networks. You can interact with the excellent people on Mastodon, Lemmy, KBin, Pixelfed, or PeerTube from Veganism Social.
                </p>
                <p className="mt-10">
                  There are absolutely no fees to use Veganism Social. We want you to be our newest friend. Let's do activism together! Generous crowdfunders pay for our server costs.
                </p>
              </div>
            </div>
            <div className="lg:flex lg:flex-auto lg:justify-center">
              <dl className="w-64 space-y-8 xl:w-80">
                {Object.keys(instance.stats).map((key, index) => (
                  <div key={key} className="flex flex-col-reverse gap-y-4">
                    <dt className="text-base leading-7 text-gray-600">{stat_key_label_map[key]}</dt>
                    <dd className="text-5xl font-semibold tracking-tight text-gray-900">{instance.stats[key].toLocaleString()}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
