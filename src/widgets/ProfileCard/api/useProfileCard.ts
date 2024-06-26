import { chatService } from "@/entities/chat";
import { useMyProfile } from "@/shared/api";
import { useRouter } from "next/navigation";
import { PAGE } from "@/shared/config";
import { IUser } from "@/shared/model/types"

export const useProfileCard = (user: IUser) => {
  const { data, isLoading } = useMyProfile()
  const { push } = useRouter()

  const handleCreateChat = async () => {
    const response = await chatService.createChat([data?.data.id || '', user.id])

    if (response.status === 200) {
      push(`${PAGE.CHATS}?chatId=${response.data.id}`)
    }
  }

  return {
    myProfile: data?.data || {} as IUser,
    isLoading,
    handleCreateChat
  }
}