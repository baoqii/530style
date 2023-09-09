import { allData } from "../assets/data/data";
import { useState } from "react";
import { Product } from "../pages/Product";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";

const Shop = () => {
  const categories = ["Top", "Bottom", "Dress", "Outerwear"];
  const [currentCategory, setCurrentCategory] = useState("All");
  const [searchText, setSearchText] = useState({ query: "", list: [] });
  const [sortMethod, setSortMethod] = useState("A-Z");

  const currentCategoryItems =
    currentCategory === "All"
      ? allData
      : allData.filter((item) => item.category === currentCategory);

  const handleSearchChange = (event) => {
    const results = currentCategoryItems.filter((item) => {
      if (event.target.value === "") return currentCategoryItems;
      return item.name.toLowerCase().includes(event.target.value.toLowerCase());
    });

    setSearchText({
      query: event.target.value,
      list: results,
    });
  };

  const handleSortChange = (event) => {
    setSortMethod(event.target.value);
  };

  const content = {
    animate: {
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <motion.section exit={{ opacity: 0 }}>
      <motion.div variants={content} animate="animate" initial="initial">
        <CategoryContainer
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
          categories={categories}
        />
        <div className="box grid grid-cols-9 justify-center items-center mb-10">
          <div className="col-start-3 search-container group focus:bg-alabaster-400 focus:text-shark-950 focus:outline-none table relative w-12">
            <div className="search-icon-btn transition-all bg-teak-50 border-solid border-teak-50 border-2 table-cell h-12 relative text-center align-middle w-12 z-[2]">
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <div className="search-input group-hover:w-80 transition-all absolute left-0 z-[1] h-12 p-0 w-52">
              <input
                type="search"
                className="search-bar text-left font-rubik text-lg tracking-wide group-hover:pl-16 group-hover:pr-3 group-hover:w-80 transition-all focus:outline-none border-solid border-2 border-shark-200 h-12 p-0 w-12 focus:pl-14 focus:pr-3 focus:w-80 placeholder:font-rubik placeholder:text-base placeholder:tracking-wide"
                placeholder="Search items.."
                name="search-bar"
                value={searchText.query}
                autoComplete="off"
                onChange={(e) => handleSearchChange(e)}
              />
            </div>
          </div>
          <div className="col-start-8 items-center">
            <label htmlFor="sort-select"></label>
            <select
              className="outline-none focus:outline-none active:outline-none font-rubik font-semibold text-base tracking-wide"
              name="sort-select"
              id="sort-select"
              onChange={(e) => handleSortChange(e)}
            >
              <option value="A-Z">A - Z</option>
              <option value="Z-A">Z - A</option>
              <option value="low-high">Price Low To High</option>
              <option value="high-low">Price High To Low</option>
            </select>
          </div>
        </div>
        <ProductCatalog
          items={currentCategoryItems}
          categories={categories}
          currentCategory={currentCategory}
          searchText={searchText}
          sortMethod={sortMethod}
        />
      </motion.div>
    </motion.section>
  );
};

const CategoryContainer = ({
  currentCategory,
  setCurrentCategory,
  categories,
}) => {
  const title = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };
  return (
    <motion.ul
      variants={title}
      animate="animate"
      initial="initial"
      className="categoryContainer grid grid-cols-9 justify-center items-center text-center mb-10 font-rubik font-bold text-xl text-shark-950 bg-teak-50 p-3"
    >
      <li className="col-start-3">
        <button
          type="button"
          className={`py-1 px-3 rounded-none tracking-wide hover:bg-teak-300 active:bg-teak-400 ${
            currentCategory === "All" ? "bg-teak-200" : ""
          }`}
          onClick={() => setCurrentCategory("All")}
        >
          <h2>All</h2>
        </button>
      </li>
      {categories.map((category, categoryIndex) => (
        <li key={categoryIndex} className="last:col-end-8">
          <button
            type="button"
            className={`py-1 px-3 rounded-none tracking-wide hover:bg-teak-300 active:bg-teak-400 ${
              currentCategory === category ? "bg-teak-200" : ""
            }`}
            onClick={() => setCurrentCategory(category)}
          >
            <h2>{category}</h2>
          </button>
        </li>
      ))}
    </motion.ul>
  );
};

