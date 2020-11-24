import { TypeStatus } from './index';

export interface Semantic {
  semantic: 'The history of' | 'What is' | 'Who is';
}

export interface VideoParams extends Semantic {
  image?: string;
  title: string;
  sentence?: string;
  videoURL?: string;
}

export interface VideoState {
  videos: VideoParams[];
  error: string;
  status: TypeStatus;
}
