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
    description:
      "Who likes light yet warm handmade fabric. The one who avoided heavy machine coats. If you're looking for a simple single coat without superfluousness. For those who have basic colors that are easy to match.",
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
    description:
      "If you're looking for a casual outerwear that's easy to wear. If you prefer color details. Who likes to wear manic fit. Anyone who has noticed a product that can adjust the fit with the hem string.",
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
    description:
      "If you're looking for a thin, light shirt and outerwear. If you like a loose fit that covers your body shape. If you like a neat, hidden short piece design. If you prefer fit-adjustable stopper details.",
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
    description:
      "If you're looking for an outerwear that's good to wear lightly. Who likes to wear minimalist normcore look. Anyone who likes to wear blue colored items. If you prefer a neat standard fit, rather than a loose fit.",

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
    description:
      "Who needed a light outer to wear over a sleeveless shirt. Anyone who wanted a cool summer hoodie. If you prefer a loose fit that covers your body shape softly. Anyone who felt uncomfortable with the texture of the linen. Who likes to wear long sleeves in the summer.",
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
    description:
      "Anyone looking for a light and cool summer jumper. If you like the rusty washy texture. Someone who likes casual styling. Who likes to wear semi-crops that make your legs look longer. Looking for an outerwear that's easy to wear when you go out or work out.",
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
    description:
      "If you're looking for a set of cost-effective cardigan. Who likes elastic ribbed fabric. If you prefer a slim fit that sticks lightly to your upper body. Anyone who likes to wear crop length that makes your legs look longer.",
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
    description:
      "If you're looking for a linen cardigan that's cool until the summer. For those who can't give up on long-sleeved knitwear even in the summer. Who likes slim fit clothes that make you look slim. Who likes to wear semi-crops that make their legs look longer.",
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
    description:
      "If you need a summer cardigan to wear all the way through the summer. If you like a basic fashionable design. Anyone looking for a loose fit cardigan. If you prefer a V-neck to a round neck.",
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
    description:
      "Who found a cost-effective cardigan set. If you prefer pastel colors that are good to accentuate. If you avoid wool blended material because of your sensitive skin.",
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
    description:
      "If you're looking for a light and cool summer jacket. Anyone who already has a simple Muji jacket. If you prefer a shoulder pad that's not too much. Who likes neat and neat standard fit.",
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
    description:
      "If you're looking for a light and cool summer jacket. If you prefer a light shoulder pad. If you like a basic design that's not trendy. Who likes to wear semi-crops that make your legs look longer.",
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
    description:
      "If you're looking for a summer setup product. For those who felt burdened by excessive shoulder pads. Who likes semi-crops that make your legs look longer. Anyone who felt uncomfortable with the wrinkle of linen.",
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
    description:
      "If you're looking for a short trench coat with a cheerful vibe. Who likes a classic double-line design. If you prefer soft fabric to fresh cotton fabric. When choosing an outerwear, those who have the basic color.",
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
