import { DriveRidesModel } from './models/drive-rides.model';
import { DriveRidesStopsModel } from './models/drive-rides.model';
import { Injectable } from "@angular/core";

@Injectable()
export class DriveRidesService {
    private driveRideList : Array<DriveRidesModel> = [
        {
            id_drive_rides  : 1,
            id_driver       : 2,
            name            : "drive1",
            start_location  : "start loc1",
            end_location    : "end loc 1",
            departure_time  : "10:30",
            start_time      : "10:30",
            end_time        : "11:30",
            drive_ride_status :  'ongoing',
            passengers_limit  : 5,
            current_passengers_number : 2,
            current_passengers_data : [
                {id_user : 1},
                {id_user : 3}
            ],
            drive_ride_stops        : [
                {stop_name : "stop1"},
                {stop_name : "stop2"}
            ],
            date : new Date()
        } ,
        {
            id_drive_rides  : 2,
            id_driver       : 2,
            name            : "drive2",
            start_location  : "start loc2",
            end_location    : "end loc 2",
            departure_time  : "12:30",
            start_time      : "12:30",
            end_time        : "13:30",
            drive_ride_status :  'finished',
            passengers_limit  : 5,
            current_passengers_number : 1,
            current_passengers_data : [
                {id_user : 1}
            ],
            drive_ride_stops        : [
                {stop_name : "stop1"},
                {stop_name : "stop2"}
            ],
            date : new Date()
        },{
            id_drive_rides  : 3,
            id_driver       : 2,
            name            : "drive3",
            start_location  : "start loc2",
            end_location    : "end loc 2",
            departure_time  : "01:30",
            start_time      : "03:30",
            end_time        : "03:30",
            drive_ride_status :  'ongoing',
            passengers_limit  : 5,
            current_passengers_number : 0,
            current_passengers_data : [],
            drive_ride_stops        : [
                {stop_name : "stop1"},
                {stop_name : "stop2"}
            ],
            date : new Date()
        }
    ]

    setDriveRide(
        id_driver       : number,
        name            : string,
        start_location  : string,
        end_location    : string,
        start_time      : string,
        end_time        : string,
        passengers_limit  : number,
        date  : Date,
        drive_ride_stops        : Array<DriveRidesStopsModel>,
        ){
            
        const newID =  this.driveRideList[this.driveRideList.length - 1].id_drive_rides + 1;

        this.driveRideList.push({
            id_drive_rides  : newID,
            id_driver       : id_driver,
            name            : name,
            start_location  : start_location,
            end_location    : end_location,
            departure_time  : "",
            start_time      : start_time,
            end_time        : end_time,
            drive_ride_status :   'ongoing',
            passengers_limit  : passengers_limit,
            current_passengers_number : 0,
            current_passengers_data : [],
            drive_ride_stops        : drive_ride_stops,
            date  : date
        })
    }

    getDriverRides(id_driver){
        let driveRideList2 : Array<DriveRidesModel> = []
        for (var i=0 ; i < this.driveRideList.length ; i++){
            if (this.driveRideList[i]["id_driver"] == id_driver) {
                driveRideList2.push(this.driveRideList[i]);
            }
        }
    return driveRideList2;
    }

    getUniqueRide(id_ride:number){
        for (var i=0 ; i < this.driveRideList.length ; i++){
            if (this.driveRideList[i]["id_drive_rides"] == id_ride) {
                return this.driveRideList[i];
            }
        }
    }

    removeUniqueRide(id_ride:number){
        let filtered = this.driveRideList.filter(function(el) { return el.id_drive_rides != id_ride; }); 
        this.driveRideList = filtered;
    }

    getPassengersArray(id_drive:number){
        for (var i=0 ; i < this.driveRideList.length ; i++){
            if (this.driveRideList[i]["id_drive_rides"] == id_drive) {
                return this.driveRideList[i]["current_passengers_data"];
            }
        }
    }

    getStopsArray(id_drive:number){
        for (var i=0 ; i < this.driveRideList.length ; i++){
            if (this.driveRideList[i]["id_drive_rides"] == id_drive) {
                return this.driveRideList[i]["drive_ride_stops"];
            }
        }
    }

    getOngoingDrives(){
        let returnDriveRideList : Array<DriveRidesModel> = [];
        for (var i=0 ; i < this.driveRideList.length ; i++){
            if (this.driveRideList[i]["drive_ride_status"] == 'ongoing') {
                returnDriveRideList.push(this.driveRideList[i]);
            }
        }
        return returnDriveRideList;
    }

    getSpecificInactivePassengerRides(pID:number){
        let returnDriveRideList : Array<DriveRidesModel> = [];
        
        for (var i=0 ; i < this.driveRideList.length ; i++){
            if (this.driveRideList[i]["drive_ride_status"] != 'ongoing'){
                for (var j =0; j <  this.driveRideList[i].current_passengers_data.length;j++){
                    if(this.driveRideList[i].current_passengers_data[j]["id_user"] == pID){
                        returnDriveRideList.push(this.driveRideList[i])
                    }
                }
            }
        }
        return returnDriveRideList;
    }

    addPassengerToDriveListIfThereIsFreeSpace(in_id_drive : number , in_id_pass : number ){
        for (var i=0 ; i < this.driveRideList.length ; i++){
            if (this.driveRideList[i]["id_drive_rides"] == in_id_drive){
                if(this.driveRideList[i]["current_passengers_number"] < this.driveRideList[i]["passengers_limit"]){
                    for (let elem in this.driveRideList[i]["current_passengers_data"]){
                        if (this.driveRideList[i]["current_passengers_data"][elem].id_user == in_id_pass){
                            return "aleardy_exist";
                        }
                      }
                      this.driveRideList[i]["current_passengers_data"].push(
                          {id_user : in_id_pass}
                      );
                      this.driveRideList[i]["current_passengers_number"] +=1;
                      return "success";
                } else {
                    return "full";
                }
            }
        }
    }

    isRequestAvailableForUniqueUser(in_id_drive : number , in_id_pass : number ){
        console.log("in_id_pass " + in_id_pass)
        console.log("in_id_drive " + in_id_drive)
        for (var i=0 ; i < this.driveRideList.length ; i++){
            if (this.driveRideList[i]["id_drive_rides"] == in_id_drive){
                if(this.driveRideList[i]["current_passengers_number"] < this.driveRideList[i]["passengers_limit"]){
                    for (let elem in this.driveRideList[i]["current_passengers_data"]){
                        if (this.driveRideList[i]["current_passengers_data"][elem].id_user == in_id_pass){
                            return "aleardy_exist";
                        }
                      }
                      return "success";
                } else {
                    return "full";
                }
            }
        }
    }


}