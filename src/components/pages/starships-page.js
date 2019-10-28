import React from 'react';
import { StarshipDetails, StarshipList } from '../sw-components';
// import Row from '../row';
import {withRouter} from 'react-router-dom';

//раньше это был класс
function StarshipsPage({history}) {
  /*
  state = {
    selectedItem: null
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };
  */

  //render() {
    // const { selectedItem } = this.state;

    return (
      //<Row
        // left={<StarshipList onItemSelected={this.onItemSelected} />}
        //right={<StarshipDetails itemId={selectedItem} />} />
        <StarshipList onItemSelected={(itemId) => {
          const newPath = `/starships/${itemId}`; //абсолютный путь
          history.push(newPath);
        }} />
    );
}


export default withRouter(StarshipsPage);
