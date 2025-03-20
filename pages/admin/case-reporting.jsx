import CaseReportingCom from "@/components/CaseReporting";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import { postAPI } from "@/utils/fetchAPIs";
import { formattedDDMMYYYY } from "@/utils/getDateTimeNow";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import swal from "sweetalert";

function CaseReporting() {
  const { push, query } = useRouter();
  const { p_id } = query;
  const { loginToken } = useSelector((state) => state.authReducer);
  const [data, setData] = useState(null);
  const [isPrint, setIsPrint] = useState(false);
  const [addForm, setAddForm] = useState({
    p_id: parseInt(p_id),
    date: new Date().toISOString(),
    system: "",
    image: "",
    remarks: "",
  });
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [imgFile, setImgFile] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (!loginToken) {
      push("/");
    }
  }, [loginToken]);

  useEffect(() => {
    setAddForm({ ...addForm, p_id: parseInt(p_id) });
  }, [p_id]);

  const getData = async () => {
    let formData = {
      p_id: parseInt(p_id),
    };
    let da = await postAPI("patients/getReportings", formData, null);
    if (da?.status) {
      setData(da?.data);
      toast.success("Case Reporting list succesfully");
    } else {
      toast.error("Case Reporting list is not fetched! Try Again!");
    }
  };

  const deleteItem = async (cr_id) => {
    let formData = {
      cr_id: parseInt(cr_id),
    };
    let da = await postAPI("patients/deleteReporting", formData, null);
    if (da?.status) {
      setData(da?.data);
      toast.success("Case Reporting deleted succesfully");
      getData();
    } else {
      toast.error("Case Reporting is not deleted! Try Again!");
    }
  };

  const editItem = async (item) => {
    const { date, system, image, remarks } = item;
    console.log(item);
    setAddForm(item);
    setSelectedDate(new Date(date));
    setIsEdit(true);
    // let formData = {
    //   cr_id: parseInt(cr_id),
    //   date,
    //   system,
    //   image,
    //   remarks,
    // };
    // let da = await postAPI("patients/editReporting", formData, null);
    // if (da?.status) {
    //   setData(da?.data);
    //   toast.success("Case Reporting updated succesfully");
    //   getData();
    // } else {
    //   toast.error("Case Reporting is not updated! Try Again!");
    // }
  };

  const checkDelete = async (cr_id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover the file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        await deleteItem(cr_id);
        swal("The file has been deleted!", {
          icon: "success",
        });
      }
    });
  };

  useEffect(() => {
    (async () => {
      if (p_id) {
        getData();
      }
    })();
  }, [p_id]);

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
                      {!isPrint && (
                        <>
                          <div className="col-12">
                            {p_id ? (
                              <CaseReportingCom
                                p_id={p_id}
                                getData={getData}
                                addForm={addForm}
                                setAddForm={setAddForm}
                                selectedDate={selectedDate}
                                setSelectedDate={setSelectedDate}
                                imgFile={imgFile}
                                setImgFile={setImgFile}
                                isEdit={isEdit}
                              />
                            ) : (
                              "Try Again!"
                            )}
                          </div>
                        </>
                      )}
                      <div className="col-12">
                        <button onClick={() => setIsPrint(!isPrint)}>Print</button>
                        <div className="table-responsive">
                          <table className="table table-striped table-bordered table_b">
                            <thead>
                              <tr className="border-0">
                                <th>Date (mm/dd/yyyy)</th>
                                <th>System</th>
                                <th className="min-w-140px">Image</th>
                                <th className="min-w-140px">Remark</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {data &&
                                data.map((item, index) => (
                                  <tr key={index}>
                                    <td>{formattedDDMMYYYY(item?.date)}</td>
                                    <td>{item?.system}</td>
                                    <td>
                                      <img src={process.env.NEXT_PUBLIC_IMG_PATH + item?.image} alt="" />
                                    </td>
                                    <td>{item?.remarks}</td>
                                    <td>
                                      <button onClick={() => editItem(item)} title="Edit Item" className="btn btn-icon btn-light btn-active-color-primary btn-sm me-1">
                                        <FontAwesomeIcon icon={faEdit} />
                                      </button>
                                      <button onClick={() => checkDelete(item?.cr_id)} title="Delete Item" className="btn btn-icon btn-light btn-active-color-primary btn-sm me-1">
                                        <FontAwesomeIcon icon={faTrash} />
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
      </main>
    </>
  );
}

export default CaseReporting;
