import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { postSnippet } from '../actions/index';

class AddCodeSnippet extends Component {

    renderField(field) {
        const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type="text" placeholder={field.placeholder} {...field.input} />
                <div className="text-help">{field.meta.touched ? field.meta.error : ''}</div>
            </div>
        );
    }

    renderTextField(field) {
        const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <textarea className="form-control" rows="10" placeholder={field.placeholder} {...field.input} />
                <div className="text-help">{field.meta.touched ? field.meta.error : ''}</div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.postSnippet(values)
    }


    render() {
        const { handleSubmit } = this.props;


        return (
            <Panel id="collapsible-panel-example-2" defaultCollapsed>
            <Panel.Heading>
                <Panel.Title toggle>
                Add new snippet
                </Panel.Title>
            </Panel.Heading>
            <Panel.Collapse>

                <Panel.Body>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    placeholder="Give title to code snippet"
                    name="title"
                    component={this.renderField} />
                <Field
                    label="Code"
                    placeholder="Write your code snippet here"
                    name="code"
                    component={this.renderTextField} />
                <Field
                    label="Tags"
                    placeholder="Give tags here separated by space"
                    name="tags"
                    component={this.renderField} />
                
                <button type="submit" className="btn btn-primary">Add snippet</button>
            </form>
                </Panel.Body>

            </Panel.Collapse>
            </Panel>
            
        );
    }
}


const mapStateToProps = (state) => ({
    codesnippet: state.codesnippet
});

export default reduxForm({
    form: 'NewSnippetForm'
})(
    connect(mapStateToProps, { postSnippet })(withRouter(AddCodeSnippet))
);