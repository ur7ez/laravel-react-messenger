import {UsersIcon} from "@heroicons/react/24/solid";

const GroupAvatar = ({}) => {
    return (
        <>
            <div className={`avatar placeholder`}>
                <div className={`bg-gray-400 text-gray-800 w-8 rounded-full`}>
                    <span className="text-xl">
                        <UsersIcon className="w-4"/>
                    </span>
                </div>
            </div>
        </>
    )
};

export default GroupAvatar;
