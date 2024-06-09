'use client'

import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { Popover } from '@mui/material';
import { useState } from 'react';

type EmojiPickerProps = {
  addEmojiToMessage: (emoji: { native: string; }) => void
}

const EmojiPicker = ({ addEmojiToMessage }: EmojiPickerProps) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenPopover = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <button
        aria-describedby={id}
        type="button"
        onClick={handleOpenPopover}
        className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
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