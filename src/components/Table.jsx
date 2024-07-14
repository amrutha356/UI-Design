import PropTypes from "prop-types";

import TableContent from "./TableContent";

const Table = ({ className = "" }) => {
  return (
    <footer className={`table ${className}`}>
      <div className="table-header-container">
        <TableContent />
      </div>
    </footer>
  );
};

Table.propTypes = {
  className: PropTypes.string,
};

export default Table;
