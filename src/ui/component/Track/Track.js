/* eslint-disable */
import React, {Component, Fragment} from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    space: {
        marginTop: theme.spacing.unit / 2,
        marginBottom: theme.spacing.unit / 2,
    },
});



class Track extends Component {

    handleOnClick = (id) => {
        debugger;
        axios.get(`/play`);
    };

    render() {
        let track = this.props.track;
        const { classes } = this.props;
        return (
            <Fragment>
                <Card className={classes.space} onClick = {() => this.handleOnClick(track.id)}>
                    <CardContent>
                        <Typography component="h2">
                            {`${track.title} (${track.year})`}
                        </Typography>
                        <Typography >
                            {track.artist}
                        </Typography>
                    </CardContent>
                </Card>
            </Fragment>
        );
    }
}


export default withStyles(styles)(Track);

