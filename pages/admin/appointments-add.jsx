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
import { getFormattedDate } from "@/utils/getDateTimeNow";
import { useSelector } from "react-redux";

export default function Form() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const animatedComponents = makeAnimated();
  const { push } = useRouter();
  const { loginToken } = useSelector((state) => state.authReducer);
  const [patientType, setPatientType] = useState("new");
  const [form, setForm] = useState({
    booking_date: getFormattedDate(new Date()),
    patient_id: "",
    name: "",
    phone: "",
    sex: "Male",
    age: "",
    address: "",
    appointment_type: "General",
  });

  useEffect(() => {
    if (!loginToken) {
      push("/");
    }
  }, [loginToken]);

  const addBtn = async (flag) => {
    // const data = await postAPI("addAppointment", form, null);
    // console.log(data);
    if (flag === "new") {
      if (form?.name === "") {
        toast.warning("Please enter your name");
      } else if (form?.phone === "") {
        toast.warning("Please enter your phone");
      } else if (form?.age === "") {
        toast.warning("Please enter your age");
      } else {
        let formObj = { ...form };
        if (form?.patient_id === "") {
          let demoPatientId = `DEMO${Math.round(Math.random() * 10000)}`;
          formObj = { ...form, patient_id: demoPatientId };
        }
        const data = await postAPI("appointments/new", formObj, null);
        if (data?.status) {
          setForm({
            booking_date: getFormattedDate(new Date()),
            patient_id: "",
            name: "",
            phone: "",
            sex: "Male",
            age: "",
            address: "",
            appointment_type: "General",
          });
          toast.success(`Update: ${data?.message}`);
        } else {
          // console.log(data);
          toast.error(`Error: ${data?.message}`);
        }
      }
    } else if (flag === "old") {
      const data = await postAPI("appointments/old", form, null);
      if (data?.status) {
        setForm({
          booking_date: getFormattedDate(new Date()),
          patient_id: "",
          name: "",
          phone: "",
          sex: "Male",
          age: "",
          address: "",
          appointment_type: "General",
        });
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
                            selectedDate={selectedDate}
                            setSelectedDate={setSelectedDate}
                          />
                        )}
                        {patientType == "old" && (
                          <PersonalInfoOld
                            form={form}
                            setForm={setForm}
                            addBtn={addBtn}
                            selectedDate={selectedDate}
                            setSelectedDate={setSelectedDate}
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
