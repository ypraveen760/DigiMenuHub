import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <main class="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
        <div class="bg-[#FF6A3D] px-2 text-sm rounded p-2 ">
          If you are using phone homepage will not work due to CROS error ,try
          to open in pc.
        </div>
        <h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
        <div class="bg-[#FF6A3D] px-2 text-sm rounded p-2 ">
          Page Not Found OR ERROR WITH SWIGGY API, PLEASE TRY LATER.
        </div>
        <button class="mt-5">
          <a class="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
            <span class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span class="relative block px-8 py-3 bg-[#1A2238] border border-current">
              <Link to="/">Home</Link>
            </span>
          </a>
        </button>
      </main>
    </div>
  );
};

export default Error;
