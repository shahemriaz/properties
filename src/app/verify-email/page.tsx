export default function VerifyEmailPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded shadow text-center">
        <h1 className="text-2xl font-bold mb-4">Please verify your email</h1>
        <p className="mb-4">Thank you for registering! Please check your email to verify your account before logging in.</p>
        <button className="bg-blue-600 text-white py-2 px-4 rounded font-semibold hover:bg-blue-700 transition" disabled>
          Resend verification email (coming soon)
        </button>
      </div>
    </div>
  );
} 