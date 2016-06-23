import React from 'react';
import { connect } from 'react-redux';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

@connect(
  state => ({
    stops: state.formBusStopsReducer.stops
  })
)

export default class RouteStopsTabComponent extends React.Component {
  render() {
    const { stops } = this.props;
    return (
      <Table
        selectable={false} >
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false} >
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Stop</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={false} >
          { stops.map((stop, i) => {
            return (
              <TableRow key={i}>
                <TableRowColumn>{stop.id}</TableRowColumn>
                <TableRowColumn>{stop.display_name}</TableRowColumn>
              </TableRow>
            )
          }) }
        </TableBody>
      </Table>
    )
  }
}
