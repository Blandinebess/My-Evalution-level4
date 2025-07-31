import React, { useState } from "react";
import myPhoto from '../assets/20250521_210817884_iOS.jpg';
const AboutMe = () => {
  const [showFact, setShowFact] = useState(false);

  const hobbies = ["Reading", "Coding", "Traveling", "Photography"];

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      {/* 🧍 Basic Info */}
      <div className="text-center">
        <h1 className="text-3xl font-bold">Blandine Zongo</h1>
        <img
          className="w-32 h-32 mx-auto rounded-full mt-4"
          src={myPhoto}
          alt="Portrait of Blandine Zongo"
          style={{ borderRadius: '50%', width: '150px', height: '150px'}}
        />
        <p className="mt-2 text-gray-600">
          I’m a passionate developer who love building projects and learning and creating.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold">🎯 Learning Style</h2>
        <p>
          I learn best through hands-on projects, visual diagrams, and YouTube
          tutorials.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold">
          🧠 What I Loved From My Previous Level
        </h2>
        <ul className="list-disc ml-6">
          <li>Building real projects with React</li>
          <li>Supportive instructor feedback</li>
          <li>Pair programming with classmates</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold">🎓 Where I’m At</h2>
        <p>
          <strong>Confident:</strong> useState, map, basic loops, fetch
        </p>
        <p>
          <strong>Need to improve:</strong> useEffect, managing complex state
        </p>
        <p>
          <strong>Curious about:</strong> Authentication with Firebase or AWS
          Cognito
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold">💡 My Hobbies</h2>
        <ul className="list-disc ml-6">
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>

      {/* 💬 Fun Fact Toggle */}
      <div>
        <button
          onClick={() => setShowFact(!showFact)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Toggle Fun Fact
        </button>
        {showFact && (
          <p className="mt-2 text-green-600">
            I once built a website in 3 days!
          </p>
        )}
      </div>

      <div>
        <label htmlFor="language" className="block mt-4 font-semibold">
          Favorite Language
        </label>
        <select id="language" className="mt-1 block w-full border rounded p-2">
          <option>JavaScript</option>
          <option>Css</option>
          <option>Java</option>
          <option>Html</option>
        </select>
      </div>
    </div>
  );
};

export default AboutMe;
