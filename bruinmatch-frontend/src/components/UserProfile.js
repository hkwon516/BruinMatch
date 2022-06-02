import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./UserProfile.module.css";
import axios from "axios";
//import { Button } from "react-native";
//import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
function importAllImages(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAllImages(
  require.context(
    "../../../bruinmatch-backend/images",
    false,
    /\.(png|jpe?g|svg)$/
  )
);
class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      username: "",
      password: "",
      name: "",
      gender: "",
      major: "",
      year: "",
      phone: "",
      email: "",
      bio: "",
      instagram: "",
      discord: "",
      facebook: "",
      samegender: "",
      onthehill: "",
      alchohol: "",
      pets: "",
      nightowl: "",
      img: "",
      usrnm: this.props.match.params.usrnm,
    };
  }

  // onClickInstagram = (e) => {
  //   // this.props.router(`http://instagram.com/${this.state.instagram}`);
  //   // window.location.reload(false);
  //   window.location.href = "http://instagram.com/";
  // };

  onClickRec = (e) => {
    this.props.history.push(`/rec/${this.state.usrnm}`);
    window.location.reload(false);
  };

  onClickEdit = (e) => {
    this.props.history.push(`/editprofile/${this.state.usrnm}`);
    window.location.reload(false);
  };

  componentDidMount() {
    axios
      .get("http://localhost:8082/api/users/" + this.props.match.params.usrnm)
      .then((res) => {
        this.setState({
          user: res.data,
        });
        this.setState({
          username: this.state.user.username,
          password: this.state.user.password,
          name: this.state.user.name,
          gender: this.state.user.gender,
          major: this.state.user.major,
          year: this.state.user.year,
          phone: this.state.user.phone,
          email: this.state.user.email,
          bio: this.state.user.bio,
          instagram: this.state.user.instagram,
          discord: this.state.user.discord,
          facebook: this.state.user.facebook,
          samegender: this.state.user.samegender,
          onthehill: this.state.user.onthehill,
          alchohol: this.state.user.alchohol,
          pets: this.state.user.pets,
          nightowl: this.state.user.nightowl,
          img: this.state.user.img,
        });

        var pref1 = document.getElementById("sw1");
    var pref1no = document.getElementById("sw1no");
    var pref2 = document.getElementById("sw2");
    var pref2no = document.getElementById("sw2no");
    var pref3 = document.getElementById("sw3");
    var pref3no = document.getElementById("sw3no");
    var pref4 = document.getElementById("sw4");
    var pref4no = document.getElementById("sw4no");
    var pref5 = document.getElementById("sw5");
    var pref5no = document.getElementById("sw5no");

    if (this.state.user.samegender) {
      pref1.checked = "true";
    } else {
      pref1no.checked = "true";
    }
if (this.state.user.onthehill) {
  pref2.checked = "true";
} else {
  pref2no.checked = "true";
}
if (this.state.user.alchohol) {
  pref3.checked = "true";
} else {
  pref3no.checked = "true";
}

if (this.state.user.pets) {
  pref4.checked = "true";
} else {
  pref4no.checked = "true";
}

if (this.state.user.nightowl) {
  pref5.checked = "true";
} else {
  pref5no.checked = "true";
}
      })
      .catch((err) => {
        console.log("Error from ShowUserDetails");
      });
  }

  render() {
    // console.log(user)
    
    
    var showsamegender = "";
    if (this.state.samegender) {
      showsamegender = "Yes";
    } else {
      showsamegender = "No";
    }

    var showonthehill = "";
    if (this.state.onthehill) {
      showonthehill = "Yes";
    } else {
      showonthehill = "No";
    }

    var showalchohol = "";
    if (this.state.alchohol) {
      showalchohol = "Yes";
    } else {
      showalchohol = "No";
    }

    var showpets = "";
    if (this.state.pets) {
      showpets = "Yes";
    } else {
      showpets = "No";
    }

    var shownightowl = "";
    if (this.state.nightowl) {
      shownightowl = "Yes";
    } else {
      shownightowl = "No";
    }
    var usersGender= this.state.gender
    var gender2= ""

  if(usersGender == "1")
 {
   gender2 = "Male";
 }
 else if(usersGender == "2")
 {
   gender2 = "Female";
 }
 else
 {
   gender2="Other";
 }

 var userYear = this.state.year
 var user2 = ""
 if(userYear == "5")
 {
  userYear = "Grad"
 }

  var showgender = "";
  
  if (this.state.gender == 1) {
    showgender = "Male";
  } else if (this.state.gender == 2) {
    showgender = "Female";
  } else {showgender = "Not Defined";}
  
  /*if (this.state.samegender== true) {
    pref1.checked = "true";
  } else {
    pref1no.checked = "true";
  }

  if (this.state.onthehill) {
    pref2.checked = "true";
  } else {
    pref2no.checked = "true";
  }
  if (this.state.alchohol) {
    pref3.checked = "true";
  } else {
    pref3no.checked = "true";
  }

  if (this.state.pets) {
    pref4.checked = "true";
  } else {
    pref4no.checked = "true";
  }

  if (this.state.nightowl) {
    pref5.checked = "true";
  } else {
    pref5no.checked = "true";
  }
*/
console.log(this.state.samegender)




    const user = this.state.user;
    let picId = user.articleImage;
    return (
      <div className={styles.zoom}>
        <div className="container">
          <div className={styles.FullFrame}></div>
          <div className={styles.TopBanner}>
            <a onClick={this.onClickRec} style={{ cursor: "pointer" }}>
              <div className={styles.topBannerText}>BruinMatch</div>
            </a>
          </div>
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              {/* <Link to="/" className="btn btn-outline-warning float-left">
                  Show BooK List
              </Link> */}
            </div>
            <div className="col-md-8 m-auto">
              <form noValidate onSubmit={this.onSubmit}>
                <div className="Profile section">
                  <img className={styles.ProfilePhoto} src={images[picId]} />
                </div>

                <div className={styles.Frame2}>
                  <div className={"MyProfile"}>
                    <div className={styles.MyProfile}>My Profile</div>
                  </div>

                  <div className={"name"}>
                    <div className={styles.Name}>Name</div>
                    <div className={styles.showName}>{this.state.name}</div>
                  </div>

                  <div className="Gender">
                    <div className={styles.Gender}>Gender</div>
                      <div className={styles.showGender}>{showgender}</div>
                  </div>

                  <div className={"major"}>
                    <div className={styles.Major}>Major</div>
                    <div className={styles.showMajor}>{this.state.major}</div>
                  </div>

                  <div className="year">
                    <div className={styles.Year}>Year</div>
                    <div className={styles.showYear}>{this.state.year}</div>
                  </div>

                  <div className={"phone"}>
                    <div className={styles.Phone}>Phone</div>
                    <div className={styles.showPhone}>{this.state.phone}</div>

                  <div className="email">
                    <div className={styles.Email}>Email</div>
                    <div className={styles.showEmail}>{this.state.email}</div>
                  </div>

                  <div className={"instagram"}>
                    <div className={styles.Instagram}>Instagram</div>
                    <div className={styles.showInstagram}>{this.state.instagram}</div>
                  </div> 

                  <div className={"discord"}>
                    <div className={styles.Discord}>Discord</div>
                    <div className={styles.showDiscord}>{this.state.discord}</div>
                  </div> 

                  <div className={"facebook"}>
                    <div className={styles.Facebook}>Facebook</div>
                    <div className={styles.showFacebook}>{this.state.facebook}</div>
                  </div>

                  <div className={"bio"}>
                    <div className={styles.Bio}>Bio</div>
                    <div className={styles.showBio}>{this.state.bio}</div>
                  </div>

                    <div className={styles.EditButton} />
                    <a onClick={this.onClickEdit} style={{ cursor: "pointer" }}>
                      <button className={styles.EditText}>Edit</button>
                    </a>
                  </div>
                </div>

                <div className={styles.Frame3}>
                  <div className={styles.Preferences}></div>
                  <div className={styles.PreferencesText}>Preferences</div>
                  <div className={styles.Option1}>Same Gender?</div>
                  <div className={styles.Option2}>On the Hill?</div>
                  <div className={styles.Option3}>Alcohol?</div>
                  <div className={styles.Option4}>Pets?</div>
                  <div className={styles.Option5}>Night Owl?</div>
                  <div className={styles.Switchtext}>Yes</div>
                  <div className={styles.Switchtextno}>No</div>
                  {/*
                    Option Order:
                    1. same gender
                    2. on the hill
                    3. alchohol
                    4. pets
                    5. nightowl
                    */}
                  <div>
                    <input
                      className={styles.Switch1}
                      type="radio"
                      name="xsamegender"
                      value="t"
                      disabled= {true}
                      id="sw1"
                    />
                    <input
                      className={styles.Switch1No}
                      type="radio"
                      name="xsamegender"
                      value="f"
                      disabled= {true}
                      id="sw1no"
                    />
                    <input
                      className={styles.Switch2}
                      type="radio"
                      name="xonthehill"
                      value="t"
                      disabled= {true}
                      id="sw2"
                    />
                    <input
                      className={styles.Switch2No}
                      type="radio"
                      name="xonthehill"
                      value="f"
                      disabled= {true}
                      id="sw2no"
                    />
                    <input
                      className={styles.Switch3}
                      type="radio"
                      name="xalchohol"
                      value="t"
                      disabled= {true}
                      id="sw3"
                    />
                    <input
                      className={styles.Switch3No}
                      type="radio"
                      name="xalchohol"
                      value="f"
                      disabled= {true}
                      id="sw3no"
                    />
                    <input
                      className={styles.Switch4}
                      type="radio"
                      name="xpets"
                      value="t"
                      disabled= {true}
                      id="sw4"
                    />
                    <input
                      className={styles.Switch4No}
                      type="radio"
                      name="xpets"
                      value="f"
                      disabled= {true}
                      id="sw4no"
                    />
                    <input
                      className={styles.Switch5}
                      type="radio"
                      name="xnightowl"
                      value="t"
                      disabled= {true}
                      id="sw5"
                    />
                    <input
                      className={styles.Switch5No}
                      type="radio"
                      name="xnightowl"
                      value="f"
                      disabled= {true}
                      id="sw5no"
                    />
                    </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;