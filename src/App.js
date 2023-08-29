
import React, { Component } from 'react';
import HeroSection from './HeroSection'
import ContentSection from './ContentSection'
import ImageSection from './ImageSecion'
import ValuesSection from './ValuesSection'
import LogoCloud from './LogoCloud'
import TeamSection from './TeamSection'
import BlogSection from './BlogSection'
import ProfilesSection from './ProfilesSection';
import Header from './Header'
import Footer from './Footer'

class App extends Component {

  componentDidMount() {
    fetch('https://veganism.social/api/v1/instance')
        .then(response => response.json())
        .then(data => this.setState({ instance: data }));

    fetch('https://veganism.social/api/v1/directory?local=true')
        .then(response => response.json())
        .then(data => this.setState({ directory: data }));
  }

  render() {
    if (!this.state) return (<div>Loading...</div>);
    const { instance, directory } = this.state;
    if (!instance || !directory) return (<></>);

    return (
      <div className="bg-white">
        <Header />

        <main className="isolate">
          <HeroSection instance={instance} directory={directory} />
          <ContentSection instance={instance} />
          <ProfilesSection directory={directory} />
          <ImageSection instance={instance} />
          <ValuesSection instance={instance} />
          <LogoCloud />
          <TeamSection />
        </main>

        <Footer />
      </div>
    )
  }
}
export default App;
