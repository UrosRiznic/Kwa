import { Injectable } from "@angular/core";
import { EventsModel } from './models/event.model';

@Injectable()
export class EventsService {


    private events : Array<EventsModel> = [
        {
            id: 1,
            name: "Hotel Kopaonik",
            date_from: new Date("29.8.2020"),
            date_to: new Date("31.8.2020"),
            event_type: 'Relaxation',
            rating: 4.4,
            location: "Kopaonik",
            description: "Letnje uzivanje na planini",
            attendance: 45
        } ,
    ]


    /*public createEvent(event: EventsModel) {
        this.events.push(event);
    }

    public updateEvent(event: EventsModel) {
        let index = this.events.indexOf(this.getEvent(event.id));
        this.events[index] = event;
        this.httpClient.put(`${this.apiURL}/update`, event).subscribe((event: Event) => this.activeEvent = event);
    }

    private deleteEvent(id: number) {
        return this.httpClient.delete(`${this.apiURL}/delete/${id}`);
    }*/

    private getEventById(id: number): EventsModel {
        return this.events[id];
    }

    private getEventsAll():EventsModel[] {
        return this.events;
    }

    public getEvents(): Array<EventsModel> {
        return this.events;
    }


    public registerEvent(name: string, date_from: Date, date_to: Date, event_type: any, location: string, description: string, attendance: number, rating?: number) {
        var id = this.events.length;

        var event: EventsModel = {
            id: id, name: name, event_type: event_type, location: location, description: description, attendance: attendance,
            date_from: date_from, date_to: date_to, rating: rating
        };
        //this.createEvent(event);
        return true;
    }

    public getEvent(id: number): EventsModel {
        return this.events.find(eventFound => eventFound.id == id);
    }

    public getNewEvents(): Array<EventsModel> {
       /* if (this.userService.getActiveUser().events != undefined && this.userService.getActiveUser().events != null) {
            const result = this.events.filter(event => !this.userService.getActiveUser().events.some(userEvent => event.id == userEvent.id));
            return result.filter(event => !this.getFinishedEvents().some(finishedEvent => event.id == finishedEvent.id));
        }*/
        return new Array<EventsModel>();
    }

    public getFinishedEvents(): Array<EventsModel> {
        return this.events.filter(event => new Date(event.date_to.toString().slice(0, event.date_to.toString().indexOf("."))) < new Date());
    }

    /*public getInterestingEvents(): Array<EventsModel> {
        if (this.userService.getActiveUser() != undefined && this.userService.getActiveUser() != null)
            return this.getInterestEvents();
    }

    public getInterestEvents(): Array<EventsModel> {
        var search = this.userService.getActiveUser().interests != undefined ? this.userService.getActiveUser().interests.toLowerCase() : '';
        const result = this.getNewEvents().filter(event => event.description.toLowerCase().includes(search) ||
            search.includes(event.eventType.toLowerCase()) || event.location.toLowerCase().includes(search) ||
            event.name.includes(search) || search.includes(event.location) || search.includes(event.name));
        if (result.length > 4) {
            var randomResult: Array<Event> = [];
            for (var i = 0; i < 4; i++) {
                randomResult.push(result[Math.floor(Math.random() * result.length)]);
            }
            return randomResult;
        } else {
            return result;
        }
    }*/
}