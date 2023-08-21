import { postAPI } from "@/utils/fetchAPIs";
import React, { useEffect, useState } from "react";

export default function FamilyHistory({ addBtn, p_id }) {
  const [addForm, setAddForm] = useState({
    p_id: parseInt(p_id),
    p_infective: "",
    p_noninfective: "",
    p_surgical: "",
    p_obs_gynae: "",
    p_parity: "",
    m_infective: "",
    m_noninfective: "",
    m_surgical: "",
    m_obs_gynae: "",
    m_parity: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setAddForm({ ...addForm, [name]: value });
  };

  const getFamilyHistory = async () => {
    const data = await postAPI("appointments/getFamilyHistory", { p_id }, null);
    if (data?.status) {
      setAddForm(data?.data[0]);
    }
  };

  useEffect(() => {
    (async () => {
      if (p_id) {
        setAddForm({ ...addForm, p_id: parseInt(p_id) });
        await getFamilyHistory();
      }
    })();
  }, [p_id]);

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
                    id="p_infective"
                    name="p_infective"
                    value={addForm?.p_infective}
                    onChange={(e) => handleInput(e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control pb-2"
                    id="m_infective"
                    name="m_infective"
                    value={addForm?.m_infective}
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
                    id="p_noninfective"
                    name="p_noninfective"
                    value={addForm?.p_noninfective}
                    onChange={(e) => handleInput(e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control pb-2"
                    id="m_noninfective"
                    name="m_noninfective"
                    value={addForm?.m_noninfective}
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
                    id="p_surgical"
                    name="p_surgical"
                    value={addForm?.p_surgical}
                    onChange={(e) => handleInput(e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control pb-2"
                    id="m_surgical"
                    name="m_surgical"
                    value={addForm?.m_surgical}
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
                    id="p_obs_gynae"
                    name="p_obs_gynae"
                    value={addForm?.p_obs_gynae}
                    onChange={(e) => handleInput(e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control pb-2"
                    id="m_obs_gynae"
                    name="m_obs_gynae"
                    value={addForm?.m_obs_gynae}
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
                    id="p_parity"
                    name="p_parity"
                    value={addForm?.p_parity}
                    onChange={(e) => handleInput(e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control pb-2"
                    id="m_parity"
                    name="m_parity"
                    value={addForm?.m_parity}
                    onChange={(e) => handleInput(e)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-end py-3">
          <button
            onClick={() => addBtn(1, addForm)}
            className="btn fw-bold btn-primary"
          >
            SAVE and NEXT
          </button>
        </div>
      </div>
    </>
  );
}
