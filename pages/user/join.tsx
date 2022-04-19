import { useForm } from "react-hook-form";

const join = () => {
  const { register } = useForm();
  return (
    <form>
      <input type="text" {...register} />
    </form>
  );
};

export default join;
