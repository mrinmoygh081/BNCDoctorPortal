import React, { useState } from "react";

export default function FamilyHistory() {
  const [addForm, setAddForm] = useState({
    paternal: "",
    maternal: "",
  });
  const addBtn = async () => {};

  return (
    <>
      <div className="">
        <h1>Add Family History</h1>
        <div className="row pt-5">
          <div className="col-12">
            <div className="pb-5">
              <label htmlFor="paternal">Paternal History</label>
              <input
                type="text"
                className="form-control pb-2"
                id="paternal"
                name="paternal"
                value={addForm?.paternal}
                onChange={(e) => handleInput(e)}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="pb-5">
              <label htmlFor="maternal">Maternal History</label>
              <input
                type="text"
                className="form-control pb-2"
                id="maternal"
                name="maternal"
                value={addForm?.maternal}
                onChange={(e) => handleInput(e)}
              />
            </div>
          </div>
        </div>

        <div className="text-end py-3">
          <button onClick={addBtn} className="btn fw-bold btn-primary">
            ADD FAMILY HISTORY
          </button>
        </div>
      </div>
    </>
  );
}
