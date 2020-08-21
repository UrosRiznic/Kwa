import { NotificationsModel } from './models/notifications.model';
import { Injectable } from "@angular/core";

@Injectable()
export class NotificationsService {
    private notificationList : Array<NotificationsModel> = [
        {
            notification_id : 1,
            id_passenger : 1,
            id_driver   : 2,
            type: 'request',
            approved : false,
            dismissed_by_driver: false,
            ride_id: 1,
        },
        {
            notification_id : 2,
            id_passenger : 5,
            id_driver   : 2,
            type: 'request',
            approved : false,
            dismissed_by_driver: false,
            ride_id: 3,
        },
        {
            notification_id : 3,
            id_passenger : 1,
            id_driver   : 2,
            type: 'ride_end',
            ride_end_rated_driver : false,
            ride_end_rated_passenger : false,
            ride_id: 1,
        }
    ];
    // ------------------------------------------------------------------------------------
    setNewRequest(in_id_pass : number, in_id_driver : number, ride_id: number){
    const newID =  this.notificationList[this.notificationList.length - 1].notification_id + 1;
       this.notificationList.push(
            {
                ride_id : ride_id,
                notification_id : newID,
                id_passenger : in_id_pass,
                id_driver   : in_id_driver,
                type: 'request',
                approved : false,
                dismissed_by_driver: false
            }
        )
    }
    // ------------------------------------------------------------------------------------
    setNewDriveEnd(in_id_pass : number, in_id_driver : number, ride_id: number){
        const newID =  this.notificationList[this.notificationList.length - 1].notification_id + 1;
        this.notificationList.push(
             {
                ride_id : ride_id,
                 notification_id : newID,
                 id_passenger : in_id_pass,
                 id_driver   : in_id_driver,
                 type: 'ride_end',
                 ride_end_rated_driver : false,
                 ride_end_rated_passenger : false,
             }
         )
     }


     // ------------------------------------------------------------------------------------
     setRequestApprovedTrue(notiID:number){ //approve = true
        for (var i=0 ; i < this.notificationList.length ; i++){
            if(this.notificationList[i]["notification_id"] == notiID){
                this.notificationList[i]["approved"] = true;
            }
        }        
     }
     // ------------------------------------------------------------------------------------
     setDissmissedTrue(notiID:number){ //dismissed_by_driver = true
        for (var i=0 ; i < this.notificationList.length ; i++){
            if(this.notificationList[i]["notification_id"] == notiID){
                this.notificationList[i]["dismissed_by_driver"] = true;
            }
        }
    }
     
    // ------------------------------------------------------------------------------------
    getNotificationsForSpecificUserRequest(in_id:number){
        let returnList  : Array<NotificationsModel> = [];
        for (var i=0 ; i < this.notificationList.length ; i++){
            if(this.notificationList[i]["type"] == "request"){
                if (this.notificationList[i]["id_passenger"] == in_id) {
                    returnList.push(this.notificationList[i]);
                }
            }
        }
        return returnList;
   }

   getNotificationsForSpecificDriverRequest(in_id : number){
    let returnList  : Array<NotificationsModel> = [];
    for (var i=0 ; i < this.notificationList.length ; i++){
        if(this.notificationList[i]["type"] == "request"){
            if (this.notificationList[i]["id_driver"] == in_id) {
                if(!this.notificationList[i]["dismissed_by_driver"] && !this.notificationList[i]["approved"] )
                returnList.push(this.notificationList[i]);
            }
        }
    }
    return returnList;
   }

   getNotificationsForSpecificUserEndedRides(in_id:number){
    let returnList  : Array<NotificationsModel> = [];
    for (var i=0 ; i < this.notificationList.length ; i++){
        if(this.notificationList[i]["type"] == "ride_end"){
            if (this.notificationList[i]["id_passenger"] == in_id && this.notificationList[i]["ride_end_rated_passenger"] == false ) {
                returnList.push(this.notificationList[i]);
            }else
            if (this.notificationList[i]["id_driver"] == in_id && this.notificationList[i]["ride_end_rated_driver"] == false  ){
                returnList.push(this.notificationList[i]);
            }
        }
    }
    return returnList;
   }

   setRideEndRatedDriver(id:number){
    for (var i=0 ; i < this.notificationList.length ; i++){
        if(this.notificationList[i]["notification_id"] == id){
            this.notificationList[i]["ride_end_rated_driver"] = true;
        }
    }
   }

   setRideEndRatedPassenger(id:number){
    for (var i=0 ; i < this.notificationList.length ; i++){
        if(this.notificationList[i]["notification_id"] == id){
            this.notificationList[i]["ride_end_rated_passenger"] = true;
            }
        }
   }

   getPassengerIdFromNotification(in_id : number){
    for (var i=0 ; i < this.notificationList.length ; i++){
        if(this.notificationList[i]["notification_id"] == in_id){
            return this.notificationList[i]["id_passenger"];
            }
        }
    }
    
    getRideIDFromNotification(in_id : number){
        for (var i=0 ; i < this.notificationList.length ; i++){
            if(this.notificationList[i]["notification_id"] == in_id){
                return this.notificationList[i]["ride_id"];
                }
            }
        }
}