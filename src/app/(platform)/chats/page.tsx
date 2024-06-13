import Chat from "@/components/blocks/Chat/Chat"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Чати',
  description: 'Чати',
};


const Chats = () => {
  return (
    <div className='flex-1 flex'>
      <Chat />
    </div>
  )
}

export default Chats