const products = [
    {
        title: "Produto 1",
        price: "399",
        id: 1,
        src: "https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-hardwearlarge-link-earrings-68533651_1015073_ED.jpg"
    },{
        title: "Produto 2",
        price: "499",
        id: 2,
        src: "https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-hardwearfreshwater-pearl-ring-in-sterling-silver-64048457_1004020_ED_M.jpg"
    },{
        title: "Produto 3",
        id: 3,
        price: "599",
        src: "https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-hardwearlarge-link-earrings-68533651_1015073_ED.jpg"
    },{
        title: "Produto 4",
        id: 4,
        price: "699",
        src: "https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-hardwearfreshwater-pearl-ring-in-sterling-silver-64048457_1004020_ED_M.jpg"
    },{
        title: "Produto 5",
        id: 5,
        price: "799",
        src: "https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-hardwearlarge-link-earrings-68533651_1015073_ED.jpg"
    },{
        title: "Produto 6",
        id: 6,
        price: "899",
        src: "https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-hardwearfreshwater-pearl-ring-in-sterling-silver-64048457_1004020_ED_M.jpg"
    },{
        title: "Produto 7",
        id: 7,
        price: "999",
        src: "https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-hardwearlarge-link-earrings-68533651_1015073_ED.jpg"
    },
    {
        title: "Produto 8",
        id: 8,
        price: "1299",
        src: "https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-hardwearfreshwater-pearl-ring-in-sterling-silver-64048457_1004020_ED_M.jpg"
    }
];

const categories = [
    {
        id: 1,
        title: "Necklaces & Pendances",
        link: "#",
        image: "https://media.tiffany.com/is/image/tiffanydm/Necklace_op3?$tile$&&fmt=png"
    },
    {
        id: 2,
        title: "Earrings",
        link: "#",
        image: "https://media.tiffany.com/is/image/tiffanydm/Earrings?$tile$&&fmt=png"
    },
    {
        id: 3,
        title: "Rings",
        link: "#",
        image: "https://media.tiffany.com/is/image/tiffanydm/Rings?$tile$&&fmt=png"
    },
    {
        id: 4,
        title: "Bracelets",
        link: "#",
        image: "https://media.tiffany.com/is/image/tiffanydm/Bracelet?$tile$&&fmt=png"
    },
    {
        id: 5,
        title: "Engagement Rings",
        link: "#",
        image: "https://media.tiffany.com/is/image/tiffanydm/EngagementRings?$tile$&&fmt=png"
    },
    {
        id: 6,
        title: "Home Decor",
        link: "#",
        image: "https://media.tiffany.com/is/image/tiffanydm/HomeDecor?$tile$&&fmt=png"
    },
]

const fiftyContent = [
    {
        id: 1, 
        image: "https://media.tiffany.com/is/image/tiffanydm/QuickLink-HP-50-50-Product-StudEarrings-Desktop?$tile$&wid=1088&hei=1360&fmt=png", 
        link: "#", 
        title: "Gifts for Graduates", 
        buttonText: "Shop Now"
    },
    {
        id: 2,
        image: "https://media.tiffany.com/is/image/tiffanydm/T-HP_50-50-opt6-Desktop?$tile$&wid=1088&hei=1360&fmt=png",
        link: "#",
        title: "How do You Tiffany T",
        buttonText: "Shop Now"
    }
]

const fullBanners = [
    {
        id: 1, 
        title: "Love Your Way", 
        subtitle: "You'll know who it's for. You'll know when it's time. You'll just know.", 
        buttonText: "Explore Love & Engagement",
        link: "#",
        position: "right",
        backgroundDesktop: "https://media.tiffany.com/is/image/tiffanydm/2023_GW-HP-FWMH-Desktop?$tile$&wid=2992&fmt=webp",
        backgroundMobile: "https://media.tiffany.com/is/image/tiffanydm/2023_GW-HP-FWMH-Mobile?$tile$&wid=720&fmt=webp"
    },
    {
        id: 2, 
        title: "From the Source", 
        subtitle: "Handcrafting the world's best diamonds starts with knowing where they come from. We proudly trace 100% of our rough diamonds to known mines and sources.", 
        buttonText: "Follow Your Diamonds Journey", 
        link: "#",
        position: "left",
        backgroundDesktop: "https://media.tiffany.com/is/image/tiffanydm/2021_Bloomgberg-HP_FWMH-Desktop2?$tile$&wid=2992&fmt=webp",
        backgroundMobile: "https://media.tiffany.com/is/image/tiffanydm/2021_Bloomgberg-HP_FWMH-Mobile?$tile$&wid=720&fmt=webp"
    },
]

const stories = [
    {
        id: 1,
        image: "https://media.tiffany.com/is/image/tiffanydm/BeyonceTour-HP-Stories?$tile$&wid=736&hei=920&fmt=webp",
        title: "Beyoncé Tours in Tiffany & Co.",
        subtitle: "The House is the official jeweler for the RENAISSANCE WORLD TOUR.",
        link: "#",
        btnText: "Learn More"
    },
    {
        id: 2,
        image: "https://media.tiffany.com/is/image/tiffanydm/LOCK-HP-WhatIsNew-Desktop-1?$tile$&wid=736&hei=920&fmt=webp",
        title: "Tiffany Lock",
        subtitle: "No rules. All welcome.",
        link: "#",
        btnText: "Explore the Collection"
    },
    {
        id: 3,
        image: "https://media.tiffany.com/is/image/tiffanydm/T-HP-WhatIsNew-Desktop-JIMIN?$tile$&wid=736&hei=920&fmt=webp",
        title: "This Is Tiffany T",
        subtitle: "Our favorite letter, everyone's favorite collection.",
        link: "#",
        btnText: "Learn More"
    }
]

const experiences = [
    {
        id: 1,
        icon: "https://media.tiffany.com/is/image/tiffanydm/HP_SERVICE_SHIPPING_DESKTOP?$tile$&wid=988&hei=988&fmt=webp",
        firstText: "Complimentary Shipping & Returns",
        secondText: "We offer complimentary shipping and returns on all Tiffany orders.",
        link: "#",
        textLink: "Learn More"
    },
    {
        id: 2,
        icon: "https://media.tiffany.com/is/image/tiffanydm/HP_SERVICE_CUSTOMERCARE_DESKTOP?$tile$&wid=988&hei=988&fmt=webp",
        firstText: "Tiffany At Your Service",
        secondText: "Our client care experts are always here to help.",
        link: "#",
        textLink: "Contact Us"
    },
    {
        id: 3,
        icon: "https://media.tiffany.com/is/image/tiffanydm/HP_SERVICE_APPT_DESKTOP?$tile$&wid=988&hei=988&fmt=webp",
        firstText: "Book an Appointment",
        secondText: "We're happy to help with in-store or virtual appointments.",
        link: "#",
        textLink: "Book Now"
    },
    {
        id: 4,
        icon: "https://media.tiffany.com/is/image/tiffanydm/HP_SERVICE_BLUEBOX_DESKTOP?$tile$&wid=988&hei=988&fmt=webp",
        firstText: "The Iconic Blue Box",
        secondText: "Your Tiffany purchase comes wrapped in our Blue Box packaging.",
        link: "#",
        textLink: "Explore All Gifts"
    },
]

export { 
    products, 
    categories, 
    fiftyContent, 
    fullBanners, 
    stories,
    experiences
};