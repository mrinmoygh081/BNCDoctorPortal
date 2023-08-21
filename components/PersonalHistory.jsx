import React, { useEffect, useState } from "react";
import { IPH } from "@/data/WebData";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { chooseMarritalStatusOptions } from "@/utils/choose";
import { postAPI } from "@/utils/fetchAPIs";

export default function PersonalHistory({ addBtn, p_id }) {
  const animatedComponents = makeAnimated();
  const [checkboxes, setCheckboxes] = useState([]);
  const [addForm, setAddForm] = useState({
    p_id: parseInt(p_id),
    infective_history: "[]",
    injuries: "",
    vaccination: "",
    surgical: "",
    addiction: "",
    marital_status: "",
    num_child: "",
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
    setAddForm({ ...addForm, infective_history: JSON.stringify(checkboxes) });
  }, [checkboxes]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setAddForm({ ...addForm, [name]: value });
  };

  const handleDropdown = (val) => {
    setAddForm({ ...addForm, marital_status: val?.value });
  };

  const getPersonalHistory = async () => {
    const data = await postAPI(
      "appointments/getPersonalHistory",
      { p_id },
      null
    );
    if (data?.status) {
      setAddForm(data?.data[0]);
      setCheckboxes(JSON.parse(data?.data[0]?.infective_history));
    }
  };

  useEffect(() => {
    (async () => {
      if (p_id) {
        setAddForm({ ...addForm, p_id: parseInt(p_id) });
        await getPersonalHistory();
      }
    })();
  }, [p_id]);

  return (
    <>
      <h1 className="pb-2">INFECTIVE PERSONAL HISTORY</h1>
      <div className="toggleBtns pb-5">
        {IPH &&
          IPH.map((item, index) => (
            <div className="toggleBtn" key={index}>
              {JSON.parse(addForm?.infective_history).includes(item) ? (
                <input
                  type="checkbox"
                  id={item}
                  name="infective"
                  value={item}
                  onChange={handleChange}
                  checked={true}
                />
              ) : (
                <input
                  type="checkbox"
                  id={item}
                  name="infective"
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
      <h1 className="py-2">NONINFECTIVE PERSONAL HISTORY</h1>
      <div className="row">
        <div className="col-md-4 col-12">
          <div className="pb-5">
            <label htmlFor="injuries">Injuries</label>
            <input
              type="text"
              className="form-control pb-2"
              id="injuries"
              name="injuries"
              value={addForm?.injuries}
              onChange={(e) => handleInput(e)}
            />
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="pb-5">
            <label htmlFor="vaccination">Vaccination</label>
            <input
              type="text"
              className="form-control pb-2"
              id="vaccination"
              name="vaccination"
              value={addForm?.vaccination}
              onChange={(e) => handleInput(e)}
            />
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="pb-5">
            <label htmlFor="surgical">Surgical History</label>
            <input
              type="text"
              className="form-control pb-2"
              id="surgical"
              name="surgical"
              value={addForm?.surgical}
              onChange={(e) => handleInput(e)}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-12">
          <div className="pb-5">
            <label htmlFor="addiction">Addiction</label>
            <input
              type="text"
              className="form-control pb-2"
              id="addiction"
              name="addiction"
              value={addForm?.addiction}
              onChange={(e) => handleInput(e)}
            />
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="pb-5">
            <label htmlFor="marital_status">Marital Status</label>
            <Select
              options={chooseMarritalStatusOptions}
              components={animatedComponents}
              isMulti={false}
              className="pb-2"
              id="marital_status"
              name="marital_status"
              onChange={(val) => handleDropdown(val)}
              defaultValue={{
                label: addForm?.marital_status,
                value: addForm?.marital_status,
              }}
            ></Select>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="pb-5">
            <label htmlFor="num_child">NO. of CHILD</label>
            <input
              type="text"
              className="form-control pb-2"
              id="num_child"
              name="num_child"
              value={addForm?.num_child}
              onChange={(e) => handleInput(e)}
            />
          </div>
        </div>
      </div>
      <div className="text-end py-3">
        <button
          onClick={() => addBtn(2, addForm)}
          className="btn fw-bold btn-primary"
        >
          SAVE and NEXT
        </button>
      </div>
    </>
  );
}
