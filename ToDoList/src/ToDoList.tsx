import { useForm } from "react-hook-form";

function ToDoList() {
  // register():  input을 등록하거나 element를 선택하고 유효성 검사 규칙을 React Hook Form에 적용
  // watch(): form의 입력값들의 변화를 관찰
  // handleSubmit(): validation담당, 작성 코드 진행
  // formState: 현재 상태 보여줌, 에러 난 input으로 focus됨 (formState.errors)
  const { register, handleSubmit, formState } = useForm();
  // onValid: valid가 성공적으로 마치면 수행되는 함수
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input {...register("email", { required: true })} placeholder="Email" />
        <input
          {...register("firstName", { required: true })}
          placeholder="First Name"
        />
        <input
          {...register("lastName", { required: true })}
          placeholder="Last Name"
        />
        <input
          {...register("username", { required: true, minLength: 2 })}
          placeholder="Username"
        />
        <input
          {...register("password", { required: true, minLength: 5 })}
          placeholder="Password"
        />
        <input
          {...register("password1", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your password is too short.",
            },
          })}
          placeholder="Password1"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
