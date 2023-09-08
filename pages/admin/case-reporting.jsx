import CaseReportingCom from "@/components/CaseReporting";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function CaseReporting() {
  const router = useRouter();
  const { loginToken } = useSelector((state) => state.authReducer);

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
              <div className="content d-flex flex-column flex-column-fluid">
                <div className="py_40 shadow screen_header">
                  <div className="container-xxl">
                    <div className="row g-5 g-xl-8 justify-content-center">
                      <div className="col-12">{<CaseReportingCom />}</div>
                      <div className="col-12">
                        <div className="table-responsive">
                          <table className="table table-striped table-bordered table_height">
                            <thead>
                              <tr className="border-0">
                                <th>Date</th>
                                <th className="min-w-140px">Image</th>
                                <th className="min-w-140px">Remark</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>05/09/1996</td>
                                <td></td>
                                <td>
                                  Mrinmoy Ghosh Lorem ipsum, dolor sit amet
                                  consectetur adipisicing elit. Placeat impedit
                                  animi minus suscipit ex velit natus doloremque
                                  error sed laudantium, repudiandae vitae sint
                                  repellat consequuntur veniam ullam praesentium
                                  fugit ipsa!
                                </td>
                                <td>
                                  <button
                                    onClick={() => router.push("./patients/1")}
                                    title="Check Details"
                                    className="btn btn-icon btn-light btn-active-color-primary btn-sm me-1"
                                  >
                                    <FontAwesomeIcon icon={faEdit} />
                                  </button>
                                </td>
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
      </main>
    </>
  );
}

export default CaseReporting;
