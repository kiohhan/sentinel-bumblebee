export default function Page() {
    return <div className="mx-auto max-w-2xl">
        <div>Object Form</div>
        <div className="flex-col grid gap-4">
            {/* object name */}
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                    <label className="block text-sm font-medium leading-6 text-gray-900">Object Name</label>
                    <div>
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input type="text" name="object" id="object" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="my_object" />
                        </div>
                    </div>
                </div>
            </div>

            {/* fields */}
            {/* workflow */}

        </div>
    </div>
}