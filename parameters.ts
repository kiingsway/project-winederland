import { TImages, TImage, TSocialMedia, IImage, IActivity } from "./interfaces";
import background_image from '@/public/Winery Barrels Background.jpg';

export const slogan = "Uncork the Magic!";

export const socialmedia_usernames: Record<TSocialMedia, string> = {
  instagram: "winederland__",
  tiktok: "winederland_ilac",
};

export const socialmedia_urls: Record<TSocialMedia, string> = {
  instagram: `https://www.instagram.com/${socialmedia_usernames.instagram}/`,
  tiktok: `https://www.tiktok.com/@${socialmedia_usernames.tiktok}/`,
};

export const socialmedia_profile: Record<TSocialMedia, string> = {
  instagram: "./Winederland Invitation.jpg",
  tiktok: "./ttk profile.jpeg",
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
    { alt: 'Winederland Invitation', src: './Winederland Invitation.jpg' },
  ],
  tiktok: [
    { alt: 'Invitation Video Thumbnail', src: './Invitation Video Thumbnail.png' },
  ],

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