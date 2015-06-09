import React from 'react';

var pictureSource;   // picture source
var destinationType; // sets the format of returned value

export default React.createClass({

  // Called when a photo is successfully retrieved
  onPhotoDataSuccess(imageData) {
    alert("onPhotoDataSuccess");
    // Uncomment to view the base64-encoded image data
    console.log(imageData);

    // Get image handle
    var smallImage = document.getElementById('smallImage');

    // Unhide image elements
    smallImage.style.display = 'block';

    // Show the captured photo
    // The inline CSS rules are used to resize the image
    smallImage.src = "data:image/jpeg;base64," + imageData;
  },

  // Called when a photo is successfully retrieved
  onPhotoURISuccess(imageURI) {
    alert("onPhotoURISuccess");
    // Uncomment to view the image file URI
    console.log(imageURI);

    // Get image handle
    var largeImage = document.getElementById('largeImage');

    // Unhide image elements
    largeImage.style.display = 'block';

    // Show the captured photo
    // The inline CSS rules are used to resize the image
    largeImage.src = imageURI;
  },

  capturePhoto() {
    alert("capturePhoto");
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(this.onPhotoDataSuccess, onFail, {
      quality: 50,
      destinationType: destinationType.DATA_URL
    });
  },

  capturePhotoEdit() {
    alert("capturePhotoEdit");
    // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
    navigator.camera.getPicture(this.onPhotoDataSuccess, onFail, {
      quality: 20,
      allowEdit: true,
      destinationType: destinationType.DATA_URL
    });
  },

  getPhoto(source) {
    alert("getPhoto");
    navigator.camera.getPicture(this.onPhotoURISuccess, onFail, {
      quality: 50,
      destinationType: destinationType.FILE_URI,
      sourceType: source
    });
  },

  onFail(message) {
    alert('Failed because: ' + message);
  },

  onDeviceReady() {
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
    alert("onDeviceReady");
    this.setState({ deviceready: true });
  },

  getInitialState() {
    return {
      deviceready: true
    }
  },

  componentDidMount() {
    document.addEventListener("deviceready",this.onDeviceReady,false);
  },

  renderApp() {
    if(this.state.deviceready) {
      if(!pictureSource)
        pictureSource = {};
      return (
        <div>
          <button className="waves-effect waves-light btn" onclick={this.capturePhoto.bind(this)}>Capture Photo</button> <br />
          <button className="waves-effect waves-light btn" onclick={this.capturePhotoEdit.bind(null)}>Capture Editable Photo</button> <br />
          <button className="waves-effect waves-light btn" onclick={this.getPhoto.bind(null, pictureSource.PHOTOLIBRARY)}>From Photo Library</button><br />
          <button className="waves-effect waves-light btn" onclick={this.getPhoto.bind(null, pictureSource.SAVEDPHOTOALBUM)}>From Photo Album</button><br />

          <img id="smallImage" src="" />

          <img id="largeImage" src="" />
        </div>
      );
    }
    else {
      return (
        <div>loading...</div>
      );
    }
  },

  render() {

    return (
      this.renderApp()
    );

  }

});
