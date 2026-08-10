/**
 * Central source of truth for all restaurant-specific content.
 *
 * Every field below is a PLACEHOLDER. Nothing here is a fabricated fact —
 * do not let a placeholder value ("[Restaurant Name]", "TODO", etc.) make
 * it into copy that reads as a real claim. Replace this whole object with
 * real, supplied restaurant data before treating the site as done.
 *
 * Components must only ever read from this file — never hardcode
 * restaurant-specific text inline in a component.
 */

export type MenuItem = {
  name: string;
  description?: string;
  price?: string;
  image?: string;
  featured?: boolean;
};

export type MenuCategory = {
  name: string;
  items: MenuItem[];
};

export type OpeningHoursRow = {
  days: string;
  open?: string;
  close?: string;
  closed?: boolean;
};

export type GalleryImage = {
  src: string;
  alt: string;
  /** Relative aspect weight for the editorial grid — "large" | "regular" */
  size?: "large" | "regular";
};

export type Testimonial = {
  quote: string;
  author: string;
  source?: string;
};

export type RestaurantData = {
  name: string;

  brand: {
    shortName: string;
    tagline: string;
    description: string;
  };

  location: {
    address: string;
    city: string;
    country: string;
    /** Google Maps / directions URL — only set once a real, valid URL exists */
    mapsUrl?: string;
    latitude?: number;
    longitude?: number;
  };

  contact: {
    phone?: string;
    email?: string;
    website?: string;
  };

  hours: OpeningHoursRow[];

  social: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
  };

  hero: {
    title: string;
    subtitle: string;
    image: string;
  };

  about: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
  };

  menu: {
    categories: MenuCategory[];
  };

  signatureDish?: {
    name: string;
    description: string;
    price?: string;
    image: string;
  };

  gallery: GalleryImage[];

  /**
   * Only populate with testimonials the restaurant has explicitly
   * approved for use. Leave empty (not fabricated) until then — the
   * TestimonialsSection component omits itself when this is empty.
   */
  testimonials: Testimonial[];

  /**
   * How the primary "Reserve a Table" CTA behaves. Exactly one of these
   * should be set — reservationUrl takes priority if present, falling
   * back to tel:, then mailto:. No fabricated booking system.
   */
  reservation: {
    reservationUrl?: string;
    phone?: string;
    email?: string;
  };

  seo: {
    title: string;
    description: string;
    keywords?: string[];
  };
};

