import { onlyUnique } from "./app/services/helpers";

export const instagram_url = "https://www.instagram.com/";
export const tiktok_url = "https://www.tiktok.com/";

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
    desc: "Apple juice is a popular beverage made by pressing and extracting the liquid from apples. It's a refreshing and nutritious drink, often enjoyed for its sweet and tangy flavor. Apple juice can be made from various apple varieties, each contributing to its unique taste profile."
  }
];

export const description_about = `Winederland is an event sponsored by ILAC, organized yearly for a wine tasting extravaganza. It's a celebration of all things wine, where enthusiasts gather to explore a variety of wines from around the world. The event features tastings, masterclasses, and opportunities to learn from experts in the field. Whether you're a seasoned connoisseur or just beginning to discover the world of wine, Winederland offers an unforgettable experience that delights the senses and expands your palate. Join us for an unforgettable journey into the world of wine!`;

type TDepartments = 'Food and Beverage' | 'Decoration and Marketing' | 'Activities' | 'Managment';

interface IStudent {
  name: string;
  department: TDepartments;
}

const noSortedStudents: IStudent[] = [
  { department: 'Decoration and Marketing', name: 'Marcos' },
  { department: 'Decoration and Marketing', name: 'Mateo' },
  { department: 'Decoration and Marketing', name: 'Paryn' },
  { department: 'Decoration and Marketing', name: 'Richard' },
  { department: 'Decoration and Marketing', name: 'Etan' },
  { department: 'Decoration and Marketing', name: 'Laura' },
  { department: 'Managment', name: 'Alissa' },
  { department: 'Managment', name: 'Rodrigo' },
  { department: 'Managment', name: 'Lucas' },
  { department: 'Managment', name: '-' },
  { department: 'Managment', name: '-' },
  { department: 'Managment', name: '-' },
  { department: 'Managment', name: '-' },
  { department: 'Activities', name: '-' },
  { department: 'Activities', name: '-' },
  { department: 'Activities', name: '-' },
  { department: 'Activities', name: '-' },
  { department: 'Activities', name: '-' },
  { department: 'Activities', name: '-' },
  { department: 'Food and Beverage', name: '-' },
  { department: 'Food and Beverage', name: '-' },
  { department: 'Food and Beverage', name: '-' },
  { department: 'Food and Beverage', name: '-' },
  { department: 'Food and Beverage', name: '-' },
  { department: 'Food and Beverage', name: '-' },
  { department: 'Food and Beverage', name: '-' },
  { department: 'Food and Beverage', name: '-' },
];

export const students = noSortedStudents.sort((a, b) => a.name.localeCompare(b.name));

export const departments = students.map(s => s.department).filter(onlyUnique).sort();
