import React from "react";
import { IPH } from "@/data/WebData";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { chooseMarritalStatusOptions } from "@/utils/choose";

export default function PersonalHistory({ addBtn }) {
  const animatedComponents = makeAnimated();

  return (
    <>
      <h1 className="pb-2">INFECTIVE PERSONAL HISTORY</h1>
      <div className="toggleBtns pb-5">
        {IPH &&
          IPH.map((item, index) => (
            <div className="toggleBtn" key={index}>
              <input type="checkbox" id={item} />
              <label htmlFor={item}></label>
              <span className="labelName">{item}</span>
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
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-12">
          <div className="pb-5">
            <label htmlFor="Addiction">Addiction</label>
            <input
              type="text"
              className="form-control pb-2"
              id="Addiction"
              name="Addiction"
            />
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="pb-5">
            <label htmlFor="MarritalStatus">Marrital Status</label>
            <Select
              options={chooseMarritalStatusOptions}
              components={animatedComponents}
              isMulti={false}
              className="pb-2"
              id="MarritalStatus"
              name="MarritalStatus"
            ></Select>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="pb-5">
            <label htmlFor="child_num">NO. of CHILD</label>
            <input
              type="text"
              className="form-control pb-2"
              id="child_num"
              name="child_num"
            />
          </div>
        </div>
      </div>
      <div className="text-end py-3">
        <button onClick={addBtn} className="btn fw-bold btn-primary">
          SAVE and NEXT
        </button>
      </div>
    </>
  );
}
