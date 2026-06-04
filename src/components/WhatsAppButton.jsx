import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/523324343414"
      target="_blank"
      rel="noopener noreferrer"
      className="
      fixed
      bottom-4
      right-4
      z-50
      bg-green-500
      w-16
      h-16
      rounded-full
      flex
      items-center
      justify-center
      shadow-2xl
      hover:scale-110
      animate-pulse
      transition-all
      duration-300
      "
    >
      <MessageCircle
        size={34}
        className="text-white"
      />
    </a>
  );
}