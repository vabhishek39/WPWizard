export const properties = [
  {
    id: '1',
    title: 'Modern Villa with Ocean View',
    location: 'Malibu, California',
    price: 8500000,
    type: 'Villa',
    beds: 5,
    baths: 6,
    sqft: 7200,
    image: 'https://picsum.photos/seed/villa1/800/600',
    featured: true,
    description: 'Experience unparalleled luxury in this stunning modern villa featuring panoramic ocean views, a zero-edge infinity pool, and state-of-the-art smart home technology. The open-concept living space seamlessly blends indoor and outdoor living.',
    features: ['Infinity Pool', 'Smart Home', 'Wine Cellar', 'Home Theater', 'Private Beach Access', 'Chef\'s Kitchen']
  },
  {
    id: '2',
    title: 'Luxury Penthouse Suite',
    location: 'Manhattan, New York',
    price: 12400000,
    type: 'Penthouse',
    beds: 4,
    baths: 4.5,
    sqft: 5100,
    image: 'https://picsum.photos/seed/penthouse1/800/600',
    featured: true,
    description: 'Elevate your lifestyle in this breathtaking penthouse overlooking Central Park. Featuring floor-to-ceiling windows, a private rooftop terrace, and custom designer finishes throughout.',
    features: ['Rooftop Terrace', 'Concierge Service', 'Private Elevator', 'Fitness Center', 'Spa', 'Valet Parking']
  },
  {
    id: '3',
    title: 'Contemporary Estate',
    location: 'Beverly Hills, California',
    price: 15900000,
    type: 'Estate',
    beds: 7,
    baths: 9,
    sqft: 12500,
    image: 'https://picsum.photos/seed/estate1/800/600',
    featured: true,
    description: 'A masterpiece of contemporary architecture, this sprawling estate offers ultimate privacy and luxury. Includes a detached guest house, tennis court, and a resort-style pool area.',
    features: ['Tennis Court', 'Guest House', 'Resort Pool', 'Gated Entry', 'Motor Court', 'Home Gym']
  },
  {
    id: '4',
    title: 'Minimalist Desert Home',
    location: 'Scottsdale, Arizona',
    price: 4200000,
    type: 'House',
    beds: 4,
    baths: 4,
    sqft: 4800,
    image: 'https://picsum.photos/seed/desert1/800/600',
    featured: false,
    description: 'Seamlessly integrated into the desert landscape, this minimalist home features expansive glass walls, natural stone finishes, and spectacular sunset views.',
    features: ['Desert Views', 'Outdoor Kitchen', 'Fire Pit', 'Solar Panels', 'Open Floor Plan']
  },
  {
    id: '5',
    title: 'Historic Townhouse',
    location: 'London, UK',
    price: 6800000,
    type: 'Townhouse',
    beds: 5,
    baths: 4,
    sqft: 3500,
    image: 'https://picsum.photos/seed/townhouse1/800/600',
    featured: false,
    description: 'A beautifully restored historic townhouse in the heart of Mayfair. Combines classic architectural details with modern luxury amenities.',
    features: ['Original Fireplaces', 'Private Garden', 'Wine Vault', 'Library', 'High Ceilings']
  },
  {
    id: '6',
    title: 'Ski-In/Ski-Out Chalet',
    location: 'Aspen, Colorado',
    price: 9500000,
    type: 'Chalet',
    beds: 6,
    baths: 7,
    sqft: 8000,
    image: 'https://picsum.photos/seed/chalet1/800/600',
    featured: false,
    description: 'The ultimate winter retreat. This luxurious chalet offers direct slope access, a massive stone fireplace, and a heated outdoor spa.',
    features: ['Ski Access', 'Heated Driveway', 'Outdoor Spa', 'Vaulted Ceilings', 'Mudroom']
  }
];

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
};
