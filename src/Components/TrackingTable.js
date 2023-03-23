import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "../styles/tabletracking.css";
function TrackingTable() {
  const tableData = [
    {
      trackingNumber: "92055901755477300096779681",
      note: "—",
      dateOfUse: "8 Mar, 2023",
      expectedDeliveryDate: "3 Mar, 2023",
      newExpectedDeliveryDate: "without changes",
      difference: "On time",
      status: "Delivered 3 Mar, 2023",
    },
    {
      trackingNumber: "92001901755477300163412036",
      note: "—",
      dateOfUse: "6 Mar, 2023",
      expectedDeliveryDate: "24 Jan, 2023",
      newExpectedDeliveryDate: "without changes",
      difference: "On time",
      status: "Delivered 24 Jan, 2023",
    },
    {
      trackingNumber: "92001901755477300163375454",
      note: "—",
      dateOfUse: "6 Mar, 2023",
      expectedDeliveryDate: "21 Jan, 2023",
      newExpectedDeliveryDate: "without changes",
      difference: "On time",
      status: "Delivered 21 Jan, 2023",
    },
    {
      trackingNumber: "9405503699300459192300",
      note: "—",
      dateOfUse: "6 Mar, 2023",
      expectedDeliveryDate: "20 Jan, 2023",
      newExpectedDeliveryDate: "without changes",
      difference: "On time",
      status: "Delivered 20 Jan, 2023",
    },
    {
      trackingNumber: "92001901755477300163330118",
      note: "—",
      dateOfUse: "6 Mar, 2023",
      expectedDeliveryDate: "24 Jan, 2023",
      newExpectedDeliveryDate: "23 Jan, 2023",
      difference: "Arriving earlier",
      status: "Delivered 23 Jan, 2023",
    },
    {
      trackingNumber: "9400136106089341131701",
      note: "—",
      dateOfUse: "6 Mar, 2023",
      expectedDeliveryDate: "24 Jan, 2023",
      newExpectedDeliveryDate: "without changes",
      difference: "On time",
      status: "Delivered 24 Jan, 2023",
    },
    {
      trackingNumber: "9405503699300460744505",
      note: "—",
      dateOfUse: "6 Mar, 2023",
      expectedDeliveryDate: "24 Jan, 2023",
      newExpectedDeliveryDate: "23 Jan, 2023",
      difference: "Arriving earlier",
      status: "Delivered 23 Jan, 2023",
    },
    {
      trackingNumber: "92001901755477300163009489",
      note: "—",
      dateOfUse: "6 Mar, 2023",
      expectedDeliveryDate: "23 Jan, 2023",
      newExpectedDeliveryDate: "without changes",
      difference: "On time",
      status: "Delivered 23 Jan, 2023",
    },
    {
      trackingNumber: "9400109206550541398957",
      note: "—",
      dateOfUse: "6 Mar, 2023",
      expectedDeliveryDate: "25 Jan, 2023",
      newExpectedDeliveryDate: "23 Jan, 2023",
      difference: "Arriving earlier",
      status: "Delivered 23 Jan,2023",
    },
  ];
  return (
    <div className="table__tracking">
      <Table>
        <Thead>
          <Tr>
            <Th>Tracking#</Th>
            <Th>Note</Th>
            <Th>Date of use</Th>
            <Th>Expected delivery date</Th>
            <Th>New expected delivery date</Th>
            <Th>Difference</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map((table, index) => (
            <Tr key={index}>
              <Td>{table.trackingNumber}</Td>
              <Td>{table.note}</Td>
              <Td>{table.dateOfUse}</Td>
              <Td>{table.expectedDeliveryDate}</Td>
              <Td>{table.newExpectedDeliveryDate}</Td>
              <Td
                style={{
                  fontWeight: "900",
                  color:
                    table.difference === "On time"
                      ? "black"
                      : table.difference === "Arriving earlier"
                      ? "red"
                      : "blue",
                }}
              >
                {table.difference}
              </Td>
              <Td>
                <span>{table.status}</span>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
}

export default TrackingTable;
