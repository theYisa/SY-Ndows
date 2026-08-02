import { LuAlignEndVertical, LuCreditCard, LuHistory, LuSend } from 'react-icons/lu';
import './spay.css'
export default function Spay() {
  const paymentStats = {
    totalDue: "D25,000",
    totalPaid: "D18,750",
    balance: "D6,250",
    nextDeadline: "April 15, 2026"
  };

  const history = [
    { id: 1, date: "12 Jan 2026", type: "Tuition", amount: "D10,000", status: "Verified" },
    { id: 2, date: "05 Feb 2026", type: "Lab Fee", amount: "D3,750", status: "Verified" },
    { id: 3, date: "01 Mar 2026", type: "Uniform", amount: "D5,000", status: "Pending" },
  ];

  return (
    <div className="pay-full">

      <section className="b-overview glass-box">
        <div className="balance-info">
          <p>Current Outstanding Balance</p>
          <h2 className="balance-amount">{paymentStats.balance}</h2>
          <div className="deadline-tag">
            <LuSend /> Next Due: {paymentStats.nextDeadline}
          </div>
        </div>
        <div className="payment-visual">
          <div className="circle-progress">
            <span className="percentage">75%</span>
            <p>Paid</p>
          </div>
        </div>
      </section>

      <div className="payment-grid">
        <div className="pay-methods glass-box"> 
          <div className="pay-head"> <h3><LuCreditCard /> How to Pay</h3></div>
          <div className="method-item">
            <strong>Bank Transfer (Ecobank/GTBank)</strong>
            <p>Acc Name: Ndows Comprehensive</p>
            <p>Acc No: 123456789011</p>
          </div>
          <div className="method-item">
            <strong>School Finance Office</strong>
            <p>Cash or Cheque payments accepted Mon-Fri (8am-2pm)</p>
          </div>
          <button className="notify-btn">I've made a payment</button>
        </div>

        <div className="pay-history glass-box">
          <h3><LuHistory /> Recent Transactions</h3>
          
          <div className="table-wrapper">
            <table className="dash-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {history.map(item => (
                  <tr key={item.id}>
                    <td>{item.date}</td>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>
                      <span className={`status-pill ${item.status.toLowerCase()}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}