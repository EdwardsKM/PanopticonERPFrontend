
export default function UploadComponent() {
    return (
        <div className="flex justify-center items-center h-screen w-full ">
            <label className="w-2/4 h-2/4 flex flex-col justify-center 
            items-center px-4 py-6 bg-gray-200 text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:text-white hover:bg-blue-300">
                <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>
                <span className="mt-2 text-2xl font-semibold leading-normal">Drag and Drop to Upload</span>
                <input type='file' accept=".csv,.xlsx,.xls" className="hidden" />
            </label>
        </div>
    );
}