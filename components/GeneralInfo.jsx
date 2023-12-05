import React, { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {
  chooseAppointmentTypeOptions,
  chooseDiseaseOptions,
  chooseDoctorOptions,
  chooseSexOptions,
} from "@/utils/choose";
import { getAPI, postAPI } from "@/utils/fetchAPIs";
import { toast } from "react-toastify";

export default function GeneralInfo({ addBtn, p_id }) {
  const animatedComponents = makeAnimated();
  const [addForm, setAddForm] = useState({
    p_id: parseInt(p_id),
    name: "",
    phone: "",
    sex: "",
    age: "",
    address: "",
    appointment_type: "",
  });

  useEffect(() => {
    (async () => {
      const { data, status } = await getAPI(`patients/${p_id}`, null);
      console.log(data[0]);
      if (status) {
        const { name, phone, sex, age, address, appointment_type } = data[0];
        setAddForm({
          ...addForm,
          name,
          phone,
          sex,
          age,
          address,
          appointment_type,
        });
      }
    })();
  }, [p_id]);

  console.log(addForm);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setAddForm({ ...addForm, [name]: value });
  };

  return (
    <>
      <div className="">
        <h1>Update General Info</h1>
        <div className="row pt-5">
          <div className="col-md-6 col-12">
            <div className="pb-5">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control pb-2"
                id="name"
                name="name"
                value={addForm?.name}
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
                value={addForm?.phone}
                onChange={(e) => handleInput(e)}
              />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="pb-5">
              <label htmlFor="sex">Sex</label>
              {addForm?.sex !== "" && (
                <>
                  <Select
                    options={chooseSexOptions}
                    components={animatedComponents}
                    defaultValue={
                      chooseSexOptions[
                        chooseSexOptions.findIndex(
                          (obj) => obj.value === addForm?.sex
                        )
                      ]
                    }
                    isMulti={false}
                    name="sex"
                    onChange={(e) => setAddForm({ ...addForm, sex: e.value })}
                  ></Select>
                </>
              )}
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
                value={addForm?.age}
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
                value={addForm?.address}
                onChange={(e) => handleInput(e)}
              />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="pb-5">
              <label htmlFor="address">Appointment Type</label>
              {console.log(addForm?.appointment_type)}
              {addForm?.appointment_type !== "" && (
                <>
                  <Select
                    options={chooseAppointmentTypeOptions}
                    components={animatedComponents}
                    defaultValue={
                      chooseAppointmentTypeOptions[
                        chooseAppointmentTypeOptions.findIndex(
                          (obj) => obj.value === addForm?.appointment_type
                        )
                      ]
                    }
                    isMulti={false}
                    name="appointment_type"
                    onChange={(e) =>
                      setAddForm({ ...addForm, appointment_type: e.value })
                    }
                  ></Select>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="text-end py-3">
          <button
            onClick={() => addBtn(6, addForm)}
            className="btn fw-bold btn-primary"
          >
            SAVE
          </button>
        </div>
      </div>
    </>
  );
}
