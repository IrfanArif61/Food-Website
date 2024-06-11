import { Products } from "@/Models/Product";
import { useStore } from "@/store";
import { foodsType } from "@/types";
import Link from "next/link";
import React from "react";
import { FaRegHeart } from "react-icons/fa";

type Props = {
  size?: string;
  item: foodsType;
};

function FoodCard({ size, item }: Props) {
  const { state, dispatch } = useStore();

  const handleAddToCart = (event:any) => {
    event.stopPropagation();
    event.preventDefault(); 
    const savedCartItems = localStorage.getItem("cartItems");
    const existingCartItems: foodsType[] = savedCartItems
      ? JSON.parse(savedCartItems)
      : [];

    const isItemInCart = existingCartItems.some(
      (cartItem) => cartItem._id === item._id
    );

    if (isItemInCart) {
      alert(`${item.name} is already in the cart!`);
      return;
    }

    item.quantity = 1;
    const updatedCartItems = [...existingCartItems, item];
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    dispatch({ type: "count", payload: state.count + 1 });
    alert(`${item.name} has been added to the cart!`);
  };

  return (
    <Link href={`/food/${item._id}`} onClick={()=>dispatch({type:'detail',payload:item})} className="p-8 bg-[#f5f4f4] w-64 flex flex-col gap-2 drop-shadow-2xl rounded-2xl relative">
      <div className="avatar absolute right-[-40px] top-[-40px]">
        <div className={size === "sm" ? "card-sm" : "card-lg"}>
          <img src={item.image} />
        </div>
      </div>
      <h2 className="text-3xl font-medium">
        ${item.price}
      </h2>

      <h4 className="font-medium text-lg w-32">{item.name}</h4>
      {size !== "sm" && (
        <p className="text-xs">
          {item.weight}g | {item.calories} kcal | GF
        </p>
      )}

      <p className="text-xs">{item.description}</p>
      {size === "sm" ? (
        <button className=" text-white px-3 py-2 bg-green-600 rounded-full text-sm">
          Order Now
        </button>
      ) : (
        <div className="flex justify-between items-center">
          {/* <button
            type="button"
            className="bg-white rounded-full h-8 w-8 drop-shadow-xl flex justify-center items-center"
          >
            <FaRegHeart className="text-green-600 " />
          </button> */}
          <button
            onClick={handleAddToCart}
            className=" w-full text-white px-3 py-2 drop-shadow-lg bg-green-600 rounded-full text-sm z-50"
          >
            Add to cart
          </button>
        </div>
      )}
    </Link>
  );
}

export default FoodCard;
