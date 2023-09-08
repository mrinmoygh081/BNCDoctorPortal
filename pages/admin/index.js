import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import authReducer from "@/redux/reducers/authReducer";
import { useRouter } from "next/router";
const ChartWidget = dynamic(() => import("@/components/ChartWidget"), {
  ssr: false,
});

export default function Home() {
  const router = useRouter();
  const { loginToken } = useSelector((state) => state.authReducer);
  const [graphData, setGraphData] = useState({
    application: [30, 65],
    convertion: [10, 40],
    year: [2023, 2034],
  });
  const [genderRatio, setGenderRatio] = useState({
    male: [30, 65, 50, 30, 10, 60, 40, 30, 30, 40, 20, 35],
    female: [10, 40, 40, 50, 30, 10, 60, 40, 30, 30, 40, 20],
    classes: [
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX",
      "X",
      "XI",
      "XII",
    ],
  });

  useEffect(() => {
    if (!loginToken) {
      router.push("/");
    }
  }, [loginToken]);

  return (
    <>
      <Head>
        <title>Welcome | Doctor Panel</title>
        <meta
          name="description"
          content="Welcome | Doctor Panel | Admin Panel"
        />
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
                      <div className="col-xl-6">
                        <ChartWidget
                          classNames=" mb-5 mb-xl-8"
                          primaryColor="#009ef6"
                          secondaryColor="#6610f2"
                          chartHeight="255px"
                          chartTitle="Total Application vs convertion"
                          firstDataType="Total Application"
                          firstData={graphData.application}
                          secDataType="Convertion"
                          secData={graphData.convertion}
                          xCord={graphData.year}
                        />
                      </div>
                      <div className="col-xl-6">
                        <ChartWidget
                          classNames="mb-5 mb-xl-8"
                          primaryColor="#009ef6"
                          secondaryColor="#6610f2"
                          chartHeight="255px"
                          chartTitle="Class wise Male & Female students"
                          firstDataType="Male"
                          firstData={genderRatio.male}
                          secDataType="Female"
                          secData={genderRatio.female}
                          xCord={genderRatio.classes}
                        />
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
