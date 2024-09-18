import React from "react";
import { useState } from "react";

function Login() {
  const [state, setState] = useState();
  return (
    <section className="max-padd container flexCenter flex flex-col pt-32 bg-primary">
      <div className="w-full max-w-[666px] h-[600px] bg-primary m-auto px-14 py-10 rounded-md">
        <h3>{state}</h3>
        <div className="flex flex-col gap-4 mt-7">
          {state === "Sign Up" ? (
            <input
              type="text"
              name="username"
              placeholder="your name"
              className="h-8 w-full pl-5 bg-white outline-none rounded-xl text-sm"
            />
          ) : (
            ""
          )}
          <input
            type="email"
            name="email"
            placeholder="your email"
            className="h-8 w-full pl-5 bg-white outline-none rounded-xl text-sm"
          />

          <input
            type="password"
            name="email"
            placeholder="your password"
            className="h-8 w-full pl-5 bg-white outline-none rounded-xl text-sm"
          />
        </div>
        <button className="btn-dark rounded-xl my-5 !py-1">Continue</button>
        {state === "Sign Up" ? (
          <p className="text-black font-bold">
            Already have an account ?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
              className="text-secondary underline cursor-pointer"
            >
              Login
            </span>
          </p>
        ) : (
          <p className="text-black font-bold">
            Create an account ?{" "}
            <span
              onClick={() => {
                setState("Sign Up");
              }}
              className="text-secondary underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}
        <div className="flexStart mt-6 gap-3">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use and privacy policy</p>
        </div>
      </div>
    </section>
  );
}

export default Login;
