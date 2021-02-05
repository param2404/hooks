import moment from 'moment';


////normal function///
export function useDate() {
    const date = new Date().toDateString()
    
    ///With Moment///
    //const date=moment(new Date()).format('DD-MM-yy')
    return date
}