import { useState, useRef } from "react"
import Modal from "./Modal";
export default function NewTask({ onAdd }) {
    const modalRef = useRef();
    const [enteredTask, setEnteredTask] = useState("");

    function handleChange(e) {
        setEnteredTask(e.target.value)
    }

    function handleClick() {
        if (enteredTask.trim() === '') {
            modalRef.current.open()
            return;
        }
        setEnteredTask('');
        onAdd(enteredTask)
    };


    return (
        <>
            <Modal ref={modalRef} buttonCaption="Okay">
                <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
                <p className='text-stone-600 mb-4'>Oops ... looks like your task is empty... Please fill in a task</p>
            </Modal>

            <div className="flex items-center gap-4">
                <input
                    value={enteredTask}
                    type="text"
                    className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                    onChange={handleChange}
                />
                <button
                    onClick={handleClick}
                    className="text-stone-700 hover:text-stone-950"
                >
                    Add Task
                </button>
            </div>
        </>
    )
};