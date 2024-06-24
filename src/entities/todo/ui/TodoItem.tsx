'use client'

import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, FormControl, Select, TextField } from '@mui/material';
import { HexColorPicker } from "react-colorful";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { TodoItemProps } from '../model/types';
import { useTodoItem } from '../api/useTodoItem';

const TodoItem = ({ todo, isOnlyView = false, hasCustomizationTodoPermission }: TodoItemProps) => {
  const {
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
  } = useTodoItem(todo)

  return (
    <Box className={`rounded-md overflow-hidden mb-2 animation-slideIn px-4 py-3 `} sx={{ backgroundColor: currentTodo.color }}>
      <div className={`flex items-center`}>
        <input type="checkbox" className={`mr-3 ${isOnlyView ? 'cursor-default' : 'cursor-pointer'}`} checked={currentTodo.status} onChange={isExpanded ? () => handleUpdateTodo('status', !currentTodo.status) : onUpdateTodoStatus} disabled={isOnlyView} />
        {isExpanded
          ? <TextField sx={{ marginRight: 'auto', display: 'block', height: 24, '& .MuiInputBase-input': { height: '100%', fontWeight: 600, }, '& .MuiInputBase-formControl': { height: '100%' } }} onChange={(e: any) => handleUpdateTodo('name', e.target.value)} defaultValue={currentTodo.name} id="outlined-basic" variant="outlined" />
          : <p className={`font-bold mr-auto text-md ${currentTodo.status ? 'opacity-50 line-through' : ''}`}>{todo.name}</p>
        }
        {todo.sticker ? <span className="text-xs bg-slate-300 text-slate-800 rounded-md font-bold px-4 py-2">{todo.sticker}</span> : null}
        <button onClick={handleOpenEdit} className={`bg-trbg-transparent border-none ml-4 ${isOnlyView ? 'hidden' : 'block'}`}>
          <EditIcon sx={{ width: 18, height: 18 }} />
        </button>
        <button onClick={() => handleRemoveTodo(todo.id)} className={`bg-trbg-transparent border-none ml-4 ${isOnlyView ? 'hidden' : 'block'}`}>
          <CloseIcon sx={{ width: 18, height: 18 }} />
        </button>
      </div>
      {isExpanded && (
        <div className="w-full mt-4">
          <div className='flex items-end mt-6'>
            {hasCustomizationTodoPermission
              ? (
                <div className='flex items-end'>
                  <div>
                    <h5 className='mb-2 text-xs font-bold'>Пріорітет:</h5>
                    <FormControl fullWidth sx={{
                      marginRight: 6,
                      width: '200px',
                    }}>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={currentTodo.sticker ? currentTodo.sticker : 'Нормальний'}
                        onChange={(e: any) => handleUpdateTodo('sticker', e.target.value)}
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
                      <HexColorPicker color={currentTodo.color} onChange={(newColor: string) => handleUpdateTodo('color', newColor)} />
                    </MenuItem>
                  </Menu>
                </div>
              ) : null}
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