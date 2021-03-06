var React = require('react');
var DefaultLayout = require('../layouts/default');
var StaffNavbar = require('../layouts/staff_navbar');
var GlobalNavbar = require('../layouts/global_navbar');

class LeaveApplication extends React.Component {

    render () {

        return (

            <DefaultLayout title="Staff - View Leave Application Details">
                <GlobalNavbar />
                <div class="main">
                    <StaffNavbar />
                        <div class="col mainContent">
                            <h1>Leave Application Details</h1>
                            <form method="GET" action={"/staff/leaveApplication/" + this.props.records[0].id + "/edit"}>

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
                                        <p>{this.props.records[0].status}</p>
                                    </div>
                                </div>

                                <div class="row">
                                    <input type="submit" value="Edit" />
                                </div>

                            </form>
                        </div>
                    </div>
            </DefaultLayout>
        );
    };
};

module.exports = LeaveApplication;