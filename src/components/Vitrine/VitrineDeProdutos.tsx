import React from "react";
import products from "../../../produtos.json";
import VitrineCard from "./VitrineCard";

export default function VitrineDeProdutos() {

  return (
    <main className="flex flex-col p-8 max-w-5xl mx-auto">
      <h3 className="text-branco-500 m-5 font-bold">21 dias de produtos</h3>
        <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-rows-auto gap-1 max-w-5xl'>
          {products.produtos.map((product: any) => (
            <VitrineCard
              key={product.id}
              img={product.imagem}
              name={product.nome}
              price={product.preco}
            />
          ))}
        </section>
    </main>
  );
}
