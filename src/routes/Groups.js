import React from 'react';
import ReactDOM from 'react-dom';

import {
    Row,
    Col,
    Grid,
    Panel,
    Table,
    PanelBody,
    PanelHeader,
    FormControl,
    PanelContainer,
} from '@sketchpixy/rubix';

class DatatableComponent extends React.Component {
    componentDidMount() {
        $(ReactDOM.findDOMNode(this.example))
            .addClass('nowrap')
            .dataTable({
                responsive: true,
            });
    }

    render() {
        return (
            <Table ref={(c) => this.example = c} className='display' cellSpacing='0' width='100%'>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Active</th>
                </tr>
                </thead>
                <tfoot>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Active</th>
                </tr>
                </tfoot>
                <tbody>
                <tr>
                    <td>Men's Ministry</td>
                    <td>Reaching men in all walks of life.</td>
                    <td>Active</td>
                </tr>
                <tr>
                    <td>Middle School Ministry</td>
                    <td>Open to all middle school students, grades 5-8.</td>
                    <td>Inactive</td>
                </tr>
                </tbody>
            </Table>
        );
    }
}

export default class Datatablesjs extends React.Component {
    render() {
        return (
            <Row>
                <Col xs={12}>
                    <PanelContainer>
                        <Panel>
                            <PanelBody>
                                <Grid>
                                    <Row>
                                        <Col xs={12}>
                                            <DatatableComponent />
                                            <br/>
                                        </Col>
                                    </Row>
                                </Grid>
                            </PanelBody>
                        </Panel>
                    </PanelContainer>
                </Col>
            </Row>
        );
    }
}
