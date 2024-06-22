'use client'

import { useState } from 'react';

export const useEmojiPicker = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenPopover = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  return {
    handleOpenPopover,
    handleClosePopover,
    id,
    open,
    anchorEl
  }
}