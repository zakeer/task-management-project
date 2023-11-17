import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

var UpdateTaskSuccessPopUp = () => {
    var { isTaskUpdated, hasError } = useSelector(state => state.tasks)
    var navigate = useNavigate();

    useEffect(() => {
        if (isTaskUpdated) {
            setTimeout(() => {
                navigate('/tasks');
            }, 2000);
        }
    }, [isTaskUpdated, navigate]);


    return <>
    {isTaskUpdated && <div className="fixed bottom-0 end-0 z-[60] max-w-sm w-full mx-auto p-6">
                <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex gap-x-5">
                        <div className="grow">
                            <h2 className="text-lg text-green-500 font-semibold  dark:text-green-500">
                                Success
                            </h2>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                 Task Updated
                            </p>
                        </div>
                    </div>
                </div>
            </div>}

    {hasError &&  <div className="fixed bottom-0 end-0 z-[60] max-w-sm w-full mx-auto p-6">
                <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex gap-x-5">
                        <div className="grow">
                            <h2 className="text-lg text-red-500 font-semibold  dark:text-red-500">
                                Failed
                            </h2>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                 {hasError}
                            </p>
                        </div>
                    </div>
                </div>
            </div>}
    
    </>
};

export default UpdateTaskSuccessPopUp;