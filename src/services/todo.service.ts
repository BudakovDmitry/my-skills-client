import { axiosWithAuth } from "@/api/interceptors"
import { ICreateTodo, ITodo } from "@/types/auth.types"

class TodoService {
  private BASE_URL = '/todo'

  async createTodo(data: ICreateTodo) {
    const response = await axiosWithAuth.post(this.BASE_URL, data)

    return response
  }

  async updateTodo(id: string, data: ITodo) {
    const response = await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data)

    return response
  }

  async removeTodo(id: string) {
    const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)

    return response
  }
}

export const todoService = new TodoService()