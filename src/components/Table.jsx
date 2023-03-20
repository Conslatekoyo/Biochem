import React from 'react'
import { invoices } from '../data'

const Table = () => {

  return (    
    <table>
        <tr>
            <th>Invoice #</th>
            <th>Description</th>            
            <th>Invoice Date</th>            
            <th>Status</th>
            <th>Action</th>
        </tr>

        {/* {invoices.map((invoice) => {
            return (
            <tr key={invoice.id}>
                <td>{invoice.invoiceId}</td>
                <td>{invoice.description}</td>
                <td>{invoice.invoiceDate}</td>
                <td>{invoice.status}</td>
                <td>{invoice.action}</td>
            </tr>
            )
        })}   */}

        {invoices.filter((invoice) => invoice.status === "Paid").map((filteredData) => {
            return (
                <tr key={filteredData.id}>
                <td>{filteredData.invoiceId}</td>
                <td>{filteredData.description}</td>
                <td>{filteredData.invoiceDate}</td>
                <td>{filteredData.status}</td>
                <td>{filteredData.action}</td>
            </tr>
            )
        })}  
    </table>
  )
}

export default Table
