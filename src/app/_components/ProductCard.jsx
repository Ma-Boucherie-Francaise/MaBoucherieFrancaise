import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion as m } from "motion/react";

const ProductCard = ({ product }) => {
  return (
    <Link href={product.href}>
      <m.article className="" initial={{ y: 0 }} whileHover={{ y: "-10px" }}>
        <div className="w-full shadow-card rounded-2xl">
          <Image
            src={product.image.href}
            width={product.image.width}
            height={product.image.height}
            alt={`Illustration d'un morceau de viande de ${product.name}`}
            className={"w-full h-full object-cover rounded-2xl"}
          />
        </div>
        <div className="text-center mt-4">
          <h3 className="text-lg md:text-2xl">{product.name}</h3>
          <p>Dès {product.startingPrice}€</p>
        </div>
      </m.article>
    </Link>
  );
};

export default ProductCard;
