import { useFriendStore } from '@/stores/useFriendStore';
import React, { useState } from 'react'

const NewGroupChatModal = () => {
  const [groupName, setGroupName] = useState("");
  const [search, setSearch] = useState("");
  const { friends, getFriends } = useFriendStore();
  return (
    <div>NewGroupChatModal</div>
  )
}

export default NewGroupChatModal