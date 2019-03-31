import React, { Component } from "react";
import Nav from "../components/Nav";

import Main from "../components/Main";
import Jumbo from "../components/Jumbo";

import Shuffle from "shuffle-array";

class SynthyClicky extends Component {
  state = {
    synths: [
      {
        image:
          "http://www.vintagesynth.com/sites/default/files/2017-05/p08.jpg",
        id: 0,
        clicked: 0
      },
      {
        image:
          "http://www.vintagesynth.com/sites/default/files/2017-05/vermona_drm1_mkiii.jpg",
        id: 1,
        clicked: 0
      },
      {
        image:
          "http://www.vintagesynth.com/sites/default/files/2017-05/buchla700_audities.jpg",
        id: 2,
        clicked: 0
      },
      {
        image:
          "http://www.vintagesynth.com/sites/default/files/2017-05/minitmoog.jpg",
        id: 3,
        clicked: 0
      },
      {
        image:
          "http://www.vintagesynth.com/sites/default/files/2017-05/oberheim_dsx.jpg",
        id: 4,
        clicked: 0
      },
      {
        image:
          "http://www.vintagesynth.com/sites/default/files/2017-05/ms20.jpg",
        id: 5,
        clicked: 0
      },
      {
        image:
          "http://www.vintagesynth.com/sites/default/files/2017-05/ensoniq_asr10.jpg",
        id: 6,
        clicked: 0
      },
      {
        image:
          "http://www.vintagesynth.com/sites/default/files/2017-05/fairlight_cmi_ii.jpg",
        id: 7,
        clicked: 0
      },
      {
        image:
          "http://www.vintagesynth.com/sites/default/files/2017-05/sci_prophet5.jpg",
        id: 8,
        clicked: 0
      }
    ],
    score: 0,
    highscore: 0
  };

  initial = [
    {
      image: "http://www.vintagesynth.com/sites/default/files/2017-05/p08.jpg",
      id: 0,
      clicked: 0
    },
    {
      image:
        "http://www.vintagesynth.com/sites/default/files/2017-05/vermona_drm1_mkiii.jpg",
      id: 1,
      clicked: 0
    },
    {
      image:
        "http://www.vintagesynth.com/sites/default/files/2017-05/buchla700_audities.jpg",
      id: 2,
      clicked: 0
    },
    {
      image:
        "http://www.vintagesynth.com/sites/default/files/2017-05/minitmoog.jpg",
      id: 3,
      clicked: 0
    },
    {
      image:
        "http://www.vintagesynth.com/sites/default/files/2017-05/oberheim_dsx.jpg",
      id: 4,
      clicked: 0
    },
    {
      image: "http://www.vintagesynth.com/sites/default/files/2017-05/ms20.jpg",
      id: 5,
      clicked: 0
    },
    {
      image:
        "http://www.vintagesynth.com/sites/default/files/2017-05/ensoniq_asr10.jpg",
      id: 6,
      clicked: 0
    },
    {
      image:
        "http://www.vintagesynth.com/sites/default/files/2017-05/fairlight_cmi_ii.jpg",
      id: 7,
      clicked: 0
    },
    {
      image:
        "http://www.vintagesynth.com/sites/default/files/2017-05/sci_prophet5.jpg",
      id: 8,
      clicked: 0
    }
  ];

  componentDidMount() {
    console.log("hello");
  }

  handlePictureClick = id => {
    console.log("more points");

    this.setState({
      score: this.state.score + id
    });

    this.setClickedTrue(id);
    this.setState({
      highscore: this.state.score
    });
  };

  setClickedTrue = id => {
    console.log("Set the state to true id: " + id);
    let images = [...this.state.synths];
    const imageClicked = images.find(item => {
      return item.id === id;
    });

    if (!imageClicked.clicked) {
      imageClicked.clicked = 1;
      this.setState(imageClicked);
      console.log(imageClicked);
    } else {
      alert("you lose");
      this.setState({ score: 0 });

      this.setState({ synths: this.initial });
    }
    console.log(imageClicked);
  };

  shuffleArray = array => {
    this.setState({ synths: this.shuffle(this.state.synths) });
  };

  shuffle = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  render() {
    return (
      <div>
        <Nav scores={this.state.score} highscore={this.state.highscore} />
        <Jumbo />
        <Main
          synthImage={this.state.synths}
          handlePictureClick={this.handlePictureClick}
          shuffleArray={this.shuffleArray}
        />
      </div>
    );
  }
}

export default SynthyClicky;
