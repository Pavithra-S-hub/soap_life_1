import React, { useState } from 'react';
import { BarChart, TrendingUp, Microscope, Beaker } from 'lucide-react';

const Studies: React.FC = () => {
  const [selectedStudy, setSelectedStudy] = useState(0);

  const studies = [
    {
      title: "Does Beethoven Make Soap Last Longer?",
      subtitle: "A Classical Investigation into Musical Soap Preservation",
      methodology: "We exposed 50 soap bars to different musical genres while counting rubs to failure.",
      findings: [
        "Classical music increased soap lifespan by 23%",
        "Heavy metal decreased lifespan by 67% (soaps literally headbanged themselves to death)",
        "Country music had no effect (soaps remained unchanged and slightly depressed)",
        "Jazz caused irregular dissolution patterns (very unpredictable)"
      ],
      conclusion: "Soap responds positively to sophisticated musical arrangements. Recommend Chopin for maximum longevity.",
      absurdityLevel: "🎼🎼🎼🎼⭐",
      participants: "50 bars of premium soap, 1 very confused pianist",
      duration: "6 weeks of intensive musical soap therapy"
    },
    {
      title: "Left-Handed vs Right-Handed Rubbing Efficiency",
      subtitle: "Chirality in Cleaning: A Comprehensive Hand Dominance Analysis",
      methodology: "Recruited 100 volunteers (50 lefties, 50 righties) to rub soap bars until failure using their dominant hand only.",
      findings: [
        "Right-handed rubbing was 12% more destructive to soap",
        "Left-handed people showed more 'gentle soap massage' technique",
        "Ambidextrous people broke the soap in half (study terminated early for this group)",
        "Left-handed people talked to their soap more (correlation unclear)"
      ],
      conclusion: "Handedness affects soap-human interaction. Lefties are soap whisperers.",
      absurdityLevel: "👐👐👐⭐⭐",
      participants: "100 humans, 200 soap bars, several very confused statisticians",
      duration: "3 months of intensive hand-dominance research"
    },
    {
      title: "The Optimal Soap Temperature for Maximum Rub Endurance",
      subtitle: "Thermal Dynamics of Soap Resilience: A Hot Take on Cold Facts",
      methodology: "Tested soap bars at temperatures from freezing to scalding to determine thermal impact on rub resistance.",
      findings: [
        "Frozen soap lasted 340% longer but was impossible to use",
        "Room temperature (22°C) provided optimal balance of usability and durability",
        "Hot soap (60°C) became aggressive and tried to escape the test chamber",
        "One bar achieved sentience at 45°C (study paused for ethical review)"
      ],
      conclusion: "Temperature dramatically affects soap behavior. Room temperature soap is most cooperative.",
      absurdityLevel: "🌡️🌡️🌡️🌡️🌡️",
      participants: "30 soap bars, 1 industrial freezer, several heat lamps, 1 ethics committee",
      duration: "2 months of temperature torture testing"
    },
    {
      title: "Soap Personality Types and Dissolution Patterns",
      subtitle: "Psychological Profiling of Bath Products: A Deep Dive into Soap Psychology",
      methodology: "Assigned personality types to soap bars based on scent, color, and texture, then correlated with failure patterns.",
      findings: [
        "Lavender soaps were introverted and lasted 89% longer than extroverted citrus soaps",
        "Rose-scented soaps showed dramatic tendencies and dissolved theatrically",
        "Unscented soap bars were stoic and predictable in their decline",
        "Mint soaps were hyperactive and wore themselves out 45% faster"
      ],
      conclusion: "Soap personality directly correlates with lifespan. Introverted soaps are superior for scientific purposes.",
      absurdityLevel: "🧠🧠🧠🧠⭐",
      participants: "75 personality-typed soap bars, 3 soap psychologists, 1 very patient lab assistant",
      duration: "4 months of intensive soap personality assessment"
    },
    {
      title: "The Impact of Encouraging Words on Soap Morale",
      subtitle: "Positive Reinforcement Therapy for Bath Products Under Stress",
      methodology: "Subjected soap bars to daily affirmations versus control group receiving neutral treatment.",
      findings: [
        "Encouraged soaps lasted 67% longer than neglected control group",
        "Soaps receiving daily compliments developed better lather quality",
        "Criticized soaps dissolved faster and became bitter (literally more alkaline)",
        "One bar receiving excessive praise became egotistical and refused to clean properly"
      ],
      conclusion: "Emotional support significantly improves soap performance. Treat your soap with kindness.",
      absurdityLevel: "💖💖💖⭐⭐",
      participants: "40 emotionally vulnerable soap bars, 2 motivational speakers, 1 soap therapist",
      duration: "8 weeks of soap emotional wellness programs"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-black text-gray-800 mb-4">🔬 Useless Comparative Studies 🔬</h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Where scientific rigor meets absolute absurdity. These groundbreaking studies answer the questions nobody asked but everyone secretly wondered about.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-full font-bold">
            🎯 Certified Overthinking
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-green-600 text-white px-6 py-2 rounded-full font-bold">
            📊 Peer-Reviewed Nonsense
          </div>
        </div>
      </div>

      {/* Study Navigation */}
      <div className="grid md:grid-cols-5 gap-4 mb-8">
        {studies.map((study, index) => (
          <button
            key={index}
            onClick={() => setSelectedStudy(index)}
            className={`p-4 rounded-2xl text-center transition-all duration-300 transform hover:scale-105 ${
              selectedStudy === index
                ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-blue-50 border-2 border-blue-200'
            }`}
          >
            <div className="text-2xl mb-2">
              {index === 0 && '🎼'}
              {index === 1 && '👐'}
              {index === 2 && '🌡️'}
              {index === 3 && '🧠'}
              {index === 4 && '💖'}
            </div>
            <div className="text-sm font-bold">Study #{index + 1}</div>
          </button>
        ))}
      </div>

      {/* Selected Study Display */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-blue-200">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Study Header */}
          <div className="lg:col-span-3">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">
                {selectedStudy === 0 && '🎼'}
                {selectedStudy === 1 && '👐'}
                {selectedStudy === 2 && '🌡️'}
                {selectedStudy === 3 && '🧠'}
                {selectedStudy === 4 && '💖'}
              </div>
              <h2 className="text-3xl font-black text-gray-800 mb-2">{studies[selectedStudy].title}</h2>
              <p className="text-xl text-gray-600 italic">{studies[selectedStudy].subtitle}</p>
              
              <div className="flex justify-center items-center space-x-6 mt-4">
                <div className="bg-gradient-to-r from-red-100 to-red-200 px-4 py-2 rounded-full">
                  <span className="text-sm font-bold text-red-800">Absurdity Level: {studies[selectedStudy].absurdityLevel}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Methodology */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border-2 border-blue-200">
            <div className="flex items-center mb-4">
              <Microscope className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-bold text-gray-800">Methodology</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">{studies[selectedStudy].methodology}</p>
          </div>

          {/* Findings */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border-2 border-green-200">
            <div className="flex items-center mb-4">
              <BarChart className="w-6 h-6 text-green-600 mr-2" />
              <h3 className="text-xl font-bold text-gray-800">Key Findings</h3>
            </div>
            <ul className="space-y-3">
              {studies[selectedStudy].findings.map((finding, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">•</span>
                  <span className="text-gray-700 text-sm">{finding}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border-2 border-purple-200">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-6 h-6 text-purple-600 mr-2" />
              <h3 className="text-xl font-bold text-gray-800">Conclusion</h3>
            </div>
            <p className="text-gray-700 leading-relaxed font-semibold italic">"{studies[selectedStudy].conclusion}"</p>
          </div>
        </div>

        {/* Study Details */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-yellow-200">
            <h4 className="text-lg font-bold text-gray-800 mb-3">👨‍🔬 Study Participants</h4>
            <p className="text-gray-700">{studies[selectedStudy].participants}</p>
          </div>
          
          <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-2xl p-6 border-2 border-pink-200">
            <h4 className="text-lg font-bold text-gray-800 mb-3">⏰ Study Duration</h4>
            <p className="text-gray-700">{studies[selectedStudy].duration}</p>
          </div>
        </div>
      </div>

      {/* Fun Research Stats */}
      <div className="grid md:grid-cols-4 gap-6 mt-12">
        <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-2xl p-6 text-center border-2 border-red-300">
          <div className="text-3xl mb-2">🧪</div>
          <h3 className="text-lg font-bold text-gray-800">Total Studies</h3>
          <p className="text-2xl font-black text-red-600">{studies.length}</p>
        </div>
        
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 text-center border-2 border-blue-300">
          <div className="text-3xl mb-2">🧼</div>
          <h3 className="text-lg font-bold text-gray-800">Soap Bars Tested</h3>
          <p className="text-2xl font-black text-blue-600">395</p>
        </div>
        
        <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-6 text-center border-2 border-green-300">
          <div className="text-3xl mb-2">👨‍🔬</div>
          <h3 className="text-lg font-bold text-gray-800">Confused Scientists</h3>
          <p className="text-2xl font-black text-green-600">23</p>
        </div>
        
        <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-6 text-center border-2 border-purple-300">
          <div className="text-3xl mb-2">📊</div>
          <h3 className="text-lg font-bold text-gray-800">Hours Wasted</h3>
          <p className="text-2xl font-black text-purple-600">2,847</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12 bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-3xl p-8">
        <div className="text-5xl mb-4">🤓</div>
        <h2 className="text-3xl font-bold mb-4">Want to Contribute to Science?</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Have an equally absurd soap-related question? Submit your ridiculous research proposal and join our community of overthinking scientists!
        </p>
        <button className="bg-white text-purple-700 px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transform transition-all duration-300">
          📝 Submit Your Absurd Study Idea
        </button>
      </div>
    </div>
  );
};

export default Studies;