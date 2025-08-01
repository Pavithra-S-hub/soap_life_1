import React from 'react';
import { Calendar, Heart, Skull } from 'lucide-react';

const SoapGraveyard: React.FC = () => {
  const fallenSoaps = [
    {
      name: "Bubblezilla the Magnificent",
      totalRubs: 2340,
      birthDate: "2024-12-15",
      deathDate: "2025-01-08",
      causeOfDeath: "Excessive dramatic foam production",
      eulogy: "Here lies Bubblezilla, who lived life as dramatically as they cleaned. They created the most spectacular foam shows and never let a single dirt particle escape their wrath.",
      personality: "Drama Queen Supreme",
      achievement: "Most Theatrical Death"
    },
    {
      name: "The Sudsy Avenger",
      totalRubs: 1432,
      birthDate: "2024-11-20",
      deathDate: "2024-12-28",
      causeOfDeath: "Heroic sacrifice during a particularly tough stain battle",
      eulogy: "The Sudsy Avenger fought the good fight against grime and evil. Their mysterious ways and unwavering dedication to cleanliness made them a legend among bathroom heroes.",
      personality: "Mysterious Hero",
      achievement: "Most Heroic Sacrifice"
    },
    {
      name: "Sir Slippington III",
      totalRubs: 987,
      birthDate: "2024-10-05",
      deathDate: "2024-11-12",
      causeOfDeath: "Fell off the counter one too many times",
      eulogy: "Sir Slippington III was nobility in soap form. Though clumsy, their heart was pure and their cleaning power unmatched. They made floors slippery and hearts happy.",
      personality: "Clumsy Aristocrat",
      achievement: "Most Unintentionally Hilarious"
    },
    {
      name: "Foam Fury",
      totalRubs: 1876,
      birthDate: "2024-09-12",
      deathDate: "2024-12-01",
      causeOfDeath: "Overexertion during Black Friday cleaning spree",
      eulogy: "Foam Fury approached every wash with the intensity of a warrior. Their aggressive cleaning style left no dirt unturned and no surface unclean.",
      personality: "Aggressive Cleaner",
      achievement: "Most Intense Cleaning Style"
    },
    {
      name: "Giggles McBubble",
      totalRubs: 756,
      birthDate: "2024-08-30",
      deathDate: "2024-10-15",
      causeOfDeath: "Dissolved from excessive laughter-induced vibrations",
      eulogy: "Giggles brought joy to every bathroom visit. Their infectious laughter (somehow emanating from soap) made even the most mundane hygiene routines delightful.",
      personality: "Eternal Optimist",
      achievement: "Most Joyful Presence"
    }
  ];

  const generateTombstone = (soap: any, index: number) => {
    const tombstoneStyles = [
      "from-gray-700 to-gray-900",
      "from-stone-700 to-stone-900", 
      "from-slate-700 to-slate-900",
      "from-gray-600 to-gray-800"
    ];

    return (
      <div key={soap.name} className="transform hover:scale-105 transition-all duration-500">
        <div className={`bg-gradient-to-b ${tombstoneStyles[index % tombstoneStyles.length]} rounded-t-full rounded-b-lg p-6 text-white shadow-2xl border-4 border-gray-500 min-h-96`}>
          {/* Tombstone Top */}
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">⚰️</div>
            <div className="w-16 h-1 bg-white mx-auto mb-3 opacity-60"></div>
          </div>

          {/* Name */}
          <h3 className="text-xl font-black text-center mb-3 text-yellow-300">{soap.name}</h3>
          
          {/* Dates */}
          <div className="text-center mb-4 text-sm opacity-80">
            <div className="flex items-center justify-center space-x-2 mb-1">
              <Calendar className="w-4 h-4" />
              <span>{soap.birthDate}</span>
            </div>
            <div className="text-xs">to</div>
            <div className="flex items-center justify-center space-x-2">
              <Skull className="w-4 h-4" />
              <span>{soap.deathDate}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="text-center mb-4">
            <div className="bg-black/30 rounded-lg p-3 mb-2">
              <div className="text-2xl font-bold text-blue-300">{soap.totalRubs.toLocaleString()}</div>
              <div className="text-xs opacity-70">Total Rubs</div>
            </div>
            <div className="text-xs text-purple-300 font-semibold">{soap.achievement}</div>
          </div>

          {/* Cause of Death */}
          <div className="text-center">
            <div className="text-xs opacity-60 mb-1">Cause of Death:</div>
            <div className="text-sm italic text-red-300">{soap.causeOfDeath}</div>
          </div>
        </div>

        {/* Base of tombstone */}
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 h-8 rounded-b-lg border-l-4 border-r-4 border-b-4 border-gray-500"></div>
        
        {/* Ground */}
        <div className="bg-green-800 h-2 rounded-b-sm"></div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-black text-gray-800 mb-4">⚰️ The Soap Graveyard ⚰️</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Where heroes of hygiene rest in eternal cleanliness. Each soap gave their life in service of sudsy science.
        </p>
        <div className="mt-6 bg-gradient-to-r from-gray-700 to-black text-white px-8 py-3 rounded-full inline-block">
          🕊️ In Memory of Our Fallen Suds 🕊️
        </div>
      </div>

      {/* Cemetery Stats */}
      <div className="grid md:grid-cols-4 gap-4 mb-12">
        <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-2xl p-6 text-center border-2 border-red-300">
          <div className="text-3xl mb-2">💀</div>
          <h3 className="text-lg font-bold text-gray-800">Total Departed</h3>
          <p className="text-2xl font-black text-red-600">{fallenSoaps.length}</p>
        </div>
        
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 text-center border-2 border-blue-300">
          <div className="text-3xl mb-2">🏃‍♀️</div>
          <h3 className="text-lg font-bold text-gray-800">Total Rubs Served</h3>
          <p className="text-2xl font-black text-blue-600">{fallenSoaps.reduce((acc, soap) => acc + soap.totalRubs, 0).toLocaleString()}</p>
        </div>
        
        <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-6 text-center border-2 border-purple-300">
          <div className="text-3xl mb-2">⭐</div>
          <h3 className="text-lg font-bold text-gray-800">Average Lifespan</h3>
          <p className="text-2xl font-black text-purple-600">{Math.round(fallenSoaps.reduce((acc, soap) => acc + soap.totalRubs, 0) / fallenSoaps.length).toLocaleString()}</p>
        </div>
        
        <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-6 text-center border-2 border-green-300">
          <div className="text-3xl mb-2">🏆</div>
          <h3 className="text-lg font-bold text-gray-800">Longest Survivor</h3>
          <p className="text-2xl font-black text-green-600">{Math.max(...fallenSoaps.map(s => s.totalRubs)).toLocaleString()}</p>
        </div>
      </div>

      {/* Tombstones */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {fallenSoaps.map((soap, index) => generateTombstone(soap, index))}
      </div>

      {/* Eulogy Wall */}
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 text-white">
        <h2 className="text-3xl font-black text-center mb-8 text-yellow-400">📜 Wall of Eulogies 📜</h2>
        <div className="space-y-6">
          {fallenSoaps.map((soap, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🕯️</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-yellow-300 mb-2">{soap.name}</h3>
                  <p className="text-gray-300 leading-relaxed italic mb-3">"{soap.eulogy}"</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-blue-300">{soap.personality}</span>
                    <span className="text-purple-300">{soap.totalRubs} rubs served</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Memorial Message */}
      <div className="text-center mt-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 border-4 border-purple-200">
        <div className="text-6xl mb-4">🕊️</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">In Their Memory</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          These brave bars of soap gave their molecular structure in service of scientific curiosity and cleanliness. 
          Though they may have dissolved, their legacy of sudsy dedication lives on forever in our hearts and data sheets.
        </p>
        <div className="mt-6 text-purple-700 font-semibold">
          🎵 *Amazing Grace plays softly in the background* 🎵
        </div>
      </div>
    </div>
  );
};

export default SoapGraveyard;