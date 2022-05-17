import React from "react";
import Navigation from "../components/Navigation";
import { Table } from "react-bootstrap";

function Practice() {
  return (
    <>
      <Navigation />
      <div className="col-10 mx-auto">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>번호</th>
              <th>문제명</th>
              <th>출처</th>
              <th>AC</th>
              <th>제출</th>
              <th>성공률</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1001</td>
              <td>[기초-출력] 출력하기01(설명)</td>
              <td>기초100제</td>
              <td>238467</td>
              <td>438634</td>
              <td>54.4%</td>
            </tr>
            <tr>
              <td>1002</td>
              <td>[기초-출력] 출력하기02(설명)</td>
              <td>기초100제</td>
              <td>238467</td>
              <td>438634</td>
              <td>54.4%</td>
            </tr>
            <tr>
              <td>1003</td>
              <td>[기초-출력] 출력하기03(설명)</td>
              <td>기초100제</td>
              <td>238467</td>
              <td>438634</td>
              <td>54.4%</td>
            </tr>
            <tr>
              <td>1004</td>
              <td>[기초-출력] 출력하기04(설명)</td>
              <td>기초100제</td>
              <td>238467</td>
              <td>438634</td>
              <td>54.4%</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Practice;
