import Head from "next/head";
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { getAPI, postAPI, putAPI } from "@/utils/fetchAPIs";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function Appointments() {
  const { loginToken } = useSelector((state) => state.authReducer);
  const { push } = useRouter();
  const [data, setData] = useState(null);
  const router = useRouter();

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
                        <div className="card card-xxl-stretch mb-5 mb-xxl-8">
                          <div className="table-header">
                            <div className="card-header border-0 pt-5 w-100">
                              <h3 className="card-title align-items-start flex-column w-100">
                                <span className="card-label fw-bold fs-3 mb-1">
                                  Appointments
                                </span>
                                <span className="text-muted mt-1 fw-semibold fs-7 w-100">
                                  Total appointments: {data && data.length}
                                </span>
                              </h3>
                            </div>
                            <div className="card-header border-0 pt-5 w-100">
                              <h3 className="card-title align-items-start flex-column w-100">
                                <span className="card-label fw-bold fs-3 mb-1">
                                  Date
                                </span>
                                <span className="text-muted mt-1 fw-semibold fs-7 w-100">
                                  <input type="date" className="form-control" />
                                </span>
                              </h3>
                            </div>
                            <div className="card-header border-0 pt-5 w-100">
                              <h3 className="card-title align-items-start flex-column w-100">
                                <span className="card-label fw-bold fs-3 mb-1">
                                  Search
                                </span>
                                <span className="text-muted mt-1 fw-semibold fs-7 w-100">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search..."
                                  />
                                </span>
                              </h3>
                            </div>
                          </div>
                          <div className="card-body py-3">
                            <div className="tab-content">
                              <div className="table-responsive">
                                <table className="table table-striped table-bordered table_height">
                                  <thead>
                                    <tr className="border-0">
                                      <th>Patient ID</th>
                                      <th>Date</th>
                                      <th>Name</th>
                                      <th>Phone</th>
                                      <th className=" min-w-140px">Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="fw-semibold">1234567</td>
                                      <td>26.07.2023</td>
                                      <td>Mrinmoy</td>
                                      <td>8240491818</td>
                                      <td>
                                        <button
                                          onClick={() =>
                                            router.push(
                                              "./appointments-case-add"
                                            )
                                          }
                                          title="Add Case History"
                                          className="btn btn-icon btn-light btn-active-color-primary btn-sm me-1"
                                        >
                                          <FontAwesomeIcon icon={faPen} />
                                        </button>
                                      </td>
                                    </tr>
                                    {/* {data &&
                                      data.map((item, index) => (
                                        <tr key={index}>
                                          <td className="fw-semibold">
                                            {item?.productline_name}
                                          </td>
                                          <td>
                                            <button
                                              onClick={() => editIcon(item)}
                                              className="btn btn-icon btn-light btn-active-color-primary btn-sm me-1"
                                            >
                                              <FontAwesomeIcon icon={faPen} />
                                            </button>
                                          </td>
                                        </tr>
                                      ))} */}
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
