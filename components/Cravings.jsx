import React from "react";

export default function Cravings() {
  const addBtn = async () => {};
  return (
    <>
      <div className="toggleBtns">
        <div className="toggleBtn">
          <input type="checkbox" id="toggle-btn" />
          <label htmlFor="toggle-btn"></label>
          <span className="labelName">SWEET</span>
        </div>
        <div className="toggleBtn">
          <input type="checkbox" id="toggle-btn2" />
          <label htmlFor="toggle-btn2"></label>
          <span className="labelName">SALTY</span>
        </div>
        <div className="toggleBtn">
          <input type="checkbox" id="toggle-btn3" />
          <label htmlFor="toggle-btn3"></label>
          <span className="labelName">SOUR</span>
        </div>
        <div className="toggleBtn">
          <input type="checkbox" id="toggle-btn4" />
          <label htmlFor="toggle-btn4"></label>
          <span className="labelName">SPICY</span>
        </div>
        <div className="toggleBtn">
          <input type="checkbox" id="toggle-btn5" />
          <label htmlFor="toggle-btn5"></label>
          <span className="labelName">BITTER</span>
        </div>
        <div className="toggleBtn">
          <input type="checkbox" id="toggle-btn4" />
          <label htmlFor="toggle-btn4"></label>
          <span className="labelName">FISH</span>
        </div>
        <div className="toggleBtn">
          <input type="checkbox" id="toggle-btn6" />
          <label htmlFor="toggle-btn6"></label>
          <span className="labelName">MEAT</span>
        </div>
        <div className="toggleBtn">
          <input type="checkbox" id="toggle-btn7" />
          <label htmlFor="toggle-btn7"></label>
          <span className="labelName">Diabetes</span>
        </div>
        <div className="toggleBtn">
          <input type="checkbox" id="toggle-btn8" />
          <label htmlFor="toggle-btn8"></label>
          <span className="labelName">EGG</span>
        </div>
        <div className="toggleBtn">
          <input type="checkbox" id="onion" />
          <label htmlFor="onion"></label>
          <span className="labelName">ONION</span>
        </div>
      </div>
      <div className="text-end py-3">
        <button onClick={addBtn} className="btn fw-bold btn-primary">
          ADD CRAVINGS
        </button>
      </div>
    </>
  );
}
