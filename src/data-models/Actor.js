import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
class Actor {
    constructor(fname, lname,birthday, image, imdbLink){
    this.fname=fname;
    this.lname=lname;
    this.birthday=moment(birthday);
    this.image=image;
    this.imdbLink=imdbLink;
    this.id=uuidv4();
    }

    calcAge = () =>{
        const currentDate=moment();
        return currentDate.diff(this.birthday,'year');
    }

}

export default Actor;