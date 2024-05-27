import Image from "next/image";
import profilePhoto from '@/../public/profile_photo.jpg'
import facebook from '@/../public/facebook.png'
import github from '@/../public/github.png'
import instagram from '@/../public/instagram.png'
import linkedIn from '@/../public/linkedin.png'
import work from '@/../public/work_icon.png'
import world from '@/../public/world.png'
import close from '@/../public/close.png'
import { ITodo, IUser } from "@/types/auth.types";
import CreateTodoForm from "@/components/forms/CreateTodoForm/CreateTodoForm";
import { todoService } from "@/services/todo.service";
import { toast } from "sonner";

type ProfileCardPropsType = {
  user?: IUser
}

const ProfileCard = ({ user }:ProfileCardPropsType ) => {
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
          {user?.id ? <CreateTodoForm userId={user.id} /> : null}
          {user?.todos && user?.todos.length ? (
            user.todos.map((todo: ITodo) => <TodoItem key={todo.id} todo={todo} />)
          ) : 'Ще немає жодного запису'}
        </div>
        <div className="w-1/3">
          <Image className="rounded-md mb-4" src={profilePhoto} alt="Profile Image" />
          <div className="flex items-center justify-center">
 
            {
              user?.links?.facebook ? (
                <a href={user.links.facebook } target="_blank" className="mx-1 w-6 h-6">
                  <Image className="" src={facebook} alt="Facebook" />
                </a>
              ) : null
            }

            {
              user?.links?.github ? (
                <a href={user.links.github} target="_blank" className="mx-1 w-6 h-6">
                  <Image className="" src={github} alt="Github" />
                </a>
              ) : null
            }
            {
              user?.links?.instagram ? (
                <a href={user.links.instagram} target="_blank" className="mx-1 w-6 h-6">
                  <Image className="" src={instagram} alt="Instagram" />
                </a>
              ) : null
            }

            {
              user?.links?.linkedIn ? (
                <a href={user.links.linkedIn} target="_blank" className="mx-1 w-6 h-6">
                  <Image className="" src={linkedIn} alt="LinkedIn" />
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


const TodoItem = ({ todo }: { todo: ITodo }) => {
  const handleRemove = () => {
    todoService.removeTodo(todo.id).then(response => {
      if (response.status === 200) {
        toast.success('Todo успішно видалено!')
      } else {
        toast.error('При видаленні Todo щось пішло не так!')
      }
    })
  }

  return (
    <div className="flex items-center bg-slate-50 rounded-md px-4 py-3 mb-2">
      <input type="checkbox" className="mr-3 cursor-pointer" checked={todo.status} />
      <p className="font-bold mr-auto text-md">{todo.name}</p>
      {todo.sticker ? <span className="text-xs bg-slate-200 text-slate-800 px-3 py-1 rounded-md font-bold">{todo.sticker}</span> : null}
      <button onClick={handleRemove} className="bg-trbg-transparent border-none ml-4">
        <Image className="w-4 h-4" src={close} alt="close" />
      </button>
    </div>
  )
}