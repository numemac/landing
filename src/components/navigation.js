const API_ENDPOINT=process.env.REACT_APP_API_ENDPOINT;

const header_links = [
    { href: `${API_ENDPOINT}/vegans`, label: 'Trending' },
    { href: `${API_ENDPOINT}/public/local`, label: 'New' },
    { href: `https://www.patreon.com/veganismsocial`, label: 'Patreon' },
    { href: `https://uptime.veganism.social`, label: 'Uptime' },
    { href: `https://fedipact.veganism.social/`, label: 'Fedipact' },
]

const supplementary_links = [
    { href: `${API_ENDPOINT}/privacy-policy`, label: 'Privacy Policy' },
    { href: `https://joinmastodon.org/`, label: 'About Mastodon' },
    { href: `https://joinmastodon.org/apps`, label: 'Get an App' }
]

// Join <green heart emoji> to the right
const auth_button = { href: '/auth/sign_up', label: 'Join' }

const linkRow = (links) => {
    return (
        <div key={1} className="justify-center flex-1 flex gap-8 lg:gap-12 font-bold text-sm lg:text-md my-6">
            {links.map(({ href, label }) => (
                <a key={label} href={href}>
                    <span>{label}</span>
                </a>
            ))}
        </div>
    );
}

export function Header() {
    return (
            <nav className="lg:flex items-center py-6">
                <div className="block lg:flex-1">
                    <svg className="h-12 lg:h-16 w-auto mx-auto mb-4 lg:m-0" viewBox="0 0 2522 820" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <image href={`${API_ENDPOINT}/wordmark.svg`} />
                    </svg>
                </div>
                <div className="flex">
                    <div className="justify-center flex-1 flex gap-12 font-bold text-md">
                        {linkRow(header_links)}
                    </div>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href={auth_button.href} type="button" className="inline-flex button-small bg-indigo-600 hover:bg-indigo-700 text-white">
                        <span>{auth_button.label}</span>
                    </a>
                </div>
            </nav>
    );
}

export function Footer() {

    return (
        <div className="my-36 text-center">
            {
                [
                    header_links,
                    supplementary_links
                ].map((row, index) => {
                    return (
                        <div key={index}>
                            {linkRow(row)}
                        </div>
                    )
                })
            }
            <div className="my-16">
                <a href={auth_button.href} type="button" className="button bg-indigo-600 hover:bg-indigo-700 text-white animate-wiggle">
                    <span>Create Account</span>
                </a>
            </div>
            <p className="text-sm">© 2023 Veganism Social. All rights reserved.</p>
        </div>
    );
}