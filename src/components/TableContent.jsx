import React from "react";
import MaterialTable from "material-table";
import { Grid, useMediaQuery } from "@material-ui/core";

const TableContent = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:960px)");

  const columns = [
    {
      title: "Customer Name",
      field: "customerName",
    },
    {
      title: "Order Date",
      field: "orderDate",
    },
    {
      title: "Order Type",
      field: "orderType",
    },
    {
      title: "Tracking ID",
      field: "trackingId",
    },
    {
      title: "Order Total",
      field: "orderTotal",
    },
    {
      title: "Action",
      field: "action",
    },
    {
      title: "Status",
      field: "status",
      render: (rowData) => (
        <span
          style={{
            backgroundColor:
              rowData.status === "Completed"
                ? "lightgreen"
                : rowData.status === "Pending"
                ? "transparent"
                : "lightblue",
            borderRadius: "8px",
            padding: "2px 8px",
            display: "inline-block", // Ensure inline-block display for width to apply
            width: "100%", // Full-width for the cell
          }}
        >
          {rowData.status}
        </span>
      ),
    },
  ];

  const data = [
    {
      customerName: "Janet Adebayo",
      orderDate: "12 Aug 2022 - 12:25 am",
      orderType: "Home Delivery",
      trackingId: "9348fjr73",
      orderTotal: "₦25,000.00",
      action: "Completed",
      status: "Completed",
    },
    {
      customerName: "John Doe",
      orderDate: "15 Sep 2022 - 10:45 am",
      orderType: "Pick-Up",
      trackingId: "83kdj39f",
      orderTotal: "₦15,000.00",
      action: "Pending",
      status: "In Progress",
    },
    {
      customerName: "Samuel-johnson",
      orderDate: "12 Aug 2022 - 12:25 am",
      orderType: "Home Delivery",
      trackingId: "9348fjr73",
      orderTotal: "₦25,000.00",
      action: "Completed",
      status: "Completed",
    },
    {
      customerName: "Francis-doe",
      orderDate: "15 Sep 2022 - 10:45 am",
      orderType: "Pick-Up",
      trackingId: "83kdj39f",
      orderTotal: "₦15,000.00",
      action: "Pending",
      status: "In Progress",
    },    {
      customerName: "Adam",
      orderDate: "12 Aug 2022 - 12:25 am",
      orderType: "Home Delivery",
      trackingId: "9348fjr73",
      orderTotal: "₦25,000.00",
      action: "Completed",
      status: "Completed",
    },
    {
      customerName: "Christian-dior",
      orderDate: "15 Sep 2022 - 10:45 am",
      orderType: "Pick-Up",
      trackingId: "83kdj39f",
      orderTotal: "₦15,000.00",
      action: "Pending",
      status: "In Progress",
    },
  
  ];

  return (
    <Grid container>
      <Grid item xs={12}>
        <MaterialTable
          title="Customer Orders"
          columns={columns}
          data={data}
          options={{
            sorting: true,
            filtering: false,
            search: true,
            paging: true,
            selection: true,
            padding: "dense", // Adjust padding if needed
          }}
          style={{
            width: "100%", // Full width
            maxWidth: "100%", // Ensure it takes up full available width
            margin: "auto", // Center align if needed
          }}
        />
      </Grid>
    </Grid>
  );
};

export default TableContent;
