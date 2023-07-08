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

export default function Form() {
  const { loginToken } = useSelector((state) => state.authReducer);
  const { push } = useRouter();
  const [productLines, setProductLines] = useState(null);
  const [addForm, setAddForm] = useState({
    productline_name: "",
    productline_id: "",
  });
  const [editForm, setEditForm] = useState({
    productline_name: "",
    productline_id: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    const data = await getAPI("productlines", null);
    if (data?.status) {
      setProductLines(data?.data);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      toast.error("Something went wrong", data?.message);
    }
  };
  useEffect(() => {
    // getData();
  }, []);

  const editIcon = (item) => {
    setEditForm(item);
  };

  const addBtn = async () => {
    if (addForm?.productline_name !== "") {
      const data = await postAPI("productlines", addForm, null);
      if (data?.status) {
        toast.success("Product Line is added succesfully");
        await getData();
        setAddForm({
          productline_name: "",
          productline_id: "",
        });
      } else {
        toast.error("Product data is not added. Try Again!");
      }
    } else {
      toast.error("Please fill all the fields");
    }
  };

  const updateBtn = async () => {
    if (editForm?.productline_name !== "") {
      const data = await putAPI("productlines", editForm, null);
      if (data?.status) {
        toast.success("Product Line is updated succesfully");
        await getData();
        setEditForm({
          productline_name: "",
          productline_id: "",
        });
      } else {
        toast.error("Product data is not updated. Try Again!");
      }
    } else {
      toast.error("Please fill all the fields");
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
                  <div className="container-xxl">
                    <div className="row g-5 g-xl-8 justify-content-center">
                      <div className="col-md-6">
                        <div className="screen_header shadow">
                          <h1>Add Production Lines</h1>
                          <div className="pt-5">
                            <div className="pb-5">
                              <label htmlFor="name">Name</label>
                              <input
                                type="text"
                                className="form-control pb-2"
                                id="name"
                                value={addForm?.productline_name}
                                onChange={(e) =>
                                  setAddForm({
                                    ...addForm,
                                    productline_name: e.target.value,
                                  })
                                }
                              />
                            </div>

                            <div className="text-start py-3">
                              <button
                                onClick={addBtn}
                                className="btn fw-bold btn-primary"
                              >
                                ADD
                              </button>
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
