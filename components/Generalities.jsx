import React, { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {
  chooseDreamsOptions,
  chooseSweatOptions,
  chooseThirstOptions,
} from "@/utils/choose";
import { postAPI } from "@/utils/fetchAPIs";

export default function Generalities({ addBtn, p_id }) {
  const animatedComponents = makeAnimated();
  const [addForm, setAddForm] = useState({
    p_id: parseInt(p_id),
    sweat: "",
    skin: "",
    teeth_gum: "",
    tongue: "",
    mental: "",
    thirst: "",
    dreams: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setAddForm({ ...addForm, [name]: value });
  };

  const handleSweetDropdown = (val) => {
    setAddForm({ ...addForm, sweat: val?.value });
  };

  const handleThirstDropdown = (val) => {
    setAddForm({ ...addForm, thirst: val?.value });
  };

  const handleDreamsDropdown = (val) => {
    setAddForm({ ...addForm, dreams: val?.value });
  };

  console.log(addForm);

  const getGeneralities = async () => {
    const data = await postAPI("appointments/getGeneralities", { p_id }, null);
    if (data?.status) {
      setAddForm(data?.data[0]);
    }
  };

  useEffect(() => {
    (async () => {
      if (p_id) {
        await getGeneralities();
      }
    })();
  }, [p_id]);

  return (
    <>
      <div>
        <h1>Add Generalities</h1>
        <div className="row pt-5">
          <div className="col-md-4 col-12">
            <div className="pb-5">
              <label htmlFor="sex">Sweat</label>
              <Select
                options={chooseSweatOptions}
                components={animatedComponents}
                isMulti={false}
                onChange={(val) => handleSweetDropdown(val)}
                defaultValue={{
                  label: addForm?.sweat,
                  value: addForm?.sweat,
                }}
              ></Select>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="pb-5">
              <label htmlFor="skin">Skin</label>
              <input
                type="text"
                className="form-control pb-2"
                id="skin"
                name="skin"
                value={addForm?.skin}
                onChange={(e) => handleInput(e)}
              />
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="pb-5">
              <label htmlFor="teeth_gum">Teeth+Gum</label>
              <input
                type="text"
                className="form-control pb-2"
                id="teeth_gum"
                name="teeth_gum"
                value={addForm?.teeth_gum}
                onChange={(e) => handleInput(e)}
              />
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="pb-5">
              <label htmlFor="tongue">Tongue</label>
              <input
                type="text"
                className="form-control pb-2"
                id="tongue"
                name="tongue"
                value={addForm?.tongue}
                onChange={(e) => handleInput(e)}
              />
            </div>
          </div>

          <div className="col-md-4 col-12">
            <div className="pb-5">
              <label htmlFor="mental">Mental</label>
              <input
                type="text"
                className="form-control pb-2"
                id="mental"
                name="mental"
                value={addForm?.mental}
                onChange={(e) => handleInput(e)}
              />
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="pb-5">
              <label htmlFor="mental">Thirst</label>
              <Select
                options={chooseThirstOptions}
                components={animatedComponents}
                isMulti={false}
                onChange={(val) => handleThirstDropdown(val)}
                defaultValue={{
                  label: addForm?.thirst,
                  value: addForm?.thirst,
                }}
              ></Select>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="pb-5">
              <label htmlFor="dreams">Dreams</label>
              <Select
                options={chooseDreamsOptions}
                components={animatedComponents}
                isMulti={false}
                onChange={(val) => handleDreamsDropdown(val)}
                defaultValue={{
                  label: addForm?.dreams,
                  value: addForm?.dreams,
                }}
              ></Select>
            </div>
          </div>
        </div>

        <div className="text-end py-3">
          <button
            onClick={() => addBtn(5, addForm)}
            className="btn fw-bold btn-primary"
          >
            SAVE
          </button>
        </div>
      </div>
    </>
  );
}
