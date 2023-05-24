export interface ISectionProps {
  title: string;
  children: React.ReactNode;
}

export interface IFeedbackOptionsProps {
  responseHandler: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
}

export interface IStatisticsProps {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positiveFeedback: string;
}

export interface IAppState {
  [key: string]: number;
}
