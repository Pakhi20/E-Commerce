export default function OrderSuccess() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-10 rounded-xl shadow text-center">
        <h1 className="text-3xl font-bold text-green-600">
          Order Placed Successfully!
        </h1>
        <p className="mt-4">Thank you for shopping with us.</p>

        <a
          href="/orders"
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          View Orders
        </a>
      </div>
    </div>
  )
}