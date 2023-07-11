import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";
interface IForm {
  toDo: string;
}
interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}
const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

function ToDoList() {
  // const value = useRecoilValue(toDoState);
  // const modFn = useSetRecoilState(toDoState);
  // 위 두 함수를 합치면... 아래 useRecoilState
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((prev) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...prev,
    ]);
    setValue("toDo", "");
  };
  return (
    <div>
      <h1>ToDos</h1>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          type="text"
          {...register("toDo", { required: "Please write to do" })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
