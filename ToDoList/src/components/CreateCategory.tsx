import { useSetRecoilState } from "recoil";
import { newCategoryState } from "../atoms";
import { useForm } from "react-hook-form";

interface IForm {
  newCategory: string;
}
function CreateCategory() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setNewCategory = useSetRecoilState(newCategoryState);
  const handleValid = ({ newCategory }: IForm) => {
    setNewCategory((prev) => [newCategory, ...prev]);
    setValue("newCategory", "");
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        type="text"
        {...register("newCategory", { required: "Please write to do" })}
        placeholder="New category"
      />
      <button>Add</button>
    </form>
  );
}
export default CreateCategory;
