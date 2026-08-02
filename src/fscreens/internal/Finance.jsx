import { useState } from "react";
import "./finance.css";
import { LuCheckCheck, LuCreditCard, LuQrCode, LuWallet } from "react-icons/lu";


export default function Finance() {
  const [studentType, setStudentType] = useState("Junior");
  const [schoolLevel, setSchoolLevel] = useState("Secondary");
  const [selectedFees, setSelectedFees] = useState([]);

  // Fee Database based on School/Management
  const feeOptions = {
    Nursery: [
      { id: 't1', name: "Tuition Fee", price: 5500 },
      { id: 'u1', name: "Nursery Uniform Set", price: 1200 },
      { id: 'd1', name: "Daily Lunch Program", price: 2500 },
      { id: 'n1', name: "Textbooks and Notebooks", price: 3500 },
    ],
    Basic: [
      { id: 't2', name: "Tuition Fee", price: 7200 },
      { id: 'b1', name: "Textbook Rental", price: 1500 },
      { id: 's1', name: "Sportswear", price: 800 }
    ],
    Secondary: {
      Junior: [
        { id: 'j1', name: "Tuition Fee", price: 8500 },
        { id: 'j2', name: "JSS Mock Exams", price: 500 },
        { id: 'j3', name: "Practical Lab Fee", price: 1000 }
      ],
      Senior: [
        { id: 's1', name: "Tuition Fee", price: 9500 },
        { id: 's2', name: "WASSCE Registration", price: 3500 },
        { id: 's3', name: "Science Lab Materials", price: 2000 },
        { id: 's4', name: "Graduation Gown", price: 1500 }
      ]
    }
  };

  const currentFees = schoolLevel === "Secondary" 
    ? feeOptions.Secondary[studentType] 
    : feeOptions[schoolLevel];

  const total = selectedFees.reduce((acc, curr) => acc + curr.price, 0);

  const toggleFee = (fee) => {
    if (selectedFees.find(f => f.id === fee.id)) {
      setSelectedFees(selectedFees.filter(f => f.id !== fee.id));
    } else {
      setSelectedFees([...selectedFees, fee]);
    }
  };

  return (
    <div className="fin-container">
      <div className="fin-header">
        <h1>Finance & <span className="blue-text">Payments</span></h1>
        <marquee ><p className="assured">... Welcome to NDOWS Payment Portal. You can securely pay your school dues either via Wave Mobile Money, Bank Transfer or with your card details....</p></marquee>
      </div>

      <div className="fin-grid">
        {/* LEFT: SELECTION & FEES */}
        <div className="fin-left-panel">
          <div className="fin-filter-box">
            <h3>Student Context</h3>
            <div className="filter-row">
              <select onChange={(e) => setSchoolLevel(e.target.value)}>
                <option value="Nursery">Nursery School</option>
                <option value="Basic">Lower Basic School</option>
                <option value="Secondary">Secondary School</option>
              </select>

              {schoolLevel === "Secondary" && (
                <select onChange={(e) => setStudentType(e.target.value)}>
                  <option value="Junior">Junior Secondary (JSS)</option>
                  <option value="Senior">Senior Secondary (SSS)</option>
                </select>
              )}
            </div>
          </div>

          <div className="fee-list">
            <h3>Available Payments</h3>
            {currentFees.map(fee => (
              <div 
                key={fee.id} 
                className={`fee-item ${selectedFees.find(f => f.id === fee.id) ? 'selected' : ''}`}
                onClick={() => toggleFee(fee)}
              >
                <div className="fee-name">
                  <LuCheckCheck className="check-icon" />
                  {fee.name}
                </div>
                <div className="fee-price">D{fee.price.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: CHECKOUT & SCAN TO PAY */}
        <div className="fin-right-panel">
          <div className="summary-card">
            <h3>Payment Summary</h3>
            <div className="summary-lines">
              {selectedFees.map(f => (
                <div key={f.id} className="s-line"><span>{f.name}</span> <span>D{f.price}</span></div>
              ))}
            </div>
            <div className="total-line">
              <span>Total Amount:</span>
              <span>D{total.toLocaleString()}</span>
            </div>

            <div className="payment-methods">
              <p>Select Method:</p>
              <div className="method-btns">
                <button className="m-btn"><LuWallet /> Wave / QMoney</button>
                <button className="m-btn active"><LuQrCode /> Scan to Pay</button>
                <button className="m-btn"><LuCreditCard /> Bank Transfer</button>
              </div>
            </div>

            {/* SCAN TO PAY SECTION */}
            <div className="qr-section">
              <div className="qr-placeholder">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=NdowsPay" alt="QR Code" />
              </div>
              <p>Scan with Wave or Banking App to pay <strong>D{total}</strong></p>
            </div>

            <button className="pay-now-btn" disabled={total === 0}>
              CONFIRM PAYMENT
            </button>
          </div>

          <div className="bank-details-card">
            <h4>Direct Bank Deposit</h4>
            <p><strong>Account Name:</strong> Ndows Comprehensive</p>
            <p><strong>Bank:</strong> Trust Bank Gambia</p>
            <p><strong>Account:</strong> 110-XXXXXX-01</p>
          </div>
        </div>
      </div>
    </div>
  );
}