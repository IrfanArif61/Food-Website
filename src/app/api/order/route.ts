
import Order from "@/Models/Order";
import dbConnect from "@/lib/dbConnect";
import { foodsType } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    await dbConnect();
    const data = await Order.find();

    return NextResponse.json(
      {
        success: true,
        message : data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error while fetching products : ", error);
    return NextResponse.json({success : false , message : 'Irfan its not working'},{status:400})
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const {
      userId,
      products,
      totalPrice,
    } = await request.json();

    await Order.create({
      userId,
      products,
      totalPrice,
    });
    return NextResponse.json(
      {

        success : true,
        message: "Order has been placed successfully"

      },
      { status: 201 }
    );
  } catch (error) {
    console.log("Error while creating product : ", error);

    return NextResponse.json(
      {
        success: false,
        message : error
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    await dbConnect();

    const {id} = await request.json()

    if (typeof id !== 'string') {
      return NextResponse.json({
        message: 'Invalid _id'
      },{status:400});
  }

    const product = await Order.findByIdAndDelete({_id:id});

    if (!product)
      return NextResponse.json(
        {
          message: "Product not found",
        },
        { status: 404 }
      );

    return NextResponse.json(
      {
        message: "Product deleted succefully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error while creating product : ", error);
  }
}
