import { connect } from 'react-redux';
import Card from '../components/Card';

// we need to get card of the tree
// we need to use ownProps to figure out what card is needed
const mapStateToProps = (state, ownProps) => {
    return {
        card: state.cards.entities[ownProps.cardId],
    }
}

export default connect(mapStateToProps)(Card);