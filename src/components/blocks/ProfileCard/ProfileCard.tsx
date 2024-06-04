'use client'

import Image from "next/image";
import profilePhoto from '@/../public/profile_photo.jpg'
import facebook from '@/../public/facebook.png'
import github from '@/../public/github.png'
import instagram from '@/../public/instagram.png'
import linkedIn from '@/../public/linkedin.png'
import work from '@/../public/work_icon.png'
import world from '@/../public/world.png'
import close from '@/../public/close.png'
import { ITodo, IUser } from "@/types/types";
import CreateTodoForm from "@/components/forms/CreateTodoForm/CreateTodoForm";
import { todoService } from "@/services/todo.service";
import { toast } from "sonner";
import { QUERY_KEY } from "@/config/query-key.config";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type ProfileCardPropsType = {
  user?: IUser
  isOnlyView?: boolean
}

const ProfileCard = ({ user, isOnlyView = false }:ProfileCardPropsType ) => {
  const queryClient = useQueryClient()


  const { mutate } = useMutation({
    mutationKey: [QUERY_KEY.UPDATE_TODO],
    mutationFn: (data: ITodo) => todoService.updateTodo(data.id, data),
    onSuccess() {
      toast.success('Todo успішно оновлено!')
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GET_PROFILE] })
    }
  })

  const { mutate: removeMutate } = useMutation({
    mutationKey: [QUERY_KEY.REMOVE_TODO],
    mutationFn: (id: string) => todoService.removeTodo(id),
    onSuccess() {
      toast.success('Todo успішно видалено!')
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GET_PROFILE] })
    }
  })

  const handleUpdateTodo = (todo: ITodo) => {
    const newTodo = {
      ...todo,
      status: !todo.status
    }

    mutate(newTodo)
  }

  const handleRemoveTodo = (id: string) => {
    removeMutate(id)
  }

  return (
    <>
      <div className="flex justify-center w-2/3">
        <div className="p-8 rounded-lg shadow-2xl min-h-full w-2/3">
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
            user.todos.map((todo: ITodo) => <TodoItem key={todo.id} todo={todo} handleRemoveTodo={handleRemoveTodo} handleUpdateTodo={handleUpdateTodo} isOnlyView={isOnlyView} />)
          ) : <p className="font-medium text-center mt-6">Ще немає жодного запису</p>}
        </div>
        <div className="w-1/3">
          <Image className="rounded-md mb-4" src={user && user.photo ? user.photo : profilePhoto} alt="Profile Image" width={300} height={500} />
          <div className="flex items-center justify-center">
 
            {
              user?.links?.facebook ? (
                <a href={user.links.facebook } target="_blank" className="mx-1 w-6 h-6">
                  <Image src={facebook} alt="Facebook" />
                </a>
              ) : null
            }

            {
              user?.links?.github ? (
                <a href={user.links.github} target="_blank" className="mx-1 w-6 h-6">
                  <Image src={github} alt="Github" />
                </a>
              ) : null
            }
            {
              user?.links?.instagram ? (
                <a href={user.links.instagram} target="_blank" className="mx-1 w-6 h-6">
                  <Image src={instagram} alt="Instagram" />
                </a>
              ) : null
            }

            {
              user?.links?.linkedIn ? (
                <a href={user.links.linkedIn} target="_blank" className="mx-1 w-6 h-6">
                  <Image src={linkedIn} alt="LinkedIn" />
                </a>
              ) : null
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileCard


const TodoItem = ({ todo, handleRemoveTodo, handleUpdateTodo, isOnlyView = false }: { todo: ITodo, handleRemoveTodo: (id: string) => void, handleUpdateTodo: (id: ITodo) => void, isOnlyView?: boolean }) => {

  return (
    <div className={`flex items-center rounded-md px-4 py-3 mb-2 ${todo.status ? 'bg-slate-50' : 'bg-slate-200 '}`}>
      <input type="checkbox" className={`mr-3 ${isOnlyView ? 'cursor-default' : 'cursor-pointer'}`} checked={todo.status} onChange={() => handleUpdateTodo(todo)} disabled={isOnlyView} />
        <p className={`font-bold mr-auto text-md ${todo.status ? 'opacity-50 line-through' : ''}`}>{todo.name}</p>
        {todo.sticker ? <span className="text-xs bg-slate-200 text-slate-800 px-3 py-1 rounded-md font-bold">{todo.sticker}</span> : null}
        <button onClick={isOnlyView ? undefined : () => handleRemoveTodo(todo.id)} className={`bg-trbg-transparent border-none ml-4 ${isOnlyView ? 'cursor-default' : 'cursor-pointer'}`}>
          <Image className="w-4 h-4" src={close} alt="close" />
        </button>
    </div>
  )
}