const bikeShops = [

    {
        id: 1, 
        name: "Affinity Cycles",
        missionStatement:"At our roots, Affinity is rider owned by Jason Gallacher, a US Masters National Track Champion and lead creative. Affinity proudly supports youth programming and racing at our home track the Kissena velodrome. Affinity factory racing features passionate cyclists covering all ages and abilities including, national and world champions, juniors and local talents. We have collaborated with the famed rap group Wu Tang Clan, created custom bicycles for Levi’s and the Affinity Metropolitan became the lead characters trusty bicycle of the 2000’s Hollywood cult bike messenger movie Premium Rush. ",
        logo: "https://images.squarespace-cdn.com/content/v1/545e479fe4b07fd6dd005da2/1563292392952-EPOGRXO56IZYNK66XBVJ/Affinity-lock-up.png", 
        website: "https://affinitycycles.com/",
        bikes: "Track, Road, Cyclocross, Gravel, City, and Mountain"
    },
    {
        id: 2, 
        name: "No22 Bicycle Company",
        missionStatement: "No. 22 strives to create forward-thinking, feature rich titanium frames tempered by a legacy of experience. Our frames are made entirely in-house in our Johnstown, NY production facility. Our small team of craftsmen have over 50 years of titanium framebuilding experience between them, which comes through in every frame we build.",
        logo: "https://22bicycles.com/cdn/shop/files/logo-no22.png?v=1613697043", 
        website: "https://22bicycles.com/", 
        bikes: "Road, Gravel, Mountain, and Track", 
    },
    {
        id: 3, 
        name: "Wabi Cycles",
        missionStatement: "Wabi was founded by fixed-gear expert Richard Snook, who had been driven by one mission: to bring the absolute best riding one-gear experience to cyclists with a combination of lightweight, high-quality frames and components.",
        logo: "data:image/png;base64,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", 
        website: "https://wabicycles.com/",
        bikes: "Road, Track, and City"
    },
    {
        id: 4, 
        name: "All-City Cycles",
        missionStatement: "Here at All-City, our mission is to bring beauty back to production bicycles. From classically inspired frames with hand-built touches to the latest advancements in equipment and technology, these elegant machines move us, literally and figuratively, and we're immensely proud of the opportunity we have to help move them forward. To that end, we aim to build exceptionally fast and fun bicycles that are elegant in design, flawless in performance, and beautiful as all hell out in the world.",
        logo: "https://shop.textalk.se/shop/32301/grp0/grp-gridimage-ddc92b.png", 
        website: "https://allcitycycles.com/",
        bikes: "Road, Track, Gravel, and Mountain"
    }, 
    {
        id: 7, 
        name: "Cinelli",
        missionStatement: "Over 75 years of rich history including 28 Olympic Gold Medals, countless Tour De France and Giro D’Italia victories, design awards and exhibitions, we have developed a unique mix of manufacturing know-how, creative collaboration and cultural significance. These three areas of excellence allow us to operate outside the rigid categories and constraints of the mainstream cycling market, and instead work to continuously redesign the cultural limits of performance cycling.", 
        logo: "https://www.seekpng.com/png/full/263-2632813_cinelli-logo-cinelli-bikes-logo-png.png",
        website: "https://cinelli-usa.com/",
        bikes: "Road, Track, Gravel, and Mountain",
    }, 
    {
        id: 8, 
        name: "State Bicycle Co.",
        missionStatement: "Rider-Developed means never losing sight of why we ride bikes: the fun of it. It also means that your bicycle, gear, accessories and clothing were expertly crafted with the quality of your ride at the forefront of it all. At State Bicycle Co., we strive to bring smooth-riding and premiere fixed gear, single speed, city and off-road bikes to all styles of riders.",
        logo: "https://trufixkru.com/wp-content/uploads/2018/03/state-bicycle-co-logo-1.jpeg",
        website: "https://www.statebicycle.com/",
        bikes: "Road, Track, Gravel, and Mountain",
    }, 
    {
        id: 9, 
        name: "Bianchi",
        missionStatement: "Bianchi is the most historic and prestigious brand of bicycles. Our heritage, over 130 years strong, started in Milan in 1885 with Edoardo Bianchi, cannot be equalled in the cycling world. Our positioning embodies the best of what Italy can offer to the world: a commitment to build products as artisans – “a regola d’arte”, distinguishing design, style and taste. Our wide-range of products fans out gradually to meet the needs of the professional and the casual rider, one who loves nature or one who simply wants to move quickly through urban traffic. We provide the ideal bicycle for every type of cyclist. Edoardo Bianchi said that the best way to test a product was to race it. That’s how the Reparto Corse or Racing Department was born. You can always learn something from man’s extreme fatigue racing a bike. Bianchi has always been able to take full advantage from those sensations and feedback to improve and test every bike thoroughly. Just like in motor racing, we have always had a dedicated division following the riders to improve in competitions. Innovation, science and technology come together with man’s sensations. It is not a mystery that for over 100 years this dedication has allowed our champions to win and enabled Bianchi to deliver excellence.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Bianchi_logo.svg/2560px-Bianchi_logo.svg.png",
        website: "https://www.bianchi.com/",
        bikes: "Road, Track, Gravel, and Mountain",
    }, 
    {
        id: 10,
        name: "Weis Manufacturing",
        missionStatement: "Handmade in Brooklyn, New York",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqnQ0sg7a0rJohY4mAvWPIQEi6hfMm0m-OaA&usqp=CAU", 
        website: "https://www.weismfg.co/",
        bikes: "Road, Track, and Gravel",
    }
];

export default bikeShops; 