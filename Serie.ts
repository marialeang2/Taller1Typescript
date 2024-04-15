export class Serie {
    refNumber: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    link: string;
    image: string;


    constructor(refNumber: number,name: string,channel: string, seasons: number, description: string,link: string,image:string ){
        this.refNumber = refNumber;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.image = image;
    }
}