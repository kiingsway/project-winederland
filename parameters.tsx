import { TImages, TImage, TSocialMedia, IImage, IActivity, IProduct } from "./interfaces";
import background_image from '@/public/Winery Barrels Background.jpg';
import { PT, CA, US, DE, CL, ES } from "country-flag-icons/react/3x2";

export const slogan = "Uncork the Magic!";

export const socialmedia_usernames: Record<TSocialMedia, string> = {
  instagram: "winederland__",
  tiktok: "winederland_ilac",
  whatsapp: ""
};

export const socialmedia_urls: Record<TSocialMedia, string> = {
  instagram: `https://www.instagram.com/${socialmedia_usernames.instagram}/`,
  tiktok: `https://www.tiktok.com/@${socialmedia_usernames.tiktok}/`,
  whatsapp: `https://chat.whatsapp.com/IzV0DKeklUlBIIULpDjaBu`,
};

export const socialmedia_profile: Record<TSocialMedia, string> = {
  instagram: "./Winederland Invitation.jpg",
  tiktok: "./ttk profile.jpeg",
  whatsapp: ""
};

export const images: IImage[] = [
  { alt: 'Winederland Invitation', src: './Winederland Invitation.jpg' },
  { alt: 'Event Map', src: './Event Map.jpg' },
  { alt: 'Draft of decoration on ILAC Building', src: './Decoration.png' },
  { alt: 'Love Sign Decoration', src: './Love Sign Decoration.png' },
  { alt: 'Invitation Image', src: './Invitation Image.png' },
  { alt: 'Invitation Video Thumbnail', src: './Invitation Video Thumbnail.png' },
];

export const socialmedia_posts: Record<TSocialMedia, IImage[]> = {
  instagram: [
    { alt: 'IG thumb 3', src: './IG thumb 3.png' },
    { alt: 'Invitation Image', src: './Invitation Image.png' },
    { alt: 'Winederland Invitation', src: './Winederland Invitation.jpg' },
  ],
  tiktok: [
    { alt: 'Invitation Video Thumbnail', src: './Invitation Video Thumbnail.png' },
  ],
  whatsapp: [],
};

export const wine_sections = [
  {
    key: "red wine",
    image: "./red-wine.webp",
    desc: "Red wine is a type of wine made from dark-colored grape varieties. The color of red wine can range from intense violet to brick red, and it gets its color from the grape skins that are included during fermentation. Red wine is typically richer and more complex in flavor compared to white wine, with flavors that can vary depending on the grape variety and region. Common flavors in red wine include fruits like cherry, plum, and raspberry, as well as earthy, spicy, and floral notes. Red wine is often aged in oak barrels, which can impart additional flavors and aromas. It is enjoyed around the world and is often paired with a variety of foods."
  },
  {
    key: "white wine",
    image: "./white-wine.webp",
    desc: "White wine is a type of wine made from green or yellowish grapes. Unlike red wine, white wine is fermented without the grape skins, which gives it its lighter color. White wines can range from pale yellow to golden amber in color, and they are known for their crisp and refreshing taste. Flavors in white wine can vary widely depending on the grape variety and region, but common flavors include citrus, apple, pear, and tropical fruits. White wine is often aged in stainless steel tanks or oak barrels, which can affect its flavor and aroma. It is typically served chilled and pairs well with a variety of foods, including seafood, poultry, and light pasta dishes."
  },
  {
    key: "sparkling wine",
    image: "./sparkling-wine.webp",
    desc: "Sparkling wine is a carbonated wine known for its effervescence, created through secondary fermentation. It's typically made using the traditional method (like Champagne) or the Charmat method. Sparkling wines vary in sweetness from extra brut (very dry) to doux (very sweet). They can be white or rosé, with flavors ranging from crisp and citrusy to creamy and nutty. Common types include Champagne, Prosecco, Cava, and sparkling rosé. Sparkling wines are often associated with celebrations and are enjoyed on their own or paired with a variety of foods, from appetizers to desserts."
  },
  {
    key: "rose wine",
    image: "./rose-wine.webp",
    desc: "Rosé wine is a refreshing and versatile wine that derives its pink color from brief contact with grape skins. It can range in color from pale salmon to deep pink, with flavors spanning from dry and fruity to sweet and floral. Rosé is made from a variety of red grapes and is produced worldwide. It's known for its light body, crisp acidity, and bright fruit flavors, making it a perfect summer sipper. Rosé pairs well with a wide range of foods, from light salads and seafood to grilled meats and spicy dishes. Its popularity has surged in recent years due to its approachable nature and ability to please a variety of palates."
  },
  {
    key: "grape juice",
    image: "./grape-juice.webp",
    desc: "Grape juice is a non-alcoholic beverage made from crushed grapes. It's a sweet and flavorful drink enjoyed by all ages. It's rich in vitamins, antioxidants, and natural sugars, making it a healthy and refreshing choice."
  }
];

