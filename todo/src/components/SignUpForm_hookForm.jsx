import { useState } from "react";
import { useForm } from "react-hook-form";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(`Email: ${data.email}`);
    console.log("Password: " + data.password);
  }
  return (
    <div>
      <h1>SignUpForm</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input
          type="email"
          placeholder="youremail@example.com"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        <label>Password</label>
        <input
          type="password"
          placeholder="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 4,
              message: "Password must be at least 4 characters",
            },
            maxLength: {
              value: 12,
              message: "Password must be at most 12 characters",
            },
          })}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
