import { axiosWithAuth } from "@/api/interceptors"
import { ENDPOINTS } from "@/config/endpoints.config"
import { ICreateComment } from "@/types/types"

class CommentService {
  private BASE_URL = ENDPOINTS.COMMENT

  async create(data: ICreateComment) {
    const response = await axiosWithAuth.post(this.BASE_URL, data)

    return response
  }
}

export const commentService = new CommentService()


// import { ICreateComment } from "@/types/types";
// import { io, Socket } from 'socket.io-client';

// class CommentService {
//   private socket: Socket;

//   constructor() {
//     this.socket = io('http://localhost:8000', {
//       withCredentials: true,
//     });

//     this.socket.on('connect', () => {
//       console.log('Connected to WebSocket server');
//     });

//     this.socket.on('disconnect', () => {
//       console.log('Disconnected from WebSocket server');
//     });

//     this.socket.on('connect_error', (err) => {
//       console.error('Connection error:', err);
//     });
//   }

//   async create(data: ICreateComment) {
//     return new Promise((resolve, reject) => {
//       this.socket.emit('createComment', data, (response: any) => {
//         if (response && response.error) {
//           reject(response.error);
//         } else {
//           resolve(response);
//         }
//       });
//     });
//   }
// }

// export const commentService = new CommentService();
