import { useState } from 'react';

// Icons from lucide-react, imported as inline SVG for simplicity
const MapPin = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const Search = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

// Mock data for elegant listings
const mockListings = [
    {
        id: 1,
        title: "Hillside Manor",
        price: "€1.500.000",
        location: "Santorini, Greece",
        image: "https://images.unsplash.com/photo-1549517045-bc93de075e6b?q=80&w=2787&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Riverside Loft",
        price: "€750.000",
        location: "Amsterdam, Netherlands",
        image: "https://images.unsplash.com/photo-1588661601053-124b89e7456d?q=80&w=2940&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Modern Oasis",
        price: "€2.300.000",
        location: "Cannes, France",
        image: "https://images.unsplash.com/photo-1628172901309-8d76e4c2598c?q=80&w=2832&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Downtown Penthouse",
        price: "€1.900.000",
        location: "London, UK",
        image: "https://images.unsplash.com/photo-1598463162608-013143c7b64f?q=80&w=2940&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "Coastal Retreat",
        price: "€1.250.000",
        location: "Lisbon, Portugal",
        image: "https://images.unsplash.com/photo-1507705193563-d14f48483f12?q=80&w=2874&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "Mountain Lodge",
        price: "€980.000",
        location: "Verbier, Switzerland",
        image: "https://images.unsplash.com/photo-1628744577826-eb528f8f2b7d?q=80&w=2940&auto=format&fit=crop"
    }
];

const App = () => {
    const [listings, setListings] = useState(mockListings);

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 font-serif antialiased">
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Lato:wght@400;700&display=swap');
                    .font-serif { font-family: 'Merriweather', serif; }
                    .font-sans { font-family: 'Lato', sans-serif; }
                `}
            </style>
            
            {/* Header / Navbar */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
                <nav className="container mx-auto p-6 flex justify-between items-center">
                    <div className="text-3xl font-bold text-gray-900 font-serif">
                        Premier Estates
                    </div>
                    <div className="hidden md:flex space-x-8 text-lg font-sans">
                        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Buy</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Sell</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
                    </div>
                    <div className="md:hidden">
                        {/* Mobile menu button here */}
                    </div>
                </nav>
            </header>

            <main className="pt-24">
                {/* Hero Section */}
                <div className="relative h-screen flex items-center justify-center text-white text-center">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1444201736142-995c65768393?q=80&w=2940&auto=format&fit=crop')" }}>
                        <div className="absolute inset-0 bg-black opacity-40"></div>
                    </div>
                    <div className="relative z-10 p-6 max-w-4xl mx-auto">
                        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-4">
                            Refined Living
                        </h1>
                        <p className="text-xl md:text-2xl font-sans mb-8">
                            Discover exquisite properties that define elegance and sophistication.
                        </p>
                        {/* Search Bar */}
                        <div className="bg-white rounded-lg shadow-xl p-3 md:p-4 flex items-center max-w-xl mx-auto">
                            <Search className="text-gray-500 ml-2" />
                            <input
                                type="text"
                                placeholder="Search by city, address, or keyword"
                                className="w-full bg-transparent outline-none text-gray-800 px-4 placeholder-gray-400 font-sans"
                            />
                            <button className="bg-gray-800 text-white font-sans py-2 px-6 rounded-lg font-semibold hover:bg-gray-900 transition-colors">
                                Search
                            </button>
                        </div>
                    </div>
                </div>

                {/* Featured Listings Section */}
                <section className="container mx-auto py-16 px-4">
                    <h2 className="text-4xl font-serif font-bold text-center mb-12 text-gray-900">
                        Our Signature Collection
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {listings.map(listing => (
                            <div key={listing.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-transform hover:scale-105 duration-300">
                                <img 
                                    src={listing.image} 
                                    alt={listing.title} 
                                    className="w-full h-64 object-cover" 
                                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/E5E7EB/4B5563?text=Image+Unavailable'; }} 
                                />
                                <div className="p-6">
                                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">{listing.price}</h3>
                                    <h4 className="text-xl font-sans font-semibold mb-1">{listing.title}</h4>
                                    <p className="text-gray-600 flex items-center font-sans">
                                        <MapPin className="w-5 h-5 mr-2" />
                                        {listing.location}
                                    </p>
                                    <button className="mt-6 w-full border border-gray-300 text-gray-800 font-sans font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                                        Discover More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white p-8 mt-16">
                <div className="container mx-auto text-center font-sans">
                    <p>&copy; 2024 Premier Estates. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default App;
