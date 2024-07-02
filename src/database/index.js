// const { default: mongoose } = require("mongoose");

// const connectToDb = async () => {
// 	// const connectionURL = "mongodb+srv://gyan:jobportal@cluster0.exqx0pw.mongodb.net/";
// 	// const connectionURL = "mongodb+srv://gps96169:Mdad9xzwl2LekyY4@cluster1.2kbbgia.mongodb.net/";
// 	// const connectionURL = "mongodb+srv://gps96169:Mdad9xzwl2LekyY4@cluster1.2kbbgia.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";
// 	// const connectionURL = "mongodb://localhost:27017/job-portal";

// 	mongoose
//   .connect(connectionURL)
// 		.then(() => console.log("Database connected successfully!"))
// 		.catch((error) => console.log(error));
// };


// export default connectToDb;
















const { default: mongoose } = require("mongoose");

const connectToDB = async () => {
  // const connectionURL = "mongodb+srv://gps96169:Mdad9xzwl2LekyY4@cluster1.2kbbgia.mongodb.net/";
  const connectionURL = process.env.MONGODB_URL;

  mongoose
    .connect(connectionURL)
    .then(() => console.log("job portal database connection is successfull"))
    .catch((error) => console.log(error));
};

export default connectToDB;
