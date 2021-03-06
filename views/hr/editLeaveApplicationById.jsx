var React = require('react');
var DefaultLayout = require('../layouts/default');
var HRNavbar = require('../layouts/hr_navbar');
var GlobalNavbar = require('../layouts/global_navbar');

class EditLeaveApplication extends React.Component {

    render () {

        let displayLeaveStatus = this.props.selectedLeaveStatus.map ((leaveStatus) => {
            return (
                <option value={leaveStatus.id}>{leaveStatus.name}</option>
            );
        });

        return (

            <DefaultLayout title="HR - View Staff Leave Application Details">
                <GlobalNavbar />
                <div class="main">
                    <HRNavbar />
                    <div class="col mainContent">
                        <h1>Staff Leave Application Details</h1>
                        <form method="POST" action={"/hr/leaveApplication/" + this.props.records[0].id + "?_method=PUT"}>

                            <div class="row">
                                <div class="col-25">
                                    <label for="id">ID: </label>
                                </div>
                                <div class="col-75">
                                    <p>{this.props.records[0].id}</p>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-25">
                                    <label for="employee_name">Employee: </label>
                                </div>
                                <div class="col-75">
                                    <p>{this.props.records[0].employee_name}</p>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-25">
                                    <label for="leave_type">Leave Type: </label>
                                </div>
                                <div class="col-75">
                                    <p>{this.props.records[0].leave_type}</p>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-25">
                                    <label for="start_date">Start Date: </label>
                                </div>
                                <div class="col-75">
                                    <p>{this.props.records[0].start_date}</p>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-25">
                                    <label for="end_date">End Date: </label>
                                </div>
                                <div class="col-75">
                                    <p>{this.props.records[0].end_date}</p>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-25">
                                    <label for="status">Status: </label>
                                </div>
                                <div class="col-75">
                                    <select name="status" value={this.props.records[0].leave_status_id}>
                                        {displayLeaveStatus}
                                    </select>
                                </div>
                            </div>

                            <div class="row">
                                <input type="submit" value="Update" />
                            </div>
                        </form>
                    </div>
                </div>
            </DefaultLayout>
        );
    };
};

module.exports = EditLeaveApplication;