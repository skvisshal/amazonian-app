import { connect } from 'react-redux';

import NavigationBar from './navigation_bar';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    sessionId: state.session.id,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);