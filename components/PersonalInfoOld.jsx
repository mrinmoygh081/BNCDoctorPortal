import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { chooseSexOptions } from "@/utils/choose";

export default function PersonalInfoOld() {
  const animatedComponents = makeAnimated();
  const [addForm, setAddForm] = useState({
    patientId: "",
    date: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setAddForm({ ...addForm, [name]: value });
  };

  const addBtn = async () => {
    if (addForm?.productline_name !== "") {
      const data = await postAPI("productlines", addForm, null);
      if (data?.status) {
        toast.success("Product Line is added succesfully");
        await getData();
        setAddForm({
          patientId: "",
          date: "",
        });
      } else {
        toast.error("Product data is not added. Try Again!");
      }
    } else {
      toast.error("Please fill all the fields");
    }
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
                value={addForm?.date}
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
                value={addForm?.patientId}
                onChange={(e) => handleInput(e)}
              />
            </div>
          </div>
        </div>

        <div className="text-end py-3">
          <button onClick={addBtn} className="btn fw-bold btn-primary">
            ADD APPOINTMENT
          </button>
        </div>
      </div>
    </>
  );
}
