import React from 'react';

class DateDay extends React.Component {
    render() {
        const today = new Date();
        const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return (
            <div className="row m-0 dateday">
                <div className="col-1 p-0 date">{today.getDate()}</div>
                <div className="col p-0 month-year"><span className="month">{months[today.getMonth()]}</span><br /><span className="year">{today.getFullYear()}</span></div>
                <div className="col p-0 offset-3 day">{days[today.getDay()].toUpperCase()}</div>
            </div>
        )
    }
}

export default DateDay