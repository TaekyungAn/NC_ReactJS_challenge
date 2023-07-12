import { selector, atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "todoLocal",
  storage: localStorage,
});

export interface IToDo {
  text: string;
  id: number;
  category: string;
}

export const newCategoryState = atom<string[]>({
  key: "newCategory",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

// ToDoList.tsx에서 변경하고 있음
export const categoryState = atom({
  key: "category",
  default: "TO_DO",
  effects_UNSTABLE: [persistAtom],
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

// selector: atom의 output을 변형한 값만 담아올 수 있음
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
