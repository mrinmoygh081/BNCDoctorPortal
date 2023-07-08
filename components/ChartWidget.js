import ApexCharts from "apexcharts";
import { useRef, useEffect } from "react";

export default function ChartWidget({
  classNames,
  primaryColor,
  secondaryColor,
  chartTitle,
  chartHeight,
  firstData,
  firstDataType,
  secData,
  secDataType,
  xCord,
}) {
  const chartRef = useRef(null);

  const refreshChart = () => {
    if (!chartRef.current) {
      return;
    }

    const chart = new ApexCharts(
      chartRef.current,
      chartOptions(
        primaryColor,
        secondaryColor,
        chartHeight,
        firstData,
        firstDataType,
        secData,
        secDataType,
        xCord
      )
    );
    if (chart) {
      chart.render();
    }

    return chart;
  };

  useEffect(() => {
    const chart = refreshChart();

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [chartRef]);

  return (
    <>
      <div className={`card ${classNames}`}>
        {/* begin::Body */}
        <div className="card-body p-0 d-flex justify-content-between flex-column overflow-hidden">
          {/* begin::Hidden */}
          <div className="d-flex flex-stack flex-wrap flex-grow-1 px-9 pt-9 pb-3">
            <div className="me-2">
              <span className="fw-bold text-gray-800 d-block fs-3">
                {chartTitle}
              </span>
            </div>
          </div>
          {/* end::Hidden */}

          {/* begin::Chart */}
          <div ref={chartRef} className="mixed-widget-10-chart"></div>
          {/* end::Chart */}
        </div>
      </div>
    </>
  );
}

const chartOptions = (
  primaryColor,
  secondaryColor,
  chartHeight,
  firstData,
  firstDataType,
  secData,
  secDataType,
  xCord
) => {
  const labelColor = "#000";
  const borderColor = "#ccc";

  return {
    series: [
      {
        name: firstDataType,
        data: firstData,
      },
      {
        name: secDataType,
        data: secData,
      },
    ],
    chart: {
      fontFamily: "inherit",
      type: "bar",
      height: chartHeight,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        borderRadius: 5,
      },
    },
    legend: {
      show: true,
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: xCord,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: labelColor,
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: labelColor,
          fontSize: "12px",
        },
      },
    },
    fill: {
      type: "solid",
    },
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      hover: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: "12px",
      },
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
    colors: [primaryColor, secondaryColor],
    grid: {
      padding: {
        top: 10,
      },
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  };
};
