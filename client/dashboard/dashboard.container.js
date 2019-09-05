import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectDashboardCards} from '../store';
import Dashboard from './dashboard';

const mapStateToProps = state => {
  return {
    cards: selectDashboardCards(state)
  };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