export const restaurant: RestaurantData = {
  name: "The Nomad Kitchen",

  brand: {
    shortName: "The Nomad Kitchen",
    tagline: "Mediterranean Restaurant",
    description:
      "At The Nomad Kitchen, our rotisserie chicken is slow-roasted every Sunday in a traditional rotisserie machine, allowing the meat to stay tender and naturally juicy while the skin turns evenly golden with a delicate crispness and a rich, comforting aroma. Served with roasted potatoes, seasonal vegetables, and warm gravy on the side, it’s a generous, well-balanced dish that’s perfect for sharing at the table. To make sure each chicken is prepared at its best",
  },

  location: {
    address: "21-23 An Thượng 32, Ngũ Hành Sơn, Đà Nẵng 550000, Việt Nam",
    city: "Da Nang",
    country: "Vietnam",
    // mapsUrl intentionally omitted — only add once a real, valid URL exists.
  },

  contact: {
    phone: "+84961061173",
    email: undefined,
    website: undefined,
  },

  hours: [
    { days: "Monday", open: "09:00", close: "22:00" },
    { days: "Tuesday", open: "09:00", close: "22:00" },
    { days: "Wednesday", open: "09:00", close: "22:00" },
    { days: "Thursday", open: "09:00", close: "22:00" },
    { days: "Friday", open: "09:00", close: "22:00" },
    { days: "Saturday", open: "09:00", close: "22:00" },
    { days: "Sunday", open: "09:00", close: "22:00" },
  ],

  social: {},

  hero: {
    title: "The Nomad Kitchen",
    subtitle: "21-23 An Thượng 32, Ngũ Hành Sơn, Đà Nẵng 550000, Việt Nam",
    image: "/images/hero-placeholder.jpg",
  },

  about: {
    eyebrow: "OUR STORY",
    title: "[Short, specific headline about the restaurant's approach]",
    description:
      "[Factual paragraph about the restaurant — no invented history, chef names, or awards.]",
    image: "/images/about-placeholder.jpg",
  },

  menu: {
    categories: [
      {
        name: "SIDE DISHES",
        items: [
          { name: "Jalapeño Peppers", price: "25.000" },
          { name: "1 Bacon Slice", price: "30.000" },
          { name: "Compound Irish Butter", price: "30.000" },
          { name: "Feta Cheese", price: "55.000" },
          { name: "Mozzarella Cheese", price: "30.000" },
          { name: "Brie Cheese", price: "60.000" },
          { name: "3 Falafel Balls", price: "65.000" },
          { name: "Fries", price: "75.000" },
          { name: "Mashed Potatoes", price: "75.000" },
          { name: "2 Vegan Sausage", price: "75.000" },
          { name: "Extra Grill or Steam Veggies", price: "75.000" },
          { name: "230g Grilled Chicken Breast", price: "110.000" },
          { name: "150g Buffalo Steak", price: "140.000" },
          { name: "Fish Fillet (Grilled or Fried)", price: "115.000" },
          {
            name: "150g AUS Organic Grass-Fed Flat Iron Steak",
            description: "No hormones, MB2",
            price: "285.000",
          },
        ],
      },
      {
        name: "RED WINE",
        items: [
          {
            name: "l'Ame du Château Haut Meyreau",
            description: "Cabernet Sauvignon | 13.5% | Bordeaux, France — pairs with Beef, Poultry, Lamb",
            price: "595.000",
          },
          {
            name: "Barramundi",
            description: "Shiraz | 14% | South Eastern Australia — pairs with Barbecue, Braised Beef, Lamb, Hard Cheese",
            price: "765.000",
          },
          {
            name: "Woodbridge By Robert Mondavi",
            description: "Merlot | California/Lodi, U.S.A — pairs with Grilled Meats, especially Steak, Lamb, Pork Chops, and Hamburgers, Pasta with Bolognese Sauce",
            price: "1.090.000",
          },
          {
            name: "Salentein Portillo",
            description: "Malbec | 13.5% | Uco Valley/Mendoza, Argentina — pairs with Beef, Poultry, Lamb, Cheese",
            price: "765.000",
          },
          {
            name: "Louis Latour Domaine De Valmoissine",
            description: "Pinot Noir | 13.5% | Provence, France — pairs with Grilled Red Meat, Cheese, Red Fruit",
            price: "860.000",
          },
          {
            name: "Duca del Valentino",
            description: "Negroamaro | 16.0% | Puglia, Italy — a very full-bodied red wine to delight your meaty cravings",
            price: "1.005.000",
          },
          {
            name: "Muga Rioja Reserva",
            description: "Tempranillo, Garnacha, Mazuelo, Graciano | 14% | Rioja, Spain — pairs with Beef, Veal, Iberico Charcuterie and Casseroles",
            price: "1.485.000",
          },
        ],
      },
      {
        name: "PROSECCO",
        items: [
          {
            name: "Prosecco Valdo",
            description: "Glera | 11% | Veneto, Italy — pairs with Aperitif, Fish & Seafood, Ham, Appetizers & Snacks",
            price: "860.000",
          },
        ],
      },
    ],
  },

  // signatureDish intentionally omitted until a real signature dish is supplied.

  gallery: [
    { src: "/images/gallery-1.jpg", alt: "TODO", size: "large" },
  ],

  testimonials: [],

  reservation: {
    // Set exactly one of reservationUrl / phone / email once known.
  },

  seo: {
    title: "The Nomad Kitchen",
    description: "At The Nomad Kitchen, our rotisserie chicken is slow-roasted every Sunday in a traditional rotisserie machine, allowing the meat to stay tender and naturally juicy while the skin turns evenly golden with a delicate crispness and a rich, comforting aroma. Served with roasted potatoes, seasonal vegetables, and warm gravy on the side, it’s a generous, well-balanced dish that’s perfect for sharing at the table. To make sure each chicken is prepared at its best",
  },
};