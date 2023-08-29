
import React, { Component } from 'react';
import HeroSection from './HeroSection'
import ContentSection from './ContentSection'
import ImageSection from './ImageSecion'
import ValuesSection from './ValuesSection'
import LogoCloud from './LogoCloud'
import TeamSection from './TeamSection'
import ProfilesSection from './ProfilesSection'
import FAQ from './FAQ'
import Header from './Header'
import Footer from './Footer'
import { FaceFrownIcon } from '@heroicons/react/24/outline';

class App extends Component {

  componentDidMount() {
    fetch('/about/instance.json') // 'https://veganism.social/api/v1/instance
        .then(response => response.json())
        .then(data => this.setState({ instance: data }));

    fetch('/about/directory.json')
        .then(response => response.json())
        .then(data => this.setState({ directory: data }));
  }

  render() {
    if (!this.state) {
      this.setState(
        {
          instance: {
            stats: {
              user_count: 0,
              status_count: 0,
              domain_count: 0
            },
            rules: [],
            short_description: "Veganism Social is a place on the internet for vegans to make friends and interact with the wider decentralized social media.",
          },
          directory: []
        }
      )
      return (<></>);
    }

    const { instance, directory } = this.state;

    return (
      <div className="bg-white">
        <Header />

        <main className="isolate">
          <HeroSection instance={instance} directory={directory} />
          <ContentSection instance={instance} />
          <ImageSection instance={instance} />
          <ProfilesSection directory={directory} />
          <ValuesSection instance={instance} />
          <TeamSection />
          <FAQ />
          <LogoCloud />
        </main>

        <Footer />
      </div>
    )
  }
}
export default App;
