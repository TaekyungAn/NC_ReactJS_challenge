import { IToDo, newCategoryState, toDoState } from "../atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";

function ToDo({ text, category, id }: IToDo) {
  // atom 상태 변경
  const setToDos = useSetRecoilState(toDoState);
  const newCategories = useRecoilValue(newCategoryState);
  // 이벤트 인자 통해서 name으로 보내는 방법
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, category: name };
      console.log(oldToDo, newToDo);
      console.log(targetIndex);
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "TO_DO" && (
        <button name={"TO_DO"} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== "DONE" && (
        <button name={"DONE"} onClick={onClick}>
          Done
        </button>
      )}
      {newCategories.map((item) => {
        if (category !== item) {
          return (
            <button name={item} onClick={onClick}>
              {item}
            </button>
          );
        }
      })}
    </li>
  );
}
export default ToDo;
