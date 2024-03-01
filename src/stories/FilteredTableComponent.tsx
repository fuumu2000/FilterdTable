import React, { useState } from "react";
import { IconButton } from "@mui/material";
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

  const handleFilterClick = (index: number) => {
    // フィルタリングロジックをここに実装します
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
                    onClick={() => handleFilterClick(index)}
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
    </div>
  );
};

export default FilteredTableComponent;