const ProductCatalog = ({
  items,
  categories,
  currentCategory,
  searchText,
  sortMethod,
}) => {
  const sortedItems = sortData(items, sortMethod);
  const sortedQueryItems = sortData(searchText.list, sortMethod);

  const item = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, 0.05, 0.01, 0.99],
      },
    },
  };

  const frameVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
        ease: [0.02, 0.6, 0.01, 0.91],
      },
    },
  };

  return (
    <motion.div variants={item}>
      {currentCategory === "All" ? (
        <motion.div
          variants={frameVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-4 gap-8 mx-40"
        >
          {searchText.query === "" ? (
            <AnimatePresence>
              {sortedItems.map((item) => {
                return (
                  <Link to={`/product/${item.id}`} key={item.id}>
                    <Product
                      name={item.name}
                      price={item.price}
                      category={item.category}
                      inStock={item.inStock}
                      gallery={item.Gallery}
                      onSale={item.onSale}
                      salesPrice={item.salesPrice()}
                    />
                  </Link>
                );
              })}
            </AnimatePresence>
          ) : !searchText.list.length ? (
            <p className="text-3xl tracking-wide max-w-prose font-medium text-center col-span-4 m-40">
              Uh oh. We could not find what you are looking for. Maybe try a
              similar search but use different words?
            </p>
          ) : (
            <AnimatePresence>
              {sortedQueryItems.map((item) => {
                return (
                  <Link to={`/product/${item.id}`} key={item.id}>
                    <Product
                      name={item.name}
                      price={item.price}
                      category={item.category}
                      inStock={item.inStock}
                      gallery={item.Gallery}
                      onSale={item.onSale}
                      salesPrice={item.salesPrice()}
                    />
                  </Link>
                );
              })}
            </AnimatePresence>
          )}
        </motion.div>
      ) : (
        categories
          .filter((category) => category === currentCategory)
          .map((category) => (
            <section key={category}>
              <motion.div
                variants={frameVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-4 gap-8 mx-40"
              >
                {searchText.query === "" ? (
                  <AnimatePresence>
                    {sortedItems
                      .filter((item) => item.category === category)
                      .map((item) => {
                        return (
                          <Link to={`/product/${item.id}`} key={item.id}>
                            <Product
                              name={item.name}
                              price={item.price}
                              category={item.category}
                              inStock={item.inStock}
                              gallery={item.Gallery}
                              onSale={item.onSale}
                              salesPrice={item.salesPrice()}
                            />
                          </Link>
                        );
                      })}
                  </AnimatePresence>
                ) : !searchText.list.length ? (
                  <p className="text-3xl tracking-wide max-w-prose font-medium text-center col-span-4 m-40">
                    Uh oh. We could not find what you are looking for. Maybe try
                    a similar search but use different words?
                  </p>
                ) : (
                  <AnimatePresence>
                    {sortedQueryItems
                      .filter((item) => item.category === category)
                      .map((item) => {
                        return (
                          <Link to={`/product/${item.id}`} key={item.id}>
                            <Product
                              name={item.name}
                              price={item.price}
                              inStock={item.inStock}
                              gallery={item.Gallery}
                              onSale={item.onSale}
                              salesPrice={item.salesPrice()}
                            />
                          </Link>
                        );
                      })}
                  </AnimatePresence>
                )}
              </motion.div>
            </section>
          ))
      )}
    </motion.div>
  );
};

function sortData(arr, sortMethodString) {
  switch (sortMethodString) {
    case "A-Z":
      return arr.sort((a, b) => a.name.localeCompare(b.name));
    case "Z-A":
      return arr.sort((a, b) => b.name.localeCompare(a.name));
    case "low-high":
      return arr.sort((a, b) => a.price - b.price);
    case "high-low":
      return arr.sort((a, b) => b.price - a.price);
    default:
      throw new Error("Invalid sort method");
  }
}

export default Shop;
