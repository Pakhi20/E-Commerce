











import SignInForm from "@/components/SignInForm"

export default function LoginPage() {
  
  return (
    <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-black/20">

      <div className="bg-white p-8 shadow-lg rounded-lg w-96">

        <h1 className="text-2xl font-bold mb-6">
          Sign In
        </h1>

        <SignInForm />

      </div>
    </div>
  )
}




















