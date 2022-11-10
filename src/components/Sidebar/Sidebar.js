import React from 'react'
import { useSelector } from 'react-redux'
import Cart from '../Cart/Cart'

export default function Sidebar() {
    const { totalPrice, totalQty } = useSelector((state) => state.carts)
    return (
        <div
            class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4"
        >
            <div
                class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
            >
                <Cart/>

                <div
                    class="flex justify-center items-center text-center"
                >
                    <div class="text-xl font-semibold">
                        <p>Total Item</p>
                        <p class="text-5xl">{totalQty}</p>
                    </div>
                </div>
            </div>
            <div
                class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
            >
                <div
                    class="flex justify-center items-center text-center"
                >
                    <div class="text-xl font-semibold">
                        <p>Total Price</p>
                        <p class="text-5xl">৳{totalPrice}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
