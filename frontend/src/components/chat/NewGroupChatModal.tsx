import { useFriendStore } from '@/stores/useFriendStore';
import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Button } from '../ui/button';
import { Users } from 'lucide-react';

const NewGroupChatModal = () => {
  const [groupName, setGroupName] = useState("");
  const [search, setSearch] = useState("");
  const { friends, getFriends } = useFriendStore();

  const handleGetFriends = async () => {
    await getFriends();
  };


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          onClick={handleGetFriends}
          className="flex z-10 justify-center items-center size-5 rounded-full hover:bg-sidebar-accent transition cursor-pointer"
        >
          <Users className="size-4" />
          <span className="sr-only">Tạo nhóm</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border-none">
        <DialogHeader>
          <DialogTitle className="capitalize">tạo nhóm chat mới</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default NewGroupChatModal