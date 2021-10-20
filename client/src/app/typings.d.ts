export interface AppEvent {
  id: string;
  title: string;
  description: string;
  organizer: string;
  location: {
    latitude: number;
    longitude: number;
  };
  date: Date;
}
