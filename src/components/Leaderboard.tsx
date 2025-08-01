import React from 'react';
import { Trophy, Medal, Crown, Star } from 'lucide-react';

const Leaderboard: React.FC = () => {
  const mockLeaderboard = [
    { name: "Sir Suds-a-Lot", rubs: 2847, status: "Legendary Survivor", personality: "Stoic warrior", achievement: "Most Enduring" },
    { name: "Bubblezilla", rubs: 2340, status: "RIP - Died Heroically", personality: "Drama queen", achievement: "Most Dramatic Death" },
    { name: "Captain Cleansington", rubs: 1998, status: "Critical Condition", personality: "Optimistic fighter", achievement: "Never Give Up Award" },
    { name: "Squeaky McSoapface", rubs: 1750, status: "Stable", personality: "Class clown", achievement: "Funniest Soap" },
    { name: "The Sudsy Avenger", rubs: 1432, status: "RIP - Melted Away", personality: "Mysterious hero", achievement: "Most Mysterious" },
    { name: "Foam Ranger", rubs: 1205, status: "Retired", personality: "Adventure seeker", achievement: "Most Adventurous" },
    { name: "Bubble Trouble", rubs: 987, status: "Young Rookie", personality: "Troublemaker", achievement: "Rising Star" },
    { name: "Scrub Commander", rubs: 756, status: "Fresh Recruit", personality: "Military precision", achievement: "Best Newcomer" }
  ];

  const getStatusColor = (status: string) => {
    if (status.includes('RIP')) return 'text-red-600 bg-red-50';
    if (status.includes('Critical')) return 'text-orange-600 bg-orange-50';
    if (status.includes('Legendary')) return 'text-purple-600 bg-purple-50';
    return 'text-green-600 bg-green-50';
  };

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0: return <Crown className="w-6 h-6 text-yellow-500" />;
      case 1: return <Trophy className="w-6 h-6 text-gray-400" />;
      case 2: return <Medal className="w-6 h-6 text-orange-500" />;
      default: return <Star className="w-6 h-6 text-blue-500" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-black text-gray-800 mb-4">🏆 Hall of Foam 🏆</h1>
        <p className="text-xl text-gray-600">Where soap legends are born and bubbles never die!</p>
        <div className="mt-6 flex justify-center space-x-4">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full font-bold">
            👑 This Week's Champions 👑
          </div>
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="mb-12">
        <div className="flex justify-center items-end space-x-8 mb-8">
          {/* Second Place */}
          <div className="text-center transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-gray-400 to-gray-600 rounded-3xl p-6 text-white mb-4 shadow-xl">
              <div className="text-4xl mb-2">🧼</div>
              <h3 className="text-lg font-bold">{mockLeaderboard[1].name}</h3>
              <p className="text-2xl font-black">{mockLeaderboard[1].rubs}</p>
              <p className="text-sm opacity-80">rubs</p>
            </div>
            <div className="text-6xl">🥈</div>
          </div>

          {/* First Place */}
          <div className="text-center transform hover:scale-105 transition-all duration-300 -mt-8">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-8 text-white mb-4 shadow-2xl border-4 border-yellow-300">
              <div className="text-6xl mb-3">👑</div>
              <h3 className="text-xl font-bold">{mockLeaderboard[0].name}</h3>
              <p className="text-3xl font-black">{mockLeaderboard[0].rubs}</p>
              <p className="text-sm opacity-80">rubs</p>
            </div>
            <div className="text-8xl animate-bounce">🏆</div>
          </div>

          {/* Third Place */}
          <div className="text-center transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl p-6 text-white mb-4 shadow-xl">
              <div className="text-4xl mb-2">🧼</div>
              <h3 className="text-lg font-bold">{mockLeaderboard[2].name}</h3>
              <p className="text-2xl font-black">{mockLeaderboard[2].rubs}</p>
              <p className="text-sm opacity-80">rubs</p>
            </div>
            <div className="text-6xl">🥉</div>
          </div>
        </div>
      </div>

      {/* Full Leaderboard */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-blue-200">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
          <h2 className="text-3xl font-black text-center">📊 Complete Soap Statistics 📊</h2>
        </div>
        
        <div className="p-6">
          {mockLeaderboard.map((soap, index) => (
            <div
              key={soap.name}
              className={`flex items-center justify-between p-6 rounded-2xl mb-4 transition-all duration-300 hover:shadow-lg ${
                index < 3
                  ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200'
                  : 'bg-gray-50 hover:bg-blue-50'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg">
                  {getRankIcon(index)}
                </div>
                <div className="text-2xl font-black text-gray-700">#{index + 1}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{soap.name}</h3>
                  <p className="text-sm text-gray-600">{soap.personality}</p>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(soap.status)}`}>
                    {soap.status}
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-3xl font-black text-blue-600">{soap.rubs.toLocaleString()}</div>
                <div className="text-sm text-gray-500">total rubs</div>
                <div className="text-xs text-purple-600 font-semibold mt-1">{soap.achievement}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fun Stats */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="bg-gradient-to-br from-pink-100 to-red-100 rounded-2xl p-6 text-center border-2 border-pink-200">
          <div className="text-4xl mb-3">💪</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Total Rubs This Week</h3>
          <p className="text-3xl font-black text-red-600">14,315</p>
        </div>
        
        <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-6 text-center border-2 border-green-200">
          <div className="text-4xl mb-3">⚰️</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Soaps Lost to Science</h3>
          <p className="text-3xl font-black text-blue-600">47</p>
        </div>
        
        <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 text-center border-2 border-purple-200">
          <div className="text-4xl mb-3">🎯</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Average Rub Endurance</h3>
          <p className="text-3xl font-black text-purple-600">1,547</p>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;