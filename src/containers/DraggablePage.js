import React, { Component } from 'react';
import DraggableList from '../components/DraggableList';

type Props = {};

export default class DraggablePage extends Component<Props> {
  props: Props;

  render() {
    return <DraggableList />;
  }
}
