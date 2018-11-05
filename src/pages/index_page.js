import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Col, Grid, Row, FormControl, Panel, Label } from 'react-bootstrap';
import { getAllSnippets } from '../actions/index';
import SnippetAddForm from '../components/add_snippet_form';
import CodeSnippets from '../components/code_snippet';
import _ from 'lodash';

class index_page extends Component {

    componentDidMount() {
        this.props.getAllSnippets();
    }

    constructor(props) {
        super(props);

        this.state = {
            value: '',
            currentlyDisplayed: this.props.snippets
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let newlyDisplayed = _.filter(this.props.snippets, snippet => snippet.title.includes(e.target.value.toLowerCase()));
        this.setState({
            value: e.target.value,
            currentlyDisplayed: newlyDisplayed
        });
    }


    /**
     * @desc This component renders frontpage
     */

    render() {
        console.log('debuggg')
        console.log(this.state.currentlyDisplayed.length)
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} sm={12}>

                            <h1 className="title">
                                My Code Bucket
                        </h1>

                            <SnippetAddForm />

                            <FormControl
                                type="text"
                                value={this.state.value}
                                placeholder="Search snippet"
                                onChange={this.handleChange}
                            />

                            

                        </Col>
                        <Col xs={12} sm={12}>
                
                        <CodeSnippets searchparams={this.state.value} />

                        </Col>
                    </Row>

                </Grid>


            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        snippets: state.snippets
    };
};

export default connect(mapStateToProps, { getAllSnippets })(index_page);