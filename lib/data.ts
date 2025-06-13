import { url } from "inspector";

const data = {
    headerMenus: [
        {
            name: "Today's Deal!",
            href: '/search?tag=todays-deal'
        },
        {
            name: "New Arrivals",
            href: '/search?tag=new-arrival'
        },
        {
            name: "Featured Products",
            href: '/search?tag=featured'
        },
        {
            name: "Best Sellers",
            href: '/search?tag=best-seller'
        },
        {
            name: "Browsing History",
            href: '/#browsing-history'
        },
        {
            name: "Customer Service",
            href: '/page/customer-service' 
        },
    ],
    carousels: [
        {
            title: "Most Popular Book on Sale",
            buttonCaption: "Shop Now",
            image: "/images/5.jpg",
            url: "/search?category=books",
            isPublished: true,
        },
        {
            title: "Best Seller Book on Sale",
            buttonCaption: "Shop Now",
            image: "/images/6.jpg",
            url: "/search?category=books1",
            isPublished: true,
        },
        {
            title: "Best Deals Book on Sale",
            buttonCaption: "Shop Now",
            image: "/images/7.jpg",
            url: "/search?category=books2",
            isPublished: true,
        },
    ]
}

export default data; 

