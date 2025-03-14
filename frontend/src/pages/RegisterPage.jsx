import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import registerImage from "@/assets/register.webp";
import { Eye, EyeOff } from "lucide-react/";
import { useState } from "react";
import { toast } from "sonner";

const registerSchema = z.object({
  username: z
    .string()
    .nonempty("Username is required")
    .min(3, "Username must be at least 3 characters"),
  email: z
    .string()
    .nonempty("Email is required")
    .email()
    .min(3, "Email must be at least 3 characters"),
  password: z
    .string()
    .nonempty("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const OnSubmit = async (data) => {
    console.log("Login Data:", data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    toast.success("User registered successfully");
  };
  return (
    <div className=" flex container mx-auto  ">
      <div className="w-full lg:w-1/2 flex-col justify-center items-center p-8 md:p-12 ">
        {/* left side */}
        <form
          onSubmit={handleSubmit(OnSubmit)}
          className="w-full  bg-white p-8 rounded-lg border  border-collapse "
        >
          <div className="flex justify-center mb-6 ">
            <h2 className="text-2xl  font-medium">atoz</h2>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">Hey there! 👋</h2>
          <p className="text-center mb-6 ">
            Enter your username, email and password to register
          </p>

          {/* main form  */}

          <div className="mb-4 ">
            <Label className=" font-semibold mb-3">Username</Label>
            <Input
              type="text"
              id="username"
              className="w-full p-2 border rounded"
              placeholder="Enter your username"
              {...register("username")}
            />
            {errors.username && (
              <p className="my-1 text-sm text-red-500 ">
                {errors.username.message}
              </p>
            )}
          </div>

          <div className="mb-4 ">
            <Label className=" font-semibold mb-3">Email</Label>
            <Input
              type="email"
              id="email"
              className="w-full p-2 border rounded"
              placeholder="Enter your email"
              {...register("email")}
            />
            {errors.email && (
              <p className="my-1 text-sm text-red-500 ">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-4  ">
            <Label className=" font-semibold mb-3">Password</Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full p-2 border rounded"
                placeholder="Enter your password"
                {...register("password")}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="my-1 text-sm text-red-500 ">
                {errors.password.message}
              </p>
            )}
          </div>

          <Button className="w-full " disabled={isSubmitting}>
            {isSubmitting ? "Please wait..." : "Register"}
          </Button>
          <div className="mt-4 lg:mt-6 flex items-center justify-center gap-2  ">
            <p className=" text-center text-sm ">Don't have an account?</p>
            <Link to="/login" className="text-blue-600 cursor-pointer ">
              Login
            </Link>
          </div>
        </form>

        {/*  */}
      </div>
      {/*right side  */}
      <div className="hidden lg:block w-1/2 bg-slate-800">
        <div className="h-full flex flex-col items-center  justify-center ">
          <img
            src={registerImage}
            alt="register image"
            className="h-[750px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
