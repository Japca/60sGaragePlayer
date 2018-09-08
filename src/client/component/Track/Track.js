/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';




class Track extends Component {



    render() {
        let track = this.props.track;
        let id = 0;
        return (
            <div>
                <ListItem>
                    <Avatar>
                        <ImageIcon />
                    </Avatar>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
                {/*{data.map(track => {*/}
                    {/*return <div key={++id}>*/}
                        {/*<div className="text">*/}
                            {/*<p>{track.title} ({track.year})</p>*/}
                            {/*<p>{track.artist}</p>*/}
                        {/*</div>*/}
                    {/*</div>;*/}
                {/*})}*/}
            </div>
        );
    }


}


export default Track;

