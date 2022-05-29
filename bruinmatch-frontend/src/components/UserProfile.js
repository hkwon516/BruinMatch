import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./UserProfile.module.css";
import axios from "axios";
//import { Button } from "react-native";
//import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

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
      })
      .catch((err) => {
        console.log("Error from ShowUserDetails");
      });
  }

  render() {
    // console.log(user)
    var showsamegender = '';
    if (this.state.samegender){
      showsamegender = "Yes";
    } else {
      showsamegender = "No"
    }

    var showonthehill = '';
    if (this.state.onthehill){
      showonthehill = "Yes";
    } else {
      showonthehill = "No"
    }

    var showalcohol = '';
    if (this.state.alcohol){
      showalcohol = "Yes";
    } else {
      showalcohol = "No"
    }

    var showpets = '';
    if (this.state.pets){
      showpets = "Yes";
    } else {
      showpets = "No"
    }

    var shownightowl = '';
    if (this.state.nightowl){
      shownightowl = "Yes";
    } else {
      shownightowl = "No"
    }

    const user = this.state.user;
    return (
      <div className="MyProfile">
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
                  <img className={styles.ProfilePhoto} src={this.state.img} />
                  <div className={styles.Instagram}>
                    <a href={this.state.instagram}>
                      {/* <a onClick={this.onClickInstagram}> */}
                      {/* consol.log({this.state.instagram}); */}
                      {/* <a href=`{this.state.instagram}`> */}
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                        alt=""
                        style={{ width: "57%" }}
                      />
                    </a>
                  </div>
                  <div className={styles.Discord}>
                    <a href={this.state.discord}>
                      <img
                        src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-icon-24.png"
                        alt=""
                        style={{ width: "55%" }}
                      />
                    </a>
                  </div>
                  <div className={styles.Facebook}>
                    <a href={this.state.facebook}>
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                        alt=""
                        style={{ width: "57%" }}
                      />
                    </a>
                  </div>
                </div>

                <div className={styles.Frame2}>
                  <div className={"name"}>
                    <div className={styles.Name}>Name</div>
                    <div className={styles.showName}>{this.state.name}</div>
                  </div>

                  <div className={"email"}>
                    <div className={styles.Email}>Email</div>
                    <div className={styles.showEmail}>{this.state.email}</div>
                  </div>

                  <div className={"major"}>
                    <div className={styles.Major}>Major</div>
                    <div className={styles.showMajor}>{this.state.major}</div>
                  </div>

                  <div className={"MyProfile"}>
                    <div className={styles.MyProfile}>My Profile</div>
                  </div>

                  <div className={"phone"}>
                    <div className={styles.Phone}>Phone</div>
                    <div className={styles.showPhone}>{this.state.phone}</div>

                    <div className="year">
                      <div className={styles.Year}>Year</div>
                      <div className={styles.showYear}>{this.state.year}</div>
                    </div>

                    <div className="Gender">
                      <div className={styles.Gender}>Gender</div>
                      <div className={styles.showGender}>
                        {this.state.gender}
                      </div>
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
                  <div className={styles.showsamegender}>{showsamegender}</div>
                  
                  <div className={styles.Option2}>On the Hill?</div>
                  <div className={styles.showonthehill}>{showonthehill}</div>

                  <div className={styles.Option3}>Alcohol?</div>
                  <div className={styles.showalcohol}>{showalcohol}</div>

                  <div className={styles.Option4}>Pets?</div>
                  <div className={styles.showpets}>{showpets}</div>

                  <div className={styles.Option5}>Night Owl?</div>
                  <div className={styles.shownightowl}>{shownightowl}</div>

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
