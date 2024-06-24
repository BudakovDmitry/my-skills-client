import { ITodo } from '../model/types';
import { useState } from 'react';
import { QUERY_KEY } from '@/shared/config';
import { todoService } from './todo.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useTodoItem = (todo: ITodo) => {
  const queryClient = useQueryClient()
  const [currentTodo, setCurrentTodo] = useState<ITodo>(todo)
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseEdit = () => {
    setAnchorEl(null);
  };

  const handleOpenEdit = () => {
    setIsExpanded((prevState: boolean) => !prevState)
  }

  const { mutate: removeMutate } = useMutation({
    mutationKey: [QUERY_KEY.REMOVE_TODO],
    mutationFn: (id: string) => todoService.removeTodo(id),
    onSuccess() {
      toast.success('Todo успішно видалено!')
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GET_PROFILE] })
    }
  })


  const { mutate } = useMutation({
    mutationKey: [`${QUERY_KEY.UPDATE_TODO}_${todo.id}`],
    mutationFn: (data: ITodo) => todoService.updateTodo(data.id, data),
    onSuccess() {
      toast.success('Todo успішно оновлено!')
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GET_PROFILE] })
    }
  })

  const handleUpdateTodo = (field: string, data: string | boolean) => {
    setCurrentTodo((prevState: ITodo) => {
      return {
        ...prevState,
        [field]: data
      }
    })
  }

  const handleRemoveTodo = (id: string) => {
    removeMutate(id)
  }


  const onUpdateTodo = () => {
    if (isExpanded) {
      handleOpenEdit()
    }

    mutate(currentTodo)
  }

  const onUpdateTodoStatus = () => {
    handleUpdateTodo('status', !currentTodo.status)

    mutate(currentTodo)
  }

  return {
    open,
    handleClick,
    handleCloseEdit,
    handleRemoveTodo,
    handleUpdateTodo,
    onUpdateTodo,
    onUpdateTodoStatus,
    isExpanded,
    currentTodo,
    handleOpenEdit,
    anchorEl
  }
}