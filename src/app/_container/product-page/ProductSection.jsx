"use client";
import React, { useState, useEffect } from "react";
import content from "@/app/_data/content.json";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import ProductCard from "@/app/_components/ProductCard";
import { useSearchParams } from "next/navigation";

const ProductSection = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const productShownPerPage = 9;
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    setSelected({ ...selected, category });
  }, [category]);

  const [filterOpened, setFilterOpened] = useState({
    isOpen: false,
    openedType: "",
  });

  const [selected, setSelected] = useState({
    category: false,
    collection: false,
    cutting: false,
  });

  const categories = Object.keys(content.pages.products.products);

  const getCollectionsAndCuttings = (selectedCategory) => {
    let collections = [];
    let cuttings = new Set();

    Object.entries(content.pages.products.products).forEach(
      ([category, categoryContent]) => {
        if (selectedCategory && category !== selectedCategory) return;

        if (Array.isArray(categoryContent)) {
          categoryContent.forEach((product) => {
            if (product.cutting) {
              cuttings.add(product.cutting);
            }
          });
        } else if (typeof categoryContent === "object") {
          Object.entries(categoryContent).forEach(([collection, products]) => {
            collections.push(collection);
            if (Array.isArray(products)) {
              products.forEach((product) => {
                if (product.cutting) {
                  cuttings.add(product.cutting);
                }
              });
            }
          });
        }
      }
    );

    return { collections, cuttings: Array.from(cuttings) };
  };

  const { collections, cuttings } = getCollectionsAndCuttings(
    selected.category
  );

  const toggleFilter = (type) => {
    setFilterOpened((prev) => ({
      isOpen: prev.openedType === type ? !prev.isOpen : true,
      openedType: prev.openedType === type && prev.isOpen ? "" : type,
    }));
  };

  const resetFilters = () => {
    setFilterOpened({ isOpen: false, openedType: "" });
    setSelected({ category: false, cutting: false, collection: false });
  };

  const getProductsArray = (
    selectedCategory,
    selectedCollection,
    selectedCutting
  ) => {
    let products = [];
    const productsObj = content.pages.products.products;

    Object.entries(productsObj).forEach(([category, categoryContent]) => {
      // Si une catégorie est sélectionnée et qu'elle ne correspond pas, on passe au suivant
      if (selectedCategory && category !== selectedCategory) return;

      if (Array.isArray(categoryContent)) {
        // Catégories sans collections
        categoryContent.forEach((product) => {
          if (selectedCutting && product.cutting !== selectedCutting) return;
          products.push({ ...product, category, collection: "" });
        });
      } else if (typeof categoryContent === "object") {
        // Catégories avec collections
        Object.entries(categoryContent).forEach(([collection, productList]) => {
          if (selectedCollection && collection !== selectedCollection) return;
          if (Array.isArray(productList)) {
            productList.forEach((product) => {
              if (selectedCutting && product.cutting !== selectedCutting)
                return;
              products.push({ ...product, category, collection });
            });
          }
        });
      }
    });

    return products;
  };

  const productsArray = getProductsArray(
    selected.category,
    selected.collection,
    selected.cutting
  );

  const totalPages = Math.ceil(productsArray.length / productShownPerPage);
  const startIndex = (currentIndex - 1) * productShownPerPage;
  const endIndex = startIndex + productShownPerPage;
  const productsToDisplay = productsArray.slice(startIndex, endIndex);

  return (
    <section className="max-w-[1440px] mx-auto py-[90px] md:py-28 px-5">
      <h1 className="text-4xl mb-2 md:text-6xl">
        {content.pages.products.title}
      </h1>
      <div className="flex flex-col lg:flex-row gap-3 mt-10 pb-5">
        <div className="relative">
          <AnimatePresence>
            <div
              onClick={() => toggleFilter("category")}
              className="border min-w-[280px] py-4 px-5 rounded-2xl cursor-pointer flex flex-row justify-between items-center"
            >
              <p>{selected.category || "Catégories"}</p>
              <Image
                src="/images/icons/mingcute_down-line-icon-red.svg"
                width={24}
                height={24}
                alt=""
              />
            </div>

            {filterOpened.isOpen && filterOpened.openedType === "category" && (
              <ul
                className="border min-w-[280px] w-full lg:w-fit rounded-2xl max-h-[200px] overflow-hidden absolute top-16 bg-white z-10"
                key="categories"
              >
                <div className="overflow-y-auto max-h-[200px]">
                  {categories.map((cat, i) => (
                    <li
                      className="w-full py-4 px-4 cursor-pointer"
                      key={i}
                      onClick={() => {
                        setSelected({
                          category: cat,
                          collection: false,
                          cutting: false,
                        });
                        toggleFilter("category");
                      }}
                    >
                      {cat}
                    </li>
                  ))}
                </div>
              </ul>
            )}
          </AnimatePresence>
        </div>

        {collections.length > 0 && (
          <div className="relative">
            <AnimatePresence>
              <div
                onClick={() => toggleFilter("collection")}
                className="border min-w-[280px] py-4 px-5 rounded-2xl cursor-pointer flex flex-row justify-between items-center"
              >
                <p>{selected.collection || "Collections"}</p>
                <Image
                  src="/images/icons/mingcute_down-line-icon-red.svg"
                  width={24}
                  height={24}
                  alt=""
                />
              </div>

              {filterOpened.isOpen &&
                filterOpened.openedType === "collection" && (
                  <ul
                    className="border min-w-[280px] w-full lg:w-fit rounded-2xl max-h-[200px] overflow-hidden absolute top-16 bg-white z-10"
                    key="collections"
                  >
                    <div className="overflow-y-auto max-h-[200px]">
                      {collections.map((col, i) => (
                        <li
                          className="w-full py-4 px-4 cursor-pointer"
                          key={i}
                          onClick={() => {
                            setSelected({ ...selected, collection: col });
                            toggleFilter("collection");
                          }}
                        >
                          {col}
                        </li>
                      ))}
                    </div>
                  </ul>
                )}
            </AnimatePresence>
          </div>
        )}

        {cuttings.length > 0 && (
          <div className="relative">
            <AnimatePresence>
              <div
                onClick={() => toggleFilter("cutting")}
                className="border min-w-[280px] py-4 px-5 rounded-2xl cursor-pointer flex flex-row justify-between items-center"
              >
                <p>{selected.cutting || "Découpes"}</p>
                <Image
                  src="/images/icons/mingcute_down-line-icon-red.svg"
                  width={24}
                  height={24}
                  alt=""
                />
              </div>

              {filterOpened.isOpen && filterOpened.openedType === "cutting" && (
                <ul
                  className="border min-w-[280px] w-full lg:w-fit rounded-2xl max-h-[200px] overflow-hidden absolute top-16 bg-white z-10"
                  key="cuttings"
                >
                  <div className="overflow-y-auto max-h-[200px]">
                    {cuttings.map((cut, i) => (
                      <li
                        className="w-full py-4 px-4 cursor-pointer"
                        key={i}
                        onClick={() => {
                          setSelected({ ...selected, cutting: cut });
                          toggleFilter("cutting");
                        }}
                      >
                        {cut}
                      </li>
                    ))}
                  </div>
                </ul>
              )}
            </AnimatePresence>
          </div>
        )}

        <button className="cursor-pointer" onClick={resetFilters}>
          <p className="underline underline-offset-1">Réinitialiser</p>
        </button>
      </div>

      {productsToDisplay.length > 1 ? (
        <>
          <div className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {productsToDisplay.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
          {totalPages > 0 && (
            <div className="flex justify-center gap-4 mt-8">
              {currentIndex > 0 && (
                <button
                  onClick={() => {
                    setCurrentIndex(currentIndex - 1);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="px-3 py-1 border rounded-lg cursor-pointer"
                >
                  Précédent
                </button>
              )}
              <button className="block md:hidden px-3 py-1 border rounded-lg cursor-pointer bg-[var(--color-primary)] text-white">
                {currentIndex}
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentIndex(i + 1);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`hidden md:block px-3 py-1 border rounded-lg cursor-pointer ${
                    currentIndex === i + 1
                      ? "bg-[var(--color-primary)] text-white"
                      : ""
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              {currentIndex < totalPages && (
                <button
                  onClick={() => {
                    setCurrentIndex(currentIndex + 1);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="px-3 py-1 border rounded-lg cursor-pointer"
                >
                  Suivant
                </button>
              )}
            </div>
          )}
        </>
      ) : (
        <div className="grid place-content-center w-full py-10">
          <p>Aucune Viande trouvée</p>
        </div>
      )}
    </section>
  );
};

export default ProductSection;
