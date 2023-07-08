import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

function PatientDetails() {
  const router = useRouter();
  const { id } = router.query;
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
                        <div class="card card-xxl-stretch mb-5 mb-xxl-8 pb-3">
                          <div class="card-header border-0 pt-5">
                            <h3 class="card-title align-items-start flex-column">
                              <span class="card-label fw-bold fs-3 mb-1">
                                Details for 9874561
                              </span>
                            </h3>
                            <p>Last Update: 24-06-2023</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div class="card card-xxl-stretch mb-5 mb-xxl-8">
                          <div class="card-header border-0 pt-5">
                            <h3 class="card-title align-items-start flex-column">
                              <span class="card-label fw-bold fs-3 mb-1">
                                Patient Personal Info
                              </span>
                            </h3>
                          </div>
                          <div class="card-body py-3">
                            <div class="tab-content">
                              <div class="table-responsive">
                                <table class="table table-striped table-bordered table_height">
                                  <thead></thead>
                                  <tbody>
                                    <tr class="border-0">
                                      <td class="min-w-150px">Patient ID</td>
                                      <th class="min-w-140px">9874561</th>
                                    </tr>
                                    <tr class="border-0">
                                      <td class="min-w-150px">Name</td>
                                      <th class="min-w-140px">Mrinmoy Ghosh</th>
                                    </tr>
                                    <tr class="border-0">
                                      <td class="min-w-150px">Phone</td>
                                      <th class="min-w-140px">8240491818</th>
                                    </tr>
                                    <tr class="border-0">
                                      <td class="min-w-150px">Age</td>
                                      <th class="min-w-140px">26</th>
                                    </tr>
                                    <tr class="border-0">
                                      <td class="min-w-150px">Sex</td>
                                      <th class="min-w-140px">Male</th>
                                    </tr>
                                    <tr class="border-0">
                                      <td class="min-w-150px">Address</td>
                                      <th class="min-w-140px">
                                        Milki, Malda, WB - 732211
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
                        <div class="card card-xxl-stretch mb-5 mb-xxl-8">
                          <div class="card-header border-0 pt-5">
                            <h3 class="card-title align-items-start flex-column">
                              <span class="card-label fw-bold fs-3 mb-1">
                                Personal History
                              </span>
                            </h3>
                          </div>
                          <div class="card-body py-3">
                            <div class="tab-content">
                              <div class="table-responsive">
                                <table class="table table-striped table-bordered table_height">
                                  <thead></thead>
                                  <tbody>
                                    <tr class="border-0">
                                      <td class="min-w-150px">Diseases</td>
                                      <th class="min-w-140px">Diabetis</th>
                                    </tr>
                                    <tr class="border-0">
                                      <td class="min-w-150px">Vaccination</td>
                                      <th class="min-w-140px">Completed</th>
                                    </tr>
                                    <tr class="border-0">
                                      <td class="min-w-150px">
                                        Surgical History
                                      </td>
                                      <th class="min-w-140px">No</th>
                                    </tr>
                                    <tr class="border-0">
                                      <td class="min-w-150px">Addiction</td>
                                      <th class="min-w-140px">Cigeratte</th>
                                    </tr>
                                    <tr class="border-0">
                                      <td class="min-w-150px">
                                        Marital Status
                                      </td>
                                      <th class="min-w-140px">Single</th>
                                    </tr>
                                    <tr class="border-0">
                                      <td class="min-w-150px">
                                        Number OF Child
                                      </td>
                                      <th class="min-w-140px">2</th>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div class="card card-xxl-stretch mb-5 mb-xxl-8">
                          <div class="card-header border-0 pt-5">
                            <h3 class="card-title align-items-start flex-column">
                              <span class="card-label fw-bold fs-3 mb-1">
                                Family History
                              </span>
                            </h3>
                          </div>
                          <div class="card-body py-3">
                            <div class="tab-content">
                              <div class="table-responsive">
                                <table class="table table-striped table-bordered table_height">
                                  <thead></thead>
                                  <tbody>
                                    <tr class="border-0">
                                      <td class="min-w-150px">
                                        Paternal History
                                      </td>
                                      <th class="min-w-140px">
                                        Diabetic problem of his grandfathers
                                      </th>
                                    </tr>
                                    <tr class="border-0">
                                      <td class="min-w-150px">
                                        Maternal History
                                      </td>
                                      <th class="min-w-140px">
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
