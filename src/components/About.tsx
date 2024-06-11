import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex gap-2 text-white mx-20 mb-15 mt-4">
      <div className="flex-1 flex flex-col gap-5">
        <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-bold text-green-500">
          Welcome to <span className="text-white">CleanPlate</span>, your one-stop shop for delicious and healthy salad deliveries!
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-8">
          We believe that healthy eating shouldn't be complicated or time-consuming. We're committed to making it easy for everyone to enjoy fresh, vibrant salads made with high-quality ingredients. Our mission is to:
        </p>
        <ul className="list-disc ml-4 text-lg md:text-xl text-gray-300 mt-6">
          <li>Offer a variety of delicious and satisfying salad options</li>
          <li>Source fresh, seasonal ingredients</li>
          <li>Provide convenient delivery options</li>
          <li>Promote a healthy lifestyle</li>
        </ul>
        <div className="flex items-center justify-between text-lg md:text-xl mt-10 mb-20">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-green-400 text-3xl md:text-4xl font-bold">10K+</h2>
            <p className="text-gray-300">Satisfied Customers</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-green-400 text-3xl md:text-4xl font-bold">1K+</h2>
            <p className="text-gray-300">Orders Delivered</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-green-400 text-3xl md:text-4xl font-bold">4Y+</h2>
            <p className="text-gray-300">In Industry</p>
          </div>
        </div>
      </div>
      <div className="flex-1 relative">
        <img src="/giphy.gif" alt="Salad" className="object-contain w-full ml-10" />
      </div>
    </div>
  );
};

export default About;
