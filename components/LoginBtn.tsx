'use client';
import { BadgeCheck, Vote, Waves } from "lucide-react";
import { signIn } from "next-auth/react"

const LoginBtn = () => {
    return (
            <div className="flex items-center justify-center font-poppins bg-[url(https://ng.boell.org/sites/default/files/styles/var_larger/public/2022-10/emmanuel-ikwuegbu-5ibsx1ewh7m-unsplash-1.jpg.webp?itok=mL2w_A1h)]">
    <div className="flex items-center justify-center w-screen h-screen">
    <div className="grid gap-8">
      <div
        id="back-div"
        className="bg-gradient-to-r from-blue-600 to-green-500 rounded-[26px] m-4"
      >
        <div
          className="border-[20px] border-transparent rounded-[20px] bg-black/65 shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2"
        >
            <div className="flex gap-2">
          <h2 className="pt-8 text-3xl font-bold text-left md:text-center cursor-default text-blue-500 md:pl-12">
            Welcome Back
          </h2>
          <div className="mt-9">
          <BadgeCheck color="green" size={'30'}/>
          </div>
          </div>
          <h2 className="text-3xl font-bold text-left md:text-center cursor-default text-blue-500 pb-6">
          Log in to continue
          </h2>
          <form action="#" method="post" className="space-y-4">
            <div>
              <label  className="mb-2 text-lg text-gray-400">Email</label>
              <input
                id="email"
                className="w-full p-3 duration-300 ease-in-out border border-green-600 rounded-lg shadow-md bg-blue-700 text-white/90 placeholder:text-base focus:scale-104 font-serif"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label  className="mb-2 text-lg text-gray-400">Password</label>
              <input
                id="password"
                className="w-full p-3 duration-300 ease-in-out border border-green-600 rounded-lg shadow-md bg-blue-700 text-white/90 placeholder:text-base focus:scale-104 font-serif"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <a
              className="text-blue-400 transition-all duration-100 ease-in-out group"
              href="#"
            >
              <span
                className="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
              >
                Forget your password?
              </span>
            </a>
            <button
              className="w-full p-2 mt-6 text-white font-serif transition duration-300 ease-in-out rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 hover:from-purple-500 hover:to-blue-500"
              type="submit"
            >
              LOG IN
            </button>
          </form>
          <div className="flex flex-col items-center justify-center mt-4 text-sm">
            <h3 className="text-gray-300">
              Don't have an account?
              <a
                className="text-blue-400 transition-all duration-100 ease-in-out group"
                href="/register"
              >
                <span
                  className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out ml-2"
                >
                  Sign Up
                </span>
              </a>
            </h3>
          </div>
          {/* <!-- Third Party Authentication Options --> */}
          <div
            id="third-party-auth"
            className="flex flex-wrap items-center justify-center mt-5 text-white"
          >
            <button
              className="p-2 m-1 duration-300 ease-in-out rounded-lg shadow-lg hover:scale-105"
            >
              <img
                className="max-w-[25px]"
                src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                alt="Google"
              />
            </button>
            <button
              className="p-2 m-1 duration-300 ease-in-out rounded-lg shadow-lg hover:scale-105"
            >
              <img
                className="max-w-[25px]"
                src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/"
                alt="Linkedin"
              />
            </button>
            <button
              onClick={()=> signIn('github')}
              className="p-2 m-1 duration-300 ease-in-out rounded-lg shadow-lg hover:scale-105"
            >
              <img
                className="max-w-[25px] filter invert"
                src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/"
                alt="Github"
              />
            </button>
            <button
              className="p-2 m-1 duration-300 ease-in-out rounded-lg shadow-lg hover:scale-105"
            >
              <img
                className="max-w-[25px]"
                src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/"
                alt="Facebook"
              />
            </button>
            <button
              className="p-2 m-1 duration-300 ease-in-out rounded-lg shadow-lg hover:scale-105"
            >
              <img
                className="max-w-[25px] gray-100"
                src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/"
                alt="twitter"
              />
            </button>

            <button
              className="p-2 m-1 duration-300 ease-in-out rounded-lg shadow-lg hover:scale-105"
            >
              <img
                className="max-w-[25px]"
                src="https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/"
                alt="apple"
              />
            </button>
          </div>

          <div
            className="flex flex-col items-center mt-4 text-sm text-center text-gray-400"
          >
            <p className="cursor-default">
              By signing in, you agree to our
              <a
                className="text-blue-400 transition-all duration-100 ease-in-out group"
                href="#"
              >
                <span
                  className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                >
                  Terms
                </span>
              </a>
              &
              <a
                className="text-blue-400 transition-all duration-100 ease-in-out group"
                href="/privacy"
              >
                <span
                  className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                >
                  Privacy Policy
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
        </div>
    )
}

export default LoginBtn