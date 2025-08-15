import React from "react";
import BarChart from "./Charts/BarChart/BarChart";
import { getLetterGrade } from "../utils/levelDesign";

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th className="w-[85px]">SUBJECT</th>
          <th className="w-[97px]">OVERALL</th>
          <th className="w-[97px]">LETTER GRADE</th>
          <th className="w-[209px]">VISUAL GRADE</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ name, value }, id) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{value.toFixed(2)}</td>
            <td>{getLetterGrade(value)}</td>
            <td className="flex justify-center mt-3.5">
              <BarChart variant={4} score={value} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
