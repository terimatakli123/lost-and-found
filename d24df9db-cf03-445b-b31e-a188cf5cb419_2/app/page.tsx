
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  const steps = [
    {
      icon: 'ri-upload-2-line',
      title: 'Upload',
      description: 'Take a photo of the found item and add location details'
    },
    {
      icon: 'ri-search-line',
      title: 'Search',
      description: 'Browse through reported items or post your lost item'
    },
    {
      icon: 'ri-hand-heart-line',
      title: 'Recover',
      description: 'Connect with finder and arrange safe return'
    }
  ];

  const features = [
    {
      icon: 'ri-camera-line',
      title: 'Photo Upload',
      description: 'High-quality image recognition'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Location Tagging',
      description: 'Precise GPS coordinates'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Secure Delivery',
      description: 'Trusted delivery partners'
    },
    {
      icon: 'ri-team-line',
      title: 'Community Trust',
      description: 'Verified user network'
    },
    {
      icon: 'ri-filter-line',
      title: 'Smart Filters',
      description: 'AI-powered matching'
    }
  ];

  const targetUsers = [
    {
      icon: 'ri-graduation-cap-line',
      title: 'Students',
      description: 'Lost textbooks, ID cards, and personal items on campus'
    },
    {
      icon: 'ri-bus-line',
      title: 'Commuters',
      description: 'Items left on public transport and at stations'
    },
    {
      icon: 'ri-heart-3-line',
      title: 'Pet Owners',
      description: 'Help reunite lost pets with their families'
    },
    {
      icon: 'ri-calendar-event-line',
      title: 'Event Organizers',
      description: 'Manage lost items at conferences and events'
    }
  ];

 const handleDownload = (platform: string) => {
  setShowDownloadModal(true);
  setTimeout(() => setShowDownloadModal(false), 2000);
};

  const handleReportItem = () => {
    setShowReportModal(true);
  };

  const handleSearchItem = () => {
    setShowSearchModal(true);
  };

  const closeModal = () => {
    setShowReportModal(false);
    setShowSearchModal(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Download Modal */}
      {showDownloadModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-6">
          <div className="bg-white p-6 rounded-2xl max-w-sm w-full text-center">
            <i className="ri-smartphone-line text-4xl text-black mb-4"></i>
            <h3 className="text-lg font-semibold mb-2">Coming Soon!</h3>
            <p className="text-gray-600 text-sm">Our mobile app is currently in development</p>
          </div>
        </div>
      )}

      {/* Report Item Modal */}
      {showReportModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-6">
          <div className="bg-white p-6 rounded-2xl max-w-sm w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold">Report Found Item</h3>
              <button onClick={closeModal} className="w-8 h-8 flex items-center justify-center">
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Item Type</label>
                <select className="w-full p-3 border border-gray-200 rounded-xl">
                  <option>Phone</option>
                  <option>Wallet</option>
                  <option>Keys</option>
                  <option>Bag</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea 
                  className="w-full p-3 border border-gray-200 rounded-xl h-20 resize-none"
                  placeholder="Describe the item you found..."
                  maxLength="500"
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Location Found</label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-gray-200 rounded-xl"
                  placeholder="Where did you find it?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Photo</label>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center">
                  <i className="ri-camera-line text-2xl text-gray-400 mb-2"></i>
                  <p className="text-sm text-gray-500">Tap to add photo</p>
                </div>
              </div>
              
              <button 
                type="button"
                onClick={() => {
                  closeModal();
                  setTimeout(() => {
                    setShowDownloadModal(true);
                    setTimeout(() => setShowDownloadModal(false), 2000);
                  }, 300);
                }}
                className="w-full bg-black text-white py-3 !rounded-button font-medium"
              >
                Submit Report
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Search Item Modal */}
      {showSearchModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-6">
          <div className="bg-white p-6 rounded-2xl max-w-sm w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold">Search Lost Items</h3>
              <button onClick={closeModal} className="w-8 h-8 flex items-center justify-center">
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <input 
                  type="text" 
                  className="w-full p-3 border border-gray-200 rounded-xl"
                  placeholder="What did you lose?"
                />
              </div>
              
              <div>
                <select className="w-full p-3 border border-gray-200 rounded-xl">
                  <option>All Categories</option>
                  <option>Electronics</option>
                  <option>Personal Items</option>
                  <option>Documents</option>
                  <option>Accessories</option>
                </select>
              </div>
              
              <div>
                <input 
                  type="text" 
                  className="w-full p-3 border border-gray-200 rounded-xl"
                  placeholder="Location where lost"
                />
              </div>
              
              <button 
                type="button"
                onClick={() => {
                  closeModal();
                  setTimeout(() => {
                    setShowDownloadModal(true);
                    setTimeout(() => setShowDownloadModal(false), 2000);
                  }, 300);
                }}
                className="w-full bg-black text-white py-3 !rounded-button font-medium"
              >
                Search Items
              </button>
              
              <div className="text-center pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-600 mb-3">Or post your lost item</p>
                <button 
                  className="w-full border-2 border-black text-black py-3 !rounded-button font-medium"
                  onClick={() => {
                    closeModal();
                    setTimeout(() => setShowReportModal(true), 300);
                  }}
                >
                  Post Lost Item
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="px-6 pt-16 pb-20 text-center bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <img 
              src="https://readdy.ai/api/search-image?query=icon%2C%203D%20minimalist%20lost%20and%20found%20box%2C%20clean%20white%20background%2C%20soft%20shadows%2C%20modern%20design%2C%20centered%20composition%2C%20simple%20geometric%20shapes%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame%2C%20professional%20app%20icon%20style&width=80&height=80&seq=hero-icon&orientation=squarish"
              alt="Lost & Found"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-3 font-pacifico">
            Lost & Found
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Lost something? We help you find it.
          </p>
          
          <div className="space-y-3 mb-12">
            <button 
              onClick={() => handleDownload('ios')}
              className="w-full bg-black text-white py-4 px-6 !rounded-button font-medium transition-all duration-300 hover:bg-gray-800"
            >
              <i className="ri-apple-line mr-2"></i>
              Download for iOS
            </button>
            <button 
              onClick={() => handleDownload('android')}
              className="w-full bg-gray-900 text-white py-4 px-6 !rounded-button font-medium transition-all duration-300 hover:bg-gray-700"
            >
              <i className="ri-google-play-line mr-2"></i>
              Download for Android
            </button>
          </div>
          
          <div className="w-full h-48 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://readdy.ai/api/search-image?query=modern%20mobile%20app%20interface%20showing%20lost%20and%20found%20items%20grid%2C%20clean%20UI%20design%2C%20smartphone%20mockup%2C%20realistic%20photography%2C%20soft%20lighting%2C%20minimalist%20design%2C%20professional%20app%20screenshot%2C%20items%20like%20keys%20wallet%20phone%2C%20user-friendly%20interface%2C%20contemporary%20mobile%20design&width=300&height=192&seq=hero-mockup&orientation=landscape"
              alt="App Interface"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-sm mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            How It Works
          </h2>
          
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                  activeStep === index 
                    ? 'border-black bg-black text-white shadow-lg' 
                    : 'border-gray-100 bg-gray-50 hover:border-gray-200'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-center mb-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                    activeStep === index ? 'bg-white text-black' : 'bg-black text-white'
                  }`}>
                    <i className={`${step.icon} text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      {index + 1}. {step.title}
                    </h3>
                    <p className={`text-sm ${
                      activeStep === index ? 'text-gray-200' : 'text-gray-600'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-sm mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Features
          </h2>
          
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4 mx-auto">
                  <i className={`${feature.icon} text-white text-xl`}></i>
                </div>
                <h3 className="font-semibold text-gray-900 text-center mb-2 text-sm">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-sm mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Who We Help
          </h2>
          
          <div className="space-y-4">
            {targetUsers.map((user, index) => (
              <div key={index} className="flex items-center p-5 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className={`${user.icon} text-white text-xl`}></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {user.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {user.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="px-6 py-16 bg-gray-900 text-white">
        <div className="max-w-sm mx-auto text-center">
          <div className="w-full h-40 rounded-2xl overflow-hidden mb-8">
            <img 
              src="https://readdy.ai/api/search-image?query=professional%20delivery%20person%20with%20package%2C%20modern%20urban%20setting%2C%20trustworthy%20appearance%2C%20clean%20background%2C%20realistic%20photography%2C%20professional%20service%2C%20safe%20delivery%20concept%2C%20contemporary%20style%2C%20person%20in%20uniform%20holding%20package&width=300&height=160&seq=delivery-visual&orientation=landscape"
              alt="Secure Delivery"
              className="w-full h-full object-cover object-top"
            />
          </div>
          
          <h2 className="text-2xl font-bold mb-4">
            Can't Meet in Person?
          </h2>
          
          <p className="text-gray-300 mb-8 leading-relaxed">
            Our trusted delivery partners ensure your items reach you safely. Track your delivery in real-time and pay only when you receive your item.
          </p>
          
          <div className="bg-gray-800 p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-400">Delivery Fee</span>
              <span className="font-semibold">$5-15</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-400">Insurance</span>
              <span className="font-semibold">Up to $500</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Delivery Time</span>
              <span className="font-semibold">Same Day</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-16 bg-black text-white text-center">
        <div className="max-w-sm mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          
          <p className="text-gray-300 mb-8 leading-relaxed">
            Join thousands of people who have successfully recovered their lost items through our platform.
          </p>
          
          <div className="space-y-3 mb-8">
            <button 
              onClick={handleReportItem}
              className="w-full bg-white text-black py-4 px-6 !rounded-button font-medium transition-all duration-300 hover:bg-gray-100"
            >
              Report a Found Item
            </button>
            <button 
              onClick={handleSearchItem}
              className="w-full border-2 border-white text-white py-4 px-6 !rounded-button font-medium transition-all duration-300 hover:bg-white hover:text-black"
            >
              Search for Lost Item
            </button>
          </div>
          
          <p className="text-sm text-gray-400">
            No registration required to browse found items
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-50">
        <div className="max-w-sm mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2 font-pacifico">
              Lost & Found
            </h3>
            <p className="text-sm text-gray-600">
              Connecting communities to recover lost items
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-sm">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/help" className="hover:text-black transition-colors">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-black transition-colors">Contact Us</Link></li>
                <li><Link href="/faq" className="hover:text-black transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-sm">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-black transition-colors">Terms of Service</Link></li>
                <li><Link href="/safety" className="hover:text-black transition-colors">Safety Guidelines</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6 text-center">
            <div className="flex justify-center space-x-6 mb-4">
              <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                <i className="ri-twitter-x-line"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                <i className="ri-facebook-line"></i>
              </a>
            </div>
            <p className="text-xs text-gray-500">
              © 2024 Lost & Found. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
