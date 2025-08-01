import React, { useState, useEffect } from 'react';
import { Heart, Zap, Sparkles, Skull, Plus, X } from 'lucide-react';

interface SoapDetails {
  weight: number;
  brand: string;
  type: string;
  hardness: 'soft' | 'medium' | 'hard';
  usage: 'light' | 'normal' | 'heavy';
  waterTemp: 'cold' | 'warm' | 'hot';
  userType: 'gentle' | 'normal' | 'aggressive';
}

interface Soap {
  id: string;
  name: string;
  personality: string;
  zodiac: string;
  details: SoapDetails;
  breakPoint: number;
  currentRubs: number;
  maxRubs: number;
  birthDate: Date;
  isAlive: boolean;
}

const SoapTracker: React.FC = () => {
  const [soaps, setSoaps] = useState<Soap[]>([]);
  const [activeSoap, setActiveSoap] = useState<Soap | null>(null);
  const [rubInput, setRubInput] = useState('');
  const [showEulogy, setShowEulogy] = useState(false);
  const [showSoapForm, setShowSoapForm] = useState(false);
  const [soapDetails, setSoapDetails] = useState<SoapDetails>({
    weight: 100,
    brand: '',
    type: 'bar',
    hardness: 'medium',
    usage: 'normal',
    waterTemp: 'warm',
    userType: 'normal'
  });

  const soapNamePrefixes = [
    "Sir", "Captain", "Professor", "Doctor", "Lord", "Lady", "Princess", "Duke",
    "Admiral", "Commander", "Baron", "Count", "Master", "Chief"
  ];

  const soapNameRoots = [
    "Suds", "Bubble", "Foam", "Squeaky", "Slippery", "Sparkle", "Gleam", "Shine",
    "Scrub", "Wash", "Clean", "Fresh", "Minty", "Lavender", "Rose", "Citrus"
  ];

  const soapNameSuffixes = [
    "ington", "worth", "son", "ley", "ton", "field", "ville", "berg",
    "stein", "man", "face", "bottom", "top", "side", "zilla", "tron"
  ];

  const personalities = [
    "Bubbly and optimistic", "Stoic and dependable", "Dramatic and attention-seeking",
    "Mysterious and elusive", "Cheerful and energetic", "Grumpy but effective",
    "Adventurous and bold", "Gentle and caring", "Fierce and determined", "Quirky and unpredictable"
  ];

  const zodiacs = [
    "Aquarius ♒ (loves water naturally)", "Taurus ♉ (stubborn against stains)", 
    "Gemini ♊ (two-faced cleaning power)", "Cancer ♋ (sensitive to temperature)",
    "Leo ♌ (dramatic foam displays)", "Virgo ♍ (perfectionist cleaner)",
    "Libra ♎ (balanced pH levels)", "Scorpio ♏ (intense cleaning action)",
    "Sagittarius ♐ (adventurous scents)", "Capricorn ♑ (long-lasting endurance)",
    "Pisces ♓ (flows like water)", "Aries ♈ (aggressive against dirt)"
  ];

  const generateSoapName = () => {
    const prefix = soapNamePrefixes[Math.floor(Math.random() * soapNamePrefixes.length)];
    const root = soapNameRoots[Math.floor(Math.random() * soapNameRoots.length)];
    const suffix = soapNameSuffixes[Math.floor(Math.random() * soapNameSuffixes.length)];
    return `${prefix} ${root}${suffix}`;
  };

  const calculateMaxRubs = (details: SoapDetails): number => {
    let baseRubs = details.weight * 15; // Base: 15 rubs per gram

    // Hardness factor
    const hardnessMultiplier = {
      'soft': 0.7,
      'medium': 1.0,
      'hard': 1.4
    };
    baseRubs *= hardnessMultiplier[details.hardness];

    // Usage intensity factor
    const usageMultiplier = {
      'light': 1.3,
      'normal': 1.0,
      'heavy': 0.6
    };
    baseRubs *= usageMultiplier[details.usage];

    // Water temperature factor
    const tempMultiplier = {
      'cold': 1.2,
      'warm': 1.0,
      'hot': 0.8
    };
    baseRubs *= tempMultiplier[details.waterTemp];

    // User type factor
    const userMultiplier = {
      'gentle': 1.4,
      'normal': 1.0,
      'aggressive': 0.7
    };
    baseRubs *= userMultiplier[details.userType];

    return Math.round(baseRubs);
  };

  const createNewSoap = () => {
    const maxRubs = calculateMaxRubs(soapDetails);
    const newSoap: Soap = {
      id: Date.now().toString(),
      name: generateSoapName(),
      personality: personalities[Math.floor(Math.random() * personalities.length)],
      zodiac: zodiacs[Math.floor(Math.random() * zodiacs.length)],
      details: { ...soapDetails },
      breakPoint: Math.round(maxRubs * 0.15), // Breaks at 15% of max rubs
      currentRubs: 0,
      maxRubs: maxRubs,
      birthDate: new Date(),
      isAlive: true
    };
    
    setSoaps(prev => [...prev, newSoap]);
    setActiveSoap(newSoap);
    setShowSoapForm(false);
    
    // Reset form
    setSoapDetails({
      weight: 100,
      brand: '',
      type: 'bar',
      hardness: 'medium',
      usage: 'normal',
      waterTemp: 'warm',
      userType: 'normal'
    });
  };

  const calculateSoapHealth = (soap: Soap) => {
    const healthPercentage = Math.max(0, Math.round(((soap.maxRubs - soap.currentRubs) / soap.maxRubs) * 100));
    const isAlive = soap.currentRubs < (soap.maxRubs - soap.breakPoint);
    return {
      healthPercentage,
      isAlive,
      rubsRemaining: Math.max(0, soap.maxRubs - soap.currentRubs)
    };
  };

  const getMoodColor = (healthPercentage: number) => {
    if (healthPercentage > 70) return 'bg-green-500';
    if (healthPercentage > 40) return 'bg-yellow-500';
    if (healthPercentage > 15) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const getMoodEmoji = (healthPercentage: number) => {
    if (healthPercentage > 70) return '😊';
    if (healthPercentage > 40) return '😐';
    if (healthPercentage > 15) return '😰';
    return '💀';
  };

  const addRubs = () => {
    if (!activeSoap || !rubInput) return;
    
    const rubsToAdd = parseInt(rubInput);
    if (isNaN(rubsToAdd) || rubsToAdd < 0) return;

    const updatedSoap = { ...activeSoap, currentRubs: activeSoap.currentRubs + rubsToAdd };
    const health = calculateSoapHealth(updatedSoap);
    
    if (!health.isAlive && activeSoap.isAlive) {
      updatedSoap.isAlive = false;
      setShowEulogy(true);
      setTimeout(() => setShowEulogy(false), 5000);
    }

    setSoaps(prev => prev.map(soap => soap.id === activeSoap.id ? updatedSoap : soap));
    setActiveSoap(updatedSoap);
    setRubInput('');
  };

  const generateEulogy = (soap: Soap) => {
    const eulogies = [
      `Here lies ${soap.name}, a ${soap.details.weight}g ${soap.details.hardness} soap who lived a sudsy life. They endured ${soap.currentRubs} rubs with ${soap.personality.toLowerCase()} spirit before their final rinse.`,
      `${soap.name} was more than just a ${soap.details.brand || 'generic'} soap - they were a lifestyle. After ${soap.currentRubs} heroic rubs in ${soap.details.waterTemp} water, they've joined the great drain in the sky.`,
      `We gather today to remember ${soap.name}, who made us cleaner despite being a ${soap.details.hardness} soap used by a ${soap.details.userType} user. After ${soap.currentRubs} rubs, they have dissolved into legend.`
    ];
    return eulogies[Math.floor(Math.random() * eulogies.length)];
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Eulogy Modal */}
      {showEulogy && activeSoap && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 max-w-2xl mx-auto text-center border-4 border-purple-500">
            <div className="text-6xl mb-4">⚰️</div>
            <h2 className="text-4xl font-black text-white mb-4">In Loving Memory</h2>
            <div className="text-2xl font-bold text-purple-300 mb-6">{activeSoap.name}</div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {generateEulogy(activeSoap)}
            </p>
            <div className="text-purple-400">🎵 *sad violin music plays* 🎵</div>
          </div>
        </div>
      )}

      {/* Soap Creation Form Modal */}
      {showSoapForm && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-2xl mx-auto max-h-[90vh] overflow-y-auto border-4 border-blue-300">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-black text-gray-800">🧼 Create Your Soap Hero!</h2>
              <button
                onClick={() => setShowSoapForm(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                <X />
              </button>
            </div>

            <div className="space-y-6">
              {/* Weight */}
              <div>
                <label className="block text-lg font-bold text-gray-700 mb-2">
                  Soap Weight (grams) 🏋️‍♀️
                </label>
                <input
                  type="number"
                  value={soapDetails.weight}
                  onChange={(e) => setSoapDetails(prev => ({ ...prev, weight: parseInt(e.target.value) || 0 }))}
                  className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl text-lg font-semibold focus:border-blue-400 focus:outline-none"
                  min="10"
                  max="500"
                />
                <p className="text-sm text-gray-500 mt-1">Typical soap bars: 80-150g</p>
              </div>

              {/* Brand */}
              <div>
                <label className="block text-lg font-bold text-gray-700 mb-2">
                  Brand (Optional) 🏷️
                </label>
                <input
                  type="text"
                  value={soapDetails.brand}
                  onChange={(e) => setSoapDetails(prev => ({ ...prev, brand: e.target.value }))}
                  placeholder="e.g., Dove, Irish Spring, Handmade..."
                  className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl text-lg focus:border-blue-400 focus:outline-none"
                />
              </div>

              {/* Hardness */}
              <div>
                <label className="block text-lg font-bold text-gray-700 mb-2">
                  Soap Hardness 💪
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(['soft', 'medium', 'hard'] as const).map((hardness) => (
                    <button
                      key={hardness}
                      onClick={() => setSoapDetails(prev => ({ ...prev, hardness }))}
                      className={`px-4 py-3 rounded-xl font-bold capitalize transition-all duration-300 ${
                        soapDetails.hardness === hardness
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                      }`}
                    >
                      {hardness}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-1">Hard soaps last longer but lather less</p>
              </div>

              {/* Usage Frequency */}
              <div>
                <label className="block text-lg font-bold text-gray-700 mb-2">
                  Usage Frequency 🚿
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(['light', 'normal', 'heavy'] as const).map((usage) => (
                    <button
                      key={usage}
                      onClick={() => setSoapDetails(prev => ({ ...prev, usage }))}
                      className={`px-4 py-3 rounded-xl font-bold capitalize transition-all duration-300 ${
                        soapDetails.usage === usage
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                      }`}
                    >
                      {usage}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-1">How often will you use this soap?</p>
              </div>

              {/* Water Temperature */}
              <div>
                <label className="block text-lg font-bold text-gray-700 mb-2">
                  Preferred Water Temperature 🌡️
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(['cold', 'warm', 'hot'] as const).map((temp) => (
                    <button
                      key={temp}
                      onClick={() => setSoapDetails(prev => ({ ...prev, waterTemp: temp }))}
                      className={`px-4 py-3 rounded-xl font-bold capitalize transition-all duration-300 ${
                        soapDetails.waterTemp === temp
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-red-100'
                      }`}
                    >
                      {temp}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-1">Hot water dissolves soap faster</p>
              </div>

              {/* User Type */}
              <div>
                <label className="block text-lg font-bold text-gray-700 mb-2">
                  Your Washing Style 🤲
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(['gentle', 'normal', 'aggressive'] as const).map((userType) => (
                    <button
                      key={userType}
                      onClick={() => setSoapDetails(prev => ({ ...prev, userType }))}
                      className={`px-4 py-3 rounded-xl font-bold capitalize transition-all duration-300 ${
                        soapDetails.userType === userType
                          ? 'bg-purple-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-purple-100'
                      }`}
                    >
                      {userType}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-1">How vigorously do you scrub?</p>
              </div>

              {/* Estimated Lifetime Preview */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-yellow-200">
                <h3 className="text-xl font-bold text-gray-800 mb-2">🔮 Predicted Soap Lifetime</h3>
                <div className="text-3xl font-black text-orange-600">
                  ~{calculateMaxRubs(soapDetails).toLocaleString()} rubs
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Based on your soap's specs and usage patterns
                </p>
              </div>

              {/* Create Button */}
              <button
                onClick={createNewSoap}
                className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:scale-105 transform transition-all duration-300 shadow-lg"
              >
                ✨ Birth This Soap Hero! ✨
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Soap Creation Button */}
      <div className="text-center mb-12">
        <button
          onClick={() => setShowSoapForm(true)}
          className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:scale-105 transform transition-all duration-300 shadow-lg"
        >
          <Plus className="inline w-6 h-6 mr-2" />
          Create Your Custom Soap Hero!
        </button>
      </div>

      {/* Active Soap Display */}
      {activeSoap && (
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border-4 border-blue-200">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Soap Profile */}
            <div className="text-center">
              <div className="text-8xl mb-4 animate-bounce">🧼</div>
              <h2 className="text-3xl font-black text-gray-800 mb-2">{activeSoap.name}</h2>
              <p className="text-lg text-gray-600 mb-4">{activeSoap.personality}</p>
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-4 mb-4">
                <p className="text-lg font-bold text-purple-800">{activeSoap.zodiac}</p>
              </div>
              
              {/* Soap Details */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-4 mb-4">
                <h4 className="font-bold text-gray-800 mb-2">📋 Soap Specs</h4>
                <div className="text-sm space-y-1">
                  <p><strong>Weight:</strong> {activeSoap.details.weight}g</p>
                  <p><strong>Brand:</strong> {activeSoap.details.brand || 'Generic'}</p>
                  <p><strong>Hardness:</strong> {activeSoap.details.hardness}</p>
                  <p><strong>Usage:</strong> {activeSoap.details.usage}</p>
                  <p><strong>Water Temp:</strong> {activeSoap.details.waterTemp}</p>
                  <p><strong>User Style:</strong> {activeSoap.details.userType}</p>
                </div>
              </div>
              
              {/* Mood Indicator */}
              <div className="flex items-center justify-center space-x-4 mb-4">
                <span className="text-2xl">{getMoodEmoji(calculateSoapHealth(activeSoap).healthPercentage)}</span>
                <div className={`w-4 h-4 rounded-full animate-pulse ${getMoodColor(calculateSoapHealth(activeSoap).healthPercentage)}`}></div>
                <span className="font-bold text-gray-700">
                  {activeSoap.isAlive ? 'Alive & Sudsy' : 'RIP 💀'}
                </span>
              </div>
            </div>

            {/* Stats & Controls */}
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">📊 Soap Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-semibold">Max Lifetime:</span>
                    <span className="text-blue-600 font-bold">{activeSoap.maxRubs.toLocaleString()} rubs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Current Rubs:</span>
                    <span className="text-2xl font-bold text-purple-600">{activeSoap.currentRubs.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Remaining:</span>
                    <span className="text-green-600 font-bold">{calculateSoapHealth(activeSoap).rubsRemaining.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Health:</span>
                    <span className={`font-bold ${activeSoap.isAlive ? 'text-green-600' : 'text-red-600'}`}>
                      {calculateSoapHealth(activeSoap).healthPercentage}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Health Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-700">Soap Life Force</span>
                  <span className="text-sm text-gray-500">{calculateSoapHealth(activeSoap).healthPercentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-1000 ${getMoodColor(calculateSoapHealth(activeSoap).healthPercentage)}`}
                    style={{ width: `${calculateSoapHealth(activeSoap).healthPercentage}%` }}
                  ></div>
                </div>
              </div>

              {/* Rub Counter */}
              {activeSoap.isAlive && (
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🔢 Add Rubs</h3>
                  <div className="flex space-x-3">
                    <input
                      type="number"
                      value={rubInput}
                      onChange={(e) => setRubInput(e.target.value)}
                      placeholder="Enter rubs"
                      className="flex-1 px-4 py-3 border-2 border-orange-200 rounded-xl text-lg font-semibold focus:border-orange-400 focus:outline-none"
                      min="0"
                    />
                    <button
                      onClick={addRubs}
                      disabled={!rubInput}
                      className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transform transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      ✨ RUB! ✨
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Soap Collection */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {soaps.map((soap) => {
          const health = calculateSoapHealth(soap);
          return (
            <div
              key={soap.id}
              onClick={() => setActiveSoap(soap)}
              className={`bg-white rounded-2xl p-6 shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 border-3 ${
                activeSoap?.id === soap.id ? 'border-blue-500 shadow-2xl' : 'border-gray-200'
              } ${!soap.isAlive ? 'opacity-75 bg-gray-50' : ''}`}
            >
              <div className="text-center">
                <div className="text-4xl mb-2">{soap.isAlive ? '🧼' : '💀'}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">{soap.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{soap.personality}</p>
                <div className="text-xs text-gray-500 mb-3">
                  {soap.details.weight}g • {soap.details.hardness} • {soap.details.brand || 'Generic'}
                </div>
                <div className="text-sm font-semibold">
                  Rubs: <span className="text-blue-600">{soap.currentRubs.toLocaleString()}</span>
                  <span className="text-gray-400">/{soap.maxRubs.toLocaleString()}</span>
                </div>
                <div className="text-sm font-semibold">
                  Health: <span className={soap.isAlive ? 'text-green-600' : 'text-red-600'}>
                    {health.healthPercentage}%
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {soaps.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🫧</div>
          <h3 className="text-2xl font-bold text-gray-600 mb-4">No Soap Heroes Yet!</h3>
          <p className="text-lg text-gray-500">Create your first custom soap to start tracking its epic journey!</p>
        </div>
      )}
    </div>
  );
};

export default SoapTracker;