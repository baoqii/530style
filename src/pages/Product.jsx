export const Product = ({ name, price, gallery, onSale, salesPrice }) => {
  const randomImg = gallery[Math.floor(Math.random() * gallery.length)];
  return (
    <div className="mb-5 px-10 font-robotoMono">
      <div>
        <img
          src={randomImg}
          alt={name}
          className="h-full w-full object-contain "
        />
      </div>
      <h3 className="text-shark-700 text-lg/5 font-normal hover:text-shark-400 my-2 tracking-wide">
        {name}
      </h3>
      {onSale ? (
        <p className="text-shark-950 font-bold text-lg/5 hover:text-shark-700 tracking-wide">
          ${salesPrice}{" "}
          <s className="text-gray-400 font-semibold text-sm">${price}</s>
        </p>
      ) : (
        <p className="text-shark-950 font-bold text-lg/5 hover:text-shark-700 tracking-wide">
          ${price}
        </p>
      )}
    </div>
  );
};

export default Product;
