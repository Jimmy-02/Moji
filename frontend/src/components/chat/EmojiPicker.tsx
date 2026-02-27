import { useEffect, useRef } from "react";
import { useThemeStore } from "@/stores/useThemeStore";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Smile } from "lucide-react";
import data from "@emoji-mart/data";
import { Picker } from "emoji-mart";

interface EmojiPickerProps {
  onChange: (value: string) => void;
}

const EmojiPicker = ({ onChange }: EmojiPickerProps) => {
  const { isDark } = useThemeStore();
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pickerRef.current) return;

    const picker = new Picker({
      data,
      theme: isDark ? "dark" : "light",
      onEmojiSelect: (emoji: { native: string }) => onChange(emoji.native),
    });

    pickerRef.current.innerHTML = "";
    pickerRef.current.appendChild(picker as unknown as HTMLElement);
  }, [isDark, onChange]);

  return (
    <Popover>
      <PopoverTrigger className="cursor-pointer">
        <Smile className="size-4" />
      </PopoverTrigger>

      <PopoverContent
        side="right"
        sideOffset={40}
        className="bg-transparent border-none shadow-none drop-shadow-none mb-12"
      >
        <div ref={pickerRef} />
      </PopoverContent>
    </Popover>
  );
};

export default EmojiPicker;