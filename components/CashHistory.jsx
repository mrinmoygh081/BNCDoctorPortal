import { getDateToday } from "@/utils/getDateTimeNow";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { chooseDiseaseOptions } from "@/utils/choose";

export default function CashHistory() {
  const animatedComponents = makeAnimated();
  const today = getDateToday();
  const [addForm, setAddForm] = useState({
    date: today,
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
        <h1>Add Cash History</h1>
        <div className="row pt-5">
          <div className="col-12">
            <div className="pb-5">
              <label htmlFor="date">Date</label>
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
              <label htmlFor="diseases">Diseases</label>
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
              <label htmlFor="paternal">Diseases</label>
              <Select
                options={chooseDiseaseOptions}
                components={animatedComponents}
                isMulti={true}
              ></Select>
            </div>
          </div>
          <div className="col-12">
            <div className="pb-5">
              <label htmlFor="remark">Remark</label>
              <textarea
                name="remark"
                id="remark"
                rows="8"
                className="form-control pb-2"
                value={addForm?.remark}
                onChange={(e) => handleInput(e)}
              ></textarea>
            </div>
          </div>
        </div>

        <div className="text-end py-3">
          <button onClick={addBtn} className="btn fw-bold btn-primary">
            ADD CASH HISTORY
          </button>
        </div>
      </div>
    </>
  );
}
