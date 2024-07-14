import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import DashboardSummaryCard from "./DashboardSummaryCard";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`summaryrow-wrapper ${className}`}>
      <div className="summaryrow">
        <DashboardSummaryCard prop="320" propMinWidth="309px" />
        <div className="dashboard-summary-card5">
          <div className="summarycontainer4">
            <div className="summaryheading5">
              <img className="icon12" loading="lazy" alt="" src="/icon.svg" />
              <FormControl
                className="filter5"
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
            <div className="frame-parent17">
              <div className="all-orders-parent">
                <div className="all-orders">Canceled</div>
                <div className="parent1">
                  <div className="div13">30</div>
                  <div className="div14">-20%</div>
                </div>
              </div>
              <div className="pending-parent">
                <a className="pending">Returned</a>
                <div className="parent2">
                  <div className="div15">20</div>
                  <div className="div16">+0.00%</div>
                </div>
              </div>
              <div className="completed-parent">
                <div className="completed1">Damaged</div>
                <div className="parent3">
                  <div className="div17">5</div>
                  <div className="div18">+0.00%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-summary-card6">
          <div className="summarycontainer5">
            <div className="summaryheading6">
              <img className="icon13" loading="lazy" alt="" src="/icon-2.svg" />
              <FormControl
                className="filter6"
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
                      src="/fichevrondown-3.svg"
                      style={{}}
                    />
                  )}
                >
                  <MenuItem>This Week</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </div>
            <div className="customer-summary-values">
              <div className="customer-summary-value-row">
                <div className="customers5">Abandoned Cart</div>
                <div className="customer-summary-value-parent">
                  <div className="customer-summary-value">20%</div>
                  <div className="customer-summary-value1">+0.00%</div>
                </div>
              </div>
              <div className="customer-summary-value-row1">
                <a className="active6">Customers</a>
                <div className="parent4">
                  <div className="div19">30</div>
                  <div className="div20">+0.00%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
