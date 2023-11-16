import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

var AddCategorySuccessPopUp = () => {
    var { isCategoryAdded, hasError } = useSelector(state => state.category);
    var navigate = useNavigate();

    useEffect(() => {
        if (isCategoryAdded) {
            setTimeout(() => {
                navigate('/categories');
            }, 2000);
        }
    }, [isCategoryAdded, navigate]);

    return <>
    {isCategoryAdded && <div className="fixed bottom-0 end-0 z-[60] max-w-sm w-full mx-auto p-6">
                <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex gap-x-5">
                        <div className="grow">
                            <h2 className="text-lg text-green-500 font-semibold dark:text-green-500">
                                Success
                            </h2>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                New Category Added
                            </p>
                        </div>
                    </div>
                </div>
            </div>}

        {hasError && <div className="fixed bottom-0 end-0 z-[60] max-w-sm w-full mx-auto p-6">
                <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex gap-x-5">
                        <div className="grow">
                            <h2 className="text-lg text-red-500 font-semibold dark:text-red-500">
                                Failed!
                            </h2>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                               Failed To Add Category
                            </p>
                        </div>
                    </div>
                </div>
            </div>}
    
    </>
};

export default AddCategorySuccessPopUp;