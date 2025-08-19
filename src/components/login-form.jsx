"use client"
import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export function LoginForm({ className, ...props }) {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center min-h-screen",
        className
      )}
      {...props}
    >
      {/* 2 Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full">
        {/* Card */}
        <div className="w-full bg-white/90 backdrop-blur-lg rounded-2xl p-18 space-y-6">
          {/* Logo / Heading */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-extrabold text-gray-800">
              {isLogin ? "Welcome Back 👋" : "Create Account ✨"}
            </h1>
            <p className="text-gray-600">
              {isLogin
                ? "Login to continue your journey"
                : "Sign up and start your journey with us"}
            </p>
          </div>

          {/* Toggle Tabs */}
          <div className="flex items-center justify-center gap-4 bg-gray-100 rounded-lg p-1">
            <button
              className={cn(
                "w-1/2 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer",
                isLogin
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md"
                  : "text-gray-600"
              )}
              type="button"
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={cn(
                "w-1/2 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer",
                !isLogin
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md"
                  : "text-gray-600"
              )}
              type="button"
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {!isLogin && (
              <div>
                <Label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700 mb-1 block">
                  Full Name
                </Label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                  required
                />
              </div>
            )}

            <div>
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-700 mb-1 block"
              >
                Email or Mobile Number
              </Label>
              <input
                id="email"
                type="text"
                placeholder="Enter email or mobile number"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                required
              />
            </div>

            <div>
              <Label
                htmlFor="password"
                className="text-sm font-medium text-gray-700 mb-1 block"
              >
                Password
              </Label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                required
              />
            </div>

            {!isLogin && (
              <div>
                <Label
                  htmlFor="confirm-password"
                  className="text-sm font-medium text-gray-700 mb-1 block"
                >
                  Confirm Password
                </Label>
                <input
                  id="confirm-password"
                  type="password"
                  placeholder="Re-enter your password"
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                  required
                />
              </div>
            )}

            {/* Remember / Forgot */}
            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                  <input type="checkbox" className="rounded text-orange-500" />
                  Remember me
                </label>
                <a
                  href="#"
                  className="text-sm text-orange-600 hover:text-orange-700 font-medium"
                >
                  Forgot Password?
                </a>
              </div>
            )}

            {/* Button */}
            <Button type="submit"
              className="w-full h-12 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              {isLogin ? "Sign In" : "Sign Up"}
            </Button>
          </form>

          {/* Terms */}
          <p className="text-center text-xs text-gray-500 mt-4">
            By continuing, you agree to our{" "}
            <Link href="/termAndCondition" className="text-orange-600 hover:text-orange-700 font-medium"
            >Terms & Conditions
            </Link>{" "}
            and{" "}
            <a href="#" className="text-orange-600 hover:text-orange-700 font-medium">
              Privacy Policy
            </a>
          </p>
        </div>
        <div>
          <div>
            <img
              src="https://i.pinimg.com/originals/16/b3/a6/16b3a615a18d4e5a2c93962a4f047fae.gif"
              alt="auth-illustration"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
