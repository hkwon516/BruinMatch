import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./UserProfile.module.css";
import axios from "axios";
import { Button } from "react-native";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import swal from "sweetalert";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      fileName: "",
      savedProfiles: [],
      savedNotes: [],
      usrnm: this.props.match.params.usrnm,
      user: "",
      fileName: "",
      img: "",
    };
  }
  

  onChange = (e) => {
    
  };
  importAllImages(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

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
          fileName: this.state.user.articleImage,
        });

        var testFile = this.state.user.articleImage;

        var images = this.importAllImages(
          require.context(
            "../../../bruinmatch-backend/images",
            false,
            /\.(png|jpe?g|svg)$/
          )
        );
        this.setState({ img: images[testFile] });
        console.log(images[testFile]);
        console.log(this.state.img);
        console.log(this.state.fileName);

        var male = document.getElementById("male");
        var female = document.getElementById("female");
        var undef = document.getElementById("undef");

        var first = document.getElementById("first");
        var second = document.getElementById("second");
        var third = document.getElementById("third");
        var fourth = document.getElementById("fourth");
        var grad = document.getElementById("grad");

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

        //updating year buttons
        if (this.state.user.year === 1) {
          first.style.backgroundColor = "#2773ae";
          first.style.color = "white";
        } else if (this.state.user.year === 2) {
          second.style.backgroundColor = "#2773ae";
          second.style.color = "white";
        } else if (this.state.user.year === 3) {
          third.style.backgroundColor = "#2773ae";
          third.style.color = "white";
        } else if (this.state.user.year === 4) {
          fourth.style.backgroundColor = "#2773ae";
          fourth.style.color = "white";
        } else if (this.state.user.year === 5) {
          grad.style.backgroundColor = "#2773ae";
          grad.style.color = "white";
        }

        // updating gender buttons

        if (this.state.user.gender === 1) {
          male.style.backgroundColor = "#2773ae";
          male.style.color = "white";
        } else if (this.state.user.gender === 2) {
          female.style.backgroundColor = "#2773ae";
          female.style.color = "white";
        } else if (this.state.user.gender === 3) {
          undef.style.backgroundColor = "#2773ae";
          undef.style.color = "white";
        }

        // updating radio buttons

        if (this.state.user.samegender) {
          pref1.checked = "true";
        } else {
          pref1no.checked = "true;";
        }

        if (this.state.user.onthehill) {
          pref2.checked = "true";
        } else {
          pref2no.checked = "true;";
        }
        if (this.state.user.alchohol) {
          pref3.checked = "true";
        } else {
          pref3no.checked = "true;";
        }

        if (this.state.user.pets) {
          pref4.checked = "true";
        } else {
          pref4no.checked = "true;";
        }

        if (this.state.user.nightowl) {
          pref5.checked = "true";
        } else {
          pref5no.checked = "true;";
        }

        //console.log(this.state.user.samegender);
      })
      .catch((err) => {
        console.log("Error from ShowUserDetails");
      });
  }

  onSubmit = (e) => {
    console.log(this.state.fileName);
    console.log(this.state.year);
    e.preventDefault();

    const data = {
      name: this.state.name,
      gender: this.state.gender,
      major: this.state.major,
      year: this.state.year,
      phone: this.state.phone,
      email: this.state.email,
      bio: this.state.bio,
      instagram: this.state.instagram,
      discord: this.state.discord,
      facebook: this.state.facebook,
      samegender: this.state.samegender,
      onthehill: this.state.onthehill,
      alchohol: this.state.alchohol,
      pets: this.state.pets,
      nightowl: this.state.nightowl,
      fileName: this.state.fileName,
    };

    var tempUsers;

    axios
      .get("http://localhost:8082/api/users/allUsers")
      .then((res) => {
        tempUsers = res.data;
      })
      .catch((err) => {
        console.log("Error from Log In");
      });

    const formData = new FormData();
    formData.append("name", this.state.name);
    formData.append("gender", this.state.gender);
    formData.append("major", this.state.major);
    formData.append("year", this.state.year);
    formData.append("phone", this.state.phone);
    formData.append("email", this.state.email);
    formData.append("bio", this.state.bio);
    formData.append("instagram", this.state.instagram);
    formData.append("discord", this.state.discord);
    formData.append("facebook", this.state.facebook);
    formData.append("samegender", this.state.samegender);
    formData.append("onthehill", this.state.onthehill);
    formData.append("alchohol", this.state.alchohol);
    formData.append("pets", this.state.pets);
    formData.append("nightowl", this.state.nightowl);
    formData.append("articleImage", this.state.fileName);

    axios
      .put(
        `http://localhost:8082/api/users/update/${this.state.user.username}`,
        formData
      )
      .then((res) => {
        this.setState({
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
          fileName: "",
        });
        console.log("success!!");

        //ADD CODE HERE TO CLEAR OUT RADIO BUTTONS

        var radioButtons = document.querySelectorAll('input[type="radio"]');
        for (var i = 0; i < radioButtons.length; i++)
          radioButtons[i].checked = false;

        this.props.history.push(`/rec/${this.state.user.username}`);
        window.location.reload(false);
      })

      .catch((err) => {
        console.log("Error in CreateUser!");
      });
  };

  render() {
    console.log(this.state.user);
    const user = this.state.user;

    return (
      <div className={styles.FormatPadding}>
        <div className="container">
          <div className={styles.FullFrame}></div>
          <div className={styles.TopBanner}>
           
            <a onClick={this.onClickRec} className= { styles.topBannerText} style={{ cursor: "pointer" }}>
                    BruinMatch
                  </a>
          
            
          </div>
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
            </div>
            <div className="col-md-8 m-auto">
              <form
                noValidate
               
                encType="multipart/form-data"
              >
                <div className={styles.FullFrame}></div>
                <div className="Profile section">
                  
                  <img className={styles.ProfilePhoto} src={this.state.img} />
                </div>

                <div className={styles.Frame4}>
                  {/* Profile Pic Button */}
                
                 
                  <br />
                </div>

                <div className={styles.Frame2}>
                  <div className={"name"}>
                    <div className={styles.Name}>Name*</div>
                    <div className="nameinput">
                      <input
                        type="text"
                        name="name"
                        className={styles.NameInput}
                        value={this.state.name}
                        disabled= {true}
                      />
                    </div>
                  </div>

                  <div className={"email"}>
                    <div className={styles.Email}>Email*</div>
                    <div className={"emailinput"}>
                      <input
                        type="text"
                        name="email"
                        className={styles.EmailInput}
                        value={this.state.email}
                        disabled= {true}
                      />
                    </div>
                  </div>

                  <div className={"major"}>
                    <div className={styles.Major}>Major*</div>
                    <div className={"majorinput"}>
                      <input
                        type="text"
                        name="major"
                        className={styles.MajorInput}
                        value={this.state.major}
                        placeholder={this.state.major}
                        disabled= {true}
                      />
                    </div>
                  </div>

                  <div className={styles.CreateProfile}>My Profile</div>

                  <div className={"phone"}>
                    <div className={styles.Phone}>Phone*</div>
                    <div className={"phoneinput"}>
                      <input
                        type="text"
                        name="phone"
                        className={styles.PhoneInput}
                        value={this.state.phone}
                        disabled= {true}
                      />
                    </div>

                    <div className="year">
                      <div className={styles.Year}>Year*</div>
                      <input
                        type="button"
                        className={styles.first}
                        name="first"
                        disabled= {true}
                        value="1st"
                        id="first"
                      />
                      <input
                        type="button"
                        className={styles.second}
                        name="second"
                        disabled= {true}
                        value="2nd"
                        id="second"
                      />
                      <input
                        type="button"
                        className={styles.third}
                        name="third"
                        disabled= {true}
                        value="3rd"
                        id="third"
                      />
                      <input
                        type="button"
                        className={styles.fourth}
                        name="fourth"
                        disabled= {true}
                        value="4th"
                        id="fourth"
                      />
                      <input
                        type="button"
                        className={styles.Grad}
                        name="grad"
                        disabled= {true}
                        value="Grad"
                        id="grad"
                      />
                    </div>

                    <div className="Gender">
                      <div className={styles.Gender}>Gender*</div>

                      <input
                        type="button"
                        className={styles.male}
                        name="male"
                        disabled= {true}
                        value="Male"
                        id="male"
                      />
                      <input
                        type="button"
                        className={styles.female}
                        name="female"
                        disabled= {true}
                        value="Female"
                        id="female"
                      />
                      <input
                        type="button"
                        className={styles.undef}
                        name="undef"
                        disabled= {true}
                        value="Not Defined"
                        id="undef"
                      />
                    </div>

                    <div className={"bio"}>
                      <div className={styles.Bio}>Bio*</div>
                      <div className={"bioinput"}>
                        <textarea
                          type="textarea"
                          name="bio"
                          className={styles.BioInput}
                          value={this.state.bio}
                          disabled= {true}
                        />
                      </div>
                    </div>

                    <div className={"instagram"}>
                      <div className={styles.Instagram}>Instagram</div>
                      <div className={"instagraminput"}>
                        <input
                          type="text"
                          name="instagram"
                          className={styles.InstagramInput}
                          value={this.state.instagram}
                          disabled= {true}
                        />
                      </div>
                    </div>

                    <div className={"discord"}>
                      <div className={styles.Discord}>Discord</div>
                      <div className={"discordinput"}>
                        <input
                          type="text"
                          name="discord"
                          className={styles.DiscordInput}
                          value={this.state.discord}
                          disabled= {true}
                        />
                      </div>
                    </div>

                    <div className={"facebook"}>
                      <div className={styles.Facebook}>Facebook</div>
                      <div className={"faceookinput"}>
                        <input
                          type="text"
                          name="facebook"
                          className={styles.FacebookInput}
                          value={this.state.facebook}
                          disabled= {true}
                        />
                      </div>
                    </div>

                    <a onClick={this.onClickEdit} style={{ cursor: "pointer" }}>
                      <button className={styles.SubmitButton}>Edit</button>
                    </a>
                  </div>
                </div>

                <div className={styles.Frame3}>
                  <div className={styles.Preferences}></div>
                  <div className={styles.PreferencesText}> Preferences</div>
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
