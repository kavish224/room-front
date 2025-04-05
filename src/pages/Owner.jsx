import React from "react";
import Navbar from "../components/Navbar";

const mockOwners = [
  { id: 1, name: "Amit Verma", status: "Active", phone: "9876543210" },
  { id: 2, name: "Pooja Shah", status: "Inactive", phone: "9898989898" },
  { id: 3, name: "Ravi Patel", status: "Active", phone: "9123456789" },
];

const Owners = () => {
  return (
    <div className="bg-[#f8f9fa] min-h-screen text-[#2D3A45]">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">📊 Owners Dashboard</h1>

        <div className="bg-white shadow-md rounded-xl overflow-hidden">
          <table className="min-w-full table-auto text-left">
            <thead className="bg-[#FF6B6B] text-white">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Phone</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {mockOwners.map((owner) => (
                <tr key={owner.id}>
                  <td className="px-6 py-4 font-medium">{owner.name}</td>
                  <td className="px-6 py-4">{owner.phone}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        owner.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {owner.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          * This is sample data. Integrate backend to show real-time stats.
        </p>
      </div>
    </div>
  );
};

export default Owners;
