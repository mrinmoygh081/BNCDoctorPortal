import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { chooseSexOptions } from "@/utils/choose";

export default function PersonalInfo({ form, setForm, addBtn }) {
  const animatedComponents = makeAnimated();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <>
      <div className="">
        <h1>Add Personal Info</h1>
        <div className="row pt-5">
          <div className="col-12">
            <div className="pb-5">
              <label htmlFor="date">Booking Date</label>
              <input
                type="date"
                className="form-control pb-2"
                id="date"
                name="date"
                value={form?.date}
                onChange={(e) => handleInput(e)}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="pb-5">
              <label htmlFor="patientId">Patient Id</label>
              <input
                type="text"
                className="form-control pb-2"
                id="patientId"
                name="patientId"
                value={form?.patientId}
                onChange={(e) => handleInput(e)}
              />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="pb-5">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control pb-2"
                id="name"
                name="name"
                value={form?.name}
                onChange={(e) => handleInput(e)}
              />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="pb-5">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="form-control pb-2"
                id="phone"
                name="phone"
                value={form?.phone}
                onChange={(e) => handleInput(e)}
              />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="pb-5">
              <label htmlFor="sex">Sex</label>
              <Select
                options={chooseSexOptions}
                components={animatedComponents}
                isMulti={false}
                name="sex"
                onChange={(e) => setForm({ ...form, sex: e.value })}
              ></Select>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="pb-5">
              <label htmlFor="age">Age</label>
              <input
                type="text"
                className="form-control pb-2"
                id="age"
                name="age"
                value={form?.age}
                onChange={(e) => handleInput(e)}
              />
            </div>
          </div>
        </div>
        <div className="pb-5">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control pb-2"
            id="address"
            name="address"
            value={form?.address}
            onChange={(e) => handleInput(e)}
          />
        </div>

        <div className="text-end py-3">
          <button onClick={addBtn} className="btn fw-bold btn-primary">
            ADD PERSONAL INFO
          </button>
        </div>
      </div>
    </>
  );
}
