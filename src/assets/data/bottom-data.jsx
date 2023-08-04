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
    description: "",
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
    description: "",
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
    description: "",
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
    description: "",
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
    description: "",
    Gallery: [
      bottomImages.pintTightFitSaintDenimShorts1,
      bottomImages.pintTightFitSaintDenimShorts2,
      bottomImages.pintTightFitSaintDenimShorts3,
      bottomImages.pintTightFitSaintDenimShorts4,
    ],
  },
];

export default bottomData;
