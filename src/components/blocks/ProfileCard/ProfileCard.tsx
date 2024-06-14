'use client'

import Image from "next/image";
import profilePhoto from '@/../public/profile_photo.jpg'

import work from '@/../public/work_icon.png'
import world from '@/../public/world.png'

import { ITodo, IUser } from "@/types/types";
import CreateTodoForm from "@/components/forms/CreateTodoForm/CreateTodoForm";
import TodoItem from "../TodoItem/TodoItem";
import Comments from "../Comments/Comments";
import { Button } from "@mui/material";
import { chatService } from "@/services/chat.service";
import { useMyProfile } from "@/hooks/useMyProfile";
import { useRouter } from "next/navigation";
import { PAGE } from "@/config/pages-url.config";
import SocialLinks from "../SocialLinks/SocialLinks";
import { PERMISSION } from "@/utils/permissions";

type ProfileCardPropsType = {
  user: IUser
  isOnlyView?: boolean
}

const ProfileCard = ({ user, isOnlyView = false }: ProfileCardPropsType) => {
  const { data, isLoading } = useMyProfile()
  const { push } = useRouter()

  const handleCreateChat = async () => {
    const response = await chatService.createChat([data?.data.id || '', user.id])

    if (response.status === 200) {
      push(`${PAGE.CHATS}?chatId=${response.data.id}`)
    }
  }
  console.log('user', user)

  const hasCustomizationTodoPermission = user.role.permissions.some(
    permission => permission.name === PERMISSION.CUSTOMIZATION_TODO && permission.value === true
  );

  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row justify-center items-start w-full lg:w-2/3 px-4 lg:px-0">
        <div className="min-h-full lg:w-2/3 lg:mr-2">
          <div className="p-8 mb-6 rounded-lg shadow-lg">
            <h2 className="font-bold text-2xl mb-4">{`${user?.firstName} ${user?.lastName}`}</h2>
            <div className="w-4/5 border-b border-red-200 mb-4"></div>

            {user?.work ? (
              <div className="flex mb-2">
                <Image className="mr-2 h-5 w-auto object-cover" src={work} alt="Work" />
                <p className="font-bold">{user?.work}</p>
              </div>
            ) : null}

            {user?.location ? (
              <div className="flex mb-6">
                <Image className="mr-2 h-5 w-auto object-cover" src={world} alt="World" />
                <p className="text-sm text-gray-500">Місцезнаходження - {user?.location}</p>
              </div>
            ) : null}

            <p className="text-xs text-gray-500 mb-8 leading-5">{user?.description}</p>
            <h3 className="font-bold text-xl mb-4">Мій todo-лист на цей місяць</h3>

            {user?.id && !isOnlyView ? <CreateTodoForm userId={user.id} /> : null}

            {user?.todos && user?.todos.length ? (
              user.todos.map((todo: ITodo) => <TodoItem key={todo.id} todo={todo} isOnlyView={isOnlyView} hasCustomizationTodoPermission={hasCustomizationTodoPermission} />)
            ) : <p className="font-medium text-center mt-6">Ще немає жодного запису</p>}

          </div>

          <div className="p-8 rounded-lg shadow-lg">
            <h3 className="font-bold text-xl mb-4">Коментарі</h3>
            {/* {user?.commentsReceived ? (
              <Comments userComments={user.commentsReceived} />
            ) : null} */}

          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <Image className="rounded-md mb-4 block w-full" src={user && user.photo ? user.photo : profilePhoto} alt="Profile Image" width={300} height={500} />
          <Button onClick={handleCreateChat} variant="contained" sx={{ width: '100%', mb: 2 }}>Написати</Button>
          {
            user.links
              ? (
                <div className="flex items-center justify-center">
                  <SocialLinks links={user.links} />
                </div>
              )
              : null
          }
        </div>
      </div>
    </>
  )
}

export default ProfileCard
