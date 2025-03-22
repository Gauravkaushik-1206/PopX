import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

function Signup() {
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        password: "",
        companyName: "",
        isAgency: "yes",
      })
      const [isLoading, setIsLoading] = useState(false)
    
      const handleChange = (e) => {

        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
    
        // Simulate API call
        setTimeout(() => {
          setIsLoading(false)
          onSuccess()
        }, 1000)
      }
  return (
    <div className='flex justify-center'>
    <div
      className="bg-white border border-gray-200 rounded-md w-sm p-8 h-screen flex"
    >
      <div className="space-y-6 w-full">
        <div className='space-y-2'>
            <h1 className="text-3xl font-bold tracking-tight">
            Create your
            <br />
            PopX account
            </h1>
        </div>

        <form
          onSubmit={handleSubmit}
        >
          <div className="space-y-2 mb-2">
            <Label htmlFor="fullName" className="text-indigo-600 ">
              Full Name<span className="text-red-500">*</span>
            </Label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Marry Doe"
              required
            />
          </div>

          <div className="space-y-2 mb-2">
            <Label htmlFor="phoneNumber" className="text-indigo-600">
              Phone number<span className="text-red-500">*</span>
            </Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Marry Doe"
              required
            />
          </div>

          <div className="space-y-2 mb-2">
            <Label htmlFor="email" className="text-indigo-600">
              Email address<span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Marry Doe"
              required
            />
          </div>

          <div className="space-y-2 mb-2">
            <Label htmlFor="password" className="text-indigo-600">
              Password <span className="text-red-500">*</span>
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Marry Doe"
              required
            />
          </div>

          <div className="space-y-2 mb-2">
            <Label htmlFor="companyName" className="text-indigo-600">
              Company name
            </Label>
            <Input
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Marry Doe"
            />
          </div>

          <div className="space-y-2 mb-2">
            <Label className="text-indigo-600">
              Are you an Agency?<span className="text-red-500">*</span>
            </Label>
            <RadioGroup
              defaultValue="yes"
              className="flex gap-6"
              onValueChange={(value) => setFormData((prev) => ({ ...prev, isAgency: value }))}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="yes" className="text-indigo-600" />
                <Label htmlFor="yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no">No</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="pt-6">
            <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white" disabled={isLoading}>
              {isLoading ? "Creating..." : "Create Account"}
            </Button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Signup
