import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

// Zod schema for validation
const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
  role: z.enum(["customer", "admin", "editor", "moderator"], {
    errorMap: () => ({ message: "Please select a role." }),
  }),
});

const users = [
  {
    _id: "648d1a2b1234567890abcdef0",
    name: "John Doe",
    email: "john@example.com",
    role: "admin",
  },
];

const AdminUserManagement = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "customer",
    },
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    reset();
    toast.success("User added successfully!");
  };

  const selectedRole = watch("role");

  const handleRoleChange = (userId, newRole) => {
    console.log("User Id:", userId, ", New Role: ", newRole);
    toast.success(`Role changed to ${newRole} for user `);
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      console.log("User deleted:", userId);
      toast.success("User deleted successfully!");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-2 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">User Management</h1>

      {/* Add a new user form */}
      <div className="p-6 rounded-lg mb-6">
        <h2 className="text-lg font-semibold mb-4">Add New User</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 flex flex-col gap-2">
            <Label>Name</Label>
            <Input type="text" placeholder="John Doe" {...register("name")} />
            {errors.name && (
              <span className="text-sm text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="mb-4 flex flex-col gap-2">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="john@example.com"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="mb-4 flex flex-col gap-2">
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="password must be at least 6 characters"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="mb-4 flex flex-col gap-2">
            <Label>Role</Label>
            <Select
              value={selectedRole}
              onValueChange={(value) => setValue("role", value)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue   />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="customer">Customer</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="editor">Editor</SelectItem>
                  <SelectItem value="moderator">Moderator</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.role && (
              <span className="text-sm text-red-500">
                {errors.role.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-green-500 hover:bg-green-600 active:bg-green-700 rounded mt-4 text-white"
          >
            Add User
          </button>
        </form>
      </div>

      {/* User List */}

      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-slate-500">
          <thead>
            <tr className="bg-gray-100 text-xs uppercase text-gray-700">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-b hover:bg-slate-100 ">
                <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                  {user.name}
                </td>
                <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                  {user.email}
                </td>
                <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user._id, e.target.value)}
                  >
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                    <option value="editor">Editor</option>
                    <option value="moderator">Moderator</option>
                  </select>
                </td>
                <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                  <Button
                    onClick={() => handleDeleteUser(user._id)}
                    variant="destructive"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/*  */}
    </div>
  );
};

export default AdminUserManagement;
