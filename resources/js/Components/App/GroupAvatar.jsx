import {UserIcon} from "@heroicons/react/24/solid";

const GroupAvatar = ({}) => {
    return (
        <>
            <div className={`avatar placeholder`}>
                <div className={`bg-gray-400 w-8 rounded-full`}>
                    <span className="text-xl">
                        <UserIcon className="w-4"/>
                    </span>
                </div>
            </div>
        </>
    )
};

export default GroupAvatar;
