export type ShortProjectInfo = {
  id: string;
  title: string;
};

export type FullProjectInfo = ShortProjectInfo & {
  description: string;
};
