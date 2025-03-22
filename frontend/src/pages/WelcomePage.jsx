import React from 'react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router'

function WelcomePage() {
    const navigate = useNavigate()
  return (
    <div className="flex justify-center">
    <div className="bg-white border border-gray-200 rounded-md p-8 max-w-sm h-screen flex flex-col-reverse items-center">
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome to PopX
        </h1>
        <p
          className="text-gray-500"
          >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="space-y-4">
        <Button onClick={()=>{
            navigate("/signup")
        }} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
          Create Account
        </Button>
        <Button
          onClick={()=>{
              navigate("/signin")
            }}
            variant="secondary"
            className="w-full bg-indigo-100 hover:bg-indigo-200 text-indigo-800"
            >
          Already Registered? Login
        </Button>
      </div>
    </div>
  </div>
</div>
  )
}

export default WelcomePage
