"use client";

import { FormState, deleteTask } from "@/actions/task";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { FaTrashAlt } from "react-icons/fa";

interface TaskDelBtnProps {
  id: string;
}

const TaskDelBtn: React.FC<TaskDelBtnProps> = ({ id }) => {
  const deleteTaskWithId = deleteTask.bind(null, id);
  const initialState: FormState = { error: "" };
  const [state, formAction] = useFormState(deleteTaskWithId, initialState);

  useEffect(() => {
    if (state && state.error !== "") {
      alert(state.error);
    }
  }, [state]);

  const SubmitBtn = () => {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        disabled={pending}
        className="hover:text-gray-700 text-lg cursor-pointer disabled:bg-gray-400"
      >
        <FaTrashAlt />
      </button>
    );
  };

  return (
    <form action={formAction}>
      <SubmitBtn />
    </form>
  );
};

export default TaskDelBtn;
