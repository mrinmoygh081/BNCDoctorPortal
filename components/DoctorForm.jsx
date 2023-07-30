import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { chooseDiseaseOptions, chooseDoctorOptions } from "@/utils/choose";

export default function DoctorForm() {
  const animatedComponents = makeAnimated();
  const [addForm, setAddForm] = useState({
    doctor: "",
  });
  const addBtn = async () => {};

  return (
    <>
      <div className="">
        <h1>Add Doctor</h1>
        <div className="row pt-5">
          <div className="col-12">
            <div className="pb-5">
              <label htmlFor="paternal">Doctor</label>
              <Select
                options={chooseDoctorOptions}
                components={animatedComponents}
                isMulti={false}
                defaultValue={chooseDoctorOptions[0]}
              ></Select>
            </div>
          </div>
        </div>

        <div className="text-end py-3">
          <button onClick={addBtn} className="btn fw-bold btn-primary">
            SAVE
          </button>
        </div>
      </div>
    </>
  );
}
