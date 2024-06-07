'use client'

import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { ITodo } from '@/types/types';
import { useState } from 'react';
import { Box, Button, FormControl, InputLabel, Select, TextField } from '@mui/material';
import { HexColorPicker } from "react-colorful";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { QUERY_KEY } from '@/config/query-key.config';
import { todoService } from '@/services/todo.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';


type TodoItemProps = { 
  todo: ITodo, 
  handleRemoveTodo: (id: string) => void, 
  handleUpdateTodo: (id: ITodo) => void, 
  isOnlyView?: boolean 
}

const TodoItem = ({ todo, handleRemoveTodo, handleUpdateTodo, isOnlyView = false }: TodoItemProps) => {
  const queryClient = useQueryClient()
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [currentTodoColor, setCurrentTodoColor] = useState(todo.color)
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [priority, setPriority] = useState<string | undefined>(todo.sticker);
  const [todoName, setTodoName] = useState<string>(todo.name)
  

  const handleChangePriority = (event: any) => {
    setPriority(event.target.value);
  };


  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseEdit = () => {
    setAnchorEl(null);
  };

  const handleOpenEdit = () => {
    setIsExpanded((prevState: boolean) => !prevState)
  }

  const onChangeNameTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoName(event.target.value);
  }

  const { mutate } = useMutation({
    mutationKey: [QUERY_KEY.UPDATE_TODO],
    mutationFn: (data: ITodo) => todoService.updateTodo(data.id, data),
    onSuccess() {
      toast.success('Todo успішно оновлено!')
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GET_PROFILE] })
    }
  })


  const onUpdateTodo = () => {
    const newTodo = {
      ...todo,
      name: todoName,
      sticker: priority,
      color: currentTodoColor
    }

    handleOpenEdit()
    mutate(newTodo)
  }

  // ${todo.status ? 'bg-slate-50' : 'bg-slate-200 '}
  return (
    <Box className={`rounded-md overflow-hidden mb-2 animation-slideIn px-4 py-3 `} sx={{ backgroundColor: currentTodoColor }}>
      <div className={`flex items-center`}>
        <input type="checkbox" className={`mr-3 ${isOnlyView ? 'cursor-default' : 'cursor-pointer'}`} checked={todo.status} onChange={() => handleUpdateTodo(todo)} disabled={isOnlyView} />
          {isExpanded 
            ? <TextField sx={{ marginRight: 'auto' }} onChange={onChangeNameTodo} size="small" defaultValue={todoName} id="outlined-basic" variant="outlined" /> 
            : <p className={`font-bold mr-auto text-md ${todo.status ? 'opacity-50 line-through' : ''}`}>{todo.name}</p>
          }
          {todo.sticker ? <span className="text-xs bg-slate-300 text-slate-800 px-3 py-1 rounded-md font-bold">{todo.sticker}</span> : null}
          <button onClick={handleOpenEdit} className={`bg-trbg-transparent border-none ml-4 ${isOnlyView ? 'cursor-default' : 'cursor-pointer'}`}>
            <EditIcon sx={{ width: 18, height: 18 }} />
          </button>
          <button onClick={isOnlyView ? undefined : () => handleRemoveTodo(todo.id)} className={`bg-trbg-transparent border-none ml-4 ${isOnlyView ? 'cursor-default' : 'cursor-pointer'}`}>
            <CloseIcon sx={{ width: 18, height: 18 }} />
          </button>
      </div>
      {isExpanded && (
        <div className="w-full mt-4">
          <div className='flex items-end mt-6'>
            <div>
              <h5 className='mb-2 text-xs font-bold'>Пріорітет:</h5>
              <FormControl fullWidth sx={{
                marginRight: 6,
                width: '200px',
              }}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={priority}
                  onChange={handleChangePriority}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  sx={{ backgroundColor: '#ffffff', height: '36px' }}
                >
                  <MenuItem value='Нормальний'>Нормальний</MenuItem>
                  <MenuItem value='Високий'>Високий</MenuItem>
                  <MenuItem value='Найвищий'>Найвищий</MenuItem>
                </Select>
              </FormControl>
            </div>

            <Tooltip title="Колір">
              <IconButton
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  sx={{ 
                    backgroundColor: '#ffffff',
                    height: '36px',
                    width: '36px',
                    "&:hover": {
                      backgroundColor: '#ffffff'
                    }
                  }}
                >
                <Box className='block w-5 h-5 rounded-full shadow-lg' sx={{ background: 'linear-gradient(to bottom right, #ff7e5f, #feb47b, #86a8e7, #91eac9)' }}></Box>
              </IconButton>
            </Tooltip>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleCloseEdit}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem>
                <HexColorPicker color={currentTodoColor} onChange={setCurrentTodoColor} />
              </MenuItem>
            </Menu>
            <Button onClick={onUpdateTodo} variant="contained" color="success" sx={{ 
                marginLeft: 'auto',
                textTransform: 'none',
                fontWeight: 'bold'
              }}>
              Зберегти
            </Button>
          </div>
        </div>
      )}
    </Box>
  )
}

export default TodoItem