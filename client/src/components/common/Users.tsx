import { useAppContext } from "@/context/AppContext"
import { USER_CONNECTION_STATUS } from "@/types/user"

const Users = () => {
    const { users, currentUser } = useAppContext()

    return (
        <div className="flex flex-col gap-4 overflow-y-auto py-4 pr-2">
            {users.map(user => (
                <div key={user.socketId} className="flex items-center gap-3">
                    <div
                        className={`h-3 w-3 rounded-full ${user.status === USER_CONNECTION_STATUS.ONLINE
                                ? "bg-green-500"
                                : "bg-gray-500"
                            }`}
                    ></div>
                    <p className="font-medium">
                        {user.username}
                        {user.username === currentUser?.username && " (You)"}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Users