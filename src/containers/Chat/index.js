import { connect } from 'react-redux';

import Chat from 'src/components/Chat';

const mapStateToprops = (state) => ({
  isLogged: state.user.logged,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToprops, mapDispatchToProps)(Chat);