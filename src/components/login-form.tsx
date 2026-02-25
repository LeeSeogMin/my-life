"use client"

import { useState } from "react"
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})

  function validate() {
    const newErrors: { email?: string; password?: string } = {}
    if (!email) {
      newErrors.email = "이메일을 입력해주세요."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "올바른 이메일 형식을 입력해주세요."
    }
    if (!password) {
      newErrors.password = "비밀번호를 입력해주세요."
    } else if (password.length < 6) {
      newErrors.password = "비밀번호는 6자 이상이어야 합니다."
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return

    setIsLoading(true)
    // 실제 로그인 로직을 여기에 연결하세요
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Card */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            로그인
          </h1>
          <p className="text-sm text-gray-500">
            계정에 로그인하여 서비스를 이용하세요.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              이메일
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Mail className="w-4 h-4 text-gray-400" />
              </div>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }))
                }}
                className={`
                  w-full pl-10 pr-4 py-2.5 text-sm text-gray-900 
                  bg-gray-50 border rounded-lg
                  placeholder:text-gray-400
                  focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent
                  transition-all
                  ${errors.email ? "border-red-400 focus:ring-red-500" : "border-gray-200 hover:border-gray-300"}
                `}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
            </div>
            {errors.email && (
              <p id="email-error" className="text-xs text-red-500 mt-1" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                비밀번호
              </label>
              <button
                type="button"
                className="text-xs text-gray-500 hover:text-gray-900 transition-colors"
              >
                비밀번호 찾기
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Lock className="w-4 h-4 text-gray-400" />
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }))
                }}
                className={`
                  w-full pl-10 pr-11 py-2.5 text-sm text-gray-900 
                  bg-gray-50 border rounded-lg
                  placeholder:text-gray-400
                  focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent
                  transition-all
                  ${errors.password ? "border-red-400 focus:ring-red-500" : "border-gray-200 hover:border-gray-300"}
                `}
                aria-invalid={!!errors.password}
                aria-describedby={errors.password ? "password-error" : undefined}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
            {errors.password && (
              <p id="password-error" className="text-xs text-red-500 mt-1" role="alert">
                {errors.password}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="
              w-full flex items-center justify-center gap-2 
              py-2.5 px-4 text-sm font-semibold
              text-white bg-gray-900 rounded-lg
              hover:bg-gray-800 
              focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-all
            "
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                로그인
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-white px-3 text-gray-400">또는</span>
          </div>
        </div>

        {/* Sign up link */}
        <p className="text-center text-sm text-gray-500">
          {"계정이 없으신가요? "}
          <button
            type="button"
            className="font-semibold text-gray-900 hover:underline transition-colors"
          >
            회원가입
          </button>
        </p>
      </div>
    </div>
  )
}
