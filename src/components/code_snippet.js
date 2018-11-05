import React, {Component} from 'react';
import { getAllSnippets } from '../actions/index';
import { connect } from 'react-redux';
import _ from 'lodash'
import {Col, Panel, Label} from 'react-bootstrap';

class code_snippet extends Component {


    /**
     * @desc This component renders code_snippet component to display code blocks.
     */


    render() {
        console.log(this.props.searchparams)
    return _.map(this.props.snippets, snippet => {
        snippet = _.filter(this.props.snippets, snippet => snippet.title.includes(this.props.search.toLowerCase()));
        return (
            <div key={snippet.id}>
                            <Col xs={12} sm={4} className="code_snippets">
                            <Panel>
                            <Panel.Heading>
                            <Panel.Title componentClass="h3">{snippet.title}</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                
                                <pre>
                                <code>
                                {snippet.code}
                                </code>
                                </pre>
                                <h5>
                                <Label>
                                {snippet.tags}
                                </Label>
                                </h5>
                                
                            </Panel.Body>
                            </Panel>
                            </Col>                          
                  </div>
        );
    });
}

}


const mapStateToProps = (state) => {
    return {
        snippets: state.snippets
    };
};


export default connect(mapStateToProps, {getAllSnippets})(code_snippet);