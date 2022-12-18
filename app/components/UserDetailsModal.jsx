import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import { UserContext } from "../context/User";
import ReactTimeAgo from "react-time-ago";
import { WifiIcon } from "@heroicons/react/24/outline";

export default function UserDetailsModals() {
  const { showUserProfile, setShowUserProfile, user , selectedUser} = useContext(UserContext);

  const { photoURL, name, timestamp } = selectedUser;

  const isSecondName = name.split(" ").length >= 2;

  return (
    <>
      <Transition appear show={showUserProfile} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setShowUserProfile(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="max-w-md transform overflow-hidden rounded-2xl bg-transparent text-left align-middle shadow-xl transition-all">
                  <div>
                    <section className="flex font-medium items-center justify-center h-[75vh]">
                      <section className="w-64 mx-auto rounded-2xl px-8 py-6 shadow shadow-gray-900">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 text-sm">
                            Joined :{" "}
                            <ReactTimeAgo date={timestamp} locale="en-US" />
                          </span>
                        </div>
                        <div className="mt-6 w-fit mx-auto">
                          <img
                            src={photoURL}
                            className="rounded-full w-28 "
                            alt="profile picture"
                          />
                        </div>

                        <div className="mt-8 ">
                          <h2 className="text-white font-bold text-2xl tracking-wide">
                            {isSecondName ? (
                              <>
                                {multiple_name[0]} <br /> {multiple_name[1]}
                              </>
                            ) : (
                              name
                            )}
                          </h2>
                        </div>
                        <p className="text-emerald-400 font-semibold mt-2.5 flex items-center justify-between">
                          Active
                          <WifiIcon className="h-4 w-4 animate-pulse" />
                        </p>
                      </section>
                    </section>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
