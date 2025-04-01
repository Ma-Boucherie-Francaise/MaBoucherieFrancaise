"use client";
import React, { useState, useEffect } from "react";
import content from "@/app/_data/content.json";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import ProductCard from "@/app/_components/ProductCard";
import { useSearchParams } from "next/navigation";

const ProductSection = () => {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category") || "";
  let productsArray = [];

  const productShownPerPage = 9;
  const [currentIndex, setCurrentIndex] = useState(1);

  const [selected, setSelected] = useState({
    category: "",
    collection: "",
    cutting: "",
  });

  useEffect(() => {
    setSelected((prev) => ({ ...prev, category: categoryFromUrl }));
  }, [categoryFromUrl]);

  useEffect(() => {
    setCurrentIndex(1);
    productsArray = getProductsArray(
      selected.category,
      selected.collection,
      selected.cutting
    );
  }, [selected]);

  const [filterOpened, setFilterOpened] = useState({
    isOpen: false,
    openedType: "",
  });

  const categories = Object.keys(content.pages.products.products);

  const getCollectionsAndCuttings = (selectedCategory) => {
    let collections = [];
    let cuttings = new Set();

    Object.entries(content.pages.products.products).forEach(
      ([cat, categoryContent]) => {
        if (selectedCategory && cat !== selectedCategory) return;

        if (Array.isArray(categoryContent)) {
          categoryContent.forEach((product) => {
            if (product.cutting) cuttings.add(product.cutting);
          });
        } else if (typeof categoryContent === "object") {
          Object.entries(categoryContent).forEach(([collection, products]) => {
            collections.push(collection);
            if (Array.isArray(products)) {
              products.forEach((product) => {
                if (product.cutting) cuttings.add(product.cutting);
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
    setSelected({ category: "", collection: "", cutting: "" });
    setCurrentIndex(1);
  };

  const getProductsArray = (
    selectedCategory,
    selectedCollection,
    selectedCutting
  ) => {
    let products = [];

    Object.entries(content.pages.products.products).forEach(
      ([category, categoryData]) => {
        if (selectedCategory && category !== selectedCategory) return;

        if (Array.isArray(categoryData)) {
          categoryData.forEach((product) => {
            if (selectedCutting && product.cutting !== selectedCutting) return;
            if (selectedCollection) return;
            products.push(product);
          });
        } else if (typeof categoryData === "object") {
          Object.entries(categoryData).forEach(
            ([collection, productsArray]) => {
              if (selectedCollection && collection !== selectedCollection)
                return;
              productsArray.forEach((product) => {
                if (selectedCutting && product.cutting !== selectedCutting)
                  return;
                products.push(product);
              });
            }
          );
        }
      }
    );

    return products;
  };

  productsArray = getProductsArray(
    selected.category,
    selected.collection,
    selected.cutting
  );

  const totalPages = Math.ceil(productsArray.length / productShownPerPage);
  const startIndex = (currentIndex - 1) * productShownPerPage;
  const endIndex = startIndex + productShownPerPage;
  const productsToDisplay = productsArray.slice(startIndex, endIndex);

  return (
    <section className="max-w-[1440px] mx-auto py-[90px] md:pb-28 px-5">
      <h1 className="text-6xl sm:text-8xl leading-16 sm:leading-24 mb-5">
        {content.pages.products.title}
      </h1>
      <div className="flex flex-col lg:flex-row gap-3 mt-10 pb-5">
        {/* Filtre Catégorie */}
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
                        // Remise à zéro des autres filtres lors de la sélection d'une nouvelle catégorie
                        setSelected({
                          category: cat,
                          collection: "",
                          cutting: "",
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

        {/* Filtre Collections */}
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
                            setSelected((prev) => ({
                              ...prev,
                              collection: col,
                            }));
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

        {/* Filtre Découpes */}
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
                          setSelected((prev) => ({ ...prev, cutting: cut }));
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

      {productsToDisplay.length > 0 ? (
        <>
          <div className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {productsToDisplay.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
          {totalPages > 0 && (
            <div className="flex justify-center gap-4 mt-8">
              {currentIndex > 1 && (
                <button
                  onClick={() => {
                    setCurrentIndex(currentIndex - 1);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="px-3 py-1 border rounded-lg cursor-pointer hover:bg-[var(--color-primary)] hover:text-white"
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
                  className={`hidden md:block px-3 py-1 border rounded-lg cursor-pointer hover:bg-[var(--color-primary)] hover:text-white ${
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
                  className="px-3 py-1 border rounded-lg cursor-pointer hover:bg-[var(--color-primary)] hover:text-white"
                >
                  Suivant
                </button>
              )}
            </div>
          )}
        </>
      ) : (
        <div className="grid place-content-center w-full py-10">
          <p>Aucune viande trouvée</p>
        </div>
      )}
    </section>
  );
};

export default ProductSection;
