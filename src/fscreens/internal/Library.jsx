import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LuSearch, LuChevronDown, LuSparkles, LuBookOpen } from "react-icons/lu";
import "./library.css";

export default function Library() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("Nursery");

  // Expanded Data structure
  const libraryData = {
    Nursery: [
      { name: "Rhymes & Songs", books: ["Twinkle Star", "Baba Black Sheep", "ABC Phonics", "Humpty Dumpty", "Rain Rain", "Jungle Beat"] },
      { name: "Drawing & Art", books: ["Color Magic", "Finger Paint", "Shape Master", "Doodle Pad", "Trace & Learn", "Creative Kids"] },
      { name: "Story Time", books: ["Little Lion", "Hungry Rabbit", "Moonlight Tale", "Kind Bear", "Smart Fox", "The Brave Ant"] }
    ],
    Primary: [
      { name: "Superheroes & Comics", books: ["Superman: Origin", "X-Men Unleashed", "Batman: Knight", "Flash Velocity", "Wonder Woman", "Spider-Verse"] },
      { name: "Literature & Tales", books: ["The African Child", "Oliver Twist", "Anansi the Spider", "Tortoise & Hare", "Village Ghost", "King's Gold"] },
      { name: "Exam Prep", books: ["Math Grade 6", "English 2024", "Science Lab", "Social Studies", "Verbal Aptitude", "General Paper"] }
    ],
    Secondary: [
      { name: "Science Archive", books: ["Quantum Physics", "Organic Chem", "Human Anatomy", "Pure Math", "Microbiology", "Engineering Drawing"] },
      { name: "Arts & Commerce", books: ["Government", "Economics", "Cost Accounting", "Literature in English", "History of Africa", "Civic Education"] },
      { name: "Past Questions", books: ["WASSCE Math", "WASSCE Physics", "GABECE English", "WAEC Biology", "Commerce 2023", "Agric Science"] }
    ]
  };

  return (
    <div className="grand-library">
      {/* Top Controls */}
      <div className="library-top-bar">
        <h1 className="shelf-logo">NDOWS <span className="gold-text">ARCHIVE</span></h1>
        
        <div className="library-controls">
          <div className="shelf-search">
            <LuSearch className="s-icon" />
            <input type="text" placeholder="Search the archives..." />
          </div>

          <div className="shelf-selector">
            <select value={activeSection} onChange={(e) => setActiveSection(e.target.value)}>
              <option value="Nursery">NURSERY SECTION</option>
              <option value="Primary">PRIMARY SECTION</option>
              <option value="Secondary">SECONDARY SECTION</option>
            </select>
            <LuChevronDown className="d-icon" />
          </div>
        </div>
      </div>

      {/* The Actual Shelves */}
      <div className="shelf-container">
        {libraryData[activeSection].map((shelf, sIdx) => (
          <div className="mahogany-shelf" key={sIdx}>
            <div className="shelf-label">
               <LuSparkles className="sparkle" /> {shelf.name}
            </div>
            
            <div className="books-row">
              {shelf.books.map((book, bIdx) => (
                <div className="magic-book" key={bIdx} onClick={() => navigate('/login')}>
                  <div className="book-3d">
                    <div className="book-front">
                      <LuBookOpen className="book-icon" />
                      <span>{book}</span>
                    </div>
                    <div className="book-side"></div>
                  </div>
                  <p className="book-title-under">{book}</p>
                </div>
              ))}
            </div>
            <div className="wood-plank"></div> {/* The actual wooden floor of the shelf */}
          </div>
        ))}
      </div>
    </div>
  );
}