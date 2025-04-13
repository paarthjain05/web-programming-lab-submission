// 1. Component to display images from different folders
import React from 'react';
    import srcImage from './Images/image1.png'; 
    import srci from './Images/image.png'
function ImageDisplay() {
  return (
    <div>
      <h2>Image Display Component</h2>
      
      {/* a) Image from public folder */}
      <div>
        <h3>Image from public/Images folder:</h3>
        <img 
          src={srci}
          alt="Example from public folder"
          style={{ width: '300px', height: 'auto', marginBottom: '20px' }}
        />
      </div>
      
      {/* b) Image from src folder */}
      <div>
        <h3>Image from src/Images folder:</h3>
        <img 
          src={srcImage} 
          alt="Example from src folder"
          style={{ width: '300px', height: 'auto' }}
        />
      </div>
    </div>
  );
}

// 2. Login Form Component based on the provided image
function LoginForm() {
  return (
    <div style={{ fontFamily: 'serif', maxWidth: '400px', margin: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Novell Services Login</h2>
      
      <div style={{ display: 'flex', marginBottom: '10px' }}>
        <label style={{ width: '100px' }}>Username:</label>
        <input type="text" style={{ flex: 1 }} />
      </div>
      
      <div style={{ display: 'flex', marginBottom: '10px' }}>
        <label style={{ width: '100px' }}>Password:</label>
        <input type="password" style={{ flex: 1 }} />
      </div>
      
      <div style={{ display: 'flex', marginBottom: '10px' }}>
        <label style={{ width: '100px' }}>City of Employment:</label>
        <input type="text" style={{ flex: 1 }} />
      </div>
      
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <label style={{ width: '100px' }}>Web server:</label>
        <select style={{ flex: 1 }}>
          <option>-- Choose a server --</option>
          <option>Server 1</option>
          <option>Server 2</option>
          <option>Server 3</option>
        </select>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <p>Please specify your role:</p>
        <div>
          <input type="radio" id="admin" name="role" />
          <label htmlFor="admin" style={{ marginLeft: '5px' }}>Admin</label>
        </div>
        <div>
          <input type="radio" id="engineer" name="role" />
          <label htmlFor="engineer" style={{ marginLeft: '5px' }}>Engineer</label>
        </div>
        <div>
          <input type="radio" id="manager" name="role" />
          <label htmlFor="manager" style={{ marginLeft: '5px' }}>Manager</label>
        </div>
        <div>
          <input type="radio" id="guest" name="role" />
          <label htmlFor="guest" style={{ marginLeft: '5px' }}>Guest</label>
        </div>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <p>Single Sign-on to the following:</p>
        <div>
          <input type="checkbox" id="mail" />
          <label htmlFor="mail" style={{ marginLeft: '5px' }}>Mail</label>
        </div>
        <div>
          <input type="checkbox" id="payroll" />
          <label htmlFor="payroll" style={{ marginLeft: '5px' }}>Payroll</label>
        </div>
        <div>
          <input type="checkbox" id="self-service" />
          <label htmlFor="self-service" style={{ marginLeft: '5px' }}>Self-service</label>
        </div>
      </div>
      
      <div>
        <button style={{ marginRight: '10px' }}>Login</button>
        <button>Reset</button>
      </div>
    </div>
  );
}

// 3. User Profile Components

// i) ProfileImage.js
function ProfileImage({ imageSrc, altText }) {
  return (
    <div className="profile-image-container">
      <img 
        src={imageSrc || "https://wallpaperaccess.com/full/2749420.jpg"} 
        alt={altText || "User profile"}
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          objectFit: 'cover',
          border: '3px solid #3498db'
        }}
      />
    </div>
  );
}

// ii) UserInfo.js
function UserInfo({ name, email, bio }) {
  return (
    <div className="user-info-container" style={{ marginBottom: '20px' }}>
      <h2 style={{ marginBottom: '5px' }}>{name || "User Name"}</h2>
      <p style={{ color: '#666', marginBottom: '10px' }}>{email || "user@example.com"}</p>
      <div className="bio-container" style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '15px', 
        borderRadius: '8px',
        marginTop: '10px'
      }}>
        <h3 style={{ fontSize: '16px', marginBottom: '5px' }}>Bio</h3>
        <p>{bio || "No bio available"}</p>
      </div>
    </div>
  );
}

// iii) UserPosts.js
function UserPosts({ posts }) {
  const defaultPosts = [
    { id: 1, title: "First Post", content: "This is my first post content", date: "2025-03-01" },
    { id: 2, title: "React Journey", content: "Learning React has been amazing", date: "2025-03-05" },
    { id: 3, title: "Web Development", content: "Exploring modern web technologies", date: "2025-03-10" }
  ];

  const postsToRender = posts || defaultPosts;

  return (
    <div className="user-posts-container">
      <h3 style={{ marginBottom: '15px', borderBottom: '2px solid #eaeaea', paddingBottom: '8px' }}>
        Recent Posts
      </h3>
      {postsToRender.length > 0 ? (
        <div className="posts-list">
          {postsToRender.map(post => (
            <div key={post.id} className="post-item" style={{ 
              marginBottom: '20px', 
              padding: '15px', 
              backgroundColor: '#fff',
              boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
              borderRadius: '5px'
            }}>
              <h4 style={{ marginBottom: '5px', color: '#333' }}>{post.title}</h4>
              <p style={{ fontSize: '12px', color: '#888', marginBottom: '8px' }}>
                Posted on: {post.date}
              </p>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No posts to display</p>
      )}
    </div>
  );
}

// iv) ProfilePage.js
function ProfilePage() {
  const userData = {
    name: "Paarth Jain",
    email: "pj@gmail.com",
    bio: "Frontend developer with 5 years of experience in React and modern JavaScript frameworks. Passionate about creating intuitive user experiences and clean code.",
    profileImage: "placeholder",
    posts: [
      { id: 1, title: "Getting Started with React", content: "React makes it painless to create interactive UIs...", date: "2025-03-08" },
      { id: 2, title: "Component Lifecycle", content: "Understanding how components work is essential...", date: "2025-03-10" },
      { id: 3, title: "State Management", content: "There are several ways to manage state in React...", date: "2025-03-13" }
    ]
  };

  return (
    <div className="profile-page-container" style={{ 
      maxWidth: '800px', 
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#fafafa',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div className="profile-header" style={{ 
        display: 'flex',
        alignItems: 'center',
        marginBottom: '30px',
        gap: '30px'
      }}>
        <ProfileImage imageSrc={userData.profileImage} altText={`${userData.name}'s profile`} />
        <UserInfo name={userData.name} email={userData.email} bio={userData.bio} />
      </div>
      
      <UserPosts posts={userData.posts} />
    </div>
  );
}

export { ImageDisplay, LoginForm, ProfileImage, UserInfo, UserPosts, ProfilePage };

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>React Components Assignment</h1>
      
      <section style={{ marginBottom: '40px' }}>
        <h2>1. Image Display Component</h2>
        <ImageDisplay />
      </section>
      
      <section style={{ marginBottom: '40px' }}>
        <h2>2. Login Form Component</h2>
        <LoginForm />
      </section>
      
      <section>
        <h2>3. User Profile Components</h2>
        <ProfilePage />
      </section>
    </div>
  );
}

export default App;
