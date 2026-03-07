import { useUserStore } from '@/stores/useUserStore';
import { Camera } from 'lucide-react';
import { useRef } from 'react'
import { Button } from '../ui/button';

const AvatarUploader = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { updateAvatarUrl } = useUserStore();

  return (
    <>
      <Button
        size="icon"
        variant="secondary"
        onClick={() => {}}
        className="absolute -bottom-2 -right-2 size-9 rounded-full shadow-md hover:scale-115 transition duration-300 hover:bg-background"
      >
        <Camera className="size-4" />
      </Button>
    </>
  );
}

export default AvatarUploader