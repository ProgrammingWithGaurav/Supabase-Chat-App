import { EllipsisHorizontalIcon, FaceSmileIcon, PencilIcon } from "@heroicons/react/24/outline";
import React, { useContext } from "react";
import ReactTimeAgo from "react-time-ago";
import { UserContext } from "../context/User";

function SenderMessage({name, timestamp, photoURL, message, user_uid:uid}) {
  const {setShowUserProfile, setSelectedUser} = useContext(UserContext);

  return (
    <div className="h-auto hover:shadow-sm flex-row-reverse hover:shadow-gray-900/10 p-2 rounded flex items-center hover:opacity-80 justify-between cursor-pointer group">
      <div className='flex items-center'>
        <div className="flex items-center">
          <img
            src={photoURL}
            className="rounded-full w-10 h-10 mr-2"
            alt="profile Pic"
            onClick={() => {
              setSelectedUser({name, timestamp, photoURL, uid, isOnline: true})
              setShowUserProfile(true);
            }}
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center">
            <p className="font-semibold text-[15px] text-white mx-2">{name}</p>
            <span className="text-gray-600 text-[10px] mx-1 font-bold">
            <ReactTimeAgo date={timestamp} locale="en-US" />
            </span>
          </div>
          <p className="text-gray-100 ml-2">{message}</p>
        </div>
      </div>
      <div className='flex items-center opacity-0 group-hover:opacity-80'>
        <FaceSmileIcon className='chat-icon' />
        <PencilIcon className='chat-icon' />
        <EllipsisHorizontalIcon className='chat-icon' />
      </div>
    </div>
  );
}

export default SenderMessage;
