import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Shield, Clock, Users, Search, Folder, FileText, DollarSign, Palette, Globe, Unlock, Lock, Link as LinkIcon, CheckCircle } from "lucide-react";

// Premium SVG Icons
const BlockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
    <path d="M10.49 2.23L5.49999 4.11C4.34999 4.54 3.40999 5.9 3.40999 7.12V14.55C3.40999 15.73 4.18999 17.28 5.13999 17.99L9.43999 21.2C10.85 22.26 13.17 22.26 14.58 21.2L18.88 17.99C19.83 17.28 20.61 15.73 20.61 14.55V7.12C20.61 5.89 19.67 4.53 18.52 4.1L13.53 2.23C12.68 1.92 11.32 1.92 10.49 2.23Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12.5C13.1046 12.5 14 11.6046 14 10.5C14 9.39543 13.1046 8.5 12 8.5C10.8954 8.5 10 9.39543 10 10.5C10 11.6046 10.8954 12.5 12 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChainIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
    <path d="M3.5 18V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7V17C20.5 17.14 20.5 17.28 20.49 17.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.35 15H20.5V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const VerifyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.75 12L10.58 14.83L16.25 9.17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HashIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path d="M10 3L8 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 3L14 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.5 9H21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2.5 15H20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DecentralizedIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 3C16.95 8.84 16.95 15.16 15 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
    <path d="M14.43 5.93L20.5 12L14.43 18.07" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.5 12H20.33" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Animated Background Particles
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-400/30 to-purple-400/20 blur-[80px] animate-blob" />
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-400/25 to-blue-400/15 blur-[80px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-5%] left-[30%] w-[450px] h-[450px] rounded-full bg-gradient-to-br from-blue-500/20 to-violet-400/15 blur-[80px] animate-blob animation-delay-4000" />
      
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `linear-gradient(rgba(51, 97, 255, 0.5) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(51, 97, 255, 0.5) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />
    </div>
  );
};

// Feature Badge Component
const FeatureBadge = ({ icon, text }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/50 shadow-sm">
    <span className="text-blue-600">{icon}</span>
    <span className="text-sm font-medium text-slate-700">{text}</span>
  </div>
);

export default function LandingPage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Load JetBrains Mono font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    setIsVisible(true);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  const features = [
    { icon: <HashIcon />, text: 'SHA-256 Hashing' },
    { icon: <BlockIcon />, text: 'Blockchain Verified' },
    { icon: <DecentralizedIcon />, text: 'Decentralized' },
    { icon: <VerifyIcon />, text: 'Instant Verification' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      <FloatingParticles />
      
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-noise" />
      
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center font-bold text-xl text-white">
                B
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                BlockPost
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-slate-300 hover:text-slate-100 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-300 hover:text-slate-100 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-slate-300 hover:text-slate-100 transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => navigate("/login")}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get Started
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors text-slate-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-800">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-slate-300 hover:text-slate-100 transition-colors text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-slate-300 hover:text-slate-100 transition-colors text-left"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-slate-300 hover:text-slate-100 transition-colors text-left"
                >
                  Features
                </button>
                <button
                  onClick={() => navigate("/login")}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors text-left"
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Your Content,{' '}
              <span className="relative">
                <span className="text-blue-600">
                  Verified Forever
                </span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-400/30" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
              {' '}on the Blockchain
            </h1>

            <p className={`text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              BlockPost empowers creators with a Web3-native social platform that provides cryptographic proof of content originality through blockchain verification.
            </p>

            <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/50 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-500 ease-out cursor-pointer"
                >
                  <span className="text-blue-600 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-3">{feature.icon}</span>
                  <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors duration-500 ease-out">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`max-w-md mx-auto transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button
              onClick={() => navigate("/login")}
              className="group relative bg-white rounded-3xl p-8 lg:p-10 shadow-card hover:shadow-card-hover transition-all duration-500 border border-slate-100/80 overflow-hidden text-center w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-400/20 to-purple-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 text-white shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/40 group-hover:scale-105 transition-all duration-300">
                  <BlockIcon />
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                    Get Started
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Create an account and start protecting your content with blockchain verification.
                  </p>
                  <a 
                    href="https://docs.blockpost.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Read Documentation
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                
                <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full">Sign Up</span>
                  <span className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full">Post Content</span>
                  <span className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full">Verify</span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-600 font-display">
            About BlockPost
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-slate-900">What is BlockPost?</h3>
                <p className="text-slate-600 leading-relaxed">
                  BlockPost is a revolutionary Web3 social media platform that brings transparency and authenticity to content creation. We leverage blockchain technology to provide immutable proof of content originality.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-slate-900">Why Blockchain?</h3>
                <p className="text-slate-600 leading-relaxed">
                  Traditional social media platforms struggle with content theft, plagiarism, and lack of creator attribution. Blockchain provides an unchangeable record of who created what and when.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-slate-900">The Problem We Solve</h3>
                <p className="text-slate-600 leading-relaxed">
                  Content creators lose billions annually to theft and unauthorized reproduction. BlockPost ensures your content is cryptographically secured and verifiably yours.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-card border border-slate-100">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-slate-900">Decentralized Ownership</h4>
                    <p className="text-slate-600 text-sm">You own your content, not the platform</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-slate-900">Immutable Proof</h4>
                    <p className="text-slate-600 text-sm">Timestamps that can never be altered</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-slate-900">Creator Empowerment</h4>
                    <p className="text-slate-600 text-sm">Protect your work and build your reputation</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <Search className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-slate-900">Transparent Verification</h4>
                    <p className="text-slate-600 text-sm">Anyone can verify content authenticity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-20 md:py-24 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-600 font-display">
            How It Works
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            BlockPost uses cutting-edge cryptography and blockchain technology to secure your content
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <a 
              href="https://docs.blockpost.io/hashing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white border border-slate-200/60 rounded-2xl p-6 hover:border-blue-300 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 text-white shadow-lg group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-300">
                <Lock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">Content → Hashed</h3>
              <p className="text-slate-600 leading-relaxed">
                SHA-256 and perceptual hashing (pHash) algorithms secure your content with cryptographic fingerprints that are unique and unforgeable.
              </p>
              <div className="mt-4 flex items-center text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Learn more</span>
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            <a 
              href="https://docs.blockpost.io/blockchain" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white border border-slate-200/60 rounded-2xl p-6 hover:border-purple-300 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 text-white shadow-lg group-hover:shadow-purple-500/50 group-hover:scale-110 transition-all duration-300">
                <LinkIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 group-hover:text-purple-600 transition-colors">Hash → Stored on Blockchain</h3>
              <p className="text-slate-600 leading-relaxed">
                Immutable proof stored on Polygon network. Your content ownership is permanently verifiable and cannot be tampered with.
              </p>
              <div className="mt-4 flex items-center text-purple-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Learn more</span>
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            <a 
              href="https://docs.blockpost.io/verification" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white border border-slate-200/60 rounded-2xl p-6 hover:border-green-300 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-6 text-white shadow-lg group-hover:shadow-green-500/50 group-hover:scale-110 transition-all duration-300">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 group-hover:text-green-600 transition-colors">Viewers → Verify Originality</h3>
              <p className="text-slate-600 leading-relaxed">
                Instant verification detects exact duplicates, visual matches, and audio similarities to protect creators from content theft.
              </p>
              <div className="mt-4 flex items-center text-green-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Learn more</span>
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="group bg-white/50 border border-slate-200/60 rounded-xl p-4 text-center hover:bg-white hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Folder className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold mb-1 text-slate-900 group-hover:text-blue-600 transition-colors">Decentralized Storage</h4>
              <p className="text-slate-600 text-sm">IPFS-powered content delivery</p>
            </div>

            <div className="group bg-white/50 border border-slate-200/60 rounded-xl p-4 text-center hover:bg-white hover:border-purple-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold mb-1 text-slate-900 group-hover:text-purple-600 transition-colors">Smart Contract Powered</h4>
              <p className="text-slate-600 text-sm">Automated and trustless</p>
            </div>

            <div className="group bg-white/50 border border-slate-200/60 rounded-xl p-4 text-center hover:bg-white hover:border-green-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold mb-1 text-slate-900 group-hover:text-green-600 transition-colors">Creator Rewards</h4>
              <p className="text-slate-600 text-sm">Monetize your original content</p>
            </div>

            <div className="group bg-white/50 border border-slate-200/60 rounded-xl p-4 text-center hover:bg-white hover:border-pink-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Palette className="w-6 h-6 text-pink-600" />
              </div>
              <h4 className="font-semibold mb-1 text-slate-900 group-hover:text-pink-600 transition-colors">NFT Integration Ready</h4>
              <p className="text-slate-600 text-sm">Turn posts into collectibles</p>
            </div>

            <div className="group bg-white/50 border border-slate-200/60 rounded-xl p-4 text-center hover:bg-white hover:border-cyan-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-6 h-6 text-cyan-600" />
              </div>
              <h4 className="font-semibold mb-1 text-slate-900 group-hover:text-cyan-600 transition-colors">Cross-chain Compatible</h4>
              <p className="text-slate-600 text-sm">Works across multiple blockchains</p>
            </div>

            <div className="group bg-white/50 border border-slate-200/60 rounded-xl p-4 text-center hover:bg-white hover:border-orange-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Unlock className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-semibold mb-1 text-slate-900 group-hover:text-orange-600 transition-colors">Open Source</h4>
              <p className="text-slate-600 text-sm">Transparent and community-driven</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100/50 rounded-3xl p-12 shadow-card">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Ready to Join the Future of Social Media?
            </h2>
            <p className="text-slate-600 mb-8 text-lg">
              Join 1,000+ creators protecting their content on the blockchain
            </p>
            <button
              onClick={() => navigate("/login")}
              className="px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold text-lg transition-all hover:scale-105 shadow-lg text-white"
            >
              Get Started Now
            </button>
            <p className="text-slate-500 text-sm mt-4">
              No credit card required • Free to start
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-200/60 bg-white/50 backdrop-blur-sm py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center font-bold text-xl text-white">
                  B
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  BlockPost
                </span>
              </div>
              <p className="text-slate-600 text-sm">
                Securing content authenticity through blockchain technology
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-slate-900">Quick Links</h4>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("home")}
                  className="block text-slate-600 hover:text-slate-900 transition-colors text-sm"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block text-slate-600 hover:text-slate-900 transition-colors text-sm"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("features")}
                  className="block text-slate-600 hover:text-slate-900 transition-colors text-sm"
                >
                  Features
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-slate-900">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Discord"
                >
                  <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200/60 pt-8 text-center text-slate-600 text-sm">
            <p className="mb-2">© 2024 BlockPost. All rights reserved.</p>
            <p>Built for Web3 Hackathon 2024</p>
          </div>
        </div>
      </footer>
    </div>
  );
}