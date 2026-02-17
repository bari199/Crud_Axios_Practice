import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"

//https://698ec424aded595c2532b6b0.mockapi.io/cruds

function Read() {

  const [apiData, setApiData] = useState([]);

  function getData() {
    axios
      .get("https://698ec424aded595c2532b6b0.mockapi.io/cruds")
      .then((res) => {
        setApiData(res.data);
      })

      .catch((err) => {
        console.log("err", err);
      });
  }

  function handleDelete(id) {
    axios
      .delete(`https://698ec424aded595c2532b6b0.mockapi.io/cruds/${id}`)
      .then(() => {
        getData();
      })
      .catch((err) => {
        console.log("err", err);
      });
  }
  useEffect(() => {
    getData();
  }, []);


function setDataToStorage(id, name, email, age, password) {
  localStorage.setItem("id", id);
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("age", age);
  localStorage.setItem("password", password);
}

return (
  <>
    <div>
      <h1>Crud Read</h1>
    </div>
    <Link to="/create">
      <button>
        Create
      </button>
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>EMAIL</th>
                <th>PASSWORD</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {apiData.map((data) => {
                return (
                  <tr key={data.id}>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.age}</td>
                    <td>{data.password}</td>
                    <td>
                      <Link to="/Edit">
                        <button
                          onClick={() => {
                            setDataToStorage(
                              data.id,
                              data.name,
                              data.email,
                              data.age,
                              data.email,
                            );
                          }}
                        >
                          Edit
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          if (window.confirm("Are you sure to delete data??")) {
                            handleDelete(data.id);
                          }
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Link>
  </>
);
}
export default Read;
