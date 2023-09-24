import Head from "next/head";
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHistory, faPen } from "@fortawesome/free-solid-svg-icons";
import { getAPI, postAPI, putAPI } from "@/utils/fetchAPIs";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getFormattedDate } from "@/utils/getDateTimeNow";
import Link from "next/link";

export default function Appointments() {
  const { loginToken } = useSelector((state) => state.authReducer);
  const { push } = useRouter();
  const [data, setData] = useState(null);
  const router = useRouter();
  const [bookingDate, setBookingDate] = useState(getFormattedDate(new Date()));
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [form, setForm] = useState({
    p_id: "",
    new_patient_id: "",
  });

  console.log("bookingDate", bookingDate);

  useEffect(() => {
    if (!loginToken) {
      push("/");
    }
  }, [loginToken]);

  const getAppointments = async () => {
    const d = await postAPI(
      "appointments",
      { booking_date: bookingDate },
      null
    );
    if (d?.status) {
      setData(d.data);
    }
  };

  useEffect(() => {
    getAppointments();
  }, [bookingDate]);

  useEffect(() => {
    if (data) {
      const s = data.filter(
        (item) =>
          item?.patient_id?.toLowerCase().includes(search.toLowerCase()) ||
          item?.phone?.toLowerCase().includes(search.toLowerCase()) ||
          item?.appointment_type
            ?.toLowerCase()
            .includes(search.toLowerCase()) ||
          item?.name?.toLowerCase().includes(search.toLowerCase())
      );
      setSearchData(s);
    }
  }, [search, data]);

  const editHandler = async () => {
    const data = await postAPI("patients/editPatientId", form, null);
    if (data?.status) {
      await getAppointments();
      toast.success(data?.message);
    } else {
      toast.error(data?.message);
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
                                  Total appointments:{" "}
                                  {searchData && searchData.length}
                                </span>
                                <Link
                                  href={"/admin/appointments-add"}
                                  className="btn btn-light btn-active-color-primary btn-sm me-1"
                                >
                                  Add Appointment
                                </Link>
                              </h3>
                            </div>
                            <div className="card-header border-0 pt-5 w-100">
                              <h3 className="card-title align-items-start flex-column w-100">
                                <span className="card-label fw-bold fs-3 mb-1">
                                  Date
                                </span>
                                <span className="text-muted mt-1 fw-semibold fs-7 w-100">
                                  <DatePicker
                                    selected={selectedDate}
                                    className="form-control pb-2"
                                    onChange={(date) => {
                                      setSelectedDate(date);
                                      let dd = getFormattedDate(new Date(date));
                                      setBookingDate(dd);
                                    }}
                                  />
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
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
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
                                      <th>Date(yyyy-mm-dd)</th>
                                      <th>Name</th>
                                      <th>Phone</th>
                                      <th>Type</th>
                                      <th className=" min-w-140px">Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {data &&
                                      searchData &&
                                      searchData.map((item, index) => (
                                        <tr key={index}>
                                          <td className="fw-semibold">
                                            {item?.patient_id}{" "}
                                            <button
                                              type="button"
                                              className="btn btn-sm p-1"
                                              data-bs-toggle="modal"
                                              data-bs-target="#modalBtn"
                                              onClick={(e) =>
                                                setForm({
                                                  ...form,
                                                  p_id: parseInt(item?.p_id),
                                                  new_patient_id:
                                                    item?.patient_id,
                                                })
                                              }
                                            >
                                              <FontAwesomeIcon icon={faPen} />
                                            </button>
                                          </td>
                                          <td>
                                            {getFormattedDate(
                                              item?.booking_date
                                            )}
                                          </td>
                                          <td>{item?.name}</td>
                                          <td>{item?.phone}</td>
                                          <td>{item?.appointment_type}</td>
                                          <td>
                                            <button
                                              onClick={() =>
                                                router.push(
                                                  `./appointments-case-add?p_id=${item?.p_id}`
                                                )
                                              }
                                              title="Update Appointments"
                                              className="btn btn-icon btn-light btn-active-color-primary btn-sm me-1"
                                            >
                                              <FontAwesomeIcon icon={faPen} />
                                            </button>
                                            <button
                                              onClick={() =>
                                                router.push(
                                                  `./case-reporting?p_id=${item?.p_id}`
                                                )
                                              }
                                              title="Case Reporting"
                                              className="btn btn-icon btn-light btn-active-color-primary btn-sm me-1"
                                            >
                                              <FontAwesomeIcon
                                                icon={faHistory}
                                              />
                                            </button>
                                          </td>
                                        </tr>
                                      ))}
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
        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="modalBtn"
          tabIndex="-1"
          aria-labelledby="modalTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalTitle">
                  Edit Patient ID
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="patientId">Patient ID</label>
                  <input
                    type="text"
                    className="form-control"
                    id="patientId"
                    placeholder="Enter new Patient ID..."
                    value={form?.new_patient_id}
                    onChange={(e) =>
                      setForm({ ...form, new_patient_id: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  CLOSE
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={editHandler}
                  data-bs-dismiss="modal"
                >
                  UPDATE
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
