import { Button } from "@mui/material";
import { useCreateChatButton } from "../api/useCreateChatButton";
import { IUser } from "@/shared/model/types";

const CreateChatButton = ({ user }: { user: IUser }) => {
  const { handleCreateChat } = useCreateChatButton(user)

  return (
    <Button onClick={handleCreateChat} variant="contained" sx={{ width: '100%', mb: 2 }}>Написати</Button>
  );
}

export default CreateChatButton;