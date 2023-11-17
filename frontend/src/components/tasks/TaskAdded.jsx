import { useSelector } from "react-redux"

var AddTaskSuccessPopUp = () => {
    var { isNewTaskAdded } = useSelector(state => state.tasks)
    return <>
    {isNewTaskAdded && <div className="fixed bottom-0 end-0 z-[60] max-w-sm w-full mx-auto p-6">
                <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex gap-x-5">
                        <div className="grow">
                            <h2 className="text-lg text-green-500 font-semibold dark:text-green-500">
                                Success
                            </h2>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                New Task Added
                            </p>
                        </div>
                    </div>
                </div>
            </div>}
    
    </>
};

export default AddTaskSuccessPopUp;