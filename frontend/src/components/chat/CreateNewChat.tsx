import { useFriendStore } from "@/stores/useFriendStore";

const CreateNewChat = () => {
  const { getFriends } = useFriendStore();

  const handleGetFriends = async () => {
    await getFriends();
  };
  
  return <div>CreateNewChat</div>;
};

export default CreateNewChat;
