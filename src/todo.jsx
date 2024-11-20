import { useState } from "react";

function Form() {
  const [inputDesc, setInputDesc] = useState("");
  const [inputTitle, setinputTitle] = useState("");
  const [inputDate, setinputDate] = useState("");
  const [desc, setdesc] = useState([]);
  const [title, setTitle] = useState([]);
  const [dueDate, setDueDate] = useState([]);
  const [completed, setCompleted] = useState([]);
  const descInputChange = (event) => {
    setInputDesc(event.target.value);
  };
  const titleInputChange = (event) => {
    setinputTitle(event.target.value);
  };
  const dateInputChange = (event) => {
    setinputDate(event.target.value);
  };
  const addName = (event) => {
    event.preventDefault();
    if (inputDesc.trim() !== "") {
      setdesc([...desc, inputDesc]);
      setTitle([...title, inputTitle]);
      setDueDate([...dueDate, inputDate]);
      setCompleted([...completed, false]);
      setInputDesc("");
      setinputTitle("");
      setinputDate("");
    }
    console.log(inputDesc);
    console.log(inputTitle);
    console.log(inputDate);
  };
  const deleteTask = (index) => {
    setdesc(desc.filter((_, i) => i !== index));
    setTitle(title.filter((_, i) => i !== index));
    setDueDate(dueDate.filter((_, i) => i !== index));
    setCompleted(completed.filter((_, i) => i !== index));
  };
  const toggleCompletion = (index) => {
    setCompleted(completed.map((c, i) => (i === index ? !c : c))); 
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Add Your Tasks</h2>
      <form onSubmit={addName} className="form-container">
        <label htmlFor="title">Enter your title : </label>
        <input
          type="text"
          id="title"
          value={inputTitle}
          onChange={titleInputChange}
        />
        <label htmlFor="desc">Enter Description : </label>
        <input
          type="text"
          id="name"
          value={inputDesc}
          onChange={descInputChange}
        />
        <label htmlFor="date">Enter DueDate : </label>
        <input
          type="date"
          id="name"
          value={inputDate}
          onChange={dateInputChange}
        />
        <br />
        <br />
        <div className="center">
          <button type="submit">submit</button>
        </div>
      </form>
      {desc.length > 0 && (
        <>
          <div style={{ textAlign: "center", width: "35rem", margin: "auto" }}>
            {title.map((title, index) => (
              <>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <div
                    key={index}
                    style={{
                      padding: "10px",
                      margin: "10px 0",
                      border: "1px solid black",
                      borderRadius: "20px",
                      width: "40rem",
                      backgroundColor: completed[index] ? "white" : "white", // Change background color if completed
                    }}
                  >
                    <h3 style={{  position: 'relative'}}>
                      {" "}
                      {completed[index] && (
                        <span
                        style={{
                                  color: "green",
                                  top:'0',
                                  left:'0',
                                  position:'absolute'
                                }}
                        ><i
                        class="fa-regular fa-circle-check"
                        style={{ color: "green" }}
                      ></i></span>
                      )}
                      {title}
                    </h3>
                    <p>Description: {desc[index]}</p>
                    <p>Due Date: {dueDate[index]} </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                      marginLeft: "20px",
                    }}
                  >
                    <div>
                      <button
                        onClick={() => deleteTask(index)}
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        <i
                          className="fas fa-trash"
                          style={{ color: "red" }}
                        ></i>
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => toggleCompletion(index)}
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        <i
                          class="fa-regular fa-circle-check"
                          style={{ color: "green" }}
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </>
      )}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/css/all.min.css"
        integrity="sha512-9xKTRVabjVeZmc+GUW8GgSmcREDunMM+Dt/GrzchfN8tkwHizc5RP4Ok/MXFFy5rIjJjzhndFScTceq5e6GvVQ=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
    </>
  );
}
export default Form;
