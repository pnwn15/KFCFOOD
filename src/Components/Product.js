import React from 'react';

function Product() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      href: '#',
      imageSrc: 'image/kfceat1.png',
      imageAlt: 'Product 1 Image',
      price: '$100',
    },
    {
      id: 2,
      name: 'Product 2',
      href: '#',
      imageSrc: 'image/kfceat1.png',
      imageAlt: 'Product 2 Image',
      price: '$120',
    },
    {
      id: 3,
      name: 'Product 3',
      href: '#',
      imageSrc: 'image/kfceat1.png',
      imageAlt: 'Product 3 Image',
      price: '$130',
    },
    {
      id: 4,
      name: 'Product 4',
      href: '#',
      imageSrc: 'image/kfceat1.png',
      imageAlt: 'Product 4 Image',
      price: '$140',
    },
    {
      id: 5,
      name: 'Product 5',
      href: '#',
      imageSrc: 'image/kfceat1.png',
      imageAlt: 'Product 5 Image',
      price: '$150',
    },
    {
      id: 6,
      name: 'Product 6',
      href: '#',
      imageSrc: 'image/kfceat1.png',
      imageAlt: 'Product 6 Image',
      price: '$160',
    },
    {
      id: 7,
      name: 'Product 7',
      href: '#',
      imageSrc: 'image/kfceat1.png',
      imageAlt: 'Product 7 Image',
      price: '$170',
    },
    {
      id: 8,
      name: 'Product 8',
      href: '#',
      imageSrc: 'image/kfceat1.png',
      imageAlt: 'Product 8 Image',
      price: '$180',
    },
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="items-center flex justify-center gap-5 flex-col">
          <h1 className="text-1xl font-bold tracking-tight text-green-400">Featured Products</h1>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Our Products</h1>
          <h1 className="text-lg tracking-tight text-gray-900">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </h1>
        </div>
        <div className="mt-6 container grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="absolute inset-0 flex flex-col justify-end text-center p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-sm font-bold text-white">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="mt-1 text-sm font-medium text-white">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
