import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "../styles/top-geo.css";

function TopGeo() {
  const tableData = [
    { zip: "08031", tracks: 115200 },
    { zip: "08234", tracks: 107762 },
    { zip: "41048", tracks: 80425 },
    { zip: "92899", tracks: 54460 },
    { zip: "84104", tracks: 51448 },
    { zip: "91715", tracks: 46881 },
    { zip: "19116", tracks: 45843 },
  ];
  return (
    <div className="top__geo__main">
      <div className="topcard__top__geo">
        <h2>TOP geo</h2>
        <p>
          You can make your list of senders' ZIP codes to personalize your
          search. Check preferred below or type manually in the text area:
        </p>
        <div className="input__data">
          <input type="text" />
          <button>SAVE</button>
        </div>
      </div>
      <div className="top__geo__table table__tracking">
        <Table>
          <Thead>
            <Tr>
              <Th>Sno.</Th>
              <Th>ZIP</Th>
              <Th>Tracks</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableData.map((zip, index) => (
              <Tr>
                <Td>{index + 1}</Td>
                <Td>{zip.zip}</Td>
                <Td>{zip.tracks}</Td>
                <Td>
                  <input type="checkbox" />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </div>
  );
}

export default TopGeo;
