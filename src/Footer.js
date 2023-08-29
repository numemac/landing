import PlantBasedTreatyBadge from './pbt-badge.png'

export default function Footer() {

  const footerNavigation = {
    main: [
      { name: 'Status', href: 'https://uptime.veganism.social/' },
      { name: 'Privacy Policy', href: 'https://veganism.social/privacy-policy' },
      { name: 'About Mastodon', href: 'https://joinmastodon.org/' },
      { name: 'Get an app', href: 'https://joinmastodon.org/apps' },
    ],
  }

  return (
    <footer className="mx-auto mt-40 max-w-7xl overflow-hidden px-6 pb-20 sm:mt-64 sm:pb-24 lg:px-8">
      <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
        {footerNavigation.main.map((item) => (
          <div key={item.name} className="pb-6">
            <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
              {item.name}
            </a>
          </div>
        ))}
      </nav>
      <div className="mt-10 flex justify-center space-x-10">
        <a href="https://plantbasedtreaty.org/" className="inline-flex">
          <img className="w-16 h-16" src={PlantBasedTreatyBadge} alt="We Endorse the Plant Based Treaty" />
        </a>
      </div>
      <p className="mt-10 text-center text-xs leading-5 text-gray-500">
        &copy; 2023 Veganism Social. All rights reserved.
      </p>
    </footer>
  )
}
