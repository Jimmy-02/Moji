import { useFriendStore } from '@/stores/useFriendStore';
import { DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { MessageCircleMore } from 'lucide-react';

const FriendListModal = () => {
    const {friends} = useFriendStore();
  return (
    <DialogContent className="glass max-w-md">
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2 text-xl capitalize">
          <MessageCircleMore className="size-5" />
          bắt đầu cuộc trò chuyện mới
        </DialogTitle>
      </DialogHeader>
    </DialogContent>
  );
}

export default FriendListModal