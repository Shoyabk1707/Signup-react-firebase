import React, { useState } from "react";
import InputControl from "../InputControl/InputControl";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisables, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all Fields");
      return;
    }
    setErrorMsg("");
    console.log(values);

    setSubmitButtonDisabled(true);

    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        // console.log(res);
        
        navigate("/home");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
        // console.log("Error : ", err.message)
      });
  };
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-purple-400">
      <div className="min-h-fit w-fit  bg-white p-8 rounded-lg shadow-sm flex flex-col gap-7">
        <h1 className="text-3xl font-bold text-gray-700 text-center ">Login</h1>

        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />

        <div className="flex flex-col gap-3">
          <b className="text-center text-red-500">{errorMsg}</b>
          <button
            disabled={submitButtonDisables}
            onClick={handleSubmission}
            className="bg-purple-800 text-white rounded font-bold text-xl py-2 px-4 w-full ease-in duration-150 hover:bg-purple-600"
          >
            Login
          </button>
          <p className="font-bold text-black">
            Already have an account?{" "}
            <span className="text-purple-700 tracking-wide">
              <Link to="/signup">Sign Up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
