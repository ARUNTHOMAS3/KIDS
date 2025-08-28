import React, { useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      hashtags: ["AI", "Innovation", "Excellence"],
    },
  ]);
  const [searchTag, setSearchTag] = useState("");
  const [filtered, setFiltered] = useState(posts);

  function handleSearch() {
    if (!searchTag) {
      setFiltered(posts);
      return;
    }
    const result = posts.filter((post) =>
      post.hashtags.some((tag) =>
        tag.toLowerCase().includes(searchTag.toLowerCase().replace("#", ""))
      )
    );
    setFiltered(result);
  }

  return (
    <div>
      {/* Header Banner */}
      <div className="header">🎓 Student Wall of Fame</div>

      {/* Banner Image */}
      <div className="banner-image">
        <img
          src="https://lnmc.lnh.edu.pk/UploadedImages/0e9737bc-e348-459e-8fa9-586bf0c89146.jpg"
          alt="Wall of Fame Banner"
        />
      </div>

      <div className="container">
        {/* Achievements Section */}
        <div className="achievements">
          <h2>🏅 Student Achievements</h2>
          <div className="achievement-grid">
            <div className="achievement-card">
              <span className="icon">🥇</span>
              <p>Winner of National Innovation Award 2025</p>
            </div>
            <div className="achievement-card">
              <span className="icon">📚</span>
              <p>Published 10+ Research Papers in IEEE Journals</p>
            </div>
            <div className="achievement-card">
              <span className="icon">🤖</span>
              <p>Built AI-powered Smart Assistant for Healthcare</p>
            </div>
            <div className="achievement-card">
              <span className="icon">🌍</span>
              <p>Represented College at International Hackathon</p>
            </div>
          </div>
        </div>

        {/* Search */}
        {/* Search */}
<div className="search-box">
  <div className="search-wrapper">
    <span className="hash-symbol">#</span>
    <input
      className="search-input"
      placeholder="Search by hashtag"
      value={searchTag}
      onChange={(e) => setSearchTag(e.target.value)}
    />
  </div>
  <button className="search-btn" onClick={handleSearch}>
    Search
  </button>
</div>


        {/* Posts */}
        {filtered.length === 0 && (
          <p style={{ textAlign: "center", color: "#888" }}>No posts found.</p>
        )}
        {filtered.map((post) => (
          <div key={post.id} className="post">
            <div>
              {post.hashtags.map((tag) => (
                <span key={tag} className="hashtag">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
