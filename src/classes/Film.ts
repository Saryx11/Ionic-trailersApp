import {Trailer} from './Trailer';

export class Film{
constructor(
    public title : string,
    public releasedate : string,
    public studio : string,
    public poster : string,
    public location : string,
    public rating : string,
    public genre : Array<string>,
    public director : string,
    public actors : Array<string>,
    public trailers : Array<Trailer>
){}
}

