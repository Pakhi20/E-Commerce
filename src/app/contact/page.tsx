"use client"

import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [errors, setErrors] = useState<any>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    let newErrors: any = {}
    /* 
    if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Name should contain only letters"
    } */

    if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Name should contain only letters"
    }


    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format"
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be exactly 10 digits"
    }

    if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    return newErrors
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else {
      setErrors({})
      setSubmitted(true)


      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    }
  }

  /* const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  } */
  const handleChange = (e: any) => {
    const { name, value } = e.target

    if (name === "name") {
      // Allow only letters and spaces
      const filtered = value.replace(/[^A-Za-z\s]/g, "")
      setFormData({ ...formData, [name]: filtered })
    } else if (name === "phone") {
      // Allow only digits, max length 10
      const filtered = value.replace(/\D/g, "").slice(0, 10)
      setFormData({ ...formData, [name]: filtered })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }




  return (
    <div className="bg-gray-50 min-h-screen">

      <div className="flex justify-center items-center py-16 px-6">
        <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-xl">
          <h1 className="text-3xl font-bold text-center mb-6">
            Contact Us
          </h1>

          {submitted && (
            <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-center">
              Message sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">


            <div>
              <label htmlFor="name" className="block mb-1 font-medium">
                Full Name
              </label>
              <input id="name"
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                pattern="[A-Za-z\s]+"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name}
                </p>
              )}
            </div>


            <div>
              <label className="block mb-1 font-medium">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="abc@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>


            <div>
              <label className="block mb-1 font-medium">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                placeholder="0000000000"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone}
                </p>
              )}
            </div>


            <div>
              <label className="block mb-1 font-medium">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}