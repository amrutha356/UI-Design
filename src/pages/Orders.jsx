import { Button } from "@mui/material";
import MenuItems from "../components/MenuItems";
import Header from "../components/Header";
import FrameComponent from "../components/FrameComponent";
import Table from "../components/Table";
// import "./Orders.css";

const Orders = () => {
  return (
    <div className="orders1">
      <div className="sidebar">
        <div className="side-bar-content-parent">
          <div className="side-bar-content">
            <img className="logo-icon" loading="lazy" alt="" src="/logo.svg" />
          </div>
          <MenuItems />
        </div>
      </div>
      <main className="top-nav-parent">
        <Header dashboard="Orders" page="Orders" />
        <div className="header-wrapper">
          <div className="header">
            <a className="orders-summary">Orders Summary</a>
            <Button
              className="right"
              startIcon={<img width="24px" height="24px" src="/fiplus.svg" />}
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "14",
                background: "#5570f1",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "#5570f1" },
                width: 200,
                height: 36,
              }}
            >
              Create a New Order
            </Button>
          </div>
        </div>
        <FrameComponent />
        <section className="table-wrapper">
          <Table />
        </section>
      </main>
    </div>
  );
};

export default Orders;
