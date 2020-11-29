import axios from './index';
import Axios from 'axios';
import { Video, VideoParams } from '../models/Video';
import { AxiosResponse } from 'axios';

export class VideoService {
  static getVideos(id: string): Promise<AxiosResponse<VideoParams[]>> {
    return axios.get('/video', {
      headers: {
        'user-id': id,
      },
    });
  }

  static getVideoByID(id: string): Promise<AxiosResponse<Video>> {
    return axios.get(`/video/${id}`);
  }

  static createVideo({ image, name, sentence, semantic }: VideoParams): Promise<AxiosResponse> {
    return axios.post('/video', {
      image: image,
      name: name,
      sentence: sentence,
      semantic: semantic,
    });
  }

  static deleteVideo(id: string): Promise<AxiosResponse> {
    return axios.delete(`/video/${id}`);
  }
}
