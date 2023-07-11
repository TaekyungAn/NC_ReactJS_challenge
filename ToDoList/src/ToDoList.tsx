import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ToDoList() {
  // register():  input을 등록하거나 element를 선택하고 유효성 검사 규칙을 React Hook Form에 적용
  // watch(): form의 입력값들의 변화를 관찰
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div>
      <form>
        <input {...register("email")} placeholder="Email" />
        <input {...register("firstName")} placeholder="First Name" />
        <input {...register("lastName")} placeholder="Last Name" />
        <input {...register("username")} placeholder="Username" />
        <input {...register("password")} placeholder="Password" />
        <input {...register("password1")} placeholder="Password1" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
