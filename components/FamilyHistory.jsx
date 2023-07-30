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
        <h1 className="pb-5">Add Family History</h1>
        <div className="table-responsive">
          <table className="table table-border">
            <thead>
              <tr>
                <th scope="col">P/H</th>
                <th scope="col">PATERNAL HISTORY</th>
                <th scope="col">MATERNAL HISTORY</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">INFECTIVE</th>
                <td>
                  <input
                    type="text"
                    className="form-control pb-2"
                    id="paternal"
                    name="paternal"
                    value={addForm?.paternal}
                    onChange={(e) => handleInput(e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control pb-2"
                    id="paternal"
                    name="paternal"
                    value={addForm?.paternal}
                    onChange={(e) => handleInput(e)}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">NON-INFECTIVE</th>
                <td>
                  <input
                    type="text"
                    className="form-control pb-2"
                    id="paternal"
                    name="paternal"
                    value={addForm?.paternal}
                    onChange={(e) => handleInput(e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control pb-2"
                    id="paternal"
                    name="paternal"
                    value={addForm?.paternal}
                    onChange={(e) => handleInput(e)}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">SURGICAL</th>
                <td>
                  <input
                    type="text"
                    className="form-control pb-2"
                    id="paternal"
                    name="paternal"
                    value={addForm?.paternal}
                    onChange={(e) => handleInput(e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control pb-2"
                    id="paternal"
                    name="paternal"
                    value={addForm?.paternal}
                    onChange={(e) => handleInput(e)}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">OBS + GYNAE</th>
                <td>
                  <input
                    type="text"
                    className="form-control pb-2"
                    id="paternal"
                    name="paternal"
                    value={addForm?.paternal}
                    onChange={(e) => handleInput(e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control pb-2"
                    id="paternal"
                    name="paternal"
                    value={addForm?.paternal}
                    onChange={(e) => handleInput(e)}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">PARITY</th>
                <td>
                  <input
                    type="text"
                    className="form-control pb-2"
                    id="paternal"
                    name="paternal"
                    value={addForm?.paternal}
                    onChange={(e) => handleInput(e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control pb-2"
                    id="paternal"
                    name="paternal"
                    value={addForm?.paternal}
                    onChange={(e) => handleInput(e)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-end py-3">
          <button onClick={addBtn} className="btn fw-bold btn-primary">
            SAVE and NEXT
          </button>
        </div>
      </div>
    </>
  );
}
