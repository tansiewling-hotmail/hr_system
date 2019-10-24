var React = require('react');

class LeaveApplication extends React.Component {

    render () {

        let displayRecords = this.props.records.map ((application) => {

            return (
                <tr>
                    <td>{application.id}</td>
                    <td>{application.employee_name}</td>
                    <td>{application.leave_type}</td>
                    <td>{application.start_date}</td>
                    <td>{application.end_date}</td>
                    <td>{application.status}</td>
                    <td><a href={"/hr/leaveApplication/" + application.id}>View</a></td>
                    <td>Edit</td>
                </tr>
            );
        });

        return (
            <html>
            <head>
                <title>HR - View Staff Leave Applications</title>
            </head>
            <body>
                <h1>Staff Leave Applications</h1>
                <table>
                    <tr>
                        <th>No.</th>
                        <th>Employee</th>
                        <th>Leave Type</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Status</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {displayRecords}
                </table>
            </body>
            </html>
        );
    };
};

module.exports = LeaveApplication;