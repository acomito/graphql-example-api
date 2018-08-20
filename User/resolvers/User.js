const User = {};

User.assignedMachines = (root, args, context) => {
  let machinesAssignedToUser = getMachines(root.username); // returns an array of the machine ids he is assigned to
  return Machines.findOne({ dnxUuid: { $in: machinesAssignedToUser } }); // returns a list of machines given the array of machine IDs... graphql should magically reused the utlization and production fucntions you defined once in the Machine resolvers.
};

export default User;
