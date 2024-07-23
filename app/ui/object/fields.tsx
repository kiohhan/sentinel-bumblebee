export default function FieldTable({fieldsJSON}: {fieldsJSON: string}) {
    const fields = JSON.parse(fieldsJSON)
    return <div>
        <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">Name</th>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">Type</th>
                </tr>
            </thead>
            <tbody className="bg-white">
                {(fields && fields.length > 0 ? (
                    fields.map((field: any) => {
                        return (<tr className="w-full border-b py-3 text-sm last-of-type:border-none">
                            <td className="whitespace-nowrap py-3 pl-6 pr-3">{field.name}</td>
                            <td className="whitespace-nowrap py-3 pl-6 pr-3">{field.type}</td>
                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                <div className="flex">
                                </div>
                            </td>
                        </tr>)
                    })
                ) : (<tr></tr>))}
            </tbody>
        </table>
    </div>
}