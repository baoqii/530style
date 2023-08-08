import { bottomImages } from "../../util/import-bottom-imgs";

const bottomData = [
  {
    name: "Move Vintage Tone Denim Shorts",
    id: "move-vintage-tone-denim-shorts",
    category: "Bottom",
    price: 21.31,
    onSale: true,
    inStock: true,
    salesPrice: function () {
      return (this.price - this.price * 0.2).toFixed(2);
    },
    description: `Anyone who looked for a calm, medium blue denim.
    If you prefer high-waist pants that make your legs look longer.
    If you want stable shorts without worrying about exposure.`,
    Gallery: [
      bottomImages.moveVintageToneDenimShorts1,
      bottomImages.moveVintageToneDenimShorts2,
      bottomImages.moveVintageToneDenimShorts3,
      bottomImages.moveVintageToneDenimShorts4,
    ],
  },
  {
    name: "Tone Down Medium Denim Half Pants",
    id: "tone-down-medium-denim-half-pants",
    category: "Bottom",
    price: 26.54,
    onSale: false,
    inStock: true,
    salesPrice: function () {
      return this.price;
    },
    description: `Comfortable and stylish denim half pants.`,
    Gallery: [
      bottomImages.toneDownMediumDenimHalfPants1,
      bottomImages.toneDownMediumDenimHalfPants2,
      bottomImages.toneDownMediumDenimHalfPants3,
      bottomImages.toneDownMediumDenimHalfPants4,
    ],
  },
  {
    name: "Ace Long Fit Summer Track Pants",
    id: "ace-long-fit-summer-track-pants",
    category: "Bottom",
    price: 23.88,
    onSale: false,
    inStock: false,
    salesPrice: function () {
      return this.price;
    },
    description: `Anyone who found the highlighted washy pants.
    Anyone who felt uncomfortable with knee-stretching training pants.
    If you prefer a semi-wide fit that covers the flab of the lower body.
    For those who enjoy casual styling.`,
    Gallery: [
      bottomImages.aceLongFitSummerTrackPants1,
      bottomImages.aceLongFitSummerTrackPants2,
      bottomImages.aceLongFitSummerTrackPants3,
    ],
  },
  {
    name: "Vintage Pintuck Wide Medium Denim Pants",
    id: "vintage-pintuck-wide-medium-denim-pants",
    category: "Bottom",
    price: 34.07,
    onSale: true,
    inStock: true,
    salesPrice: function () {
      return this.price;
    },
    description: `If you're looking for soft denim pants for summer.
    Who likes vintage medium blue colors.
    If you prefer subtle details, not too much.
    Who likes to wear wide fit that covers the flab of the lower body.`,
    Gallery: [
      bottomImages.vintagePintuckWideMediumDenimPants1,
      bottomImages.vintagePintuckWideMediumDenimPants2,
      bottomImages.vintagePintuckWideMediumDenimPants3,
      bottomImages.vintagePintuckWideMediumDenimPants4,
    ],
  },
  {
    name: "Pint Tight Fit Saint Denim Shorts",
    id: "pint-tight-fit-saint-denim-shorts",
    category: "Bottom",
    price: 26.54,
    onSale: false,
    inStock: true,
    salesPrice: function () {
      return this.price;
    },
    description: `Who likes deep raw denim colors.
    The person who avoided shorts that were too short.`,
    Gallery: [
      bottomImages.pintTightFitSaintDenimShorts1,
      bottomImages.pintTightFitSaintDenimShorts2,
      bottomImages.pintTightFitSaintDenimShorts3,
      bottomImages.pintTightFitSaintDenimShorts4,
    ],
  },
];

export default bottomData;
