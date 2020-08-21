import { ReputationModel } from './models/reputation.model';
import { Injectable } from "@angular/core";

@Injectable()
export class ReputationService {
    private repList : Array<ReputationModel> = [
        {
            id_reputation   : 1,
            id_user         : 1,
            rep_positive    : 4,
            rep_negative    : 0,
            rep_comment     : [{
                    id_user_from: 2,
                    comment: "great ride!"
                }, {
                    id_user_from: 3,
                    comment: "bad ride!"
                }],
        },
        {
            id_reputation   : 2,
            id_user         : 2,
            rep_positive    : 1,
            rep_negative    : 2,
            rep_comment     : [{
                id_user_from: 1,
                comment: "awesome ride!"
            }, {
                id_user_from: 3,
                comment: "great!"
            }],
        },
        {
            id_reputation   : 3,
            id_user         : 3,
            rep_positive    : 0,
            rep_negative    : 0,
            rep_comment     : [],
        },
        {
            id_reputation   : 4,
            id_user         : 4,
            rep_positive    : 0,
            rep_negative    : 0,
            rep_comment     : [],
        },
        {
            id_reputation   : 5,
            id_user         : 5,
            rep_positive    : 0,
            rep_negative    : 0,
            rep_comment     : [],
        }
    ]


    getReputationOfOneUser(id_user : number){
        for (var i=0 ; i < this.repList.length ; i++){
                if (this.repList[i]["id_user"] == id_user) {
                    return this.repList[i];
                }
        }
    }
    initReputation(id_user : number){
        const newID =  this.repList[this.repList.length - 1].id_reputation + 1;
        this.repList.push({
            id_reputation   : newID,
            id_user         : id_user,
            rep_positive    : 0,
            rep_negative    : 0,
            rep_comment     : [],
        })
    }

    addPositive(id: number){
         for (var i=0 ; i < this.repList.length ; i++){
                if (this.repList[i]["id_user"] == id) {
                    this.repList[i]["rep_positive"] = this.repList[i]["rep_positive"] + 1;
                }
        }
    }
    
    setNegative(id: number){
        for (var i=0 ; i < this.repList.length ; i++){
                 if (this.repList[i]["id_user"] == id) {
                     this.repList[i]["rep_negative"] = this.repList[i]["rep_positive"] + 1;
                 }
         }        
    }

    setNewComment(id:number,id_from:number, comment:string){
        for (var i=0 ; i < this.repList.length ; i++){
                 if (this.repList[i]["id_user"] == id) {
                     this.repList[i]["rep_comment"].push(
                         {
                            id_user_from: id_from,
                            comment: comment
                         }
                     );
                 }
         }
    }
}