import { useState } from "react";
import styles from "../styles/index.module.css";
import jwt from "jsonwebtoken";

// const inter = Inter({ subsets: ['latin'] })

// function Heading(props){
//   return <div>
//     <style jsx>{
//       `
//       h3{
//         color: green;
//       }
//       `
//     }</style>
//     <h3>{props.heading}</h3>
//   </div>
// }

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(" ");

  const [message, setMessage] = useState("you are not logged in");

  async function submitForm() {
    const res = await fetch("/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((t) => t.json());

    const token = res.token;

    if (token) {
      const json = jwt.decode(token);
      setMessage(`welcom bro`);
    } else {
      setMessage("went wrong");
    }
  }

  const variables = Math.random() > 0.5 ? "red" : "blue";
  return (
    <>
      <style jsx>
        {`
          .title {
            color: ${variables};
          }
        `}
      </style>
      <div>
        <h1>{message}</h1>
        {/* <Heading heading="Heading"/> */}
        <p className={styles.sub}>I am Next</p>
        <h1 className="title">Hello World</h1>

        {/* Form part starts */}

        <div>
          <form method="POST" action="/api/hello">
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id=""
            />
            <br />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id=""
            />
            <br />
            <input type="button" value="login" onClick={submitForm} />
          </form>
        </div>

        {/* Form part ends */}
      </div>
    </>
  );
}
