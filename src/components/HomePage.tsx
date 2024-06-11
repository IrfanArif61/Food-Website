"use client";
import ChooseUs from "@/components/ChooseUs";
import FoodPackages from "@/components/FoodPackages";
import SeasonalOffers from "@/components/SeasonalOffers";
import { axiosRequest } from "@/lib/config";
import { useStore } from "@/store";
import { foodsType } from "@/types";
import Image from "next/image";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import Link from "next/link";

export default function HomePage() {
  const [foods, setFoods] = useState<foodsType[]>([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const { state, dispatch } = useStore();

  useEffect(() => {
    (async function () {
      try {
        const savedCartItems = localStorage.getItem("cartItems");
        const existingCartItems: foodsType[] = savedCartItems
          ? JSON.parse(savedCartItems)
          : [];
        dispatch({ type: "count", payload: existingCartItems.length });
        const { data } = await axiosRequest.get("/product");
        setFoods(data.message);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div>
      <div>
        <div id="container" className="flex  min-h-screen">
          <div className=" flex flex-col gap-10">
            <p className="text-xl text-[#e1e1d9] mt-10">
              Welcome to CleanPlate delivery
            </p>
            <h1 className="text-5xl font-bold text-white">
              The Faster Healthy Food Delivery In{" "}
              <span className="text-textSoft">Your City</span>
            </h1>
            <p className="text-md text-justify max-w-[450px] text-white">
              Discover a world of culinary delights where taste meets nutrition.
              Indulge in our handcrafted dishes, meticulously prepared to
              tantalize your senses. CleanPlate delivery promises an unforgettable gastronomic
              journey. Join us and savor the essence of fine dining, redefined
              for your convenience.
            </p>
            <div className="flex items-center gap-5">
              <Link href={'/food'} className="p-3 min-w-[120px] cursor-pointer border-none rounded-2xl bg-gradient-to-r from-textSoft to-text text-white flex justify-center items-center animate-bounce  ">
                Order Now
              </Link>
            </div>
          </div>
          <div className="w-[800px] flex">
            <img src="/saladd.png" alt="" className="my-auto" />
          </div>
        </div>
        <div className="bg-[#f4f4f4] flex flex-col gap-20 pt-24">
          {!loading ? (
            <SeasonalOffers foods={foods} />
          ) : (
            <div className="flex items-center justify-center">
              <Loader />
            </div>
          )}

          <ChooseUs />
          {/* {!loading ? (
            <FoodPackages foods={foods} />
          ) : (
            <div className="flex items-center justify-center">
              <Loader />
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}
