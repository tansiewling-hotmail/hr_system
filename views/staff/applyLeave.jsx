var React = require('react');
var DefaultLayout = require('../layouts/default');
var StaffNavbar = require('../layouts/staff_navbar');
var GlobalNavbar = require('../layouts/global_navbar');

class ApplyLeave extends React.Component {
    render() {

        let displayLeaveType = this.props.records.map ((leaveType) => {

            return (
                <option value={leaveType.id}>{leaveType.name}</option>
            );
        });

        return (
            <DefaultLayout title="Staff: Apply Leave">
                <GlobalNavbar />
                <div class="main">
                    <StaffNavbar />
                    <div class="col mainContent">
                        <h1>Apply New Leave</h1>
                        <form method="POST" action="/staff/leaveApplication">

                            <div class="row">
                                <div class="col-25">
                                    <label for="leave_type">Leave Type: </label>
                                </div>
                                <div class="col-75">
                                    <select name="leave_type">
                                        {displayLeaveType}
                                    </select>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-25">
                                    <label for="start_date">Start Date: </label>
                                </div>
                                <div class="col-75">
                                    <input type="date" name="start_date" />
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-25">
                                    <label for="end_date">End Date: </label>
                                </div>
                                <div class="col-75">
                                    <input type="date" name="end_date" />
                                </div>
                            </div>

                            <div class="row">
                                <input type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </DefaultLayout>
        );
    };
};

module.exports = ApplyLeave;