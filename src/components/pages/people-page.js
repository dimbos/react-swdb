import React from 'react';
import { PersonDetails, PersonList } from '../sw-components';
import Row from '../row';
import { withRouter } from 'react-router-dom';

//раньше это был класс
const PeoplePage = ({history, match}) => {
/*
  state = {
    selectedItem: null
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };
  */

  // render(
    // const { selectedItem } = this.state;
    const { id } = match.params;
    return (
      <Row
       // left={<PersonList onItemSelected={this.onItemSelected} />}
       left={<PersonList onItemSelected={(id) => history.push(`/people/${id}`)} />}
        // right={<PersonDetails itemId={selectedItem} />} />
        right={<PersonDetails itemId={id} />} />
    );
  };


  export default withRouter(PeoplePage);
