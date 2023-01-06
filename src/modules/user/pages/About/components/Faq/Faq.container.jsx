import React from "react";
import { useEffect, useState } from "react";

import Faq from "react-faq-component";

const data = {
    title: "Frequently asked questions",
    rows: [
        {
            title: "What is Vagary?",
            content: `We roam all over the globe to get the experience of that place.`,
        },
        {
            title: "How can I post my blog?",
            content:
                "Only the admins have rights to post the blogs so that those are the legit.",
                
        },
        {
            title: "What travel guide would you recommend for my travel plans?",
            content: `I am an unabashed travel guide junkie. Buy them from the places as you can't afford and probably won't be visiting in the next five years.If you want to visit cities like Las Vegas, Amsterdam, Dublin, or  just  do a little  research, check out Dorring Kindersley's Top 10 I like books. For long trips (and wanting to splurge), I trust the knowledge of Rick Steves, Lonely Planet, or Frommer's. If you want to skip the weight of books, ebooks and apps are the best alternatives.
            `,
        },
        {
            title: "I want to start a blog. What host should I use?",
            content: "There are lots of host available on the internet to host any website. Just look for it and see which fits the best with you. I used diff host for storing my images, database and the actual website.",
        },
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "dark charcoal",
    rowTitleColor: "dark charcoal",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

export default function Faqs() {

    return (
        <div>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}