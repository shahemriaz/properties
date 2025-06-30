"use client";
import { useEffect, useState } from 'react';
import PropertyCard from '../../components/PropertyCard';
import { useSession } from 'next-auth/react';

interface Property {
  _id: string;
  title: string;
  location: string;
  price: number;
  image: string;
}

interface BookingRequest {
  _id: string;
  propertyTitle: string;
  buyerName: string;
  status: string;
}

export default function AgentDashboard() {
  const { data: session } = useSession();
  const [listings, setListings] = useState<Property[]>([]);
  const [bookings, setBookings] = useState<BookingRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with real API calls
    setTimeout(() => {
      setListings([
        {
          _id: '1',
          title: 'Luxury Villa in Bahria Town',
          location: 'Bahria Town, Lahore',
          price: 25000000,
          image: '/public/images/landing.jpg',
        },
        {
          _id: '2',
          title: 'Modern Apartment in DHA',
          location: 'DHA, Karachi',
          price: 12000000,
          image: '/public/images/alids.png',
        },
      ]);
      setBookings([
        {
          _id: 'b1',
          propertyTitle: 'Luxury Villa in Bahria Town',
          buyerName: 'Ali Raza',
          status: 'Pending',
        },
        {
          _id: 'b2',
          propertyTitle: 'Modern Apartment in DHA',
          buyerName: 'Sara Khan',
          status: 'Confirmed',
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-4xl p-8 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Welcome, Agent!</h1>
        <p className="mb-4">Manage your property listings and respond to booking requests.</p>
        <a href="/properties/manage" className="inline-block bg-blue-600 text-white py-2 px-4 rounded font-semibold hover:bg-blue-700 transition mb-6">Add New Listing</a>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Your Listings</h2>
          {loading ? (
            <div className="text-gray-500">Loading...</div>
          ) : listings.length === 0 ? (
            <div className="text-gray-500">You have no listings yet.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {listings.map((property) => (
                <div key={property._id} className="relative">
                  <PropertyCard property={property} />
                  <div className="absolute top-2 right-2 flex gap-2">
                    <button className="bg-yellow-400 text-white px-2 py-1 rounded text-xs font-semibold hover:bg-yellow-500">Edit</button>
                    <button className="bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold hover:bg-red-700">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-2">Booking Requests</h2>
          {loading ? (
            <div className="text-gray-500">Loading...</div>
          ) : bookings.length === 0 ? (
            <div className="text-gray-500">No booking requests yet.</div>
          ) : (
            <div className="space-y-4">
              {bookings.map((booking) => (
                <div key={booking._id} className="p-4 border rounded flex justify-between items-center">
                  <div>
                    <div className="font-semibold">{booking.propertyTitle}</div>
                    <div className="text-gray-600 text-sm">Buyer: {booking.buyerName}</div>
                  </div>
                  <div className="text-sm font-semibold px-3 py-1 rounded bg-gray-100">{booking.status}</div>
                  <button className="ml-4 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">View</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 