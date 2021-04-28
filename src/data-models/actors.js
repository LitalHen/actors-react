import moment from 'moment';
class Actor {
    constructor(fname, lname,birthday, image, imdbLink){
    this.fname=fname;
    this.lname=lname;
    this.birthday=moment(birthday);
    this.image=image;
    this.imdbLink=imdbLink
    }

    calcAge(){
        const currentDate=moment();
        return currentDate.diff(this.birthday,'year');
    }

}

export default Actor;