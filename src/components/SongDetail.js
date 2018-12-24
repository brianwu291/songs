import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {
    // props等於song: state.selectedSong
    //console.log(song);
    if (!song) {
        return <div>Select a song on the left side</div>;
    }
    return (
        <div>
            <h3>Details For:</h3>
            <p>
            Title: {song.title} 
            <br/>
            Duration: {song.duration}
            </p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        song: state.selectedSong
    };
};

export default connect(mapStateToProps)(SongDetail);
