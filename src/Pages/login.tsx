import Logo from "/assets/logo.svg";
import Back from "/assets/chevronback.png";

function Login() {
  return (
    <>
      <div className="absolute top-[5%] left-[5%] lg:top-[5%] mx-6 bg-red-700 rounded-[100%]">
        <a href="/">
          <img src={Back} alt="" className="py-2 px-2 " />
        </a>
      </div>

      <div className="bg-black py-4 px-4 flex flex-col items-center justify-center w-[35%] rounded-2xl mt-[5%] ml-[35%] pb-[5%]">
        <img src={Logo} alt="Logo" className="w-[250px]" />
        <h1 className="font-bold text-4xl">
          Welcome to Ani<span className=" text-red-700">FLow</span>
        </h1>
        <p className="text-gray-500 text-[18px]">
          Sign in to continue your anime journey
        </p>
        <div className="mt-8">
          <p>Email</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-2 py-4 pl-4 pr-[230px] bg-gray-800 rounded-xl"
          />
        </div>
        <div className="mt-8">
          <p>Password</p>
          <input
            type="password"
            placeholder="Enter your password "
            className="mt-2 py-4 pl-4 pr-[230px] bg-gray-800 rounded-xl"
          />
        </div>
        <div className="flex justify-between w-[60%] mt-2">
          <div className="flex gap-2">
            <input
              type="checkbox"
              name="Check"
              id="Check"
              className="bg-gray-700"
            />
            <p>Remember me</p>
          </div>
          <p className="text-red-700 hover:scale-110 cursor-pointer">
            Forgot Password?
          </p>
        </div>
        <button className="bg-red-700 py-4 px-8 rounded-xl text-white cursor-pointer hover:bg-red-300 w-[60%] mt-8 mb-4">
          Sign In
        </button>

        <p>Or</p>

        <button className="bg-gray-700 py-4 px-8 rounded-xl text-white cursor-pointer hover:bg-white hover:text-black w-[60%] mt-4 mb-4">
          Continue with Google
        </button>
        <button className="bg-gray-700 py-4 px-8 rounded-xl text-white cursor-pointer hover:bg-white w-[60%] hover:text-black mt-4 mb-4">
          Continue with Facebook
        </button>

        <div className="text-md">
          <p>
            Dont' have an account yet?{" "}
            <a href={"signup"}>
              <span className="inline-block text-red-700 hover:scale-110 cursor-pointer ml-2 font-bold">
                Sign Up
              </span>
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
