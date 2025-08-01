import React, { useState } from 'react';
import Header from './components/Header';
import SoapTracker from './components/SoapTracker';
import Leaderboard from './components/Leaderboard';
import SoapGraveyard from './components/SoapGraveyard';
import Studies from './components/Studies';
import FloatingBubbles from './components/FloatingBubbles';

function App() {
  const [activeTab, setActiveTab] = useState('tracker');

  const renderContent = () => {
    switch (activeTab) {
      case 'tracker':
        return <SoapTracker />;
      case 'leaderboard':
        return <Leaderboard />;
      case 'graveyard':
        return <SoapGraveyard />;
      case 'studies':
        return <Studies />;
      default:
        return <SoapTracker />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <FloatingBubbles />
      <Header />
      
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b-4 border-blue-200 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center space-x-1 py-4">
            {[
              { id: 'tracker', label: '🧼 Soap Tracker', emoji: '🧼' },
              { id: 'leaderboard', label: '🏆 Leaderboard', emoji: '🏆' },
              { id: 'graveyard', label: '⚰️ Graveyard', emoji: '⚰️' },
              { id: 'studies', label: '🔬 Studies', emoji: '🔬' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border-2 border-blue-200'
                }`}
              >
                <span className="text-2xl mr-2">{tab.emoji}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-8 mt-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl font-bold mb-2">🧼 SoapLife: Where Every Rub Counts! 🧼</p>
          <p className="text-blue-200">Celebrating the gloriously ridiculous world of soap science since 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;