import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectDashboardCards} from '../store';
import Dashboard from './dashboard';

const mapStateToProps = (state, props) => {
  return {
    cards: selectDashboardCards(state, props.id)
  };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
