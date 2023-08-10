import { dressImages } from "../../util/import-dress-imgs";

const dressData = [
  {
    name: "Brown Fine Check Dress",
    id: "brown-fine-check-dress",
    category: "Dress",
    price: 35.95,
    onSale: false,
    inStock: true,
    salesPrice: function () {
      return this.price;
    },
    description: `If you already have a simple plain dress
    If you're looking for a dress suitable for formal occasions
    If you like puff details that bring out the shoulder line
    If you prefer a dress with a defined waist
    For those of you who felt burdened by the short mini skirt length of the market`,
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
    category: "Dress",
    price: 31.67,
    onSale: false,
    inStock: true,
    salesPrice: function () {
      return this.price;
    },
    description: `Anyone who likes to wear bustier dresses with high utilization
    If you have a lot of basic shirts or basic shirts
    Who likes the pleated details of classic moods
    If you're looking for a dress with adjustable length`,
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
    category: "Dress",
    price: 25.51,
    onSale: false,
    inStock: false,
    salesPrice: function () {
      return this.price;
    },
    description: `Who likes thin and light washa fabric
    Anyone who watched a dress with adjustable length
    Anyone who likes to wear layered outfits
    If you're thinking about a summer vacation spot look`,
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
    category: "Dress",
    price: 50.5,
    onSale: true,
    inStock: true,
    salesPrice: function () {
      return (this.price - this.price * 0.2).toFixed(2);
    },
    description: `Who likes simple, stylish and comfortable clothing`,
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
    category: "Dress",
    price: 21.31,
    onSale: false,
    inStock: true,
    salesPrice: function () {
      return this.price;
    },
    description: `Who likes to wear light mini skirts 
    Who likes flares with a soft and fluffy vibe 
    If you're looking for a daily skirt that's good to coordinate with various styles
    Who likes to style long boots`,
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
    category: "Dress",
    price: 30.82,
    onSale: false,
    inStock: false,
    salesPrice: function () {
      return this.price;
    },
    description: `If you like bottoms with a set of belts
    For those of you who felt burdened by the short mini skirt length of the market
    If you prefer an A-line skirt that covers your thighs
    Who likes to wear long boots`,
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
    category: "Dress",
    price: 28.25,
    onSale: false,
    inStock: false,
    salesPrice: function () {
      return this.price;
    },
    description: `If you always wear underpants when you wear a skirt
    Who likes plain H-line more than A-line
    Who likes light miniskirts
    Anyone who likes vintage dining denim`,
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
    category: "Dress",
    price: 23.88,
    onSale: true,
    inStock: true,
    salesPrice: function () {
      return (this.price - this.price * 0.1).toFixed(2);
    },
    description: `If you're looking for a light summer setup
    Who likes to wear light mini length
    Who likes A-line more than H-line
    If you prefer a solid fit, rather than a mushy one`,
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
    category: "Dress",
    price: 23.03,
    onSale: false,
    inStock: true,
    salesPrice: function () {
      return this.price;
    },
    description: `Anyone who likes plain linen
    Who likes semi-A-line more than H-line
    If you prefer a mini length that's relatively stable for exposure
    If you like basic styling`,
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
    category: "Dress",
    price: 16.95,
    onSale: false,
    inStock: true,
    salesPrice: function () {
      return this.price;
    },
    description: `Who likes casual cargo designs
    If you're looking for a cost-effective item with a belt set
    Who likes light mini length
    If you prefer back-banding details that are comfortable to wear for a long time`,
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
    category: "Dress",
    price: 25.51,
    onSale: false,
    inStock: false,
    salesPrice: function () {
      return this.price;
    },
    description: `Who likes non-fade fabrics with little stains
    If you prefer a semi-A-line fit that hides the flab
    For those of you who felt burdened by the short skirt length on the market
    If you prefer a solid cotton material with less slack`,
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
    category: "Dress",
    price: 31.59,
    onSale: true,
    inStock: true,
    salesPrice: function () {
      return (this.price - this.price * 0.15).toFixed(2);
    },
    description: `Anyone who likes a calm stripe pattern
    If you prefer a neat waistline without banding
    If you like a flare fit that covers your lower body fat
    Anyone who has a lot of basic plain shirts or shirts`,
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
    category: "Dress",
    price: 35.95,
    onSale: false,
    inStock: true,
    salesPrice: function () {
      return this.price;
    },
    description: `If you like cotton material that's less loose and is thick 
    Who likes the subtle pin tuck details
    If you're looking for a long skirt that covers your lower body fat
    Someone who likes to wear belts`,
    Gallery: [
      dressImages.pikaPinTuckCottonLongSkirt1,
      dressImages.pikaPinTuckCottonLongSkirt2,
      dressImages.pikaPinTuckCottonLongSkirt3,
      dressImages.pikaPinTuckCottonLongSkirt4,
    ],
  },
];

export default dressData;
