import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Menu from './menu';

import {
  isMenuDisplaying, hideMenu, displayMenu
} from '../store';

const mapStateToProps = state => {
  return {
    isDisplaying: isMenuDisplaying(state)
  };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
      hide: () => hideMenu(),
      display: () => displayMenu()
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
