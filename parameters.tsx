import { TSocialMedia, IImage, IActivity, IProduct, ISocialInfo } from "./interfaces";
import background_image from '@/public/Winery Barrels Background.webp';
import { PT, CA, US, DE, CL, ES } from "country-flag-icons/react/3x2";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";

export const slogan = "Uncork the Magic!";

export const description_about = `Winederland is an event sponsored by ILAC, organized yearly for a wine tasting extravaganza. It's a celebration of all things wine, where enthusiasts gather to explore a variety of wines from around the world. The event features tastings, masterclasses, and opportunities to learn from experts in the field. Whether you're a seasoned connoisseur or just beginning to discover the world of wine, Winederland offers an unforgettable experience that delights the senses and expands your palate. Join us for an unforgettable journey into the world of wine!`;

export const appImages = {
  AppBackground: { alt: "App Background Winery Image", src: background_image.src },
  WinederlandLogo: { alt: "Winederland White Logo", src: "./company/Winederland White logo.png" },
  ILACLogo: { alt: "ILAC Logo", src: "./company/ILAC Logo.png" },
  Home: { alt: "Winery Image", src: "./winefield.webp" },
  WinesActivities: { alt: "Blinding Wine", src: "./Blinding-Wine.webp" },
  About: { alt: "ILAC Dreaming Building", src: "./ILAC-Dreaming-Building.webp" },
  IGThumb1: { alt: 'Instagram Post Thumbnail 1', src: './posts/ig1.webp' },
  IGThumb2: { alt: 'Instagram Post Thumbnail 2', src: './posts/ig2.webp' },
  IGThumb3: { alt: 'Instagram Post Thumbnail 3', src: './posts/ig3.webp' },
  TTThumb1: { alt: 'TikTok Post Thumbnail 1', src: './posts/tt1.webp' },
  TTThumb2: { alt: 'TikTok Post Thumbnail 2', src: './posts/tt2.webp' },
  Invitation1: { alt: 'Invitation Image', src: './Invitation Image.webp' },
  Invitation2: { alt: 'Winederland Invitation', src: './Winederland Invitation.webp' },
  EventMap: { alt: 'Event Map', src: './Event Map.webp' },
  DraftDecoration1: { alt: 'Draft of decoration on ILAC Building', src: './Decoration.webp' },
  DraftDecoration2: { alt: 'Love Sign Decoration', src: './Love Sign Decoration.webp' },
  TTProfile: { alt: "TikTok Image Profile", src: "./posts/ttk-profile.webp" }
};

export const social_info: Record<TSocialMedia, ISocialInfo> = (() => {

  const [ig_user, tt_user] = ["winederland__", "winederland_ilac"];
  const [ig_profile, tt_profile] = [appImages.Invitation2.src, appImages.TTProfile.src];
  const [ig_icon, tt_icon, wa_icon] = [<FaInstagram key='ig' />, <FaTiktok key='tt' />, <FaWhatsapp key='wa' />];
  const [ig_followers, tt_likes] = [34, 4];

  const [ig_url, tt_url, wa_url] = [
    `https://www.instagram.com/${ig_user}/`,
    `https://www.tiktok.com/@${tt_user}/`,
    "https://chat.whatsapp.com/IzV0DKeklUlBIIULpDjaBu/"
  ];

  const { ig_posts, tt_posts } = {
    ig_posts: [appImages.IGThumb3, appImages.IGThumb2, appImages.IGThumb1],
    tt_posts: [appImages.TTThumb2, appImages.TTThumb1],
  };

  return {
    Instagram: {
      profile: ig_profile,
      user: ig_user,
      url: ig_url,
      icon: ig_icon,
      desc: `${ig_followers} followers`,
      posts: ig_posts,
    },
    TikTok: {
      profile: tt_profile,
      user: tt_user,
      url: tt_url,
      icon: tt_icon,
      desc: `${tt_likes} likes`,
      posts: tt_posts,
    },
    WhatsApp: {
      url: wa_url,
      icon: wa_icon,

    },
  };
})();

export const images: IImage[] = [
  appImages.Invitation2,
  appImages.EventMap,
  appImages.DraftDecoration1,
  appImages.DraftDecoration2,
  appImages.Invitation1,
  appImages.TTThumb1,
];

export const maps_url = `https://maps.google.com/maps?width=100%25&height=300&hl=en&q=43.6721418,-79.37624821570263+(ILAC+Dreaming+Building)&t=&z=15&ie=UTF8&iwloc=B&output=embed`;

export const activities: IActivity[] = [
  {
    title: 'Wine Tasting/Sommelier',
    image: './activities/Blind Wine Tasting.webp',
    desc: "Discover your inner sommelier! Join us for a unique wine tasting experience. Our guided activity will take you through a selection of carefully curated wines, helping you learn about different grape varieties, wine regions, and tasting techniques. Our experts will be on hand to guide you, enhancing your tasting skills. By the end, you'll feel confident in selecting and pairing wines like a pro. Don't miss this opportunity to become a wine connoisseur!"
  },
  {
    title: 'Guess the Wine Making Process',
    image: './activities/Wine Making Process.webp',
    desc: "Test your wine knowledge with our 'Guess the Wine Making Process' activity. Learn about the intricate steps involved in making wine while trying to match each wine with its correct production process. From harvesting to fermentation and aging, challenge yourself to identify the unique characteristics of each wine and the methods used to create them. A fun and educational experience for wine enthusiasts of all levels!"
  },
  {
    title: "Mapping Game",
    image: "./activities/Pin Map.webp",
    desc: "Players are asked a wine-related question. They then have to place a pin on a world map to indicate their answer. The player who gets closest to the correct location wins.",
  },
  {
    title: "Ain and Win",
    image: "./activities/Ring Toss.webp",
    desc: "In this game, players try to toss rings onto the necks of wine bottles. Each successful toss earns points, and the player with the highest score after a set number of tosses wins.",
  },
  {
    title: "Cork Contest",
    image: "./activities/Corks in the Jar.webp",
    desc: "A jar or container is filled with wine corks, and players have to guess the number of corks inside. The player who guesses closest to the actual number wins a prize.",
  },
];

export const products: IProduct[] = [
  {
    country: { title: "Portugal", icon: <PT width={16} style={{ flex: '1 0 auto' }} /> },
    title: "Lab Red Lisboa VR",
    src: "./wines/Lab Red Lisboa VR.webp",
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
    src: "./wines/Colio Cellar Door Series Sauvignon Blanc.webp",
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
    src: "./wines/Chloe Rosé.webp",
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
    src: "./wines/Vieni Sparkling Riesling.webp",
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
    src: "./wines/Carl Jung Cuvée.webp",
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
    src: "./wines/Tarapacá Sauvignon Blanc.webp",
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
    src: "./wines/Unwined Smooth Rosé.webp",
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
    src: "./wines/Luna De Murviedro.webp",
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