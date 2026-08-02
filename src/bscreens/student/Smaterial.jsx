import { useEffect, useState } from 'react';
import { LuBook, LuFileText, LuStar, LuClock, LuSearch, LuDownload, LuBookOpen } from "react-icons/lu";
import './smaterial.css'

export default function Smaterial() {
  const [studyList, changeStudyList] = useState([]); 
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(()=>{
      const userExist = localStorage.getItem('stUser');
      if (userExist){
        const user = JSON.parse(userExist);

        async function fetchStudyAPI(userId){
        const baseUrl = `http://localhost:3000/studyLogs?studentId=${userId}`;
        const exist = await fetch(baseUrl);
          if (exist){
            const existRes = await exist.json();
            console.log(existRes);
            changeStudyList(existRes);
          }
        }
          fetchStudyAPI(user.id)
    }     
  }, [])

  const categories = ["All", "WASSCE", "GABECE", "Lesson Notes", "Baisc", "Reading List", "School Materials"];

  return (
    <div className="m-full">
      <header className="m-header glass-box">
        <div className="search-bar"> <LuSearch color='whitesmoke'/> <input type="text" placeholder="Search for WASSCE papers, notes, or books..." /> </div>
        <div className="quick-stats">
          <div className="mini-stat"><LuStar color='red'/> 12 Favorites</div>
          <div className="mini-stat"><LuClock color='green'/> 4 Recent</div>
        </div>
      </header>

      <div className="materials-layout">
        
        <aside className="category-list glass-box">
          <h3>Library Sections</h3>
          {categories.map((e, i)=> <button key={i} className={`cat-btn ${activeCategory === e ? 'active' : ''}`} onClick={()=> setActiveCategory(e)}>{e}</button>
          )}
        </aside>

        <main className="materials-grid">
          {studyList.filter((f)=> activeCategory === 'All' || f.category === activeCategory).map((e, i)=> 
            <div key={i} className="material-card glass-box">
              <div className="card-top">
                <div className={`type-tag ${e.section == 'Science Wing' ? 'pq' : 'book'}`}> <LuBook /> {e.section}</div>
                <button className={`fav-btn ${e.isLiked ? 'active' : ''}`}> <LuStar /> </button>
              </div>
              <div className="card-body">
                <h4>{e.bookTitle}</h4>
                <p className="topic-text">Topic: {e.topic}</p>
                <p className="meta-text">{e.category} • {e.lastRead}</p>
                <div className="time-badge">  <LuClock size={12} /> {e.timeSpentMinutes} mins read </div>
              </div>
              <div className="card-footer">
                <button className="read-btn" onClick={() => window.open(e.pdfUrl)}> <LuBookOpen /> Read Now </button>
                <button className="dl-btn"><LuDownload /></button>
              </div>
            </div> )}
        </main>
      </div>
    </div>
  );
}