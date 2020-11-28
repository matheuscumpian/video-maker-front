import axios from './index';
import { VideoParams } from '../models/Video';
import { AxiosResponse } from 'axios';

export class VideoService {
  static getVideos(id: string): Promise<AxiosResponse<VideoParams[]>> {
    return axios.get('/video', {
      headers: {
        'user-id': id,
      },
    });
  }

  static getVideoByID(id: string): Promise<AxiosResponse<VideoParams>> {
    return axios.get(`/video/${id}`);
  }

  static createVideo({ image, title, sentence, semantic }: VideoParams): Promise<AxiosResponse> {
    return axios.post('/video', {
      image: image,
      title: title,
      sentence: sentence,
      semantic: semantic,
    });
  }

  static deleteVideo(id: number): Promise<AxiosResponse> {
    return axios.delete(`/video/${id}`);
  }
}
