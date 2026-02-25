import { LoginForm } from "@/components/login-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "로그인",
  description: "계정에 로그인하여 서비스를 이용하세요.",
}

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <LoginForm />
    </div>
  )
}
