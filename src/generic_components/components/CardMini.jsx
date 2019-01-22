import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../assets/cardmini.css';

class CardMini extends Component {
	static defaultProps = {
        id: null,
        header: null,
        footer: null,
        title: null,
        subTitle: null,
        style: null,
        className: null
    };

    static propTypes = {
        id: PropTypes.string,
        header: PropTypes.any,
        footer: PropTypes.any,
        title: PropTypes.string,
        subTitle: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string
    };

    renderHeader(){
        return <div className="cm-card-header">
                    {this.props.header}
                </div>;
    }
    
    renderBody(){
        let title, subTitle, footer, children;

        if(this.props.title) {
            title = <div className="cm-card-title">{this.props.title}</div>;
        }
        if(this.props.subTitle) {
            subTitle = <div className="cm-card-subtitle">{this.props.subTitle}</div>;
        }
        if(this.props.footer) {
            footer = <div className="cm-card-footer"> {this.props.footer}</div>;
        }
        if(this.props.children) {
            children = <div className="cm-card-content"> {this.props.children} </div>;
        }
        return (
            <div className="cm-card-body">
                {title}
                {subTitle}
                {children}
                {footer}
            </div>
        );
    }

    render(){

        let header, body;
        let className = classNames('cm-card cm-component',this.props.className);

        if(this.props.header) {
            header = this.renderHeader();
        }
        body = this.renderBody();

        return(
            <div className={className} style={this.props.style}>
                {header}
                {body}
            </div>
        );
    }
}
 
export default CardMini;