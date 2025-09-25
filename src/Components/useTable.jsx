import React, { useState } from "react";

const useTable = () => {
  const [tableView, setTableView] = useState(false);

  const toggleChangeView = () => {
    setTableView((prev) => !prev);
  };

  return { tableView, toggleChangeView };
};

export default useTable;
