import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {
  chooseDreamsOptions,
  chooseSweatOptions,
  chooseThirstOptions,
} from "@/utils/choose";

export default function Generalities() {
  const animatedComponents = makeAnimated();
  const [addForm, setAddForm] = useState({
    paternal: "",
    maternal: "",
  });
  const addBtn = async () => {};

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
              <label htmlFor="teeth">Teeth+Gum</label>
              <input
                type="text"
                className="form-control pb-2"
                id="teeth"
                name="teeth"
                value={addForm?.teeth}
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
              ></Select>
            </div>
          </div>
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
