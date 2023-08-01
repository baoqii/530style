import { dressImages } from "../../util/import-dress-imgs";

const dressData = [
  {
    name: "Brown Fine Check Dress",
    id: "brown-fine-check-dress",
    category: "dress",
    price: 35.95,
    onSale: false,
    inStock: true,
    salesPrice: function () {
      return this.price;
    },
    description: "",
    Gallery: [
      dressImages.brownFineCheckDress1,
      dressImages.brownFineCheckDress2,
      dressImages.brownFineCheckDress3,
      dressImages.brownFineCheckDress4,
      dressImages.brownFineCheckDress5,
    ],
  },
  {
    name: "Bustier Overall Pintuck Dress",
    id: "bustier-overall-pintuck-dress",
    category: "dress",
    price: 31.67,
    onSale: false,
    inStock: true,
    salesPrice: function () {
      return this.price;
    },
    description: "",
    Gallery: [
      dressImages.bustierOverallPintuckDress1,
      dressImages.bustierOverallPintuckDress2,
      dressImages.bustierOverallPintuckDress3,
      dressImages.bustierOverallPintuckDress4,
      dressImages.bustierOverallPintuckDress5,
    ],
  },
  {
    name: "Two Way Button Bustier Long Dress",
    id: "two-way-button-bustier-long-dress",
    category: "dress",
    price: 25.51,
    onSale: false,
    inStock: false,
    salesPrice: function () {
      return this.price;
    },
    description: "",
    Gallery: [
      dressImages.twoWayButtonBustierLongDress1,
      dressImages.twoWayButtonBustierLongDress2,
      dressImages.twoWayButtonBustierLongDress3,
      dressImages.twoWayButtonBustierLongDress4,
    ],
  },
  {
    name: "Urban Raw Denim Dress",
    id: "urban-raw-denim-dress",
    category: "dress",
    price: 50.5,
    onSale: true,
    inStock: true,
    salesPrice: function () {
      return (this.price - this.price * 0.2).toFixed(2);
    },
    description: "",
    Gallery: [
      dressImages.urbanRawDenimDress1,
      dressImages.urbanRawDenimDress2,
      dressImages.urbanRawDenimDress3,
      dressImages.urbanRawDenimDress4,
    ],
  },
  {
    name: "Dove Flare Long Mini Skirt",
    id: "dove-flare-long-mini-skirt",
    category: "dress",
    price: 21.31,
    onSale: false,
    inStock: true,
    salesPrice: function () {
      return this.price;
    },
    description: "",
    Gallery: [
      dressImages.doveFlareLongMiniSkirt1,
      dressImages.doveFlareLongMiniSkirt2,
      dressImages.doveFlareLongMiniSkirt3,
      dressImages.doveFlareLongMiniSkirt4,
    ],
  },
  {
    name: "Dali Tantan Fit Pintuck Skirt",
    id: "dali-tantan-fit-pintuck-skirt",
    category: "dress",
    price: 30.82,
    onSale: false,
    inStock: false,
    salesPrice: function () {
      return this.price;
    },
    description: "",
    Gallery: [
      dressImages.daliTantanFitPintuckSkirt1,
      dressImages.daliTantanFitPintuckSkirt2,
      dressImages.daliTantanFitPintuckSkirt3,
      dressImages.daliTantanFitPintuckSkirt4,
    ],
  },
  {
    name: "Poche Beige Dying Skirt",
    id: "poche-beige-dying-skirt",
    category: "dress",
    price: 28.25,
    onSale: false,
    inStock: false,
    salesPrice: function () {
      return this.price;
    },
    description: "",
    Gallery: [
      dressImages.pocheBeigeDyingSkirt1,
      dressImages.pocheBeigeDyingSkirt2,
      dressImages.pocheBeigeDyingSkirt3,
      dressImages.pocheBeigeDyingSkirt4,
    ],
  },
  {
    name: "Tone Oat Grey Miniskirt",
    id: "tone-oat-grey-miniskirt",
    category: "dress",
    price: 23.88,
    onSale: true,
    inStock: true,
    salesPrice: function () {
      return (this.price - this.price * 0.1).toFixed(2);
    },
    description: "",
    Gallery: [
      dressImages.toneOatGreyMiniskirt1,
      dressImages.toneOatGreyMiniskirt2,
      dressImages.toneOatGreyMiniskirt3,
      dressImages.toneOatGreyMiniskirt4,
      dressImages.toneOatGreyMiniskirt5,
    ],
  },
  {
    name: "Behind The Scenes Linen Skirt",
    id: "behind-the-scenes-linen-skirt",
    category: "dress",
    price: 23.03,
    onSale: false,
    inStock: true,
    salesPrice: function () {
      return this.price;
    },
    description: "",
    Gallery: [
      dressImages.behindTheScenesLinenSkirt1,
      dressImages.behindTheScenesLinenSkirt2,
      dressImages.behindTheScenesLinenSkirt3,
      dressImages.behindTheScenesLinenSkirt4,
    ],
  },
  {
    name: "Belt Set Mini Cargo Skirt",
    id: "belt-set-mini-cargo-skirt",
    category: "dress",
    price: 16.95,
    onSale: false,
    inStock: true,
    salesPrice: function () {
      return this.price;
    },
    description: "",
    Gallery: [
      dressImages.beltSetMiniCargoSkirt1,
      dressImages.beltSetMiniCargoSkirt2,
      dressImages.beltSetMiniCargoSkirt3,
      dressImages.beltSetMiniCargoSkirt4,
      dressImages.beltSetMiniCargoSkirt5,
    ],
  },
  {
    name: "Grow Solid Natural Denim Skirt",
    id: "grow-solid-natural-denim-skirt",
    category: "dress",
    price: 25.51,
    onSale: false,
    inStock: false,
    salesPrice: function () {
      return this.price;
    },
    description: "",
    Gallery: [
      dressImages.growSolidNaturalDenimSkirt1,
      dressImages.growSolidNaturalDenimSkirt2,
      dressImages.growSolidNaturalDenimSkirt3,
      dressImages.growSolidNaturalDenimSkirt4,
    ],
  },
  {
    name: "Mellow Striped Hool Skirt",
    id: "mellow-striped-hool-skirt",
    category: "dress",
    price: 31.59,
    onSale: true,
    inStock: true,
    salesPrice: function () {
      return (this.price - this.price * 0.15).toFixed(2);
    },
    description: "",
    Gallery: [
      dressImages.mellowStripedHoolSkirt1,
      dressImages.mellowStripedHoolSkirt2,
      dressImages.mellowStripedHoolSkirt3,
      dressImages.mellowStripedHoolSkirt4,
    ],
  },
  {
    name: "Pika Pin Tuck Cotton Long Skirt",
    id: "pika-pin-tuck-cotton-long-skirt",
    category: "dress",
    price: 35.95,
    onSale: false,
    inStock: true,
    salesPrice: function () {
      return this.price;
    },
    description: "",
    Gallery: [
      dressImages.pikaPinTuckCottonLongSkirt1,
      dressImages.pikaPinTuckCottonLongSkirt2,
      dressImages.pikaPinTuckCottonLongSkirt3,
      dressImages.pikaPinTuckCottonLongSkirt4,
    ],
  },
];

export default dressData;
