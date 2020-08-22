export interface EventsModel {
    id?: number;
    name: string;
    date_from: Date;
    date_to: Date;
    event_type: string;
    rating?: number;
    location: string;
    description: string;
    attendance: number;
}