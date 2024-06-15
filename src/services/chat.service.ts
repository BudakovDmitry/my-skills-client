import { axiosWithAuth } from "@/api/interceptors"
import { ENDPOINTS } from "@/config/endpoints.config"
import { ICreateMessage } from "@/types/types"
import { io, Socket } from 'socket.io-client';

class ChatService {
  private BASE_URL = ENDPOINTS.CHAT
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:8000', {
      withCredentials: true,
    });

    this.socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });

    this.socket.on('connect_error', (err) => {
      console.error('Connection error:', err);
    });
  }

  async createMessageSocket(data: any) {
    return new Promise((resolve, reject) => {
      this.socket.emit('createMessage', data, (response: any) => {
        if (response && response.error) {
          reject(response.error);
        } else {
          resolve(response);
        }
      });
    });
  }

  async updateMessageReadSocket(data: any) {
    return new Promise((resolve, reject) => {
      this.socket.emit('markChatAsRead', data, (response: any) => {
        if (response && response.error) {
          reject(response.error);
        } else {
          resolve(response);
        }
      });
    });
  }

  async createChat(users: string[]) {
    const response = await axiosWithAuth.post(this.BASE_URL, { users })

    return response
  }

  async getChatByUserId(userId: string) {
    const response = await axiosWithAuth.get(`${this.BASE_URL}/all/${userId}`)

    return response
  }

  async getChatById(chatId: string) {
    const response = await axiosWithAuth.get(`${this.BASE_URL}/${chatId}`)

    return response
  }

  async createMessage(data: ICreateMessage) {
    const response = await axiosWithAuth.post(`${this.BASE_URL}/message`, data)

    return response
  }
}

export const chatService = new ChatService()