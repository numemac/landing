// get data from API path #{backend}/api/v1/directory?order=active&local=false&limit=20

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import GridBackground from '../components/grid_background';
import FAQ from '../components/faq';

const API_ENDPOINT=process.env.REACT_APP_API_ENDPOINT;

export default function Root() {
    const [directory, setDirectory] = useState([]);
    const [directoryLimit, setDirectoryLimit] = useState(20);
    const [slideshows, setSlideshows] = useState([]);
    const [instance, setInstance] = useState(null);

    useEffect(() => {
        axios.get(`${API_ENDPOINT}/api/v1/landing`)
            .then(res => {
                // console.log(res);
                setDirectory(structuredClone(res.data));
                // set featured to 5 random accounts
                let random_set = structuredClone(res.data).sort(() => Math.random() - Math.random())
                let new_slideshows = [];
                let slideshow_length = Math.floor(random_set.length / 5);
                for (let i = 0; i < 5; i++) {
                    new_slideshows.push(random_set.slice(i * slideshow_length, (i + 1) * slideshow_length));
                }
                setSlideshows(new_slideshows);
            })
            .catch(err => {
                console.log(err);
            })
        
        axios.get(`${API_ENDPOINT}/api/v1/instance`)
            .then(res => {
                // console.log(res);
                setInstance(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    // every 10 seconds, rotate the slideshows
    useEffect(() => {
        const interval = setInterval(() => {
            let new_slideshows = structuredClone(slideshows);
            
            // pick a random index to move first index to last index
            let random_index = Math.floor(Math.random() * new_slideshows.length);
            let slideshow = new_slideshows[random_index];
            slideshow.push(slideshow.shift());

            new_slideshows[random_index] = slideshow;
            setSlideshows(new_slideshows);
        }, 8000);
        return () => clearInterval(interval);
    }, [slideshows]);

    function accountStack(slideshows) {
        return slideshows.map((slideshow) => (slideshow).slice(0, 1).map((account, index) => (
            <a href={`${API_ENDPOINT}/@${account.username}`} key={index} className="block w-24 lg:w-48 h-36 lg:h-72 ml-8" title={`Visit profile`}>
                <div className="rounded-xl bg-white h-full">
                    <img 
                        src={account.avatar} alt={`${account.username}'s avatar`} 
                        className="object-cover h-full my-12 rounded-xl shadow-lg bg-white animate-slide-in"
                        onLoad={(e) => {
                            // trigger animation
                            e.target.classList.remove('animate-slide-in');
                            void e.target.offsetWidth;
                            e.target.classList.add('animate-slide-in');
                            
                        }}
                    />
                </div>
            </a>
        )));
    }

    function accountStacks() {
        if (slideshows.length < 5) return (<div></div>);
        return (
            <div className="flex-auto hidden sm:block">
                <div className="flex">
                    <div className="lg:flex-1 lg:my-auto hidden lg:block">
                        {accountStack(slideshows.slice(0, 1))}
                    </div>

                    <div className="lg:flex-1 lg:mt-16 block lg:block">
                        {accountStack(slideshows.slice(1, 3))}
                    </div>
                    
                    <div className="xl:flex-1 lg:hidden xl:block">
                        {accountStack(slideshows.slice(3, 5))}
                    </div>
                </div>
            </div>
        );
    }

    function instanceThumbnail() {
        if (instance === null) { return (<div>Loading</div>); }
        return (
            <div className="mx-auto my-32 lg:w-2/3 w-full">
                <img src={instance.thumbnail} alt="Veganism Social's thumbnail" className="rounded-xl shadow-lg" />
                <p className="text-center my-3">Veganism Social is powered by <a className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-300" href="https://joinmastodon.org">Mastodon</a></p>
            </div>
        )
    }

    function instanceStats() {
        if (instance === null) { return (<div>Loading</div>); }

        return (
            <dl className="flex flex-row lg:flex-col gap-y-8 gap-x-12 text-center lg:text-left justify-center">
                {
                    [
                        { 
                            title: "Vegan members",
                            value: instance.stats.user_count, 
                        },
                        {
                            title: "Statuses made",
                            value: instance.stats.status_count,
                        },
                        {
                            title: "Federated instances",
                            value: instance.stats.domain_count,
                        }
                    ].map((stat, index) => (
                        <div key={index} className="">
                            <dt className="text-2xl sm:text-5xl font-bold text-black dark:text-neutral-100">{stat.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</dt>
                            <dd className="text-sm sm:text-md py-2">{stat.title}</dd>
                        </div>
                    ))
                }
            </dl>
        );  
    }

    function accountList() {

        function seeMore() {
            if (directory.length <= directoryLimit) return (<></>);
            return (
                <li key={directoryLimit} className="w-24 sm:w-40 h-24 sm:h-40 cursor-pointer gap-8" onClick={() => setDirectoryLimit(directoryLimit + 20)}>
                    <div className="w-16 sm:w-28 h-16 sm:h-28 mx-auto bg-indigo-600 hover:bg-indigo-700 rounded-full flex justify-center items-center">
                        <p className="mt-2 flex text-xl sm:text-5xl text-white animate-more-plus">+</p>
                    </div>
                    <span className="text-center block text-xs sm:text-xl font-bold my-3">See More</span>
                </li>
            );
        }

        return (
            <div className="my-32">
                <h2 className="subtitle">
                    Some of our members
                </h2>
                <ul className="flex flex-row flex-wrap justify-start gap-y-12 mt-12">
                    {directory.slice(0, directoryLimit).map((account, index) => (
                        <li key={index} className="w-24 sm:w-40 h-24 sm:h-40 gap-8">
                            <a className="w-full h-full hover:text-blue-700 dark:hover:text-blue-300" href={`${API_ENDPOINT}/@${account.username}`} title={`Visit profile`}>
                                <div className="w-16 sm:w-28 h-16 sm:h-28 mx-auto">
                                    <img 
                                        src={account.avatar} alt={`${account.username}'s avatar`} 
                                        className="object-cover h-full rounded-full"
                                    />
                                </div>
                                <span className="text-center block text-xs sm:text-sm font-bold my-2">{account.display_name}</span>
                                <span className="text-center hidden sm:block text-xs my-2">@{account.username}</span>
                            </a>
                        </li>
                    ))}
                    {seeMore()}
                </ul>
            </div>
        );
    }

    function rules() {
        if (instance === null) { return (<div>Loading</div>); }
        return (
            <div className="my-32">
                <h2 className="subtitle">
                    Our Rules
                </h2>
                <ul className="grid gap-x-8 gap-y-12 my-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {instance.rules.map((rule, index) => (
                        <li key={index} className="text-md mb-4">
                            <span className="block text-2xl mb-4">Rule #{index + 1}</span>
                            <span className="block text-lg dark:text-white tracking-widest leading-8">{rule.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }


    return (
        <>
        <GridBackground />
        <div className="">
            <div className="flex">
                <div className="flex-auto my-auto">
                    <h1 className="title pb-8 font-bold">
                        The federated social network for vegans
                    </h1>

                    <a href="/auth/sign_up" type="button" className="inline-flex button mr-4 bg-indigo-600 hover:bg-indigo-700 text-white animate-wiggle">
                        Create Account
                    </a>

                    <a href="/auth/sign_in" type="button" className="button bg-gray-100 hover:bg-gray-200 text-gray-900 border">
                        Log in
                    </a>
                </div>
                {accountStacks()}
            </div>

            <div className="flex flex-col lg:flex-row gap-y-12 my-16">
                <div className="flex-1 max-w-2xl xl:max-w-none">
                    <h2 className="subtitle">
                        Made by vegans, not billionaires
                    </h2>
                    <p className="text-md font-bold mb-4">
                        Our profit motive is animal liberation, not dollars. We will not sell your eyeballs to the highest bidder. At worst, we use our platform to give free help to vegan activists and non-profits. Isn't that the best?!
                    </p>
                    <p className="text-md mb-4">
                        The vegans here would be delighted for you to join us! While there are fewer of us than on billionaire-run social media, we connect with other decentralized social networks. You can interact with the excellent people on Mastodon, Lemmy, KBin, Pixelfed, or PeerTube from Veganism Social.
                    </p>

                    <p className="text-md">
                        There are no fees to use Veganism Social. We want you to be our newest friend. Let's do activism together! Generous crowd-funders pay for our server costs.
                    </p>
                </div>
                <div className="flex flex-shrink mx-auto xl:flex-1 justify-center lg:justify-end">
                    {instanceStats()}
                </div>
            </div>

            {instanceThumbnail()}

            {accountList()}

            {rules()}

            <FAQ />
        </div>
        </>
    );
}