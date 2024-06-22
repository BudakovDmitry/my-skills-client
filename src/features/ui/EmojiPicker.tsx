import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { Popover } from '@mui/material';
import { useEmojiPicker } from '../api/useEmojiPicker';
import { EmojiPickerProps } from '../model/types';

const EmojiPicker = ({ addEmojiToMessage }: EmojiPickerProps) => {
  const {
    handleOpenPopover,
    handleClosePopover,
    id,
    open,
    anchorEl
  } = useEmojiPicker()

  return (
    <>
      <button
        aria-describedby={id}
        type="button"
        onClick={handleOpenPopover}
        className="flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Picker
          data={data}
          onEmojiSelect={addEmojiToMessage}
          locale='uk'
        />
      </Popover>
    </>
  )
}

export default EmojiPicker