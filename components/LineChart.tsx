"use client";

import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";

interface LineChartProps extends React.HTMLAttributes<HTMLCanvasElement> {
  increase: boolean;
  datasets: Array<number>;
}

export default function LineChart({ increase, datasets, ...props }: LineChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");

    if (!context) return;

    const gradient = context.createLinearGradient(0, 0, 0, 450);
    const gradient2 = context.createLinearGradient(0, 0, 0, 450);

    gradient.addColorStop(0.1119, "rgba(95, 223, 146, 0.5)");
    gradient.addColorStop(0.1118, "rgba(95, 223, 146, 0.3)");
    gradient.addColorStop(0.93, "rgba(196, 196, 196, 0)");

    gradient2.addColorStop(0, "rgba(255, 189, 189, 0.5)");
    gradient2.addColorStop(0.94, "rgba(196, 196, 196, 0)");

    const chart = new Chart(canvasRef.current!, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "Data One",
            borderColor: increase ? "#28C165" : "#F4574D",
            borderWidth: 1,
            backgroundColor: increase ? gradient : gradient2,
            data: datasets,
            fill: "start",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: { display: false },
        },
        elements: {
          point: {
            radius: 0,
          },
        },
        scales: {
          y: {
            border: { display: false },
            title: { display: false },
            ticks: { display: false },
            grid: { display: false },
          },
          x: {
            border: { display: false },
            title: { display: false },
            ticks: { display: false },
            grid: { display: false },
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [canvasRef]);

  return <canvas ref={canvasRef} {...props}></canvas>;
}
