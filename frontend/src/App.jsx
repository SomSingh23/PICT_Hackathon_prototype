import "./App.css";
<<<<<<< Updated upstream
import { useState } from "react";
import axios from "axios";
=======
import React, { useState } from 'react';
import axios from 'axios';
import {marked} from 'marked';
>>>>>>> Stashed changes
const App = () => {
  let [value, setValue] = useState("");
  let [data, setData] = useState({});
  let [count, setCount] = useState(0);
  let [loading, setLoading] = useState(false);
<<<<<<< Updated upstream
  let handlePrompt = async () => {
    setCount((p) => p + 1);
    setLoading((p) => !p);
=======
  let [formattedResponse,setFormattedResponse]=useState("");

  const handlePrompt = async () => {
    setCount((p) => p + 1);
    setLoading(true);

>>>>>>> Stashed changes
    setData({ user: value, response: "..." });
    let data = await axios.post("http://localhost:3000/chat/bot1", {
      prompt: value,
    });
    setValue("");
<<<<<<< Updated upstream
    setData({ ...data.data });
    setLoading((p) => !p);
  };
=======
    setData({ ...response.data });
    setLoading(false); // Set loading to false when response is received
    setFormattedResponse(boldText(response.data.response));
    console.log(formattedResponse);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handlePrompt();
    }
  };

  const boldText = (text) => {
    const res = marked.parse(text);
    console.log(res);
    return res;
  };

>>>>>>> Stashed changes
  return (
    <div className="app">
      <div className="content">
        <div className="heading">
          <h1 style={{ color: "#3e8078" }}>Health-GPT</h1>
        </div>
        <div className="conservation">
          {count === 0 ? (
            <h1
              style={{
                textAlign: "center",
                margin: 0,
                padding: "10px",
                color: "rgb(135, 138, 137)",
              }}
            >
              How can I help you today?
            </h1>
          ) : (
            ""
          )}

          {count > 0 ? (
            <div>
              <p
                style={{
                  color: "rgb(69, 69, 22)",
                  marginTop: "10px",

                  marginBottom: "10px",

                  paddingLeft: "20px",
                }}
              >
                {"👤 " + data.user}
              </p>
              {loading ? (
                <div className="loading">
                  <p>{"🧑‍⚕️"}</p>
                  <div className="loader"></div>
                </div>
              ) : (
                <p
                  style={{
                    color: "rgb(69, 69, 22)",
                    margin: 0,
                    paddingLeft: "20px",
                  }}
                >
                  {"🧑‍⚕️ " + data.response}
                </p>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="prompt">
          {loading === true ? (
            <input type="text" value="can't touch this" readonly></input>
          ) : (
            <input
              type="text"
              placeholder="Message Health-GPT"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              onKeyDown={handleKeyDown}
            />
          )}
          {loading === false ? (
            <button onClick={handlePrompt}>⬇️</button>
          ) : (
            <button onClick={handlePrompt} disabled>
              🚫
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
