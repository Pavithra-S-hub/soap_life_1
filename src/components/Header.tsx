import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="relative z-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="relative">
          {/* Cute Soap Character */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              {/* Main soap body */}
              <div className="w-32 h-20 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-2xl border-4 border-yellow-500 shadow-lg transform hover:scale-110 transition-all duration-300">
                {/* Soap face */}
                <div className="flex items-center justify-center h-full">
                  {/* Eyes */}
                  <div className="flex space-x-3">
                    <div className="w-3 h-3 bg-black rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-3 h-3 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  </div>
                  {/* Smile */}
                  <div className="absolute mt-4">
                    <div className="w-6 h-3 border-b-2 border-black rounded-full"></div>
                  </div>
                </div>
              </div>
              {/* Soap bubbles around character */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-white/70 rounded-full animate-ping"></div>
              <div className="absolute -bottom-1 -left-2 w-3 h-3 bg-white/50 rounded-full animate-pulse"></div>
              <div className="absolute top-1 -left-4 w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-4 drop-shadow-lg">
            🧼 SoapLife 🧼
          </h1>
          <div className="absolute -top-4 -right-4 text-4xl animate-bounce">💫</div>
          <div className="absolute -top-2 -left-8 text-3xl animate-pulse">✨</div>
        </div>
        
        <p className="text-2xl md:text-3xl font-bold mb-4 text-yellow-300">
          The Ultimate Soap Rub Counter Experience!
        </p>
        
        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
          Welcome to the most scientifically unnecessary yet oddly compelling project ever conceived. 
          Track your soap's heroic journey from fresh bar to final rub!
        </p>
        
        <div className="mt-8 flex justify-center space-x-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-lg font-bold">
            🔬 Overthinking the Everyday
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-lg font-bold">
            🎯 Gloriously Useless Science
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;