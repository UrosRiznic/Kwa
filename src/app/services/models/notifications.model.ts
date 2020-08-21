export interface NotificationsModel{
    notification_id : number,
    id_passenger : number,
    id_driver   : number,
    type: 'request' | 'ride_end',
    approved? : boolean,
    ride_end_rated_driver? : boolean,
    ride_end_rated_passenger? : boolean,
    dismissed_by_driver?: boolean,
    ride_id: number,
}
