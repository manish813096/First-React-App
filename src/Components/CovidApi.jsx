import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const CovidApi = () => {
  const [covidData, SetCovidData] = useState([]);

  const coviData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const responseData = await res.json();
      //   console.log(responseData.statewise);
      SetCovidData(responseData.statewise);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    coviData();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <h1 className="text-center text-primary">Covid Data of India</h1>
        <hr />
        <div className="container p-1 table-container border border-dark overflow-scroll">
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th scope="col"># S.No</th>
                <th scope="col">State</th>
                <th scope="col">Total Active</th>
                <th scope="col">Total Confirmed</th>
                <th scope="col">Total Deaths</th>
                <th scope="col">Total Recovered</th>
              </tr>
            </thead>
            <tbody>
              {covidData.map((states, key) => {
                return (
                  <tr key={key}>
                    <th scope="row" >
                      {key + 1}
                    </th>
                    <td>{states.state}</td>
                    <td>{states.active}</td>
                    <td>{states.confirmed}</td>
                    <td>{states.deaths}</td>
                    <td>{states.recovered}</td>
                     </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CovidApi;
