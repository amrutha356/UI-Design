import React, { useEffect } from "react";
import * as echarts from "echarts/core";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

// Register necessary components
echarts.use([
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  CanvasRenderer,
]);

const DonutChartComponent = () => {
  useEffect(() => {
    const chartInstance = echarts.init(document.getElementById("donutChart"));

    const options = {
      tooltip: {
        trigger: "item",
        formatter: "{b}: {c} ({d}%)",
        textStyle: {
          fontSize: 12,
        },
      },
      toolbox: {
        feature: {
          saveAsImage: {}, // Optional: Adds save as image button
          restore: {}, // Optional: Adds restore button to reset zoom
          dataZoom: {},
          dataView: {}, // Optional: Adds data view button
        },
      },
      series: [
        {
          name: "Category",
          type: "pie",
          radius: ["50%", "70%"],
          center: ["50%", "50%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "20",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 335, name: "Acquisition" },
            { value: 310, name: "Purchase" },
            { value: 234, name: "Retention" },
          ],
        },
      ],
    };

    chartInstance.setOption(options);

    // Resize chart with window resize
    window.addEventListener("resize", () => {
      chartInstance.resize();
    });

    return () => {
      chartInstance.dispose();
    };
  }, []);

  return <div id="donutChart" style={{ width: "100%", height: "200px" }} />;
};

export default DonutChartComponent;
