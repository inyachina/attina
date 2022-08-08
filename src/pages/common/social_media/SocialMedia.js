import React from "react";
import './socialMedia.scss';
import data from '../../../dataMainPage.json'

import inst from '../../../assets/img/inst.svg'
import tiktok from '../../../assets/img/tiktok.svg'
import twitter from '../../../assets/img/twitter.svg'
import youtube from '../../../assets/img/youtube.svg'
import meta from '../../../assets/img/metamask.svg'

export const SocialMedia = ({media, background}) => {
    const socials = [
        {
            name: "inst",
            link: data.Links.inst,
            img: inst
        }, {
            name: "twitter",
            link: data.Links.twitter,
            img: twitter
        }, {
            name: "tiktok",
            link: data.Links.tiktok,
            img: tiktok
        }, {
            name: "youtube",
            link: data.Links.youtube,
            img: youtube
        }, {
            name: "metamask",
            link: data.Links.youtube,
            img: meta
        },
    ]
    return <a
        href={socials.find((s)=> s.name === media).link}
        className="social_media">
        <img src={socials.find((s)=> s.name === media).img}/>
    </a>
}
