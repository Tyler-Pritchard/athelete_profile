module.exports = mongoose => {
    const Athlete = mongoose.model(
      "athletes",
      mongoose.Schema(
        {
          name: String,
          location: String,
          team: String
        },
        { timestamps: true }
      )
    );
    return Athlete;
  };


  //If you use this app with a front-end that needs id field instead of _id, you have to override toJSON method that map default object to a custom object.