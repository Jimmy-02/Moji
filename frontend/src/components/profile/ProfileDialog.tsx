import type { Dispatch, SetStateAction } from "react";

interface ProfileDialogProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const ProfileDialog = ({ open, setOpen }: ProfileDialogProps) => {
  return <div>ProfileDialog</div>;
};

export default ProfileDialog