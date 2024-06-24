'use client'

import Image from "next/image";
import profilePhoto from '@/../public/profile_photo.jpg'

import work from '@/../public/work_icon.png'
import world from '@/../public/world.png'

import { ITodo } from "@/entities/todo/model/types";
import { CreateTodoForm } from "@/entities/todo/ui";
import { TodoItem } from "@/entities/todo/ui";
// import Comments from "../../components/blocks/Comments/Comments";
import { Button } from "@mui/material";
import { PERMISSION } from "@/shared/config";
import SocialLinks from "./SocialLinks";
import { checkingPermission } from "@/shared/utils"
import { useProfileCard } from "../api/useProfileCard";
import { ProfileCardPropsType } from "../model/types";


const ProfileCard = ({ user, isOnlyView = false }: ProfileCardPropsType) => {
  const {
    handleCreateChat
  } = useProfileCard(user)

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
              user.todos.map((todo: ITodo) => <TodoItem key={todo.id} todo={todo} isOnlyView={isOnlyView} hasCustomizationTodoPermission={checkingPermission(user.plan.permissions, PERMISSION.CUSTOMIZATION_TODO)} />)
            ) : <p className="font-medium text-center mt-6">Ще немає жодного запису</p>}

          </div>

          {/* <div className="p-8 rounded-lg shadow-lg">
            <h3 className="font-bold text-xl mb-4">Коментарі</h3>
            {user?.commentsReceived ? (
              <Comments userComments={user.commentsReceived} />
            ) : null}

          </div> */}
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
