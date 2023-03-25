import React, { Component } from 'react';

export class Section extends Component {
  render() {
    return (
      <section className="statistics-container">
        <h3 className="statistics-title">{this.props.title}</h3>
        {this.props.children}
      </section>
    );
  }
}
