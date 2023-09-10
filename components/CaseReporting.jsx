import React, { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { chooseDiseaseOptions } from "@/utils/choose";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { getAPI, postAPI, uploadAPI } from "@/utils/fetchAPIs";
import { toast } from "react-toastify";

export default function CaseReportingCom({ p_id, getData }) {
  const animatedComponents = makeAnimated();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [imgFile, setImgFile] = useState(null);
  const [addForm, setAddForm] = useState({
    p_id: parseInt(p_id),
    date: new Date().toISOString(),
    system: "",
    image: "",
    remarks: "",
  });
  const [pInfo, setPInfo] = useState(null);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setAddForm({ ...addForm, [name]: value });
  };

  const handleDropdown = (val) => {
    setAddForm({ ...addForm, system: val?.value });
  };

  const handleImgUpload = async () => {
    const uploadAPICall = async () => {
      let data = await uploadAPI("upload", imgFile[0]);
      if (data?.status) {
        console.log(data?.data);
        return data?.data?.fileName;
      }
      return null;
    };
    if (imgFile && imgFile.length !== 0) {
      return uploadAPICall();
    }
  };

  const addBtn = async () => {
    let uploadImgData = await handleImgUpload();
    let formData = null;
    if (uploadImgData) {
      // setAddForm({ ...addForm, image: uploadImgData });
      formData = { ...addForm, image: uploadImgData };
      toast.success("Disase image uploaded successfully");
    }

    if (formData) {
      const data = await postAPI("patients/addReporting", formData, null);
      if (data?.status) {
        toast.success("Case Reporting is added succesfully");
        await getData();
        setAddForm({
          p_id: parseInt(p_id),
          date: new Date().toISOString(),
          system: "",
          image: "",
          remarks: "",
        });
      } else {
        toast.error("Case Reporting is not added. Try Again!");
      }
    }
  };

  useEffect(() => {
    if (p_id) {
      (async () => {
        const data = await getAPI(`patients/${p_id}`, null);
        if (data?.status) {
          setPInfo(data?.data[0]);
        }
      })();
    }
  }, [p_id]);

  return (
    <>
      <div className="">
        <h1>
          Add Case Reporting for {pInfo?.name} ({pInfo?.patient_id})
        </h1>
        <div className="row pt-5">
          <div className="col-md-4 col-12">
            <div className="pb-5">
              <label htmlFor="date">Date (mm/dd/yyyy)</label> <br />
              <DatePicker
                selected={selectedDate}
                className="form-control pb-2"
                onChange={(date) => {
                  setSelectedDate(date);
                  setAddForm({
                    ...addForm,
                    date: new Date(date).toISOString(),
                  });
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
                isMulti={false}
                onChange={(val) => handleDropdown(val)}
                defaultValue={{
                  label: addForm?.system,
                  value: addForm?.system,
                }}
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
                onChange={(e) => setImgFile(e.target.files)}
                accept="image/png, image/jpeg, image/jpg"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="pb-5">
              <label htmlFor="remark">Remark</label>
              <textarea
                name="remarks"
                id="remarks"
                rows="6"
                className="form-control pb-2"
                value={addForm?.remarks}
                onChange={(e) => handleInput(e)}
              ></textarea>
            </div>
          </div>
        </div>

        <div className="text-end py-3">
          <button onClick={addBtn} className="btn fw-bold btn-primary">
            ADD CASE REPORTING
          </button>
        </div>
      </div>
    </>
  );
}
