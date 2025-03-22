import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router";

export default function Signin({ onSuccess, onBack }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onSuccess();
    }, 1000);

    navigate("/profile");
  };

  return (
    <div className="flex justify-center">
    <div className="bg-white border border-gray-200 rounded-md p-8 w-sm h-screen">
      <div className="space-y-6 w-full">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Sign in to your
            <br />
            PopX account
          </h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-indigo-600">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-indigo-600">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              />
          </div>
          <Button
            type="submit"
            className="w-full bg-gray-300 hover:bg-gray-400 text-white"
            disabled={isLoading}
            >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
    </div>
  );
}