import { topImages } from "../../util/import-top-imgs";

const topData = [
  {
    name: "Thin Fit Milk Button T-Shirt",
    id: "thin-fit-milk-button-t-shirt",
    category: "Top",
    price: 21.31,
    onSale: false,
    inStock: true,
    salesPrice: function () {
      return this.price;
    },
    description: `Who wanted a ribbed T-shirt with a slim silhouette
    If you prefer slim loose fit over loose fit
    If you like a half-open neck that's good to style according to your preference
    Anyone who felt uncomfortable with the texture of the linen`,
    Gallery: [
      topImages.thinFitMilkButtonTShirt1,
      topImages.thinFitMilkButtonTShirt2,
      topImages.thinFitMilkButtonTShirt3,
    ],
  },
  {
    name: "Contouring Square Slim T-Shirt",
    id: "contouring-square-slim-t-shirt",
    category: "Top",
    price: 18.83,
    onSale: false,
    inStock: true,
    salesPrice: function () {
      return this.price;
    },
    description: `People who like to wear unusual and unique designs
    The neckline makes your face look slim
    If you prefer a slim fit that highlights your body line
    Who likes elastic and comfortable fine corrugated fabric`,
    Gallery: [
      topImages.contouringSquareSlimTShirt1,
      topImages.contouringSquareSlimTShirt2,
      topImages.contouringSquareSlimTShirt3,
      topImages.contouringSquareSlimTShirt4,
    ],
  },
  {
    name: "Thin Fit Silky Mood Blouse",
    id: "thin-fit-silky-mood-blouse",
    category: "Top",
    price: 25.51,
    onSale: false,
    inStock: false,
    salesPrice: function () {
      return this.price;
    },
    description: `If you like a raglan fit with a soft mood
    If you prefer a soft fabric that flows along your body line
    If you're looking for a basic and versatile blouse
    Anyone who likes to wear layered outfits`,
    Gallery: [
      topImages.thinFitSilkyMoodBlouse1,
      topImages.thinFitSilkyMoodBlouse2,
      topImages.thinFitSilkyMoodBlouse3,
    ],
  },
  {
    name: "Harvard Wool Cable Knit",
    id: "harvard-wool-cable-knit",
    category: "Top",
    price: 22.26,
    onSale: true,
    inStock: true,
    salesPrice: function () {
      return (this.price - this.price * 0.2).toFixed(2);
    },
    description: `Anyone who saw a cable knit that's nice to accentuate
    If you prefer a V-neck to a round neck
    For those who enjoy layered knitwear
    If you have a lot of simple bottoms`,
    Gallery: [
      topImages.harvardWoolCableKnit1,
      topImages.harvardWoolCableKnit2,
      topImages.harvardWoolCableKnit3,
    ],
  },
  {
    name: "Blush Semi Crop Cable Knit",
    id: "blush-semi-crop-cable-knit",
    category: "Top",
    price: 24.74,
    onSale: false,
    inStock: true,
    salesPrice: function () {
      return this.price;
    },
    description: `Who likes classic cable patterns
    Someone who looks slim when the waist fit is set
    Anyone who wants a light texture like a cotton knit
    Who likes to wear semi-crops that make your legs look longer`,
    Gallery: [
      topImages.blushSemiCropCableKnit1,
      topImages.blushSemiCropCableKnit2,
      topImages.blushSemiCropCableKnit3,
      topImages.blushSemiCropCableKnit4,
    ],
  },
  {
    name: "Dense Tough Fit V Neck Knitwear",
    id: "dense-tough-fit-v-neck-knitwear",
    category: "Top",
    price: 28.25,
    onSale: false,
    inStock: false,
    salesPrice: function () {
      return this.price;
    },
    description: `Who likes classy, stylish and modern top`,
    Gallery: [
      topImages.denseToughFitVNeckKnitwear1,
      topImages.denseToughFitVNeckKnitwear2,
      topImages.denseToughFitVNeckKnitwear3,
      topImages.denseToughFitVNeckKnitwear4,
    ],
  },
  {
    name: "All Night Robe Knitwear",
    id: "all-night-robe-knitwear",
    category: "Top",
    price: 27.39,
    onSale: false,
    inStock: false,
    salesPrice: function () {
      return this.price;
    },
    description: `For those who enjoy layered styling
    If you like loose-fitting and soft-flowing wrap knitwear
    Anyone who has a lot of basic cardigans
    If you want a light touch with cotton mixed spinning`,
    Gallery: [
      topImages.allNightRobeKnitwear1,
      topImages.allNightRobeKnitwear2,
      topImages.allNightRobeKnitwear3,
    ],
  },
  {
    name: "Eden Wool V Knit West",
    id: "eden-wool-v-knit-vest",
    category: "Top",
    price: 19.6,
    onSale: true,
    inStock: true,
    salesPrice: function () {
      return (this.price - this.price * 0.1).toFixed(2);
    },
    description: `Anyone who found a basic vest regardless of fashion
    Anyone who likes to wear layered outfits
    If you have a lot of basic shirts or t-shirts`,
    Gallery: [
      topImages.edenWoolVKnitVest1,
      topImages.edenWoolVKnitVest2,
      topImages.edenWoolVKnitVest3,
    ],
  },
  {
    name: "Tantan Fit U Neck Knit Vest",
    id: "tantan-fit-u-neck-knit-vest",
    category: "Top",
    price: 25.51,
    onSale: false,
    inStock: true,
    salesPrice: function () {
      return this.price;
    },
    description: `If you have a lot of basic T-shirts or shirts
    Anyone who felt frustrated with a neat round neck
    For those who enjoy layered looks that use the best
    If you have a lot of basic colors`,
    Gallery: [
      topImages.tantanFitUNeckKnitVest1,
      topImages.tantanFitUNeckKnitVest2,
      topImages.tantanFitUNeckKnitVest3,
      topImages.tantanFitUNeckKnitVest4,
    ],
  },
  {
    name: "Tantan Fit Cable Knit Vest",
    id: "tantan-fit-cable-knit-vest",
    category: "Top",
    price: 23.88,
    onSale: false,
    inStock: false,
    salesPrice: function () {
      return this.price;
    },
    description: `If you have a lot of basic T-shirts or shirts
    For those who enjoy layered looks that use the best
    If you have a lot of basic colors`,
    Gallery: [
      topImages.tantanFitCableKnitVest1,
      topImages.tantanFitCableKnitVest2,
      topImages.tantanFitCableKnitVest3,
      topImages.tantanFitCableKnitVest4,
    ],
  },
  {
    name: "Earls Boat Neck Knit Sleeveless",
    id: "earls-boat-neck-knit-sleeveless",
    category: "Top",
    price: 26.54,
    onSale: true,
    inStock: true,
    salesPrice: function () {
      return (this.price - this.price * 0.15).toFixed(2);
    },
    description: `If you need a single sleeveless shirt
    Those of you who like to wear elastic fine ribbed knitwear
    Anyone looking for a sleeveless with a stable neckline
    Anyone who felt uncomfortable with the texture of the linen`,
    Gallery: [
      topImages.earlsBoatNeckKnitSleeveless1,
      topImages.earlsBoatNeckKnitSleeveless2,
      topImages.earlsBoatNeckKnitSleeveless3,
      topImages.earlsBoatNeckKnitSleeveless4,
    ],
  },
  {
    name: "Summer Cable Knit Vest",
    id: "summer-cable-knit-vest",
    category: "Top",
    price: 16.95,
    onSale: false,
    inStock: true,
    salesPrice: function () {
      return this.price;
    },
    description: `If you're looking for a single vest
    Who likes classic mood cable patterns
    If the neckline is open to make your face look slim
    Anyone who felt uncomfortable with the knitted sweater's texture`,
    Gallery: [
      topImages.summerCableKnitVest1,
      topImages.summerCableKnitVest2,
      topImages.summerCableKnitVest3,
    ],
  },
];

export default topData;
