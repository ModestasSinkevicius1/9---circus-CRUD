class Circus{
    constructor(name){
        this.date = [];
        this.name = name;
        this.id = 0;
    }

    intro(){
        return `Welcome to ${this.name} show!`;
    }

    //Create
    newShow(year, month, day){
        const newObj = {
            id: this.id++,
            year: year,
            month: month,
            day: day,
        }
        this.date.push(newObj);
        return `New show is ${year}-${month}-${day}!`;
    }

    //Read
    list(){
        return this.date;
    }

    //Update
    changeDate(index, newYear, newMonth, newDay){
        this.date[index-1].year = newYear;
        this.date[index-1].month = newMonth;
        this.date[index-1].day = newDay;

        return `Show is moved to ${this.date[index-1].year}-${this.date[index-1].month}-${this.date[index-1].day}`;
    }

    //Delete
    cancelShow(indexID){
        let target = 0;
        for(const show of this.date){
            if(show.id === indexID){
                break;
            }
            target++;
        }
        const msg = `Show is canceled! (${this.date[target].year}-${this.date[target].month}-${this.date[target].day})`
        this.date.splice(target, 1);
        return msg;
    }
}

export { Circus }