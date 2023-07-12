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
import CashHistory from "@/components/CashHistory";
import DoctorForm from "@/components/DoctorForm";

export default function Form() {
  const { push } = useRouter();

  const [isActiveForm, setIsActiveForm] = useState(0);

  //   const getData = async () => {
  //     setIsLoading(true);
  //     const data = await getAPI("productlines", null);
  //     if (data?.status) {
  //       setProductLines(data?.data);
  //       setIsLoading(false);
  //     } else {
  //       setIsLoading(false);
  //       toast.error("Something went wrong", data?.message);
  //     }
  //   };
  //   useEffect(() => {
  //     // getData();
  //   }, []);

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
                        <li
                          className={isActiveForm === 0 ? "active" : ""}
                          onClick={() => setIsActiveForm(0)}
                        >
                          <span>Personal Info</span>
                        </li>
                      </ul>
                    </div>

                    <div className="row g-5 g-xl-8 justify-content-center">
                      <div className="col-md-6 col-12">
                        {isActiveForm === 0 && <PersonalInfo />}
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
