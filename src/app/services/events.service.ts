import { Injectable } from "@angular/core";
import { EventsModel } from './models/event.model';
import { UsersService } from "./users.service";

@Injectable()
export class EventsService {

    constructor(private usersService: UsersService) { }

    private events : Array<EventsModel> = [
        {
            id: 1,
            name: "Hotel Kopaonik",
            date_from: new Date(2020, 8, 17),
            date_to: new Date(2020, 8, 27),
            event_type: 'Relaxation',
            rating: 4.4,
            location: "Kopaonik",
            description: "Letnje uzivanje na planini",
            attendance: 45,
            
        } ,
        {
            id: 2,
            name: "Hotel Avala",
            date_from: new Date(2020, 8, 17),
            date_to: new Date(2020, 8, 27),
            event_type: 'Relaxation',
            rating: 4.4,
            location: "Belgrade",
            description: "Close to the capital",
            attendance: 45,
            
        } ,
        {
            id: 3,
            name: "Hotel Novi Sad",
            date_from: new Date(2020, 8, 17),
            date_to: new Date(2020, 8, 27),
            event_type: 'Relaxation',
            rating: 4.4,
            location: "Novi Sad",
            description: "The beauty of Vojvodina",
            attendance: 45,
            
        } ,
        {
            id: 4,
            name: "Hotel Motel",
            date_from: new Date(2020, 8, 17),
            date_to: new Date(2020, 8, 27),
            event_type: 'Relaxation',
            rating: 4.4,
            location: "Nis",
            description: "South Serbia experience",
            attendance: 45,
            
        } ,
        {
            id: 5,
            name: "Hotel Kopaonik",
            date_from: new Date(2020, 8, 17),
            date_to: new Date(2020, 8, 27),
            event_type: 'Relaxation',
            rating: 4.4,
            location: "Kopaonik",
            description: "Letnje uzivanje na planini",
            attendance: 45,
            
        } ,
        {
            id: 6,
            name: "SPA Vrnjacka Banja",
            date_from: new Date(2020, 8, 17),
            date_to: new Date(2020, 8, 27),
            event_type: 'Relaxation',
            rating: 4.4,
            location: "Vrnjacka Banja",
            description: "SPA relax",
            attendance: 45,
            
        } ,
        {
            id: 7,
            name: "Open Cinema",
            date_from: new Date(2020, 8, 17),
            date_to: new Date(2020, 8, 27),
            event_type: 'Relaxation',
            rating: 4.4,
            location: "Belgrade",
            description: "Open Cinema live outdoors",
            attendance: 100,
            
        } ,
        {
            id: 8,
            name: "Hotel Zlatibor",
            date_from: new Date(2020, 8, 17),
            date_to: new Date(2020, 8, 27),
            event_type: 'Relaxation',
            rating: 4.4,
            location: "Zlatibor",
            description: "Summer holidays",
            attendance: 50,
            
        }
    ]

    private getEventById(id: number): EventsModel {
        return this.events[id];
    }

    private getEventsAll():EventsModel[] {
        return this.events;
    }

    public getEvents(): Array<EventsModel> {
        return this.events;
    }
    public updateEvent(event: EventsModel) {
        this.events[event.id] = event;
    }

    public registerEvent(name: string, date_from: Date, date_to: Date, event_type: any, location: string, description: string, attendance: number, rating?: number) {
        var id = this.events.length;

        var event: EventsModel = {
            id: id, name: name, event_type: event_type, location: location, description: description, attendance: attendance,
            date_from: date_from, date_to: date_to, rating: rating
        };
        this.events.push(event);
        return true;
    }

    public getEvent(id: number): EventsModel {
        return this.events.find(eventFound => eventFound.id == id);
    }

    public getNewEvents(): Array<EventsModel> {
        if (this.usersService.getCurrenSession().events != undefined && this.usersService.getCurrenSession().events != null) {
            const result = this.events.filter(event => !this.usersService.getCurrenSession().events.some(userEventId => event.id == userEventId));
            return result.filter(event => !this.getFinishedEvents().some(finishedEvent => event.id == finishedEvent.id));
        }
        return new Array<EventsModel>();
    }

    public getFinishedEvents(): Array<EventsModel> {
        return this.events.filter(event => new Date(event.date_to.toString().slice(0, event.date_to.toString().indexOf("."))) < new Date());
    }

    public getInterestingEvents(): Array<EventsModel> {
        if (this.usersService.getCurrenSession() != undefined && this.usersService.getCurrenSession() != null)
            return this.getInterestEvents();
    }

    public getInterestEvents(): Array<EventsModel> {
        var search = this.usersService.getCurrenSession() != undefined ? this.usersService.getCurrenSession().interest.toLowerCase() : '';
        const result = this.getNewEvents().filter(event => event.description.toLowerCase().includes(search) ||
            search.includes(event.event_type.toLowerCase()) || event.location.toLowerCase().includes(search) ||
            event.name.includes(search) || search.includes(event.location) || search.includes(event.name));
        if (result.length > 4) {
            var randomResult: Array<EventsModel> = [];
            for (var i = 0; i < 4; i++) {
                randomResult.push(result[Math.floor(Math.random() * result.length)]);
            }
            return randomResult;
        } else {
            return result;
        }
    }

    public appliedEvents() {
        if (this.usersService.getCurrenSession().events != undefined) {
            return this.usersService.getCurrenSession().events.map(event => this.getEventById(event)).filter(event => !(new Date(event.date_to.toString().slice(0, event.date_to.toString().indexOf("."))) < new Date()));
        }
        return new Array<EventsModel>();
    }
}