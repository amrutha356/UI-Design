import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import SideNav from "../components/SideNav";
import Header from "../components/Header";
import DashboardSummaryCard from "../components/DashboardSummaryCard";
import OrderCard from "../components/OrderCard";
import Chart from "../components/Chart";
import BarChart from "../components/BarChart";

const Dashboard = () => {
  const orderCardsData = [
    { cardBackground: "/rectangle-3@2x.png", pending: "Pending" },
    { cardBackground: "/rectangle-3-1@2x.png", pending: "Completed" },
    { cardBackground: "/rectangle-3@2x.png", pending: "Pending" },
    { cardBackground: "/rectangle-3-1@2x.png", pending: "Completed" },
    { cardBackground: "/rectangle-3-1@2x.png", pending: "Completed" },
    { cardBackground: "/rectangle-3-1@2x.png", pending: "Completed" },
    { cardBackground: "/rectangle-3@2x.png", pending: "Pending" },
    { cardBackground: "/rectangle-3@2x.png", pending: "Pending" },
    { cardBackground: "/rectangle-3@2x.png", pending: "Pending" },
  ];
  return (
    <div className="dashboard1">
      <main className="dashboard2">
        <div className="dashboard11" />
        <SideNav />
        <section className="header1">
          <div className="navbar">
            <Header dashboard="Dashboard" page="Page" />
            <div className="dashboardsummary-wrapper">
              <div className="dashboardsummary">
                <div className="dashboard-summary-card">
                  <div className="dashboard-summary-card1">
                    <div className="summarycontainer">
                      <div className="summaryheading">
                        <img
                          className="icon6"
                          loading="lazy"
                          alt=""
                          src="/icon2.svg"
                        />
                        <FormControl
                          className="filter"
                          variant="standard"
                          sx={{
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderRadius: "0px 0px 0px 0px",
                            width: "82px",
                            height: "16px",
                            m: 0,
                            p: 0,
                            "& .MuiInputBase-root": {
                              m: 0,
                              p: 0,
                              minHeight: "16px",
                              justifyContent: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInputLabel-root": {
                              m: 0,
                              p: 0,
                              minHeight: "16px",
                              display: "inline-flex",
                            },
                            "& .MuiMenuItem-root": {
                              m: 0,
                              p: 0,
                              height: "16px",
                              display: "inline-flex",
                            },
                            "& .MuiSelect-select": {
                              m: 0,
                              p: 0,
                              height: "16px",
                              alignItems: "center",
                              display: "inline-flex",
                            },
                            "& .MuiInput-input": { m: 0, p: 0 },
                            "& .MuiInputBase-input": {
                              color: "#bec0ca",
                              fontSize: 12,
                              fontWeight: "Regular",
                              fontFamily: "Inter",
                              textAlign: "left",
                              p: "0 !important",
                            },
                          }}
                        >
                          <InputLabel color="primary" />
                          <Select
                            color="primary"
                            disableUnderline
                            displayEmpty
                            IconComponent={() => (
                              <img
                                width="16px"
                                height="16px"
                                src="/fichevrondown-1.svg"
                                style={{}}
                              />
                            )}
                          >
                            <MenuItem>This Week</MenuItem>
                          </Select>
                          <FormHelperText />
                        </FormControl>
                      </div>
                      <div className="summary-data-containers">
                        <div className="customer-data">
                          <a className="customers1">Sales</a>
                          <div className="customer-trend">
                            <div className="customer-trend-icon">
                              ₦4,000,000.00
                            </div>
                            <div className="div">+0.00%</div>
                          </div>
                        </div>
                        <div className="active-data">
                          <a className="active">Volume</a>
                          <div className="active-trend">
                            <div className="div1">450</div>
                            <div className="div2">+20.00%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-summary-card2">
                  <div className="summarycontainer1">
                    <div className="summaryheading1">
                      <img className="icon7" alt="" src="/icon-1.svg" />
                      <FormControl
                        className="filter1"
                        variant="standard"
                        sx={{
                          borderTopWidth: "1px",
                          borderRightWidth: "1px",
                          borderBottomWidth: "1px",
                          borderLeftWidth: "1px",
                          borderRadius: "0px 0px 0px 0px",
                          width: "82px",
                          height: "16px",
                          m: 0,
                          p: 0,
                          "& .MuiInputBase-root": {
                            m: 0,
                            p: 0,
                            minHeight: "16px",
                            justifyContent: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInputLabel-root": {
                            m: 0,
                            p: 0,
                            minHeight: "16px",
                            display: "inline-flex",
                          },
                          "& .MuiMenuItem-root": {
                            m: 0,
                            p: 0,
                            height: "16px",
                            display: "inline-flex",
                          },
                          "& .MuiSelect-select": {
                            m: 0,
                            p: 0,
                            height: "16px",
                            alignItems: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInput-input": { m: 0, p: 0 },
                          "& .MuiInputBase-input": {
                            color: "#bec0ca",
                            fontSize: 12,
                            fontWeight: "Regular",
                            fontFamily: "Inter",
                            textAlign: "left",
                            p: "0 !important",
                          },
                        }}
                      >
                        <InputLabel color="primary" />
                        <Select
                          color="primary"
                          disableUnderline
                          displayEmpty
                          IconComponent={() => (
                            <img
                              width="16px"
                              height="16px"
                              src="/fichevrondown-2.svg"
                              style={{}}
                            />
                          )}
                        >
                          <MenuItem>This Week</MenuItem>
                        </Select>
                        <FormHelperText />
                      </FormControl>
                    </div>
                    <div className="data-comparison">
                      <div className="customer-comparison">
                        <a className="customers2">Customers</a>
                        <div className="customer-trend-comparison">
                          <div className="div3">1,250</div>
                          <div className="div4">+15.80%</div>
                        </div>
                      </div>
                      <div className="active-comparison">
                        <a className="active1">Active</a>
                        <div className="order-status-parent">
                          <div className="order-status">1,180</div>
                          <div className="order-status-detail">85%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <DashboardSummaryCard prop="445" />
              </div>
            </div>
            <div className="chart-container1">
              <div className="chart-area">
                <div className="chart-content">
                  <div className="chart-inner">
                    <div className="barchart">
                      <div className="content">
                        <div className="top">
                          <div className="chart-title-area">
                            <a className="marketting">Marketting</a>
                            <FormControl
                              className="filter2"
                              variant="standard"
                              sx={{
                                borderTopWidth: "1px",
                                borderRightWidth: "1px",
                                borderBottomWidth: "1px",
                                borderLeftWidth: "1px",
                                borderRadius: "0px 0px 0px 0px",
                                width: "82px",
                                height: "16px",
                                m: 0,
                                p: 0,
                                "& .MuiInputBase-root": {
                                  m: 0,
                                  p: 0,
                                  minHeight: "16px",
                                  justifyContent: "center",
                                  display: "inline-flex",
                                },
                                "& .MuiInputLabel-root": {
                                  m: 0,
                                  p: 0,
                                  minHeight: "16px",
                                  display: "inline-flex",
                                },
                                "& .MuiMenuItem-root": {
                                  m: 0,
                                  p: 0,
                                  height: "16px",
                                  display: "inline-flex",
                                },
                                "& .MuiSelect-select": {
                                  m: 0,
                                  p: 0,
                                  height: "16px",
                                  alignItems: "center",
                                  display: "inline-flex",
                                },
                                "& .MuiInput-input": { m: 0, p: 0 },
                                "& .MuiInputBase-input": {
                                  color: "#bec0ca",
                                  fontSize: 12,
                                  fontWeight: "Regular",
                                  fontFamily: "Inter",
                                  textAlign: "left",
                                  p: "0 !important",
                                },
                              }}
                            >
                              <InputLabel color="primary" />
                              <Select
                                color="primary"
                                disableUnderline
                                displayEmpty
                                IconComponent={() => (
                                  <img
                                    width="16px"
                                    height="16px"
                                    src="/fichevrondown-4.svg"
                                    style={{}}
                                  />
                                )}
                              >
                                <MenuItem>This Week</MenuItem>
                              </Select>
                              <FormHelperText />
                            </FormControl>
                          </div>
                          <div className="keycontainer">
                            <div className="key">
                              <div className="chart-key-color">
                                <div className="chart-key-label" />
                              </div>
                              <div className="acquisition">Acquisition</div>
                            </div>
                            <div className="key1">
                              <div className="key-inner">
                                <div className="rectangle-div" />
                              </div>
                              <div className="purchase">Purchase</div>
                            </div>
                            <div className="key2">
                              <div className="key-child">
                                <div className="frame-child3" />
                              </div>
                              <div className="retention">Retention</div>
                            </div>
                          </div>
                        </div>
                        <div className="chart-graph">
                          <Chart />
                        </div>
                      </div>
                    </div>
                    <div className="right1">
                      <div className="dashboard-summary-card3">
                        <div className="summarycontainer2">
                          <div className="summaryheading2">
                            <img className="icon8" alt="" src="/icon-3.svg" />
                            <div className="filter3">
                              <div className="this-week">This Week</div>
                              <img
                                className="fichevron-down-icon"
                                alt=""
                                src="/fichevrondown-5.svg"
                              />
                            </div>
                          </div>
                          <div className="summary-values-parent">
                            <div className="summary-values">
                              <div className="customers3">All Products</div>
                              <div className="summary-customer-data">
                                <div className="summary-customer-placeholder">
                                  45
                                </div>
                                <div className="summary-customer-value">
                                  +0.00%
                                </div>
                              </div>
                            </div>
                            <div className="summary-order-label">
                              <div className="active2">Active</div>
                              <div className="summary-order-data">
                                <div className="summary-order-placeholder">
                                  32
                                </div>
                                <div className="summary-order-value">+24%</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="dashboard-summary-card4">
                        <div className="summarycontainer3">
                          <div className="summaryheading3">
                            <img className="icon9" alt="" src="/icon-2.svg" />
                            <FormControl
                              className="filter4"
                              variant="standard"
                              sx={{
                                borderTopWidth: "1px",
                                borderRightWidth: "1px",
                                borderBottomWidth: "1px",
                                borderLeftWidth: "1px",
                                borderRadius: "0px 0px 0px 0px",
                                width: "82px",
                                height: "16px",
                                m: 0,
                                p: 0,
                                "& .MuiInputBase-root": {
                                  m: 0,
                                  p: 0,
                                  minHeight: "16px",
                                  justifyContent: "center",
                                  display: "inline-flex",
                                },
                                "& .MuiInputLabel-root": {
                                  m: 0,
                                  p: 0,
                                  minHeight: "16px",
                                  display: "inline-flex",
                                },
                                "& .MuiMenuItem-root": {
                                  m: 0,
                                  p: 0,
                                  height: "16px",
                                  display: "inline-flex",
                                },
                                "& .MuiSelect-select": {
                                  m: 0,
                                  p: 0,
                                  height: "16px",
                                  alignItems: "center",
                                  display: "inline-flex",
                                },
                                "& .MuiInput-input": { m: 0, p: 0 },
                                "& .MuiInputBase-input": {
                                  color: "#bec0ca",
                                  fontSize: 12,
                                  fontWeight: "Regular",
                                  fontFamily: "Inter",
                                  textAlign: "left",
                                  p: "0 !important",
                                },
                              }}
                            >
                              <InputLabel color="primary" />
                              <Select
                                color="primary"
                                disableUnderline
                                displayEmpty
                                IconComponent={() => (
                                  <img
                                    width="16px"
                                    height="16px"
                                    src="/fichevrondown-6.svg"
                                    style={{}}
                                  />
                                )}
                              >
                                <MenuItem>This Week</MenuItem>
                              </Select>
                              <FormHelperText />
                            </FormControl>
                          </div>
                          <div className="frame-parent11">
                            <div className="customers-parent">
                              <div className="customers4">Abandoned Cart</div>
                              <div className="parent">
                                <div className="div5">20%</div>
                                <div className="div6">+0.00%</div>
                              </div>
                            </div>
                            <div className="active-parent">
                              <div className="active3">Customers</div>
                              <div className="group">
                                <div className="div7">30</div>
                                <div className="div8">+0.00%</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bottom2">
                    <div className="summaryheading4">
                      <div className="chart-summary-header">
                        <div className="summary-label-area">
                          <div className="summary">Summary</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <BarChart />
                    </div>
                  </div>
                </div>
                <div className="recent-order-container">
                  <div className="order-summary">
                    <div className="order-header">
                      <div className="recent-orders">Recent Orders</div>
                      <div className="order-cards">
                        {orderCardsData.map((card, index) => (
                          <OrderCard
                            key={index}
                            cardBackground={card.cardBackground}
                            pending={card.pending}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
