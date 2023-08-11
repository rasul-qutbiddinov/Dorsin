import React from 'react'

import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <section className="h-screen justify-center items-center">
      <div className="overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-900 to-purple-800 opacity-90" />
      </div>
      <div className="table w-full h-full">
        <div className="table-cell align-middle">
          <div className="container">
            <div className="lg:flex justify-center">
              <div className="lg:w-5/12 relative">
                <div className="card bg-white dark:bg-zinc-800 dark:border-zinc-700/50">
                  <div className="p-7">
                    <div className="text-center mt-3">
                      <h3 className="font-bold mb-2">
                        <a
                          href="index.html"
                          className="text-black uppercase tracking-widest dark:text-white"
                        >
                          Dorsin
                        </a>
                      </h3>
                      <p className="text-gray-400 dark:text-gray-300/60 mb-4">
                        Sign in to continue to Dorsin.
                      </p>
                    </div>
                    <div>
                      <form>
                        <div className="mb-6">
                          <label
                            htmlFor="username"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Username
                          </label>
                          <input
                            type="text"
                            name="username"
                            id="username"
                            className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-0 focus:border-gray-400 block w-full p-3 dark:bg-zinc-700/30 dark:border-zinc-700/50 dark:text-gray-300/60 dark:placeholder:text-gray-300/60"
                            placeholder="Enter your username"
                          />
                        </div>
                        <div className="mb-6">
                          <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Password
                          </label>
                          <input
                            type="text"
                            name="password"
                            id="password"
                            className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-0 focus:border-gray-400 block w-full p-3 dark:bg-zinc-700/30 dark:border-zinc-700/50 dark:text-gray-300/60 dark:placeholder:text-gray-300/60"
                            placeholder="Enter your password"
                          />
                        </div>
                        <div className="flex items-start mb-6">
                          <div className="flex items-center h-5">
                            <input
                              className="w-4 h-4 rounded border-gray-300 checked:bg-red-500 checked:ring-0 checked:ring-offset-0 dark:bg-zinc-700 dark:border-transparent dark:checked:bg-red-500"
                              type="checkbox"
                              defaultValue
                              id="remember"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="remember"
                              className="font-medium text-gray-900 dark:text-gray-300"
                            >
                              Remember me
                            </label>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn bg-red-500 text-white w-full"
                        >
                          Log In
                        </button>
                      </form>
                      <div className="mt-7 text-center">
                        <Link
                          to="/password"
                          className="text-gray-600 dark:text-gray-300/60"
                        >
                          <i className="mdi mdi-lock" /> Forgot your password?
                        </Link>
                      </div>
                      <div className="mt-4 mb-0 text-center">
                        <p className="mb-0 text-gray-800 dark:text-white/80">
                          Don't have an account ?{" "}
                          <Link to="/signup" className="text-red-500">
                            Sign Up
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage