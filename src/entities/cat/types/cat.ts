export interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
}

export type CatImageSize = 'thumb' | 'small' | 'med' | 'full';
export type CatMimeType = 'jpg' | 'png' | 'gif';

export interface GetCatsParams {
  page: number;
  limit?: number;
  order?: 'RANDOM' | 'ASC' | 'DESC';
  size?: CatImageSize;
  mimeTypes?: CatMimeType[];
}
