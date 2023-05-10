import React, { useState } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import TaskForm from "./components/TaskForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filterTask, setFilterTasks] = useState(null);

  {
    /* Create Task */
  }
  const createTask = function (value) {
    setTasks([...tasks, value]);
  };

  const updateTask = function (index) {
    const value = prompt("please enter your new task");
    if (value) {
      const copy = [...tasks];
      copy[index] = value;

      setTasks(copy); // 1st
    }
  };
  // Delete Tack
  const deleteTask = function (index) {
    const copy = [...tasks];

    copy.splice(index, 1);

    setTasks(copy);
  };

  const searchTask = function (searchTerm) {
    const filter = tasks.filter(function (value) {
      const valueLower = value.toLowerCase();

      return valueLower.includes(searchTerm);
    });

    setFilterTasks(filter);
  };

  //reset
  const resetSearch = function () {
    setFilterTasks(null);
  };

  const data = filterTask || tasks;

  return (
    <>
      <header className="bg-secondary py-2">
        <Container fluid className="p-0">
          <h1 className="text-white text-center">Todo App</h1>
        </Container>
      </header>

      {/* task form  */}
      <main className="container">
        <TaskForm searchTaskk={searchTask} createTask={createTask} />

        {/* diplay task */}
        <section className="mt-5">
          {filterTask?.length > 0 ? (
            <button onClick={resetSearch} className="btn btn-primary">
              Reset
            </button>
          ) : null}

          {data.map(function (value, index) {
            return (
              <div key={index} className="bg-secondary p-2 mb-3">
                <p className="text-white">
                  #{index + 1} - {value}
                </p>
                <div className="d-flex gap-3">
                  <span
                    onClick={() => updateTask(index)}
                    className=" btn text-bg-warning text-white p-2"
                  >
                    Edit
                  </span>

                  <span
                    onClick={() => deleteTask(index)}
                    className="btn text-bg-danger text-white p-2"
                  >
                    Delete
                  </span>
                </div>
              </div>
            );
          })}
          {data.length === 0 && <h2 className="text-danger fs-1">Any Task </h2>}
        </section>
      </main>
    </>
  );
}

export default App;
