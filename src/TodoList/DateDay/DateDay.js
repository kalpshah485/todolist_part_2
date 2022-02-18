import React from 'react';

class DateDay extends React.Component {
    render() {
        return (
            <div className="row m-0 dateday">
                <div className="col-1 p-0 date">12</div>
                <div className="col p-0 month-year"><span className="month">JAN</span><br /><span className="year">2019</span></div>
                <div className="col p-0 offset-3 day">TUESDAY</div>
            </div>
        )
    }
}

export default DateDay