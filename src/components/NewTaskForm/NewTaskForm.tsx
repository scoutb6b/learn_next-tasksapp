"use client";

import { FormState, createTask } from "@/actions/task";
import { useFormState, useFormStatus } from "react-dom";

const NewTaskForm = () => {
  const initialState: FormState = { error: "" };
  const [state, formAction] = useFormState(createTask, initialState);

  const SubmitBtn = () => {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        className="mt-8 py-2 w-full bg-gray-800 text-white rounded-md hover:bg-gray-600 text-sm font-semibold shadow-sm disabled:bg-gray-400"
        disabled={pending}
      >
        追加する
      </button>
    );
  };

  return (
    <div className="mt-10 mx-auto w-full max-w-sm">
      <form action={formAction}>
        <div>
          <label htmlFor="title" className="block text-sm font-medium">
            タイトル
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="block mt-2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300"
          />
        </div>
        <div className="mt-6">
          <label htmlFor="description" className="block text-sm font-medium">
            説明
          </label>
          <input
            type="text"
            id="description"
            name="description"
            required
            className="block mt-2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300"
          />
        </div>
        <div className="mt-6">
          <label htmlFor="date" className="block text-sm font-medium">
            期限
          </label>
          <input
            type="date"
            id="date"
            name="date"
            min="2020-01-01"
            max="2050-12-31"
            placeholder="例:2024/04/01"
            required
            className="block mt-2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300"
          />
        </div>
        <SubmitBtn />
        {state.error && (
          <p className="mt-2 text-red-500 text-sm">{state.error}</p>
        )}
      </form>
    </div>
  );
};

export default NewTaskForm;
