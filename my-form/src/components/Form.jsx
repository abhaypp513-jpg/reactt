import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
function Form() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const handleCustomSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="form-cont" onSubmit={handleSubmit(handleCustomSubmit)}>
      <h1 className="form-title">User Form</h1>
      <input type="text" {...register("firstName", { required: "First Name is required", minLength: { value: 5, message: "First Name should have atleast 5 characters"}, maxLength: {value: 8 , message: "First Name should have atmost 8 characters"} })} />
      {
        errors.firstName && <p className="error-text">{errors.firstName.message}</p>
      }
      <input type="text" {...register("lastName", { required: "Last Name is required", minLength: { value: 5, message: "Last Name should have atleast 5 characters"}, maxLength: {value: 8 , message: "Last Name should have atmost 8 characters"} })} />
      {
        errors.lastName && <p className="error-text">{errors.lastName.message}</p>
      }
      <br />
      <br />
      <input type="radio" value="male" {...register("gender")} /> Male
      <input type="radio" value="female" {...register("gender")} /> Female
      <input type="radio" value="others" {...register("gender")} /> Others
      <br />
      <br />
      <input type="submit" />

      <DevTool control={control} />
    </form>
  );
}

export default Form;