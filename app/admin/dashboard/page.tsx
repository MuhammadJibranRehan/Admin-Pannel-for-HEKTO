"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import ProtectedRoute from "@/app/components/ProtectedRoute";

interface Order {
  _id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
  total: number;
  discount: number;
  orderDate: string;
  status: string | null;
  cartItems: { productName: string; image: string }[];
}

export default function AdminDashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    client
      .fetch(
        `*[_type == "order"]{
          _id,
          firstName,
          lastName,
          phone,
          email,
          address,
          city,
          zipCode,
          total,
          discount,
          orderDate,
          status,
          cartItems[]->{
            productName,
            image
          }
        }`
      )
      .then((data) => setOrders(data))
      .catch((error) => console.error("Error fetching orders:", error));
  }, []);

  const filteredOrders =
    filter === "All"
      ? orders
      : orders.filter((order) => order.status === filter);

  const toggleOrderDetails = (orderId: string) => {
    setSelectedOrderId((prev) => (prev === orderId ? null : orderId));
  };

  return (
    <ProtectedRoute>
      <div className="flex flex-col h-screen bg-gray-50 text-gray-900">
        {/* Navbar */}
        <nav className="bg-red-600 text-white p-4 shadow-lg flex justify-between items-center">
          <h2 className="text-2xl font-bold">Admin Dashboard</h2>
          <div className="flex space-x-2">
            {["All", "pending", "dispatch", "success"].map((status) => (
              <button
                key={status}
                className={`px-4 py-2 rounded-lg transition-all text-sm md:text-base font-semibold shadow-md ${
                  filter === status
                    ? "bg-white text-red-600"
                    : "bg-red-700 hover:bg-red-500"
                }`}
                onClick={() => setFilter(status)}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </nav>

        {/* Orders Table */}
        <div className="flex-1 p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Orders</h2>
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="w-full text-sm md:text-base border border-gray-200">
              <thead className="bg-gray-100 text-gray-700">
                <tr className="text-left">
                  <th className="p-3">ID</th>
                  <th className="p-3">Customer</th>
                  <th className="p-3">Address</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Total</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <React.Fragment key={order._id}>
                    <tr
                      className="border-b hover:bg-gray-100 transition-all cursor-pointer"
                      onClick={() => toggleOrderDetails(order._id)}
                    >
                      <td className="p-3">{order._id}</td>
                      <td className="p-3">
                        {order.firstName} {order.lastName}
                      </td>
                      <td className="p-3">{order.address}</td>
                      <td className="p-3">
                        {new Date(order.orderDate).toLocaleDateString()}
                      </td>
                      <td className="p-3 font-semibold">${order.total}</td>
                      <td className="p-3">
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${
                            order.status === "pending"
                              ? "bg-yellow-200 text-yellow-700"
                              : order.status === "dispatch"
                                ? "bg-blue-200 text-blue-700"
                                : "bg-green-200 text-green-700"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="p-3">
                        <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition">
                          Delete
                        </button>
                      </td>
                    </tr>
                    {selectedOrderId === order._id && (
                      <tr>
                        <td colSpan={7} className="bg-gray-50 p-4">
                          <h3 className="font-bold text-lg">Order Details</h3>
                          <p>
                            <strong>Phone:</strong> {order.phone}
                          </p>
                          <p>
                            <strong>Email:</strong> {order.email}
                          </p>
                          <p>
                            <strong>City:</strong> {order.city}
                          </p>
                          <ul className="mt-2 space-y-1">
                            {order.cartItems.map((item, index) => (
                              <li
                                key={`${order._id}-${index}`}
                                className="flex items-center gap-2"
                              >
                                {item.productName}
                                {item.image && (
                                  <Image
                                    src={urlFor(item.image).url()}
                                    width={40}
                                    height={40}
                                    alt={item.productName}
                                    className="rounded"
                                  />
                                )}
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
