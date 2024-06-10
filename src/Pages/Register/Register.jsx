import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContex } from "../../Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser } = useContext(AuthContex);
  const [error, setError] = useState(null);
  const handelRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoUrl = e.target.photo.value;
    console.log(name, email, password, photoUrl);
    createUser(email, password)
      .then((Result) => {
        const user = Result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        const errorMasage = error.message;
        setError(errorMasage);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="border w-[70%] mx-auto rounded-sm my-[50px]">
        <h2 className="text-center text-3xl font-semibold my-8">
          Register your Account{" "}
        </h2>
        <form
          onSubmit={handelRegister}
          className="lg:w-[50%] mx-auto border p-4 mb-8 rounded-lg"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="enter your name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Photo url"
              name="photo"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-[#403F3F] text-white">Register</button>
          </div>
          {error && (
            <small className="text-red-600 m-2 font-semibold">{error}</small>
          )}
        </form>
        <p className="text-center">
          Allready have an Account{" "}
          <Link className="text-blue-600 font-bold" to="/login">
            logIn
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
