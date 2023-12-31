import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { chooseAppointmentTypeOptions, chooseSexOptions } from "@/utils/choose";
import { getFormattedDate } from "@/utils/getDateTimeNow";

export default function PersonalInfo({
  form,
  setForm,
  addBtn,
  selectedDate,
  setSelectedDate,
}) {
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
          <div className="col-md-6 col-12">
            <div className="pb-5">
              <label htmlFor="date">Date (mm/dd/yyyy)</label>
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
                defaultValue={chooseSexOptions[0]}
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
          <div className="col-md-6 col-12">
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
          </div>
          <div className="col-md-6 col-12">
            <div className="pb-5">
              <label htmlFor="address">Appointment Type</label>
              <Select
                options={chooseAppointmentTypeOptions}
                components={animatedComponents}
                defaultValue={chooseAppointmentTypeOptions[0]}
                isMulti={false}
                name="appointment_type"
                onChange={(e) =>
                  setForm({ ...form, appointment_type: e.value })
                }
              ></Select>
            </div>
          </div>
        </div>

        <div className="text-end py-3">
          <button
            onClick={() => addBtn("new")}
            className="btn fw-bold btn-primary"
          >
            ADD APPOINTMENT
          </button>
        </div>
      </div>
    </>
  );
}
