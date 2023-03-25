import React from 'react';
import { ISectionProps } from '../../interfaces';
import { Container } from './Section.styled';

export class Section extends React.Component<ISectionProps, {}> {
  render() {
    return (
      <Container>
        <h3 className="statistics-title">{this.props.title}</h3>
        {this.props.children}
      </Container>
    );
  }
}
