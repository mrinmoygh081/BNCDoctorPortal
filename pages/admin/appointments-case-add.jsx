import Head from "next/head";
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import { getAPI, postAPI, putAPI } from "@/utils/fetchAPIs";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import PersonalInfo from "@/components/PersonalInfo";
import FamilyHistory from "@/components/FamilyHistory";
import PersonalHistory from "@/components/PersonalHistory";
import Cravings from "@/components/Cravings";
import Generalities from "@/components/Generalities";
import CashHistory from "@/components/CaseHistory";
import DoctorForm from "@/components/DoctorForm";
import LoadingView from "@/components/LoadingView";

export default function Form() {
  const { push, query } = useRouter();
  const { p_id } = query;

  const [isActiveForm, setIsActiveForm] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [pInfo, setPInfo] = useState(null);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
    }
  }, [query]);

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

  const addBtn = async (flag, addForm) => {
    if (flag === 1) {
      const data = await postAPI(
        "appointments/addFamilyHistory",
        addForm,
        null
      );
      if (data?.status) {
        toast.success(data?.message);
        setIsActiveForm(2);
      }
    } else if (flag === 2) {
      const data = await postAPI(
        "appointments/addPersonalHistory",
        addForm,
        null
      );
      if (data?.status) {
        toast.success(data?.message);
        setIsActiveForm(3);
      }
    } else if (flag === 4) {
      const data = await postAPI("appointments/addCravings", addForm, null);
      if (data?.status) {
        toast.success(data?.message);
        setIsActiveForm(5);
      }
    } else if (flag === 5) {
      const data = await postAPI("appointments/addGeneralities", addForm, null);
      if (data?.status) {
        toast.success(data?.message);
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
        {!isLoading ? (
          <LoadingView />
        ) : (
          <div className="d-flex flex-column flex-root">
            <div className="page d-flex flex-row flex-column-fluid">
              <SideBar />
              <div className="wrapper d-flex flex-column flex-row-fluid">
                <Header />
                <div className="content d-flex flex-column flex-column-fluid">
                  <div className="py_40 shadow screen_header">
                    <div className="container-xxl">
                      <h3>
                        Patient: {pInfo?.name} ({pInfo?.patient_id})
                      </h3>
                      <div className="patients_info">
                        <ul>
                          <li
                            className={isActiveForm === 1 ? "active" : ""}
                            onClick={() => setIsActiveForm(1)}
                          >
                            <span>Family History</span>
                          </li>
                          <li
                            className={isActiveForm === 2 ? "active" : ""}
                            onClick={() => setIsActiveForm(2)}
                          >
                            <span>Personal History</span>
                          </li>
                          <li
                            className={isActiveForm === 3 ? "active" : ""}
                            onClick={() => setIsActiveForm(3)}
                          >
                            <span>Case History</span>
                          </li>
                          <li
                            className={isActiveForm === 4 ? "active" : ""}
                            onClick={() => setIsActiveForm(4)}
                          >
                            <span>Cravings</span>
                          </li>
                          <li
                            className={isActiveForm === 5 ? "active" : ""}
                            onClick={() => setIsActiveForm(5)}
                          >
                            <span>Generalities</span>
                          </li>
                          {/* <li
                            className={isActiveForm === 6 ? "active" : ""}
                            onClick={() => setIsActiveForm(6)}
                          >
                            <span>Doctor Details</span>
                          </li> */}
                        </ul>
                      </div>

                      <div className="row g-5 g-xl-8 justify-content-center">
                        <div className="col-md-6 col-12">
                          {isActiveForm === 6 && (
                            <DoctorForm addBtn={addBtn} p_id={p_id} />
                          )}
                        </div>
                      </div>
                      {isActiveForm === 1 && (
                        <FamilyHistory addBtn={addBtn} p_id={p_id} />
                      )}
                      {isActiveForm === 2 && (
                        <PersonalHistory addBtn={addBtn} p_id={p_id} />
                      )}
                      {isActiveForm === 3 && <CashHistory p_id={p_id} />}
                      {isActiveForm === 4 && (
                        <Cravings addBtn={addBtn} p_id={p_id} />
                      )}
                      {isActiveForm === 5 && (
                        <Generalities addBtn={addBtn} p_id={p_id} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
