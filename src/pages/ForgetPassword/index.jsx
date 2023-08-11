import React from 'react'
import { Link } from 'react-router-dom';

function Password() {
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
                          className="text-black dark:text-white uppercase tracking-widest"
                        >
                          Dorsin
                        </a>
                      </h3>
                      <p className="text-gray-400 text-gray-300/60 mb-4">
                        Reset Password
                      </p>
                    </div>
                    <div
                      className="p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded border border-yellow-200 text-center"
                      role="alert"
                    >
                      Enter your email address and we'll send you an email with
                      instructions to reset your password.
                    </div>
                    <form>
                      <div className="mb-6">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="border border-gray-300 text-gray-900 text-sm rounded focus:ring-0 focus:border-gray-400 block w-full p-3 dark:bg-zinc-700/30 dark:border-zinc-700/50 dark:text-gray-300/60 dark:placeholder:text-gray-300/60"
                          placeholder="Enter your username"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn bg-red-500 text-white w-full"
                      >
                        Reset your Password
                      </button>
                    </form>
                    <div className="mt-4 text-center">
                      <p className="text-gray-800 dark:text-white/60">
                        Remember It ?
                        <Link to="/login" className="text-red-500">
                          {" "}
                          Login
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                {/* end card */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Password