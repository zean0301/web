import DropdownMenu from "./DropDown"

const activity = [
    { id: 1, type: 'commented', userName: 'Chelsea Hagon' ,comment: 'Called client, they reassured me the invoice would be paid by the 25th.', date: '7d ago', dateTime: '2023-01-23T10:32' },
    { id: 2, type: 'commented', userName: 'Chelsea Hagon' ,comment: 'Called client, they reassured me the invoice would be paid by the 25th.', date: '6d ago', dateTime: '2023-01-23T11:03' },
    { id: 3, type: 'commented', userName: 'Chelsea Hagon' , comment: 'Called client, they reassured me the invoice would be paid by the 25th.',date: '6d ago', dateTime: '2023-01-23T11:24' },
    {
        id: 4,
        type: 'commented',
        userName: 'Chelsea Hagon',
        comment: 'Called client, they reassured me the invoice would be paid by the 25th.',
        date: '3d ago',
        dateTime: '2023-01-23T15:56',
    },
    { id: 5, type: 'commented',userName: 'Alex Curren' , comment: 'Called client, they reassured me the invoice would be paid by the 25th.',date: '2d ago', dateTime: '2023-01-24T09:12' },
    { id: 6, type: 'commented',userName: 'Alex Curren' , comment: 'Called client, they reassured me the invoice would be paid by the 25th.',date: '1d ago', dateTime: '2023-01-24T09:20' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Message() {

    return (
        <div className='pt-20 px-[300px]'>
            <ul role="list" className="space-y-6">
                {activity.map((activityItem, activityItemIdx) => (
                    <li key={activityItem.id} className="relative flex gap-x-4">
                        <p className='text-gray-200'>
                            {activityItem.userName}
                        </p>
                        <div className="flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200">
                            <p className="text-sm leading-6 text-gray-200">{activityItem.comment}</p>
                        </div>
                        <DropdownMenu content={activityItem.comment}/>
                    </li>
                ))}
            </ul>

            {/* New comment form */}
            <div className="mt-6 flex gap-x-3">
                <form action="#" className="relative flex-auto">
                    <div className="p-4 overflow-hidden rounded-lg pb-12 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                        <label htmlFor="comment" className="sr-only ">
                            Add your comment
                        </label>
                        <textarea
                            rows={2}
                            name="comment"
                            id="comment"
                            className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Add your comment..."
                            defaultValue={''}
                        />
                    </div>

                    <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
                        <div className="flex items-center space-x-5">

                        </div>
                        <button
                            type="submit"
                            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        >
                            Comment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
