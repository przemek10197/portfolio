interface TimelineStep {
  title: string;
  description?: string;
}

export interface DsTimelineProps {
  steps: TimelineStep[];
  isTimelineEnded?: boolean;
}
