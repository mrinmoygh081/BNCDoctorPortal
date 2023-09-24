import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import { getAPI } from "@/utils/fetchAPIs";
import { faEye, faHistory, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function PatientDetails() {
  const router = useRouter();
  const { loginToken } = useSelector((state) => state.authReducer);
  const { id } = router.query;
  const [data, setData] = useState(null);

  const getPatients = async () => {
    const d = await getAPI(`patients/${id}`, null);
    console.log(d);
    if (d?.status) {
      setData(d.data[0]);
    }
  };

  useEffect(() => {
    if (id) {
      getPatients();
    }
  }, [id]);

  useEffect(() => {
    if (!loginToken) {
      router.push("/");
    }
  }, [loginToken]);

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
                            <div>
                              <button
                                onClick={() =>
                                  router.push(
                                    `../appointments-case-add?p_id=${id}`
                                  )
                                }
                                title="Update Appointments"
                                className="btn btn-icon btn-light btn-active-color-primary btn-sm me-1"
                              >
                                <FontAwesomeIcon icon={faPen} />
                              </button>
                              <button
                                onClick={() =>
                                  router.push(`../case-reporting?p_id=${id}`)
                                }
                                title="Case Reporting"
                                className="btn btn-icon btn-light btn-active-color-primary btn-sm me-1"
                              >
                                <FontAwesomeIcon icon={faHistory} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Patient Personal Info */}
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

                      {/* Personal History */}
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
                                      <td className="min-w-150px">Infective</td>
                                      <th className="min-w-140px">
                                        {data?.infective_history &&
                                          JSON.parse(
                                            data?.infective_history
                                          ).map((item, index) => (
                                            <span key={index}>{item}, </span>
                                          ))}
                                      </th>
                                    </tr>
                                    <tr className="border-0">
                                      <td className="min-w-150px">Injuries</td>
                                      <th className="min-w-140px">
                                        {data?.injuries}
                                      </th>
                                    </tr>
                                    <tr className="border-0">
                                      <td className="min-w-150px">
                                        Vaccination
                                      </td>
                                      <th className="min-w-140px">
                                        {data?.vaccination}
                                      </th>
                                    </tr>
                                    <tr className="border-0">
                                      <td className="min-w-150px">
                                        Surgical History
                                      </td>
                                      <th className="min-w-140px">
                                        {data?.surgical}
                                      </th>
                                    </tr>
                                    <tr className="border-0">
                                      <td className="min-w-150px">Addiction</td>
                                      <th className="min-w-140px">
                                        {data?.addiction}
                                      </th>
                                    </tr>
                                    <tr className="border-0">
                                      <td className="min-w-150px">
                                        Marital Status
                                      </td>
                                      <th className="min-w-140px">
                                        {data?.marital_status}
                                      </th>
                                    </tr>
                                    <tr className="border-0">
                                      <td className="min-w-150px">
                                        Number OF Child
                                      </td>
                                      <th className="min-w-140px">
                                        {data?.num_child}
                                      </th>
                                    </tr>
                                    <tr className="border-0">
                                      <td className="min-w-150px">Cravings</td>
                                      <th className="min-w-140px">
                                        {data?.cravings &&
                                          JSON.parse(data?.cravings).map(
                                            (item, index) => (
                                              <span key={index}>{item}, </span>
                                            )
                                          )}
                                      </th>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Family History */}
                      <div className="col-12">
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
                                  <thead>
                                    <tr>
                                      <th>type</th>
                                      <th>PATERNAL HISTORY</th>
                                      <th>MATERNAL HISTORY</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className="border-0">
                                      <td className="min-w-150px">INFECTIVE</td>
                                      <td className="min-w-140px">
                                        {data?.p_infective}
                                      </td>
                                      <td>{data?.m_infective}</td>
                                    </tr>
                                    <tr className="border-0">
                                      <td className="min-w-150px">
                                        NON-INFECTIVE
                                      </td>
                                      <td className="min-w-140px">
                                        {data?.p_noninfective}
                                      </td>
                                      <td>{data?.m_noninfective}</td>
                                    </tr>
                                    <tr className="border-0">
                                      <td className="min-w-150px">SURGICAL</td>
                                      <td className="min-w-140px">
                                        {data?.p_surgical}
                                      </td>
                                      <td>{data?.m_surgical}</td>
                                    </tr>
                                    <tr className="border-0">
                                      <td className="min-w-150px">
                                        OBS + GYNAE
                                      </td>
                                      <td className="min-w-140px">
                                        {data?.p_obs_gynae}
                                      </td>
                                      <td>{data?.m_obs_gynae}</td>
                                    </tr>
                                    <tr className="border-0">
                                      <td className="min-w-150px">PARITY</td>
                                      <td className="min-w-140px">
                                        {data?.p_parity}
                                      </td>
                                      <td>{data?.m_parity}</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Generalities  */}
                      <div className="col-12 col-md-6">
                        <div className="card card-xxl-stretch mb-5 mb-xxl-8">
                          <div className="card-header border-0 pt-5">
                            <h3 className="card-title align-items-start flex-column">
                              <span className="card-label fw-bold fs-3 mb-1">
                                Generalities
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
                                      <td className="min-w-150px">Sweat</td>
                                      <th className="min-w-140px">
                                        {data?.sweat}
                                      </th>
                                    </tr>
                                    <tr className="border-0">
                                      <td className="min-w-150px">Skin</td>
                                      <th className="min-w-140px">
                                        {data?.skin}
                                      </th>
                                    </tr>
                                    <tr className="border-0">
                                      <td className="min-w-150px">
                                        Teeth + Gum
                                      </td>
                                      <th className="min-w-140px">
                                        {data?.teeth_gum}
                                      </th>
                                    </tr>
                                    <tr className="border-0">
                                      <td className="min-w-150px">Tongue</td>
                                      <th className="min-w-140px">
                                        {data?.tongue}
                                      </th>
                                    </tr>
                                    <tr className="border-0">
                                      <td className="min-w-150px">Mental</td>
                                      <th className="min-w-140px">
                                        {data?.mental}
                                      </th>
                                    </tr>
                                    <tr className="border-0">
                                      <td className="min-w-150px">Thirst</td>
                                      <th className="min-w-140px">
                                        {data?.thirst}
                                      </th>
                                    </tr>
                                    <tr className="border-0">
                                      <td className="min-w-150px">Dreams</td>
                                      <th className="min-w-140px">
                                        {data?.dreams}
                                      </th>
                                    </tr>
                                    <tr className="border-0">
                                      <td className="min-w-150px">Thermal</td>
                                      <th className="min-w-140px">
                                        {data?.thermal}
                                      </th>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Patient Personal Info */}
                      <div className="col-12 col-md-6">
                        <div className="card card-xxl-stretch mb-5 mb-xxl-8">
                          <div className="card-header border-0 pt-5">
                            <h3 className="card-title align-items-start flex-column">
                              <span className="card-label fw-bold fs-3 mb-1">
                                Case History
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
                                      <td className="min-w-150px">Date</td>
                                      <th className="min-w-140px">
                                        {data?.ch_date}
                                      </th>
                                    </tr>
                                    <tr className="border-0">
                                      <td className="min-w-150px">System</td>
                                      <th className="min-w-140px">
                                        {data?.ch_system}
                                      </th>
                                    </tr>
                                    <tr className="border-0">
                                      <td className="min-w-150px">Remarks</td>
                                      <th className="min-w-140px">
                                        {data?.ch_remarks}
                                      </th>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <img
                              src={
                                process.env.NEXT_PUBLIC_IMG_PATH +
                                data?.ch_image
                              }
                              alt=""
                            />
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
