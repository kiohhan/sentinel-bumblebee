export default function Page() {
    return <div className="mx-auto max-w-2xl">
        <div>Field Form</div>
        <div className="flex-col grid gap-4">
            {/* field name */}
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                    <label className="block text-sm font-medium leading-6 text-gray-900">Field Name</label>
                    <div>
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input type="text" name="username" id="username" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="my_field" />
                        </div>
                    </div>
                </div>
            </div>
            {/* field type */}
            <div className="sm:col-span-3">
                <label className="block text-sm font-medium leading-6 text-gray-900">Type</label>
                <div>
                    <select id="country" name="country" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        <option>number</option>
                        <option>text</option>
                        <option>richtext</option>
                    </select>
                </div>
            </div>
            {/* queryable */}
            {/* options */}
            {/* description */}
            {/* relation */}
        </div>
    </div>
}