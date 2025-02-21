import React, { useState } from 'react';
import { ShoppingCart, Star, Search, Menu, X, Heart, Package, Rocket, Shield } from 'lucide-react';
import FireCursor from './components/FireCursor';
import Navbar from './components/Navbar';


function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: "Astronaut Helmet Replica",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1532198528077-0d9e4ca9bb40?auto=format&fit=crop&q=80",
      rating: 4.8,
      category: "replicas"
    },
    {
      id: 2,
      name: "Mars Colony Model Kit",
      price: 149.99,
      image: "https://www.whizzpopbang.com/blog/wp-content/uploads/2021/02/Mars-colony-1030x1030.jpg",
      rating: 4.5,
      category: "models"
    },
    {
      id: 3,
      name: "Space T-Shirt",
      price: 199.99,
      image: "https://images-cdn.ubuy.co.in/672972ae574ed27c4e68b4bb-outer-space-gift-for-sci-fi-boys.jpg",
      rating: 4.9,
      category: "clothing"
      
    },
    {
      id: 4,
      name: "Nebula Watch",
      price: 399.99,
      image: "https://images.unsplash.com/photo-1619134778706-7015533a6150?auto=format&fit=crop&q=80",
      rating: 4.7,
      category: "accessories"
    },
    {
      id: 5,
      name: "Galaxy Backpack",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80",
      rating: 4.6,
      category: "accessories"
    },
    {
      id: 6,
      name: "Space Station Blueprint",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?auto=format&fit=crop&q=80",
      rating: 4.4,
      category: "art"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      
      <FireCursor/>
      <Navbar className='sticky' />
      {/* <nav className="bg-black bg-opacity-50 backdrop-blur-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Rocket className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">COSMIC GEAR</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="bg-gray-800 text-white px-4 py-2 rounded-full pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              
              <button
                onClick={() => setCartOpen(true)}
                className="relative text-white hover:text-blue-500 transition-colors"
              >
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav> */}

      <div className="relative pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Space background"
            className="w-full h-96 object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
        </div>
        
        <div className="relative z-10 pt-32 pb-20 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Space Collection</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Authentic space gear and collectibles for the modern explorer
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="bg-black bg-opacity-50 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-4 bg-gray-800 bg-opacity-50 p-6 rounded-lg">
            <Package className="h-8 w-8 text-blue-500" />
            <div>
              <h3 className="text-white font-semibold">Free Shipping</h3>
              <p className="text-gray-400 text-sm">On orders over $100</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-gray-800 bg-opacity-50 p-6 rounded-lg">
            <Shield className="h-8 w-8 text-blue-500" />
            <div>
              <h3 className="text-white font-semibold">Secure Payments</h3>
              <p className="text-gray-400 text-sm">100% secure checkout</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-gray-800 bg-opacity-50 p-6 rounded-lg">
            <Rocket className="h-8 w-8 text-blue-500" />
            <div>
              <h3 className="text-white font-semibold">Fast Delivery</h3>
              <p className="text-gray-400 text-sm">2-3 business days</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-wrap gap-4 mb-8">
          {['all', 'replicas', 'models', 'clothing', 'accessories', 'art'].map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products
            .filter(product => selectedCategory === 'all' || product.category === selectedCategory)
            .map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>

      {/* Shopping Cart Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 w-full md:w-96 bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          cartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">Your Cart</h2>
            <button
              onClick={() => setCartOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="space-y-6">
            {/* Cart items would go here */}
            <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg">
              <img
                src={products[0].image}
                alt={products[0].name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-white font-medium">{products[0].name}</h3>
                <p className="text-gray-400">${products[0].price}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <button className="text-gray-400 hover:text-white">-</button>
                  <span className="text-white">1</span>
                  <button className="text-gray-400 hover:text-white">+</button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-800 pt-8">
            <div className="flex justify-between text-white mb-4">
              <span>Subtotal</span>
              <span>$299.99</span>
            </div>
            <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden group">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-4 right-4 p-2 bg-white bg-opacity-10 backdrop-blur-lg rounded-full hover:bg-opacity-20 transition-colors">
          <Heart className="h-5 w-5 text-white" />
        </button>
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(product.rating)
                  ? 'text-yellow-400'
                  : 'text-gray-600'
              }`}
              fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
            />
          ))}
          <span className="text-gray-400 text-sm ml-2">{product.rating}</span>
        </div>
        
        <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-white">${product.price}</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;