import { outerwearImages } from "../../util/import-outerwear-imgs";

const outerwearData = [
  {
    name: "Again Handmade Single Robe Coat",
    id: "again-handmade-single-robe-coat",
    category: "Outerwear",
    price: 143.81,
    onSale: false,
    inStock: true,
    salesPrice: function () {
      return this.price;
    },
    description: "",
    Gallery: [
      outerwearImages.againHandmadeSingleRobeCoat1,
      outerwearImages.againHandmadeSingleRobeCoat2,
      outerwearImages.againHandmadeSingleRobeCoat3,
      outerwearImages.againHandmadeSingleRobeCoat4,
    ],
  },
  {
    name: "Mood Green Vintage Navy Bomber Jacket",
    id: "mood-green-vintage-navy-bomber-jacket",
    category: "Outerwear",
    price: 75.33,
    onSale: false,
    inStock: true,
    salesPrice: function () {
      return this.price;
    },
    description: "",
    Gallery: [
      outerwearImages.moodGreenVintageNavyBomberJacket1,
      outerwearImages.moodGreenVintageNavyBomberJacket2,
      outerwearImages.moodGreenVintageNavyBomberJacket3,
    ],
  },
  {
    name: "Windbreaker String Blouse",
    id: "windbreaker-string-blouse",
    category: "Outerwear",
    price: 36.81,
    onSale: false,
    inStock: false,
    salesPrice: function () {
      return this.price;
    },
    description: "",
    Gallery: [
      outerwearImages.windbreakerStringBlouse1,
      outerwearImages.windbreakerStringBlouse2,
      outerwearImages.windbreakerStringBlouse3,
      outerwearImages.windbreakerStringBlouse4,
      outerwearImages.windbreakerStringBlouse5,
    ],
  },
  {
    name: "Minimal Normcore Summer Blouson",
    id: "minimal-normcore-summer-blouson",
    category: "Outerwear",
    price: 49.56,
    onSale: true,
    inStock: true,
    salesPrice: function () {
      return (this.price - this.price * 0.2).toFixed(2);
    },
    description: "",
    Gallery: [
      outerwearImages.minimalNormcoreSummerBlouson1,
      outerwearImages.minimalNormcoreSummerBlouson2,
      outerwearImages.minimalNormcoreSummerBlouson3,
    ],
  },
  {
    name: "Thin Fit Summer Linen Hoodie",
    id: "thin-fit-summer-linen-hoodie",
    category: "Outerwear",
    price: 26.54,
    onSale: false,
    inStock: true,
    salesPrice: function () {
      return this.price;
    },
    description: "",
    Gallery: [
      outerwearImages.thinFitSummerLinenHoodie1,
      outerwearImages.thinFitSummerLinenHoodie2,
      outerwearImages.thinFitSummerLinenHoodie3,
      outerwearImages.thinFitSummerLinenHoodie4,
      outerwearImages.thinFitSummerLinenHoodie5,
      outerwearImages.thinFitSummerLinenHoodie6,
      outerwearImages.thinFitSummerLinenHoodie7,
    ],
  },
  {
    name: "Mock Summer Daily Bomber Jacket",
    id: "mock-summer-daily-bomber-jacket",
    category: "Outerwear",
    price: 17.03,
    onSale: false,
    inStock: false,
    salesPrice: function () {
      return this.price;
    },
    description: "",
    Gallery: [
      outerwearImages.mockSummerDailyBomberJacket1,
      outerwearImages.mockSummerDailyBomberJacket2,
      outerwearImages.mockSummerDailyBomberJacket3,
    ],
  },
  {
    name: "Harv Cardigan Sleeveless Set",
    id: "harv-cardigan-sleeveless-set",
    category: "Outerwear",
    price: 23.03,
    onSale: false,
    inStock: false,
    salesPrice: function () {
      return this.price;
    },
    description: "",
    Gallery: [
      outerwearImages.harvCardiganSleevelessSet1,
      outerwearImages.harvCardiganSleevelessSet2,
      outerwearImages.harvCardiganSleevelessSet3,
      outerwearImages.harvCardiganSleevelessSet4,
    ],
  },
  {
    name: "Way Slim Fit Summer Cardigan",
    id: "way-slim-fit-summer-cardigan",
    category: "Outerwear",
    price: 26.54,
    onSale: true,
    inStock: true,
    salesPrice: function () {
      return (this.price - this.price * 0.1).toFixed(2);
    },
    description: "",
    Gallery: [
      outerwearImages.waySlimFitSummerCardigan1,
      outerwearImages.waySlimFitSummerCardigan2,
      outerwearImages.waySlimFitSummerCardigan3,
      outerwearImages.waySlimFitSummerCardigan4,
      outerwearImages.waySlimFitSummerCardigan5,
    ],
  },
  {
    name: "Summer V Neck Cardigan",
    id: "summer-v-neck-cardigan",
    category: "Outerwear",
    price: 24.74,
    onSale: false,
    inStock: true,
    salesPrice: function () {
      return this.price;
    },
    description: "",
    Gallery: [
      outerwearImages.summerVNeckCardigan1,
      outerwearImages.summerVNeckCardigan2,
      outerwearImages.summerVNeckCardigan3,
      outerwearImages.summerVNeckCardigan4,
    ],
  },
  {
    name: "Nine Cardigan Sleeveless Set",
    id: "nine-cardigan-sleeveless-set",
    category: "Outerwear",
    price: 30.73,
    onSale: false,
    inStock: true,
    salesPrice: function () {
      return this.price;
    },
    description: "",
    Gallery: [
      outerwearImages.nineCardiganSleevelessSet1,
      outerwearImages.nineCardiganSleevelessSet2,
      outerwearImages.nineCardiganSleevelessSet3,
    ],
  },
  {
    name: "Ray Stripe Half Jacket",
    id: "ray-stripe-half-jacket",
    category: "Outerwear",
    price: 37.66,
    onSale: false,
    inStock: false,
    salesPrice: function () {
      return this.price;
    },
    description: "",
    Gallery: [
      outerwearImages.rayStripeHalfJacket1,
      outerwearImages.rayStripeHalfJacket2,
      outerwearImages.rayStripeHalfJacket3,
      outerwearImages.rayStripeHalfJacket4,
    ],
  },
  {
    name: "Ritten Summer Linen Jacket",
    id: "ritten-summer-linen-jacket",
    category: "Outerwear",
    price: 56.5,
    onSale: true,
    inStock: true,
    salesPrice: function () {
      return (this.price - this.price * 0.15).toFixed(2);
    },
    description: "",
    Gallery: [
      outerwearImages.rittenSummerLinenJacket1,
      outerwearImages.rittenSummerLinenJacket2,
      outerwearImages.rittenSummerLinenJacket3,
      outerwearImages.rittenSummerLinenJacket4,
    ],
  },
  {
    name: "Tone Oat Grey Half Jacket",
    id: "tone-oat-grey-half-jacket",
    category: "Outerwear",
    price: 41.94,
    onSale: false,
    inStock: true,
    salesPrice: function () {
      return this.price;
    },
    description: "",
    Gallery: [
      outerwearImages.toneOatGreyHalfJacket1,
      outerwearImages.toneOatGreyHalfJacket2,
      outerwearImages.toneOatGreyHalfJacket3,
      outerwearImages.toneOatGreyHalfJacket4,
      outerwearImages.toneOatGreyHalfJacket5,
    ],
  },
  {
    name: "Norton Thin Fit Short Trench Coat",
    id: "norton-thin-fit-short-trench-coat",
    category: "Outerwear",
    price: 66.77,
    onSale: false,
    inStock: true,
    salesPrice: function () {
      return this.price;
    },
    description: "",
    Gallery: [
      outerwearImages.nortonThinFitShortTrenchCoat1,
      outerwearImages.nortonThinFitShortTrenchCoat2,
      outerwearImages.nortonThinFitShortTrenchCoat3,
      outerwearImages.nortonThinFitShortTrenchCoat4,
      outerwearImages.nortonThinFitShortTrenchCoat5,
    ],
  },
];

export default outerwearData;
