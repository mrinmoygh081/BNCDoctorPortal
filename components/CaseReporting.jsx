import React, { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { chooseDiseaseOptions } from "@/utils/choose";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function CaseReportingCom() {
  const animatedComponents = makeAnimated();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [addForm, setAddForm] = useState({
    date: new Date(),
    remark: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setAddForm({ ...addForm, [name]: value });
  };

  //   useEffect(() => {
  //     const today = getDateToday();
  //     console.log("today: " + today);
  //     setAddForm({ ...addForm, date: new Date(today) });
  //   }, []);

  const addBtn = async () => {
    if (addForm?.productline_name !== "") {
      const data = await postAPI("productlines", addForm, null);
      if (data?.status) {
        toast.success("Product Line is added succesfully");
        await getData();
        setAddForm({
          date: "",
          remark: "",
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
        <h1>Add Case Reporting</h1>
        <div className="row pt-5">
          <div className="col-md-4 col-12">
            <div className="pb-5">
              <label htmlFor="date">Date</label> <br />
              <DatePicker
                selected={selectedDate}
                className="form-control pb-2"
                value={addForm?.date}
                onChange={(date) => {
                  setSelectedDate(date);
                  setAddForm({ ...addForm, date: date.toLocaleDateString() });
                }}
                minDate={new Date()}
              />
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="pb-5">
              <label htmlFor="paternal">System</label>
              <Select
                options={chooseDiseaseOptions}
                components={animatedComponents}
                isMulti={true}
              ></Select>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="pb-5">
              <label htmlFor="diseases">Disease Image</label>
              <input
                type="file"
                className="form-control pb-2"
                id="diseases"
                name="diseases"
                value={addForm?.diseases}
                onChange={(e) => handleInput(e)}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="pb-5">
              <label htmlFor="remark">Remark</label>
              <textarea
                name="remark"
                id="remark"
                rows="6"
                className="form-control pb-2"
                value={addForm?.remark}
                onChange={(e) => handleInput(e)}
              ></textarea>
            </div>
          </div>
        </div>

        <div className="text-end py-3">
          <button onClick={addBtn} className="btn fw-bold btn-primary">
            ADD CASH REPORTING
          </button>
        </div>
      </div>
    </>
  );
}
