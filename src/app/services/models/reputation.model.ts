export interface ReputationModel {
    id_reputation   : number;
    id_user         : number;
    rep_positive    : number;
    rep_negative    : number;
    rep_comment     : Array<CommentModel>;
}

export interface CommentModel {
    id_user_from    : number;
    comment         : String;
}