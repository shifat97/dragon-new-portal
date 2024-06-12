export default function Register() {
  return (
    <div className="bg-[#F3F3F3] mt-10 p-10 lg:w-[600px] lg:mx-auto">
      <h1 className="text-[35px] text-[#403F3F] font-semibold text-center">
        Register your account
      </h1>
      <hr className="my-4" />
      <form className="flex flex-col gap-6">
        <div>
          <label className="text-xl font-semibold" htmlFor="username">
            Your Name
          </label>
          <input
            className="block px-4 py-4 rounded-md w-full mt-2"
            type="text"
            name="username"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="text-xl font-semibold" htmlFor="photo">
            Photo Url
          </label>
          <input
            className="block px-4 py-4 rounded-md w-full mt-2"
            type="text"
            name="photo"
            placeholder="Enter your photo url"
          />
        </div>
        <div>
          <label className="text-xl font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="block px-4 py-4 rounded-md w-full mt-2"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="text-xl font-semibold" htmlFor="password">
            Password
          </label>
          <input
            className="block px-4 py-4 rounded-md w-full mt-2"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex gap-2 items-center">
          <input className="h-[20px] w-[20px]" type="checkbox" />
          <a className="text-[#706F6F]" href="">
            Accept <span className="font-semibold">Terms & Conditions</span>
          </a>
        </div>
        <div>
          <input
            className="bg-[#403F3F] w-full text-white px-6 py-4 rounded-md cursor-pointer"
            type="submit"
            value="Register"
          />
        </div>
      </form>
    </div>
  );
}
