import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { categoryState, newCategoryState, toDoSelector } from "../atoms";
import ToDo from "./ToDo";
import CreateCategory from "./CreateCategory";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const newCategories = useRecoilValue(newCategoryState);
  // 현재 카테고리 변경 및 설정
  const [category, setCategory] = useRecoilState(categoryState);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };
  return (
    <div>
      <h1>{category}</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={"TO_DO"}>To Do</option>
        <option value={"DOING"}>Doing</option>
        <option value={"DONE"}>Done</option>
        {newCategories.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
      <CreateCategory />
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
