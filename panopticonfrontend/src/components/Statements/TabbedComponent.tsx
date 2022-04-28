
export default function TableComponent() {
    return (

        <div className="flex justify-center items-center h-screen w-full ">
            <label className="w-4/5 h-4/5 flex flex-col
             px-4 py-6 bg-gray-200 rounded-lg shadow-lg border border-blue cursor-pointer">
                {/* create the tabbed components */}
                <div className="flex text-sm font-bold text-center border-b border-gray-200 dark:border-blue-600 dark:text-blue-500">
                    <div className="contents">
                        <div className="flex-1 p-4 inline-block rounded-t-lg dark:text-white bg-gray-100 dark:bg-gray-800 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-blue-200 dark:hover:text-black">Reports</div>
                        <div className="flex-1 p-4 inline-block rounded-t-lg dark:text-white bg-gray-100 dark:bg-gray-800 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-blue-200 dark:hover:text-black">Bills</div>
                        <div className="flex-1 p-4 inline-block rounded-t-lg dark:text-white bg-gray-100 dark:bg-gray-800 hover:text-gray-600 hover:bg-blue-100 dark:hover:bg-blue-200 dark:hover:text-black">Statement</div>
                    </div>

                </div>

            </label>

        </div>
    );
}