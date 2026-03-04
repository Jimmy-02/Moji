import type { Friend } from '@/types/user';

interface InviteSuggestionListProps {
  filteredFriends: Friend[];
  onSelect: (friend: Friend) => void;
}

const InviteSuggestionList = () => {
  return (
    <div>InviteSuggestionList</div>
  )
}

export default InviteSuggestionList