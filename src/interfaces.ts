export interface IAppState {
  good: number;
  neutral: number;
  bad: number;
}

export interface ISectionProps {
  title: string;
  children: React.ReactNode;
}

export interface IFeedbackOptionsProps {
  responseHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IStatisticsProps {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positiveFeedback: string;
}
