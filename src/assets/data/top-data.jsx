import { topImages } from "../../util/import-top-imgs";

const topData = [
  {
    name: "Thin Fit Milk Button T-Shirt",
    id: "thin-fit-milk-button-t-shirt",
    category: "top",
    price: 21.31,
    onSale: false,
    inStock: true,
    salesPrice: function () {
      return this.price;
    },
    description: "",
    Gallery: [
      topImages.thinFitMilkButtonTShirt1,
      topImages.thinFitMilkButtonTShirt2,
      topImages.thinFitMilkButtonTShirt3,
    ],
  },
  {
    name: "Contouring Square Slim T-Shirt",
    id: "contouring-square-slim-t-shirt",
    category: "top",
    price: 18.83,
    onSale: false,
    inStock: true,
    salesPrice: function () {
      return this.price;
    },
    description: "",
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
    category: "top",
    price: 25.51,
    onSale: false,
    inStock: false,
    salesPrice: function () {
      return this.price;
    },
    description: "",
    Gallery: [
      topImages.thinFitSilkyMoodBlouse1,
      topImages.thinFitSilkyMoodBlouse2,
      topImages.thinFitSilkyMoodBlouse3,
    ],
  },
  {
    name: "Harvard Wool Cable Knit",
    id: "harvard-wool-cable-knit",
    category: "top",
    price: 22.26,
    onSale: true,
    inStock: true,
    salesPrice: function () {
      return (this.price - this.price * 0.2).toFixed(2);
    },
    description: "",
    Gallery: [
      topImages.harvardWoolCableKnit1,
      topImages.harvardWoolCableKnit2,
      topImages.harvardWoolCableKnit3,
    ],
  },
  {
    name: "Blush Semi Crop Cable Knit",
    id: "blush-semi-crop-cable-knit",
    category: "top",
    price: 24.74,
    onSale: false,
    inStock: true,
    salesPrice: function () {
      return this.price;
    },
    description: "",
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
    category: "top",
    price: 28.25,
    onSale: false,
    inStock: false,
    salesPrice: function () {
      return this.price;
    },
    description: "",
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
    category: "top",
    price: 27.39,
    onSale: false,
    inStock: false,
    salesPrice: function () {
      return this.price;
    },
    description: "",
    Gallery: [
      topImages.allNightRobeKnitwear1,
      topImages.allNightRobeKnitwear2,
      topImages.allNightRobeKnitwear3,
    ],
  },
  {
    name: "Eden Wool V Knit West",
    id: "eden-wool-v-knit-vest",
    category: "top",
    price: 19.6,
    onSale: true,
    inStock: true,
    salesPrice: function () {
      return (this.price - this.price * 0.1).toFixed(2);
    },
    description: "",
    Gallery: [
      topImages.edenWoolVKnitVest1,
      topImages.edenWoolVKnitVest2,
      topImages.edenWoolVKnitVest3,
    ],
  },
  {
    name: "Tantan Fit U Neck Knit Vest",
    id: "tantan-fit-u-neck-knit-vest",
    category: "top",
    price: 25.51,
    onSale: false,
    inStock: true,
    salesPrice: function () {
      return this.price;
    },
    description: "",
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
    category: "top",
    price: 23.88,
    onSale: false,
    inStock: false,
    salesPrice: function () {
      return this.price;
    },
    description: "",
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
    category: "top",
    price: 26.54,
    onSale: true,
    inStock: true,
    salesPrice: function () {
      return (this.price - this.price * 0.15).toFixed(2);
    },
    description: "",
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
    category: "top",
    price: 16.95,
    onSale: false,
    inStock: true,
    salesPrice: function () {
      return this.price;
    },
    description: "",
    Gallery: [
      topImages.summerCableKnitVest1,
      topImages.summerCableKnitVest2,
      topImages.summerCableKnitVest3,
    ],
  },
];

export default topData;
