import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContex } from "../../Provider/AuthProvider";

const Login = () => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const { logIn } = useContext(AuthContex);
  const location = useLocation();
  const Navigate = useNavigate();
  console.log(location);

  // const { user } = useContext(AuthContex);

  // if (user) {
  //   return <Navigate to="/home"></Navigate>;
  // }
  const handelLogIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    logIn(email, password)
      .then((Result) => {
        const user = Result.user;
        console.log(user);
        setSuccess("user log in successfully");
        Navigate(location?.state ? location.state : "/home");
      })
      .catch((error) => {
        const errorMasage = error.message;
        setError(errorMasage);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="border w-[70%] mx-auto rounded-sm mt-[50px]">
        <h2 className="text-center text-3xl font-semibold my-8">
          please logIn{" "}
        </h2>
        <form
          onSubmit={handelLogIn}
          className="lg:w-[50%] mx-auto border p-4 mb-8 rounded-lg"
        >
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#403F3F] text-white">Login</button>
          </div>
          {error && <small className="text-red-500 font-bold">{error}</small>}
          {success && (
            <small className="text-green-500 font-semibold">{success}</small>
          )}
        </form>
        <p className="text-center">
          do not have an account please{" "}
          <Link className="text-blue-600 font-bold" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
