import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./MyProfile.module.css";
import axios from "axios";
import { Button } from "react-native";
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Eggert",
      gender: "Male",
      email: "eggman123123@gmail.com",
      major: "CS",
      year: "4th",
      phone: 1234567890,
      bio: "c-s roommate"
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/users/myprofile')
      .then((res) => {
      this.setState({
        name: res.name,
        gender: res.gender,
        email: res.email,
        major: res.major,
        year: res.year,
        phone: res.phone,
        bio: res.bio
      });
      this.props.history.push('/myprofile');
    });
    .catch((err) => {
        console.log("Error from My Profile");
  }

  render() {
    return (
      <div className="MyProfile">
        <div className="container">
          <div className={styles.FullFrame}></div>
          <div className={styles.TopBanner}>
            <div className={styles.topBannerText}>BruinMatch</div>
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
                  <div className={styles.SetProfileButton}></div>
                  <div className={styles.ProfilePhoto}></div>
                  <div className={styles.Instagram}>
                    <img
                      src="https://static.cdn.wisestamp.com/wp-content/uploads/2020/06/instagram-icon-2.jpeg"
                      alt=""
                      style={{ width: "70%" }}
                    />
                  </div>
                  <div className={styles.Twitter}>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
                      alt=""
                      style={{ width: "53%" }}
                    />
                  </div>
                  <div className={styles.Facebook}>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                      alt=""
                      style={{ width: "57%" }}
                    />
                  </div>
                  <div className={styles.PhotoButtonText}>
                    Edit Profile Photo
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

                  <div className={styles.MyProfile}>My Profile</div>

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

                    <input className={styles.EditButton} />
                    <div className={styles.EditText}>Edit</div>
                  </div>
                </div>

                <div className={styles.Frame3}>
                  <div className={styles.Preferences}></div>
                  <div className={styles.PreferencesText}>Preferences</div>
                  <div className={styles.Option1}>Preference1</div>
                  <div className={styles.Option2}>Preference2</div>
                  <div className={styles.Option3}>Preference3</div>
                  <div className={styles.Option4}>Preference4</div>
                  <div className={styles.Option5}>Preference5</div>

                  <div className="switches">
                    <div className={styles.Switch1}></div>
                    <div className={styles.Switch1No}></div>

                    <div className={styles.Switch2}></div>
                    <div className={styles.Switch2No}></div>
                    <div className={styles.Switch3}></div>
                    <div className={styles.Switch3No}></div>
                    <div className={styles.Switch4}></div>
                    <div className={styles.Switch4No}></div>
                    <div className={styles.Switch5}></div>
                    <div className={styles.Switch5No}></div>
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

export default MyProfile;
