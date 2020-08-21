import { UsersModel } from './models/user.model';
import { Injectable } from "@angular/core";

@Injectable()
export class UsersService {
    private current_session : UsersModel = {             // empty because at first USER is not Logged IN! 
        id_user         : -1,       // later we are going to use this to put current logged in user
        fname           : "",       // to simulate the SESSION on the backend
        lname           : "",
        contact_email   : "",
        contact_phone   : "",
        contact_address : "",
        password        : "",
        acc_type        : 'passenger'
    }
    /// setting userList---------------------------------------------------------------------------------
    private userList : Array<UsersModel> = [
        {
            id_user         : 1,
            fname           : "Jeremiah",
            lname           : "Riley",
            contact_email   : "jeremiah@example.com",
            contact_phone   : "0123456789",
            contact_address : "2014 Public Works Drive Chattanooga, TN 37421",
            password        : "secret",
            acc_type        : 'passenger'
        } , 
        {
            id_user         : 2,
            fname           : "Pam",
            lname           : "Smith",
            contact_email   : "pam.pSmith@example.com",
            contact_phone   : "0123456789",
            contact_address : "3246 Boring Lane Inverness, CA 94937",
            password        : "secret",
            acc_type        : 'driver'
        } , 
        {
            id_user         : 3,
            fname           : "John",
            lname           : "Dusek",
            contact_email   : "johnn@example.com",
            contact_phone   : "0123456789",
            contact_address : "3762 Briarwood Drive Camden, NJ 08102",
            password        : "secret",
            acc_type        : 'passenger'
        } , 
        {
            id_user         : 4,
            fname           : "Jared",
            lname           : "Leighton",
            contact_email   : "jaredd@example.com",
            contact_phone   : "0123456789",
            contact_address : "60 Pheasant Ridge Road Philadelphia, PA 19103",
            password        : "secret",
            acc_type        : 'driver'
        } , 
        {
            id_user         : 5,
            fname           : "Ingrid",
            lname           : "Monsen",
            contact_email   : "imonsen@example.com",
            contact_phone   : "0123456789",
            contact_address : "Serenade Opus 108 9700 Volkegem",
            password        : "secret",
            acc_type        : 'passenger'
        } , 
    ]
    /// end userList---------------------------------------------------------------------------------
    //---------------------------------- getuserList -------------------------------------------------
    getuserList() {
        return this.userList;
    }
    //---------------------------------- getCurrenSession ----------------------------------------------
    getCurrenSession(){
        return this.current_session;
    }
    setCurrenSession(current_session_in : UsersModel){
        this.current_session = current_session_in;
    }
    //---------------------------------- getProfileData -------------------------------------------------
    getProfileData(id_user : number){
        for (var i=0 ; i < this.userList.length ; i++){
                if (this.userList[i]["id_user"] == id_user) {
                    return this.userList[i];
                }
            }
        // TODO return reputation and comments as well
    }
    //---------------------------------- setUser --------------------------------------------------------
    addUser(
        in_fname:string,
        in_lname:string,
        in_contact_email:string,
        in_contact_phone:string,
        in_contact_address:string,
        in_password:string,
        in_acc_type:string,){            
            const newID =  this.userList[this.userList.length - 1].id_user + 1;
            this.userList.push({
                id_user         : newID,
                fname           : in_fname,
                lname           : in_lname,
                contact_email   : in_contact_email,
                contact_phone   : in_contact_phone,
                contact_address : in_contact_address,
                password        : in_password,
                acc_type        : in_acc_type == 'driver'? 'driver' : 'passenger'
            }); // end push;
            return newID;
        } //end setUser;
    //---------------------------------- doesEmailExists ------------------------------------------
    doesEmailExists(email_in:string){
        for (var i=0 ; i < this.userList.length ; i++){
                if (this.userList[i]["contact_email"] == email_in) {
                    return true;
                }
        }
        return false;
    }
    //---------------------------------- validateLogin ----------------------------------------------
    validateLogin(email_in:string, pwd_in : string) {
        for (var i=0 ; i < this.userList.length ; i++){
            if (this.userList[i]["contact_email"] == email_in && this.userList[i]["password"] == pwd_in  ) {
                this.setCurrenSession(this.userList[i]);
                return true;
            }
        }
        return false;
    } // validateLogin end;
    //---------------------------------- updateUser ----------------------------------------------
    updateUser(in_model:UsersModel) {
        for (var i=0 ; i < this.userList.length ; i++){
                if (this.userList[i]["id_user"] == in_model.id_user) {
                    this.userList[i] = in_model;
                }
        }
    }

}