import Head from "next/head";
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import { getAPI, postAPI, putAPI } from "@/utils/fetchAPIs";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import PersonalInfo from "@/components/PersonalInfo";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import PersonalInfoOld from "@/components/PersonalInfoOld";

export default function Form() {
  const animatedComponents = makeAnimated();
  const { push } = useRouter();
  const [patientType, setPatientType] = useState("new");
  const [form, setForm] = useState({
    booking_date: "",
    patient_id: "",
    name: "",
    phone: "",
    sex: "",
    age: "",
    address: "",
  });

  const addBtn = async (flag) => {
    // const data = await postAPI("addAppointment", form, null);
    // console.log(data);
    console.log(flag, form);
    if (flag === "new") {
      const data = await postAPI("appointments/new", form, null);
      if (data?.status) {
        toast.success(`Update: ${data?.message}`);
      } else {
        toast.error(`Update: ${data?.message}`);
      }
    } else if (flag === "old") {
      const data = await postAPI("appointments/old", form, null);
      if (data?.status) {
        toast.success(`Update: ${data?.message}`);
      } else {
        toast.error(`Update: ${data?.message}`);
      }
    }
  };

  return (
    <>
      <Head>
        <title>Admin Panel</title>
        <meta name="description" content="Admin Panel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="d-flex flex-column flex-root">
          <div className="page d-flex flex-row flex-column-fluid">
            <SideBar />
            <div className="wrapper d-flex flex-column flex-row-fluid">
              <Header />
              <div className="content d-flex flex-column flex-column-fluid">
                <div className="py_40 shadow screen_header">
                  <div className="container-xxl">
                    <div className="patients_info">
                      <ul>
                        <li className={"active"}>
                          <span>Personal Info</span>
                        </li>
                      </ul>
                    </div>

                    <div className="row g-5 g-xl-8 justify-content-center">
                      <div className="col-md-6 col-12">
                        <div className="pb-5">
                          <label htmlFor="patient">Type Of Patient</label>
                          <Select
                            options={[
                              { value: "new", label: "New Patient" },
                              { value: "old", label: "Old Patient" },
                            ]}
                            components={animatedComponents}
                            defaultValue={{
                              value: "new",
                              label: "New Patient",
                            }}
                            isMulti={false}
                            onChange={(e) => setPatientType(e.value)}
                          ></Select>
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        {patientType == "new" && (
                          <PersonalInfo
                            form={form}
                            setForm={setForm}
                            addBtn={addBtn}
                          />
                        )}
                        {patientType == "old" && (
                          <PersonalInfoOld
                            form={form}
                            setForm={setForm}
                            addBtn={addBtn}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
