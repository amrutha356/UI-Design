import { useMemo } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import PropTypes from "prop-types";

const DashboardSummaryCard = ({ className = "", prop, propMinWidth }) => {
  const dashboardSummaryCardStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`dashboard-summary-card7 ${className}`}
      style={dashboardSummaryCardStyle}
    >
      <div className="summarycontainer6">
        <div className="summaryheading7">
          <img className="icon26" alt="" src="/icon.svg" />
          <FormControl
            className="filter7"
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
        <div className="order-status-list">
          <div className="order-status-items">
            <a className="all-orders1">All Orders</a>
            <div className="order-status-count">
              <div className="order-count-placeholder">450</div>
              <div className="order-count-value">+0.00%</div>
            </div>
          </div>
          <div className="order-status-items1">
            <a className="pending1">Pending</a>
            <div className="parent5">
              <div className="div33">5</div>
              <div className="div34">+0.00%</div>
            </div>
          </div>
          <div className="order-status-items2">
            <div className="completed5">Completed</div>
            <div className="parent6">
              <div className="div35">{prop}</div>
              <div className="div36">+0.00%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DashboardSummaryCard.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default DashboardSummaryCard;
