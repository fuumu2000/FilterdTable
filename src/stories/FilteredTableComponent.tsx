import React, { useState, useEffect } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

export type tblinput = {
  tbltitle: string[];
  tbldata: string[][];
  filtersw: boolean[];
  height: number;
};

type FilteredTableComponentProps = {
  input: tblinput;
};

export const FilteredTableComponent: React.FC<FilteredTableComponentProps> = ({
  input,
}) => {
  const [filterOptions, setFilterOptions] = useState<string[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>(
    new Array(input.tbltitle.length).fill("全データ")
  );
  const [filteredData, setFilteredData] = useState<string[][]>(input.tbldata);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentColumnIndex, setCurrentColumnIndex] = useState<number | null>(
    null
  );

  const handleFilterClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    const uniqueValues = Array.from(
      new Set(input.tbldata.map((row) => row[index]))
    );
    uniqueValues.unshift("全データ");
    setFilterOptions(uniqueValues);
    setCurrentColumnIndex(index);
    setAnchorEl(event.currentTarget);
  };

  const handleFilterOptionClick = (option: string) => {
    if (currentColumnIndex !== null) {
      const newSelectedFilters = [...selectedFilters];
      newSelectedFilters[currentColumnIndex] = option;
      setSelectedFilters(newSelectedFilters);
    }
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const newFilteredData = input.tbldata.filter((row) =>
      row.every(
        (cell, index) =>
          selectedFilters[index] === "全データ" ||
          cell === selectedFilters[index]
      )
    );
    setFilteredData(newFilteredData);
  }, [input.tbldata, selectedFilters]);

  return (
    <div style={{ height: input.height || 250 }}>
      <table>
        <thead>
          <tr>
            {input.tbltitle.map((title, index) => (
              <th key={index}>
                {title}
                {input.filtersw[index] && (
                  <IconButton
                    size="small"
                    onClick={(event) => handleFilterClick(event, index)}
                  >
                    <FilterListIcon />
                  </IconButton>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {filterOptions.map((option, index) => (
          <MenuItem key={index} onClick={() => handleFilterOptionClick(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default FilteredTableComponent;
