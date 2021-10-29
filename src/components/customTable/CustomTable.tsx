import React from "react";
import { Link } from "react-router-dom";

import CancelIcon from "../../assets/icons/CancelIcon";

import { ICustomTable } from "./ICustomTable";
import { StyledCustomTable } from "./CustomTable.styles";
import { IWeatherData } from "../../interfaces";
const CustomTable: React.FC<ICustomTable> = ({ list, onRemoveItem }): JSX.Element => {
    return (
        <StyledCustomTable>
            <thead>
                <tr>
                    <td>S/N</td>
                    <td>City</td>
                    <td>Temperature (&deg;C)</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {list.map((item: IWeatherData, i) => {
                    return (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>
                                <Link to={`/place?value=${item.name}`}>{item.name}</Link>
                            </td>
                            <td>{(item.main.temp - 273).toFixed(1)}</td>
                            <td>
                                <button type="button" onClick={() => onRemoveItem(item.name)}>
                                    <CancelIcon />
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </StyledCustomTable>
    );
};

export default CustomTable;
