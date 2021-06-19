import React from "react";
import "./styles/Table.css";

const Table = () => {
    return (
        <section className="main-tables-container">
            <div className="main-currency-table">
                <p className="currency-table--title">Monedas</p>
                <div className="currency-table--container">
                    <table >
                        <tbody>
                            <tr>
                                <td className="table__top-left">Bitcoin</td>
                                <td className="table__top-right table__right">$1.96 <span className="tables--bitcoin-span"></span></td>
                            </tr>
                            <tr>
                                <td>Ethereum</td>
                                <td className="table__right">$0.07 <span className="tables--ethereum-span"></span></td>
                            </tr>
                            <tr>
                                <td>Ripple</td>
                                <td className="table__right">$2.17 <span className="tables--ripple-span"></span></td>
                            </tr>
                            <tr>
                                <td className="table__bottom-left">Stellar</td>
                                <td className="table__bottom-right table__right">$4.96 <span className="tables--stellar-span"></span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="currency-table--date">
                    <p><b>Actualizado:</b> 19 Julio 23:45</p>
                </div>
            </div>
        </section>
    )
}

export default Table;