export const description_about = `Winederland is an event sponsored by ILAC, organized yearly for a wine tasting extravaganza. It's a celebration of all things wine, where enthusiasts gather to explore a variety of wines from around the world. The event features tastings, masterclasses, and opportunities to learn from experts in the field. Whether you're a seasoned connoisseur or just beginning to discover the world of wine, Winederland offers an unforgettable experience that delights the senses and expands your palate. Join us for an unforgettable journey into the world of wine!`;

export const appImages: Record<TImages, TImage> = {
  AppBackground: { alt: "App Background Winery Image", src: background_image.src },
  Home: { alt: "Winery Image", src: "./winefield.jpg" },
  About: { alt: "ILAC Dreaming Building", src: "./ILAC Dreaming Building.jpg" },
  Activities: { alt: "Blinding Wine", src: "./Blinding Wine.jpg" },
  WineBar: { alt: "Wines Image", src: "./Wines.jpg" },
  Gallery: { alt: "Wine Photoshoot", src: "./Wine Photoshoot.jpeg" },
  WinederlandLogo: { alt: "Winederland White Logo", src: "./Winederland White logo.png" },
  ILACLogo: { alt: "ILAC Logo", src: "./ILAC Logo.png" },
};

export const maps_url = `https://maps.google.com/maps?width=100%25&height=300&hl=en&q=43.6721418,-79.37624821570263+(ILAC+Dreaming+Building)&t=&z=15&ie=UTF8&iwloc=B&output=embed`;

export const activities: IActivity[] = [
  {
    title: 'Wine Tasting/Sommelier',
    image: './Blind Wine Tasting.jpg',
    desc: "Discover your inner sommelier! Join us for a unique wine tasting experience. Our guided activity will take you through a selection of carefully curated wines, helping you learn about different grape varieties, wine regions, and tasting techniques. Our experts will be on hand to guide you, enhancing your tasting skills. By the end, you'll feel confident in selecting and pairing wines like a pro. Don't miss this opportunity to become a wine connoisseur!"
  },
  {
    title: 'Guess the Wine Making Process',
    image: './Wine Making Process.png',
    desc: "Test your wine knowledge with our 'Guess the Wine Making Process' activity. Learn about the intricate steps involved in making wine while trying to match each wine with its correct production process. From harvesting to fermentation and aging, challenge yourself to identify the unique characteristics of each wine and the methods used to create them. A fun and educational experience for wine enthusiasts of all levels!"
  },
  {
    title: "Mapping Game",
    image: "./Pin Map.png",
    desc: "Players are asked a wine-related question. They then have to place a pin on a world map to indicate their answer. The player who gets closest to the correct location wins.",
  },
  {
    title: "Ain and Win",
    image: "./Ring Toss.png",
    desc: "In this game, players try to toss rings onto the necks of wine bottles. Each successful toss earns points, and the player with the highest score after a set number of tosses wins.",
  },
  {
    title: "Cork Contest",
    image: "./Corks in the Jar.webp",
    desc: "A jar or container is filled with wine corks, and players have to guess the number of corks inside. The player who guesses closest to the actual number wins a prize.",
  },
];

