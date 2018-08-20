const Query = {};

Query.user = (root, args, context) => {
  return Users.findOne({ username: args.username }); // returns a user given the username variable
};

export default Query;
