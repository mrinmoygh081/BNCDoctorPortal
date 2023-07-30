import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import { getAPI } from "@/utils/fetchAPIs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";

function PatientDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState(null);

  const getPatients = async () => {
    const d = await getAPI(`patients/${id}`, null);
    if (d?.status) {
      setData(d.data[0]);
    }
  };

  useEffect(() => {
    getPatients();
  }, []);

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
              <div
                className="content d-flex flex-column flex-column-fluid"
                id="kt_content"
              >
                <div className="post d-flex flex-column-fluid">
                  <div id="kt_content_container" className="container-xxl">
                    <div className="row g-5 g-xl-8">
                      <div className="col-12">
                        <div className="card card-xxl-stretch mb-5 mb-xxl-8 pb-3">
                          <div className="card-header border-0 pt-5">
                            <h3 className="card-title align-items-start flex-column">
                              <span className="card-label fw-bold fs-3 mb-1">
                                Details for Patient Id: {data?.patient_id}
                              </span>
                            </h3>
                            {/* <p>Last Update: 24-06-2023</p> */}
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="card card-xxl-stretch mb-5 mb-xxl-8">
                          <div className="card-header border-0 pt-5">
                            <h3 className="card-title align-items-start flex-column">
                              <span className="card-label fw-bold fs-3 mb-1">
                                Patient Personal Info
                              </span>
                            </h3>
                          </div>
                          <div className="card-body py-3">
                            <div className="tab-content">
                              <div className="table-responsive">
                                <table className="table table-striped table-bordered table_height">
                                  <thead></thead>
                                  <tbody>
                                    <tr className="border-0">
                                      <td className="min-w-150px">
                                        Patient ID
                                      </td>
                                      <th className="min-w-140px">
                                        {data?.patient_id}
                                      </th>
                                    </tr>
                                    <tr className="border-0">
                                      <td className="min-w-150px">Name</td>
                                      <th className="min-w-140px">
                                        {data?.name}
                                      </th>
                                    </tr>
                                    <tr className="border-0">
                                      <td className="min-w-150px">Phone</td>
                                      <th className="min-w-140px">
                                        {data?.phone}
                                      </th>
                                    </tr>
                                    <tr className="border-0">
                                      <td className="min-w-150px">Age</td>
                                      <th className="min-w-140px">
                                        {data?.age}
                                      </th>
                                    </tr>
                                    <tr className="border-0">
                                      <td className="min-w-150px">Sex</td>
                                      <th className="min-w-140px">
                                        {data?.sex}
                                      </th>
                                    </tr>
                                    <tr className="border-0">
                                      <td className="min-w-150px">Address</td>
                                      <th className="min-w-140px">
                                        {data?.address}
                                      </th>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="card card-xxl-stretch mb-5 mb-xxl-8">
                          <div className="card-header border-0 pt-5">
                            <h3 className="card-title align-items-start flex-column">
                              <span className="card-label fw-bold fs-3 mb-1">
                                Personal History
                              </span>
                            </h3>
                          </div>
                          <div className="card-body py-3">
                            <div className="tab-content">
                              <div className="table-responsive">
                                <table className="table table-striped table-bordered table_height">
                                  <thead></thead>
                                  <tbody>
                                    <tr className="border-0">
                                      <td className="min-w-150px">Diseases</td>
                                      <th className="min-w-140px">Diabetis</th>
                                    </tr>
                                    <tr className="border-0">
                                      <td className="min-w-150px">
                                        Vaccination
                                      </td>
                                      <th className="min-w-140px">Completed</th>
                                    </tr>
                                    <tr className="border-0">
                                      <td className="min-w-150px">
                                        Surgical History
                                      </td>
                                      <th className="min-w-140px">No</th>
                                    </tr>
                                    <tr className="border-0">
                                      <td className="min-w-150px">Addiction</td>
                                      <th className="min-w-140px">Cigeratte</th>
                                    </tr>
                                    <tr className="border-0">
                                      <td className="min-w-150px">
                                        Marital Status
                                      </td>
                                      <th className="min-w-140px">Single</th>
                                    </tr>
                                    <tr className="border-0">
                                      <td className="min-w-150px">
                                        Number OF Child
                                      </td>
                                      <th className="min-w-140px">2</th>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="card card-xxl-stretch mb-5 mb-xxl-8">
                          <div className="card-header border-0 pt-5">
                            <h3 className="card-title align-items-start flex-column">
                              <span className="card-label fw-bold fs-3 mb-1">
                                Family History
                              </span>
                            </h3>
                          </div>
                          <div className="card-body py-3">
                            <div className="tab-content">
                              <div className="table-responsive">
                                <table className="table table-striped table-bordered table_height">
                                  <thead></thead>
                                  <tbody>
                                    <tr className="border-0">
                                      <td className="min-w-150px">
                                        Paternal History
                                      </td>
                                      <th className="min-w-140px">
                                        Diabetic problem of his grandfathers
                                      </th>
                                    </tr>
                                    <tr className="border-0">
                                      <td className="min-w-150px">
                                        Maternal History
                                      </td>
                                      <th className="min-w-140px">
                                        Diabetic problem of his grandfathers
                                      </th>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
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

export default PatientDetails;
