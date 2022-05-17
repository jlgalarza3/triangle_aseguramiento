import "./App.css";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import React, { useEffect, useState } from "react";

function App() {
  const [sideA, setSideA] = useState(0);
  const [sideB, setSideB] = useState(0);
  const [sideC, setSideC] = useState(0);
  const [result, setResult] = useState("");

  useEffect(() => {
    if (Number(sideA) <= 0 || Number(sideB) <= 0 || Number(sideC) <= 0) {
      setResult("Entrada no válida");
    } else if (
      Number(sideA) >= Number(sideB) + Number(sideC) ||
      Number(sideC) >= Number(sideB) + Number(sideA) ||
      Number(sideB) >= Number(sideA) + Number(sideC)
    ) {
      setResult("No es un triángulo");
    } else if (
      Number(sideA) === Number(sideB) &&
      Number(sideB) === Number(sideC)
    ) {
      setResult("Triángulo Equilatero");
    } else if (
      Number(sideA) !== Number(sideB) &&
      Number(sideB) !== Number(sideC) &&
      Number(sideC) !== Number(sideA)
    ) {
      setResult("Triángulo Escaleno");
    } else if (
      Number(sideA) === Number(sideB) ||
      Number(sideC) === Number(sideA) ||
      Number(sideC) === Number(sideB)
    ) {
      setResult("Triángulo Isosceles");
    }
  }, [sideA, sideB, sideC]);

  const avoidSigns = (event) => {
    if (
      event?.key === "-" ||
      event?.key === "+" ||
      event?.key === "." ||
      event?.key === ","
    ) {
      event.preventDefault();
    }
  };

  return (
    <div
      style={{
        background: "red",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "url(https://img.freepik.com/free-vector/geometric-triangle-pattern-illustration_53876-81185.jpg?w=2000)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "30px",
          background: "white",
          width: "500px",
          paddingTop: "30px",
          paddingBottom: "30px",
          boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "200px",
            height: "200px",
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset",
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Triangle_Sides_ABC.svg/2560px-Triangle_Sides_ABC.png"
            style={{ width: "200px", height: "200px" }}
            alt="Triangle"
          />
        </div>
        <TextField
          type="number"
          value={sideA}
          onChange={(e) => {
            const regex = /[1-9]\d*/;
            if (e.target.value === "" || regex.test(e.target.value)) {
              setSideA(e.target.value);
            }
          }}
          id="outlined-basic"
          label="Lado A"
          variant="outlined"
          required
          InputProps={{
            inputProps: { min: 1 },
          }}
          onKeyPress={(event) => avoidSigns(event)}
        />
        <TextField
          type="number"
          value={sideB}
          onChange={(e) => {
            const regex = /[1-9]\d*/;
            if (e.target.value === "" || regex.test(e.target.value)) {
              setSideB(e.target.value);
            }
          }}
          id="outlined-basic"
          label="Lado B"
          variant="outlined"
          required
          InputProps={{
            inputProps: { min: 1 },
          }}
          onKeyPress={(event) => avoidSigns(event)}
        />
        <TextField
          type="number"
          value={sideC}
          onChange={(e) => {
            const regex = /[1-9]\d*/;
            if (e.target.value === "" || regex.test(e.target.value)) {
              setSideC(e.target.value);
            }
          }}
          id="outlined-basic"
          label="Lado C"
          variant="outlined"
          required
          InputProps={{
            inputProps: { min: 0 },
          }}
          onKeyPress={(event) => {
            if (
              event?.key === "-" ||
              event?.key === "+" ||
              event?.key === "." ||
              event?.key === ","
            ) {
              event.preventDefault();
            }
          }}
        />
        <Divider style={{ width: "100%" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <h2 style={{ marginTop: "0px" }}>Resultado</h2>
          <TextField
            id="outlined-read-only-input"
            label="Resultado"
            InputProps={{
              readOnly: true,
            }}
            value={result}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
