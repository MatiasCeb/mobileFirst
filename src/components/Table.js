import React from "react";
import "./styles/Table.css";

const Table = () => {
    return (
        <section>
            <div className="main-currency-table">
                <p className="currency-table--title">My Skills</p>
                <div className="currency-table--container">
                    <table >
                        <tbody>
                            <tr>
                                <td className="table__top-left">HTML</td>
                                <td className="table__top-right table__right">$1.96 <span className="tables--bitcoin-span"></span></td>
                            </tr>
                            <tr>
                                <td>CSS</td>
                                <td className="table__right">$0.07 <span className="tables--ethereum-span"></span></td>
                            </tr>
                            <tr>
                                <td>JavaScript</td>
                                <td className="table__right">$2.17 <span className="tables--ripple-span"></span></td>
                            </tr>
                            <tr>
                                <td>React</td>
                                <td className="table__right">$2.17 <span className="tables--ripple-span"></span></td>
                            </tr>
                            <tr>
                                <td className="table__bottom-left">Git</td>
                                <td className="table__bottom-right table__right">$4.96 <span className="tables--stellar-span"></span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Table;