import { getFormattedDate } from "@/utils/getDateTimeNow";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function PersonalInfoOld({
  form,
  setForm,
  addBtn,
  selectedDate,
  setSelectedDate,
}) {
  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <>
      <div className="">
        <h1>Add Personal Info</h1>
        <div className="row pt-5">
          <div className="col-md-6 col-12">
            <div className="pb-5">
              <label htmlFor="date">Date(mm/dd/yyyy)</label>
              <br />
              <DatePicker
                selected={selectedDate}
                className="form-control pb-2"
                onChange={(date) => {
                  console.log(getFormattedDate(new Date(date)));
                  setSelectedDate(date);
                  setForm({
                    ...form,
                    booking_date: getFormattedDate(new Date(date)),
                  });
                }}
                minDate={new Date()}
              />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="pb-5">
              <label htmlFor="patient_id">Patient Id</label>
              <input
                type="text"
                className="form-control pb-2"
                id="patient_id"
                name="patient_id"
                value={form?.patient_id}
                onChange={(e) => handleInput(e)}
              />
            </div>
          </div>
        </div>

        <div className="text-end py-3">
          <button
            onClick={() => addBtn("old")}
            className="btn fw-bold btn-primary"
          >
            ADD APPOINTMENT
          </button>
        </div>
      </div>
    </>
  );
}
