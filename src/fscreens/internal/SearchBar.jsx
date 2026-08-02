import './searchbar.css';
import { LuSearch, LuX } from "react-icons/lu";

export default function SearchBar({ isOpen, isClose }) {
  if (isOpen == false) return null;

  return (
    <div className="s-bar-row">
      <button className="s-close" onClick={isClose}><LuX size={40} /></button>

      <div className="s-container">
        <div className="s-input-row">
          <LuSearch className="s-icon" />
            <input 
            type="text" 
            placeholder="Search Ndows Excellence..." 
            className="s-input"
          />
          <div className="s-underline"></div>
        </div>
        <div className="s-tags">
            <span>2026 Admissions</span>
            <span>School Fees</span>
            <span>Basketball Court</span>
            <span>Staff Directory</span>
          </div>
      </div>
    </div>
  );
}