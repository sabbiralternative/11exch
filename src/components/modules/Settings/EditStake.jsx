import { useEditButtonValuesMutation } from "../../../redux/features/events/events";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const EditStake = () => {
  const [editButtonValue] = useEditButtonValuesMutation();
  const stakes = JSON.parse(localStorage.getItem("buttonValue"));
  const { handleSubmit, register, watch } = useForm({
    defaultValues: {
      buttonGameValues: stakes,
    },
  });

  const buttonGameValues = watch("buttonGameValues");

  const onSubmit = async () => {
    const payload = {
      game: buttonGameValues?.map((btn) => ({
        label: parseFloat(btn?.value),
        value: parseFloat(btn?.value),
      })),
    };

    const res = await editButtonValue(payload).unwrap();
    if (res.success) {
      toast.success(res?.result?.message);
      localStorage.removeItem("buttonValue");
      const gameButtonsValues = buttonGameValues;
      localStorage.setItem("buttonValue", JSON.stringify(gameButtonsValues));
    }
  };
  return (
    <div className="flex items-start justify-start flex-col w-full relative overflow-hidden gap-y-3 p-4 bg-bg_inputBgColor border border-solid border-border_tertiary18 rounded-xl page-in-animation">
      <div className="absolute top-0 left-0 transperent-bg-one z-0 blur-97 w-[8.3125rem] h-[5.625rem]" />
      <div className="absolute top-0 right-0 transperent-bg-one z-0 blur-97 w-[7rem] h-[4.6875rem]" />
      <span className="font-roboto text-sm font-medium leading-120 text-text_secondary z-[1] w-full">
        Edit Stakes
      </span>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex items-center justify-center flex-col gap-y-3"
      >
        <div className="grid grid-cols-3 gap-[0.31rem]">
          {stakes?.map((stake, i) => {
            return (
              <input
                {...register(`buttonGameValues.${i}.value`)}
                key={i}
                placeholder="_"
                className="block w-full focus:outline-none  z-[5] py-2 px-2.5 text-center flex items-center focus:border-border_primary7 justify-center rounded-md border border-solid border-border_secondary3 bg-bg_inputBgColor text-text_secondary font-roboto text-sm font-semibold leading-120"
                inputMode="numeric"
                autoComplete="off"
                type="number"
                defaultValue={stake?.value}
              />
            );
          })}
        </div>
        <button
          type="submit"
          className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out w-full h-8 flex items-center justify-center py-0 px-3 text-text_secondary font-roboto text-sm font-semibold leading-120 rounded-lg z-[5] text-center bg-exchLoginGradient shadow-loginBtnBoxShadow 
      cursor-pointer
      
      "
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditStake;
