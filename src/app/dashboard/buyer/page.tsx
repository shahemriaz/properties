"use client";
import { useEffect, useState } from 'react';
import PropertyCard from '@/src/components/PropertyCard';
import { useSession } from 'next-auth/react';

interface Property {
  _id: string;
  title: string;
  location: string;
  price: number;
  image: string;
}

export default function BuyerDashboard() {
  const { data: session } = useSession();
  const [savedProperties, setSavedProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with real API call to fetch saved properties for the logged-in user
    async function fetchSaved() {
      setLoading(true);
      // Mock data for now
      setTimeout(() => {
        setSavedProperties([
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
        setLoading(false);
      }, 1000);
    }
    fetchSaved();
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-3xl p-8 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Welcome, Buyer!</h1>
        <p className="mb-4">Start searching for your dream property.</p>
        <a href="/properties" className="inline-block bg-blue-600 text-white py-2 px-4 rounded font-semibold hover:bg-blue-700 transition mb-6">Search Properties</a>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Saved Properties</h2>
          {loading ? (
            <div className="text-gray-500">Loading...</div>
          ) : savedProperties.length === 0 ? (
            <div className="text-gray-500">You have no saved properties yet.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {savedProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
        </div>
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-2">Recommended For You</h2>
          <div className="text-gray-500">(AI-powered property recommendations coming soon!)</div>
        </div>
      </div>
    </div>
  );
} 