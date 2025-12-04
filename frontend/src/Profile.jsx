import { useEffect } from "react";
import { Link } from "react-router-dom";

// TODO: Integrate wallet connection (MetaMask) and show real on-chain address.

const currentUser = {
  username: "VTG",
  handle: "vtg",
  address: "0x1234567890abcdef1234567890abcdef12345678",
  bio: "Blockchain enthusiast | Web3 developer | Building the future of social media",
  joinedDate: "November 2024",
};

const userPosts = [
  {
    id: 1,
    authorHandle: "vtg",
    authorAddress: "0x1234567890abcdef1234567890abcdef12345678",
    timestamp: "2 hours ago",
    status: "ORIGINAL",
    caption: "Just launched my first Web3 social media post! 🚀",
    mediaUrl: null,
  },
  {
    id: 5,
    authorHandle: "vtg",
    authorAddress: "0x1234567890abcdef1234567890abcdef12345678",
    timestamp: "1 week ago",
    status: "ORIGINAL",
    caption: "Excited to be part of this hackathon! Building BlockPost 🔥",
    mediaUrl: null,
  },
];

function Profile() {
  useEffect(() => {
    // Load JetBrains Mono font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const truncateAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const getStatusBadge = (status) => {
    const badges = {
      ORIGINAL: "bg-green-50 text-green-700 border-green-200",
      EXACT_DUPLICATE: "bg-red-50 text-red-700 border-red-200",
      VISUAL_MATCH: "bg-amber-50 text-amber-700 border-amber-200",
      AUDIO_MATCH: "bg-purple-50 text-purple-700 border-purple-200",
    };

    const labels = {
      ORIGINAL: "Original on-chain",
      EXACT_DUPLICATE: "Exact duplicate detected",
      VISUAL_MATCH: "Visual match (pHash)",
      AUDIO_MATCH: "Audio match",
    };

    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${badges[status]}`}>
        {labels[status]}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      {/* Subtle Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/10 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-400/20 to-blue-400/10 blur-[100px]" />
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-lg border-b border-slate-200 p-4 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/feed" className="text-blue-600 hover:text-blue-700 font-medium transition-colors flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Feed
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center font-bold text-sm text-white">
              B
            </div>
            <h1 className="text-xl font-bold text-blue-600">
              BlockPost
            </h1>
          </div>
          <div className="w-28"></div> {/* Spacer for centering */}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto p-4 md:p-6 relative z-10">
        {/* Profile Header */}
        <div className="bg-white rounded-3xl p-6 md:p-8 mb-6 shadow-card border border-slate-100">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Avatar */}
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center font-bold text-4xl text-white shadow-lg">
              {currentUser.username[0].toUpperCase()}
            </div>

            {/* User Info */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2 text-slate-900">{currentUser.username}</h2>
              <div className="flex flex-col gap-2 text-slate-600 mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-slate-700">@{currentUser.handle}</span>
                  <span>•</span>
                  <span className="text-sm font-mono bg-slate-100 px-2 py-1 rounded-lg">{truncateAddress(currentUser.address)}</span>
                </div>
                <div className="text-sm">
                  Joined {currentUser.joinedDate}
                </div>
              </div>
              <p className="text-slate-700">{currentUser.bio}</p>
            </div>

            {/* Edit Profile Button */}
            <button className="px-6 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl font-medium transition-all hover:scale-105 text-slate-700">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Posts Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-slate-900">Your posts</h3>

          {userPosts.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center shadow-card border border-slate-100">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-slate-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <p className="text-slate-600 text-lg font-medium">No posts yet</p>
              <p className="text-slate-500 text-sm mt-2">Create your first post to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {userPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl p-6 shadow-card border border-slate-100 hover:shadow-card-hover transition-all duration-300"
                >
                  {/* Post Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center font-bold text-white">
                        {post.authorHandle[0].toUpperCase()}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">@{post.authorHandle}</div>
                        <div className="text-sm text-slate-500 font-mono">
                          {truncateAddress(post.authorAddress)}
                        </div>
                      </div>
                    </div>
                    <span className="text-sm text-slate-500">{post.timestamp}</span>
                  </div>

                  {/* Post Content */}
                  <p className="mb-4 text-slate-700 leading-relaxed">{post.caption}</p>

                  {/* Media Placeholder */}
                  {post.mediaUrl && (
                    <div className="mb-4 bg-slate-100 rounded-xl h-48 flex items-center justify-center text-slate-500">
                      Video/Image placeholder
                    </div>
                  )}

                  {/* Status Badge */}
                  <div className="flex items-center gap-3 flex-wrap">
                    {getStatusBadge(post.status)}
                    <span className="text-xs text-slate-500">
                      Verified via VideoGuard backend
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Profile;