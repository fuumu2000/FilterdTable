import React, { useState } from "react";
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
  const [filters, setFilters] = useState<string[]>([]);
  const [filterOptions, setFilterOptions] = useState<string[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleFilterClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    const uniqueValues = Array.from(
      new Set(input.tbldata.map((row) => row[index]))
    );
    uniqueValues.unshift("全データ");
    setFilterOptions(uniqueValues);
    setAnchorEl(event.currentTarget);
  };

  const handleFilterOptionClick = (option: string) => {
    setSelectedFilters([...selectedFilters, option]);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
          {input.tbldata.map((row, rowIndex) => (
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
