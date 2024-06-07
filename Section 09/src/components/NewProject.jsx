import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd }) {
    const modalRef = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDecription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        // TODO: Validation
        if (
            enteredTitle.trim() === '' ||
            enteredDecription.trim() === '' ||
            enteredDueDate.trim() === ''
        ) {
            modalRef.current.open()
            return;
        }

        onAdd({
            title: enteredTitle,
            desctiption: enteredDecription,
            dueDate: enteredDueDate
        });
    }

    return (
        <>
            <Modal ref={modalRef} buttonCaption="Okay">
                <h2>Invalid Input</h2>
                <p>Oops ... looks like you forgot to enter a value</p>
                <p>Please make sure you provide a valide value for every input field</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button className="text-stone-800 hover:text-stone-950">Cancel</button>
                    </li>
                    <li>
                        <button
                            onClick={handleSave}
                            className=" px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                        >
                            Save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input type="text" ref={title} label="Title" />
                    <Input ref={description} label="Description" textarea />
                    <Input type="date" label="Due Date" ref={dueDate} />
                </div>
            </div>
        </>
    )
}