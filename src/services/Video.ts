// import axios from './index'
import { VideoParams } from '../models/Video'
import Axios, { AxiosResponse } from 'axios'

export class VideoService {
  static getVideos(): Promise<AxiosResponse<VideoParams[]>> {
    return Axios.get('https://5fbbbec1c09c200016d410cd.mockapi.io/video')
  }

  static getVideoByID(id: number): Promise<AxiosResponse<VideoParams>> {
    return Axios.get(`https://5fbbbec1c09c200016d410cd.mockapi.io/video/${id}`)
  }

  static createVideo({
    image,
    title,
    sentence,
    semantic
  }: VideoParams): Promise<AxiosResponse> {
    return Axios.post('https://5fbbbec1c09c200016d410cd.mockapi.io/video', {
      image: image,
      title: title,
      sentence: sentence,
      semantic: semantic
    })
  }

  static deleteVideo(id: number): Promise<AxiosResponse> {
    return Axios.delete(
      `https://5fbbbec1c09c200016d410cd.mockapi.io/video/${id}`
    )
  }
}
