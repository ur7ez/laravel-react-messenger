import {Menu, MenuButton, MenuItems, MenuItem, Transition} from "@headlessui/react";
import {EllipsisVerticalIcon, TrashIcon} from "@heroicons/react/24/solid";
import {useEventBus} from "@/EventBus";

export default function MessageOptionsDropdown({message}) {
    const {emit} = useEventBus();
    const onMessageDelete = () => {
        // send axios post req to delete message and show notification on success
        axios
            .delete(route("message.destroy", message.id))
            .then((res) => {
                emit("message.deleted", {message, prevMessage: res.data.message});
            })
            .catch((err) => {
                console.log(err);
            })
    };

    return (
        <div className="absolute right-full text-gray-100 top-1/2 -translate-y-1/2 z-10">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <MenuButton className="flex justify-center items-center w-8 h-8 rounded-full hover:bg-black/40">
                        <EllipsisVerticalIcon className="h-5 w-5"/>
                    </MenuButton>
                </div>
                <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <MenuItems className="absolute left-0 mt-2 w-32 rounded-md bg-gray-800 shadow-lg z-50">
                        <div className="px-1 py-1">
                            <MenuItem>
                                {({active}) => (
                                    <button
                                        onClick={onMessageDelete}
                                        className={`${
                                            active
                                                ? "bg-black/30 text-white"
                                                : "text-gray-100"
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        <TrashIcon className="w-4 h-4 mr-2"/>
                                        Delete
                                    </button>
                                )}
                            </MenuItem>
                        </div>
                    </MenuItems>
                </Transition>
            </Menu>
        </div>
    )
}
