import Logo from "/assets/logo.svg";
import Back from "/assets/chevronback.png";

function Signup() {
  return (
    <>
      <div className="absolute top-[5%] left-[5%] lg:top-[5%] mx-6 bg-red-700 rounded-[100%]">
        <a href="/">
          <img src={Back} alt="" className="py-2 px-2 " />
        </a>
      </div>

      <div className="bg-black py-4 px-4 flex flex-col items-center justify-center w-[35%] rounded-2xl mt-[1%] ml-[35%] pb-[5%]">
        <img src={Logo} alt="Logo" className="w-[250px]" />
        <h1 className="font-bold text-4xl">
          Welcome to Ani<span className=" text-red-700">FLow</span>
        </h1>
        <p className="text-gray-500 text-[18px]">
          Sign up to and Join the best Anime Community
        </p>
        <div className="mt-8">
          <p>Username</p>
          <input
            type="text"
            placeholder="Enter your Username"
            className="mt-1 py-4 pl-4 pr-[230px] bg-gray-800 rounded-xl"
          />
        </div>
        <div className="mt-4">
          <p>Email</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-2 py-4 pl-4 pr-[230px] bg-gray-800 rounded-xl"
          />
        </div>
        <div className="mt-4">
          <p>Password</p>
          <input
            type="password"
            placeholder="Create a password "
            className="mt-1 py-4 pl-4 pr-[230px] bg-gray-800 rounded-xl"
          />
        </div>

        <div className="mt-4">
          <p>Confirm Password</p>
          <input
            type="password"
            placeholder="Confirm your password "
            className="mt-1 py-4 pl-4 pr-[230px] bg-gray-800 rounded-xl"
          />
        </div>

        <button className="bg-red-700 py-4 px-8 rounded-xl text-white cursor-pointer hover:bg-red-300 w-[60%] mt-8 mb-4">
          Sign Up
        </button>

        <p>Or</p>

        <button className="bg-gray-700 py-4 px-8 rounded-xl text-white cursor-pointer hover:bg-white hover:text-black w-[60%] mt-2 mb-2">
          Sign Up with Google
        </button>
        <button className="bg-gray-700 py-4 px-8 rounded-xl text-white cursor-pointer hover:bg-white w-[60%] hover:text-black mt-2 mb-2">
          Sign Up with Facebook
        </button>

        <div className="text-md">
          <p>
            Dont' have an account yet?{" "}
            <a href={"login"}>
              <span className="inline-block text-red-700 hover:scale-110 cursor-pointer ml-2 font-bold">
                Login
              </span>
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