export const products: IProduct[] = [
  {
    country: { title: "Portugal", icon: <PT width={16} style={{ flex: '1 0 auto' }} /> },
    title: "Lab Red Lisboa VR",
    src: "./wines/Lab Red Lisboa VR.png",
    type: "Wine",
    category: "Red Blend",
    alcohol: 13,
    company: "Lab",
    description: "From the region near Portugal's capital of Lisbon, LAB Red shows well, offering generous lifted smoky character and figgy fruit with fine-textured tannins. Spicy notes on the finish are contributed by four months ageing in oak. A stylish blend of syrah, cabernet and touriga nacional grape varieties.",
    store: {
      title: "LCBO",
      url: "https://www.lcbo.com/en/lab-red-lisboa-vr-534586"
    }
  },
  {
    country: { title: "Canada", icon: <CA width={16} style={{ flex: '1 0 auto' }} /> },
    title: "Colio Cellar Door Series Sauvignon Blanc",
    src: "./wines/Colio Cellar Door Series Sauvignon Blanc.png",
    type: "Wine",
    category: "Sauvignon Blanc",
    alcohol: 12.5,
    company: "Colio",
    description: "The Cellar Door Series is crafted in an approachable style. This lively sauvignon blanc is packed with citrus, tropical fruit and passion fruit notes. It is aromatic and flavourful with a refreshingly crisp finish. Serve with baked salmon over rice and grilled asparagus or grilled chicken and scalloped potatoes.",
    store: {
      title: "LCBO",
      url: "https://www.lcbo.com/en/colio-cellar-door-series-sauvignon-blanc-17537"
    }
  },
  {
    country: { title: "California, United States", icon: <US width={16} style={{ flex: '1 0 auto' }} /> },
    title: "Chloe Rosé",
    src: "./wines/Chloe Rosé.png",
    type: "Wine",
    category: "Rosé",
    alcohol: 13,
    company: "Chloe",
    description: "The Chloe Central Coast Rosé has a pink hue with delicate fresh strawberries, raspberries and watermelon notes. Elegant red fruit unfolds on the palate into a well-balanced, crisp, refreshing finish. Great for sipping or will make a great accompaniment to salmon and shrimp dishes; serve chilled.",
    store: {
      title: "LCBO",
      url: "https://www.lcbo.com/en/chloe-rose-31656"
    }
  },
  {
    country: { title: "Ontario, Canada", icon: <CA width={16} style={{ flex: '1 0 auto' }} /> },
    title: "Vieni Sparkling Riesling",
    src: "./wines/Vieni Sparkling Riesling.png",
    type: "Wine",
    category: "Sparkling Riesling",
    alcohol: 9,
    company: "Vintages Front Line Release",
    description: "Made in the tank method also used for Prosecco, this bright, citrusy wine has notes of candied lime, green apple and honeysuckle entwined with racy acidity, a soft mousse, and a kiss of sweetness. Pair with many different meals, from eggs Benedict to bacon-wrapped pork chops.[The New York World Wine & Spirits Competition did not include a tasting note.] Score - Best in Show Sparkling. (New York World Wine & Spirits Competition, 2022)",
    store: {
      title: "LCBO",
      url: "https://www.lcbo.com/en/vieni-sparkling-riesling-520411"
    }
  },
  {
    country: { title: "German", icon: <DE width={16} style={{ flex: '1 0 auto' }} /> },
    title: "CARL JUNG CUVÉE",
    src: "./wines/Carl Jung Cuvée.png",
    type: "Wine",
    category: "Red",
    alcohol: 0.2,
    company: "Carl Jung Alcohol Free",
    description: "Introducing the captivating Carl Jung Cuvée Red Wine, a non-alcoholic red wine that promises to enchant your senses and transport you to a world of lavish indulgence. This exquisite offering from the prestigious Carl Jung winery is expertly crafted with passion and precision, allowing you to experience the art of fine winemaking without the alcohol.",
    store: {
      title: "Dry Drinker",
      url: "https://drydrinker.com/products/cuvee-red-wine-0-2-abv-low-alcohol-wine-70cl-3-or-6-case-size"
    }
  },
  {
    country: { title: "Maipo Valley, Chile", icon: <CL width={16} style={{ flex: '1 0 auto' }} /> },
    title: "Tarapacá De-Alcoholized Sauvignon Blanc",
    src: "./wines/Tarapacá Sauvignon Blanc.png",
    type: "Wine",
    category: "Sauvignon Blanc",
    alcohol: 0.5,
    description: "Pale yellow in colour with greenish hues this 'better for you' de-alcoholized Sauvignon Blanc has plenty of citrus fruit, pineapple and peach aromas. Fresh and flavourful with a good balance of acidity and sweetness. All the flavours of Sauvignon Blanc with only 0.5% alcohol.",
    store: {
      title: "LCBO",
      url: "https://www.lcbo.com/en/tarapaca-de-alcoholized-sauvignon-blanc-28557"
    }
  },
  {
    country: { title: "Canada", icon: <CA width={16} style={{ flex: '1 0 auto' }} /> },
    title: "Unwined Smooth Rosé",
    src: "./wines/Unwined Smooth Rosé.png",
    type: "Wine",
    category: "Rosé",
    alcohol: 12.5,
    company: "Unwined",
    description: "A fresh and elegant rose made from a proprietary blend of Canadian grapes. Expect appealing aromas and flavours of toast, red fruit, nuts and fresh mushrooms. The palate is dry, refreshingly soft and balanced with a light fruity finish. Enjoy chilled on its own or with simple picnic fare, sandwiches and cold cuts. 750 mL bottle",
    store: {
      title: "Bramalea City Centre",
      url: "https://bramaleacitycentre.ca/theshoplist/product/unwined-smooth-rose-lcbo-d1033e"
    }
  },
  {
    country: { title: "Utiel-Requena, Spain", icon: <ES width={16} style={{ flex: '1 0 auto' }} /> },
    title: "Luna De Murviedro",
    src: "./wines/Luna De Murviedro.png",
    type: "Wine",
    category: "Sparkling Rose",
    alcohol: 0.01,
    description: "Light pink with fine bubbles, this de-alcoholized sparkling rosé is produced using a method that allows the wine to retain aromas and structure while removing the alcohol. Fresh and fruity with strawberry fruit aromas, the palate has a slightly sweet note and creamy bubbles. Enjoy as an aperitif or pair with seafood.",
    store: {
      title: "LCBO",
      url: "https://www.lcbo.com/en/luna-de-murviedro-sparkling-rose-28153"
    }
  },
];