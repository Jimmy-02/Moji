import type { User } from "@/types/user";

interface ProfileCardProps {
  user: User | null;
}
const ProfileCard = ({ user }: ProfileCardProps) => {
  return <div>ProfileCard</div>;
};

export default ProfileCard