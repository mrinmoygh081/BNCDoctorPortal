import { cravings } from "@/data/WebData";
import { postAPI } from "@/utils/fetchAPIs";
import React, { useEffect, useState } from "react";

export default function Cravings({ addBtn, p_id }) {
  const [checkboxes, setCheckboxes] = useState([]);
  const [addForm, setAddForm] = useState({
    p_id: parseInt(p_id),
    cravings: "[]",
  });

  const handleChange = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setCheckboxes([...checkboxes, value]);
    } else {
      setCheckboxes(checkboxes.filter((item) => item !== value));
    }
  };

  useEffect(() => {
    setAddForm({ ...addForm, cravings: JSON.stringify(checkboxes) });
  }, [checkboxes]);

  const getCravings = async () => {
    const data = await postAPI("appointments/getCravings", { p_id }, null);
    if (data?.status) {
      setAddForm(data?.data[0]);
      setCheckboxes(JSON.parse(data?.data[0]?.cravings));
    }
  };

  useEffect(() => {
    (async () => {
      if (p_id) {
        await getCravings();
      }
    })();
  }, [p_id]);

  return (
    <>
      <div className="toggleBtns">
        {cravings &&
          cravings.map((item, index) => (
            <div className="toggleBtn" key={index}>
              {JSON.parse(addForm?.cravings).includes(item) ? (
                <input
                  type="checkbox"
                  id={item}
                  name="cravings"
                  value={item}
                  onChange={handleChange}
                  checked={true}
                />
              ) : (
                <input
                  type="checkbox"
                  id={item}
                  name="cravings"
                  value={item}
                  onChange={handleChange}
                  checked={false}
                />
              )}
              <label htmlFor={item} className="labelName">
                {item}
              </label>
            </div>
          ))}
      </div>
      <div className="text-end py-3">
        <button
          onClick={() => addBtn(4, addForm)}
          className="btn fw-bold btn-primary"
        >
          ADD CRAVINGS
        </button>
      </div>
    </>
  );
}
